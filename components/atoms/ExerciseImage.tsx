import Image from 'next/image';
import { useState } from 'react';

interface ExerciseImageProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ExerciseImage({ src, alt, className = '' }: ExerciseImageProps) {
  const [hasError, setHasError] = useState(false);

  // Imagen placeholder en data URL (80x80 gris)
  const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMzc0MTUxIi8+CjxwYXRoIGQ9Ik0zMCAyNUg1MFY1NUgzMFYyNVoiIGZpbGw9IiM2QjcyODAiLz4KPGNpcmNsZSBjeD0iMzciIGN5PSIzMyIgcj0iMyIgZmlsbD0iIzlDQTNBRiIvPgo8L3N2Zz4K";

  if (hasError) {
    return (
      <div className={`relative overflow-hidden rounded-lg bg-gray-700 flex items-center justify-center ${className}`}>
        <div className="text-gray-400 text-xs text-center">
          <div className="w-8 h-8 mx-auto mb-1">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
            </svg>
          </div>
          Imagen
        </div>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-lg ${className}`}>
      <Image
        src={hasError ? placeholderImage : src}
        alt={alt}
        width={80}
        height={80}
        className="object-cover w-full h-full"
        onError={() => setHasError(true)}
        placeholder="blur"
        blurDataURL={placeholderImage}
      />
    </div>
  );
}
