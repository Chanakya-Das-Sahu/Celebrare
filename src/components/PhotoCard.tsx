"use client";
import React from "react";
import { Photo } from "../hooks/useFetchPhotos";
import Image from "next/image";

interface PhotoCardProps {
  photo: Photo;
  isFavorite: boolean;
  onToggleFavorite: (photo: Photo) => void;
}

const PhotoCard = React.memo(
  ({ photo, isFavorite, onToggleFavorite }: PhotoCardProps) => {
    return (
      <div className="border rounded-xl overflow-hidden relative bg-white shadow-sm transition-transform hover:scale-[1.02] w-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image
            src={photo.download_url}
            alt={photo.author}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            quality={85}
          />
          <button
            onClick={() => onToggleFavorite(photo)}
            className={`absolute top-3 right-3 p-2 rounded-full shadow-sm transition-colors cursor-pointer z-10 ${
              isFavorite ? "bg-red-50 text-red-500" : "bg-white/80 text-gray-400"
            }`}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            ❤
          </button>
        </div>

        <div className="p-4">
          <p className="font-semibold text-gray-800 truncate">{photo.author}</p>
        </div>
      </div>
    );
  }
);

PhotoCard.displayName = "PhotoCard";

export default PhotoCard;
