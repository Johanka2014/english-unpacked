import { lazy, type ComponentType } from "react";

const RELOAD_KEY = "chunk-reload-at";

/**
 * Wraps React.lazy so that a failed dynamic import (usually a stale chunk
 * left over from a previous deployment) triggers a single hard reload
 * instead of a blank screen.
 */
export function lazyWithRetry<T extends ComponentType<never>>(
  factory: () => Promise<{ default: T }>,
) {
  return lazy(async () => {
    try {
      const mod = await factory();
      window.sessionStorage.removeItem(RELOAD_KEY);
      return mod;
    } catch (error) {
      const last = Number(window.sessionStorage.getItem(RELOAD_KEY) ?? 0);
      // Only reload once per 10s window to avoid infinite reload loops.
      if (Date.now() - last > 10_000) {
        window.sessionStorage.setItem(RELOAD_KEY, String(Date.now()));
        window.location.reload();
        // Never resolves; the page is reloading.
        return new Promise<{ default: T }>(() => {});
      }
      throw error;
    }
  });
}
