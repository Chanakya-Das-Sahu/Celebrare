"use client";
import React, { useState, useMemo, useCallback, useReducer } from "react";
import { useFetchPhotos, Photo } from "../hooks/useFetchPhotos";
import { favoritesReducer, initialState } from "../reducer/favoritesReducer";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [favs, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState("");


  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };


  console.log("favs",favs)

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(search.toLowerCase()),
    );
  }, [photos, search]);

  if (loading)
    return (
      <div className="p-10 text-center font-bold text-black bg-white h-screen">Loading...</div>
    );
  if (error)
    return <div className="text-red-500 text-center p-10">{error}</div>;

  return (
    <div className="max-w-6xl mx-auto p-4">
      <input
        type="text"
        placeholder="Search by author..."
        className="w-full p-3 mb-8 border-2 border-gray-200 bg-white rounded-lg text-black"
        onChange={handleSearch}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredPhotos.map((p) => (
       <PhotoCard
            key={p.id}
            photo={p}
            isFavorite={favs.some((f) => f.id === p.id)}
            onToggleFavorite={()=>{dispatch({ type: "TOGGLE_FAVORITE", payload: p })}}
          />
        ))}
      </div>
    </div>
  );
}
