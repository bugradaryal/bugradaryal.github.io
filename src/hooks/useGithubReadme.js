import { useEffect, useState } from "react";

// Aynı README'yi tekrar tekrar çekmemek için (GitHub API: saatte 60 istek limiti)
const cache = new Map();

function parseRepo(url) {
  try {
    const [owner, repo] = new URL(url).pathname.split("/").filter(Boolean);
    return owner && repo ? { owner, repo } : null;
  } catch {
    return null;
  }
}

export default function useGithubReadme(githubUrl, enabled) {
  const [state, setState] = useState({ status: "idle", text: "" });

  useEffect(() => {
    if (!enabled || !githubUrl) return undefined;

    if (cache.has(githubUrl)) {
      setState({ status: "loaded", text: cache.get(githubUrl) });
      return undefined;
    }

    const repo = parseRepo(githubUrl);
    if (!repo) {
      setState({ status: "error", text: "" });
      return undefined;
    }

    const controller = new AbortController();
    setState({ status: "loading", text: "" });

    fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}/readme`, {
      headers: { Accept: "application/vnd.github.raw+json" },
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) throw new Error("README could not be loaded");
        return res.text();
      })
      .then((text) => {
        cache.set(githubUrl, text);
        setState({ status: "loaded", text });
      })
      .catch((error) => {
        if (error.name !== "AbortError") setState({ status: "error", text: "" });
      });

    return () => controller.abort();
  }, [enabled, githubUrl]);

  return state;
}