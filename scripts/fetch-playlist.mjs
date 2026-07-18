import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const PLAYLIST_ID = "PLePu0HV51L-Lb3CMHSwWgYR90Lm8bf8Fa";
const API_KEY = process.env.YOUTUBE_API_KEY;
const OUT_PATH = path.resolve(
    path.dirname(fileURLToPath(import.meta.url)),
    "../src/data/playlist.json"
);

if (!API_KEY) {
    console.warn("YOUTUBE_API_KEY not set — keeping existing src/data/playlist.json as-is.");
    process.exit(0);
}

async function fetchAllPlaylistItems() {
    const videos = [];
    let pageToken = "";

    do {
        const url = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
        url.searchParams.set("part", "snippet");
        url.searchParams.set("playlistId", PLAYLIST_ID);
        url.searchParams.set("maxResults", "50");
        url.searchParams.set("key", API_KEY);
        if (pageToken) url.searchParams.set("pageToken", pageToken);

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`YouTube API error ${res.status}: ${await res.text()}`);
        }

        const data = await res.json();
        for (const item of data.items ?? []) {
            const videoId = item.snippet?.resourceId?.videoId;
            const title = item.snippet?.title;
            if (!videoId || title === "Private video" || title === "Deleted video") continue;
            videos.push({ id: videoId, title });
        }

        pageToken = data.nextPageToken ?? "";
    } while (pageToken);

    return videos;
}

async function fetchStats(videoIds) {
    const stats = new Map();

    for (let i = 0; i < videoIds.length; i += 50) {
        const batch = videoIds.slice(i, i + 50);
        const url = new URL("https://www.googleapis.com/youtube/v3/videos");
        url.searchParams.set("part", "snippet,statistics");
        url.searchParams.set("id", batch.join(","));
        url.searchParams.set("key", API_KEY);

        const res = await fetch(url);
        if (!res.ok) {
            throw new Error(`YouTube API error ${res.status}: ${await res.text()}`);
        }

        const data = await res.json();
        for (const item of data.items ?? []) {
            stats.set(item.id, {
                viewCount: item.statistics?.viewCount ? Number(item.statistics.viewCount) : null,
                publishedAt: item.snippet?.publishedAt ?? null,
            });
        }
    }

    return stats;
}

const videos = await fetchAllPlaylistItems();
const stats = await fetchStats(videos.map((v) => v.id));
const enriched = videos.map((v) => ({ ...v, ...(stats.get(v.id) ?? { viewCount: null, publishedAt: null }) }));

fs.writeFileSync(OUT_PATH, JSON.stringify(enriched, null, 2) + "\n");
console.log(`Fetched ${enriched.length} videos from playlist, wrote ${OUT_PATH}`);
