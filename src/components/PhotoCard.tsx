"use client";
import React from "react";
import { Photo } from "../hooks/useFetchPhotos";

interface PhotoCardProps {
  photo: Photo;
  isFavorite: boolean;
  onToggleFavorite: (photo: Photo) => void;
}

const PhotoCard = React.memo(({ photo, isFavorite, onToggleFavorite }: PhotoCardProps) => {
  return (
    <div className="border rounded-xl overflow-hidden relative bg-white shadow-sm transition-transform hover:scale-[1.02]">
      <img
        src={photo.download_url}
        alt={photo.author}
        className="w-full h-56 object-cover"
        // loading="lazy"
      />
      <div className="p-4">
        <p className="font-semibold text-gray-800">{photo.author}</p>
      </div>
      <button
        onClick={() => onToggleFavorite(photo)}
        className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-colors cursor-pointer ${
          isFavorite ? "bg-red-50 text-red-500" : "bg-white/80 text-gray-400"
        }`}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        ❤
      </button>
    </div>
  );
});

PhotoCard.displayName = "PhotoCard";

export default PhotoCard;