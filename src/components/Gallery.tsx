"use client";
import React, { useState, useMemo, useReducer, useEffect, useRef } from "react";
import { useFetchPhotos } from "../hooks/useFetchPhotos";
import { useDebounce } from "../hooks/useDebounce";
import { favoritesReducer, initialState } from "../reducer/favoritesReducer";
import PhotoCard from "./PhotoCard";

export default function Gallery() {
  const { photos, loading, error } = useFetchPhotos();
  const [favs, dispatch] = useReducer(favoritesReducer, initialState);
  const [search, setSearch] = useState("");
const debouncedSearch = useDebounce(search, 300);
const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearching(true);
    setSearch(e.target.value);
  };

  const filteredPhotos = useMemo(() => {
    return photos.filter((p) =>
      p.author.toLowerCase().includes(debouncedSearch.toLowerCase())
    );
  }, [photos, debouncedSearch]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSearching(false);
    }, 300);
    return () => clearTimeout(timer);
  }, [debouncedSearch]);

  if (loading)
    return (
      <div className="p-10 text-center font-bold text-black bg-white h-screen">
        Loading...
      </div>
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

      {filteredPhotos.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredPhotos.map((p) => (
            <PhotoCard
              key={p.id}
              photo={p}
              isFavorite={favs.some((f) => f.id === p.id)}
              onToggleFavorite={() => {
                dispatch({ type: "TOGGLE_FAVORITE", payload: p });
              }}
            />
          ))}
        </div>
      ) : (
       
        
       <div className="text-center rounded-xl">
          <p className="text-xl text-gray-500 font-medium">{isSearching ?'Searching...': 'No Result Found'}</p>
        </div>
      )}
    </div>
  );
}