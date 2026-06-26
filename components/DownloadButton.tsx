"use client";

import { useState } from "react";
import { PRODUCT } from "@/lib/product";

type Props = {
  sessionId: string;
};

export function DownloadButton({ sessionId }: Props) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleDownload() {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/download?session_id=${encodeURIComponent(sessionId)}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Download failed");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = PRODUCT.fileName;
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Download failed");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        onClick={handleDownload}
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-sage px-8 py-4 text-base font-semibold text-white shadow-md transition hover:bg-[#4d7762] disabled:opacity-70 sm:w-auto"
      >
        {loading ? "Preparing download…" : `Download ${PRODUCT.fileLabel}`}
      </button>
      {error ? <p className="mt-3 text-sm text-rose">{error}</p> : null}
    </div>
  );
}