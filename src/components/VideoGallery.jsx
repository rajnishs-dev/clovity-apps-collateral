"use client";
import { useState, useRef } from "react";

export default function VideoGallery({ videos, playlistUrl }) {
  const [activeId, setActiveId] = useState(videos[0]?.id);
  const [hasInteracted, setHasInteracted] = useState(false);
  const playerRef = useRef(null);

  const activeVideo = videos.find((v) => v.id === activeId) ?? videos[0];
  const activeIndex = videos.findIndex((v) => v.id === activeId);

  const handleSelect = (id) => {
    if (id === activeId) return;
    setHasInteracted(true);
    setActiveId(id);
    playerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePrev = () => {
    if (activeIndex > 0) handleSelect(videos[activeIndex - 1].id);
  };

  const handleNext = () => {
    if (activeIndex < videos.length - 1) handleSelect(videos[activeIndex + 1].id);
  };

  return (
    <div className="space-y-6">
      {/* Main player */}
      <div ref={playerRef} className="scroll-mt-36 max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black aspect-video">
          <iframe
            key={activeId}
            src={`https://www.youtube.com/embed/${activeId}${hasInteracted ? "?autoplay=1" : ""}`}
            title={activeVideo?.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Player meta row */}
        <div className="mt-3 flex items-start justify-between gap-4">
          <div className="flex-1 min-w-0">
            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 mb-1">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
              Now Playing · {activeIndex + 1} of {videos.length}
            </span>
            <h3 className="text-base font-semibold text-gray-900 leading-snug truncate">
              {activeVideo?.title}
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0 mt-0.5">
            <button
              onClick={handlePrev}
              disabled={activeIndex === 0}
              className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Previous video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={activeIndex === videos.length - 1}
              className="p-1.5 rounded-lg border border-gray-200 text-gray-500 hover:text-gray-800 hover:border-gray-300 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              aria-label="Next video"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <a
              href={playlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
              </svg>
              Full Playlist
            </a>
          </div>
        </div>
      </div>

      {/* Section header */}
      <div className="flex items-center gap-3 max-w-5xl mx-auto">
        <span className="text-sm font-semibold text-gray-800">Tutorials</span>
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-xs text-gray-400">{videos.length} videos</span>
      </div>

      {/* Thumbnail grid - first 5 only */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 max-w-5xl mx-auto">
        {videos.slice(0, 5).map((video, index) => {
          const isActive = video.id === activeId;
          return (
            <button
              key={video.id}
              onClick={() => handleSelect(video.id)}
              className={`group text-left rounded-xl overflow-hidden border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 ${
                isActive
                  ? "border-blue-500 shadow-md ring-2 ring-blue-100"
                  : "border-gray-200 hover:border-blue-300 hover:shadow-md"
              }`}
            >
              {/* Thumbnail */}
              <div className="relative aspect-video bg-gray-100 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={`https://img.youtube.com/vi/${video.id}/mqdefault.jpg`}
                  alt={video.title}
                  className="w-full h-full object-cover"
                />

                {/* Hover / active overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-colors duration-200 ${
                    isActive ? "bg-blue-900/30" : "bg-black/0 group-hover:bg-black/25"
                  }`}
                >
                  {isActive ? (
                    <div className="bg-blue-600 text-white rounded-full p-2 shadow-lg">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <rect x="6" y="5" width="4" height="14" rx="1" />
                        <rect x="14" y="5" width="4" height="14" rx="1" />
                      </svg>
                    </div>
                  ) : (
                    <div className="bg-white/90 text-gray-800 rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* Number badge */}
                <div
                  className={`absolute top-1.5 left-1.5 text-white text-xs font-bold px-1.5 py-0.5 rounded ${
                    isActive ? "bg-blue-600" : "bg-black/60"
                  }`}
                >
                  {index + 1}
                </div>
              </div>

              {/* Title */}
              <div className={`px-3 py-2.5 ${isActive ? "bg-blue-50" : "bg-white group-hover:bg-gray-50"} transition-colors duration-200`}>
                <p
                  className={`text-xs font-medium leading-snug line-clamp-2 ${
                    isActive ? "text-blue-700" : "text-gray-700 group-hover:text-gray-900"
                  }`}
                >
                  {video.title}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Show all link */}
      {videos.length > 5 && (
        <div className="flex justify-center">
          <a
            href={playlistUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 hover:border-red-500 hover:text-red-600 hover:shadow-md transition-all duration-200"
          >
            <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
            </svg>
            Show all {videos.length} videos on YouTube
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      )}
    </div>
  );
}
