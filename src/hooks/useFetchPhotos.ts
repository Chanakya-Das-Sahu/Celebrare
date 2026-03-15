import { useState, useEffect } from 'react';

export interface Photo {
  id: string;
  author: string;
  download_url: string;
}

export const useFetchPhotos = () => {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list?limit=30').then(res => {
      if (!res.ok) throw new Error('Failed to fetch photos');
      return res.json();
    })
      .then(data => {
        setPhotos(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return { photos, loading, error };
};