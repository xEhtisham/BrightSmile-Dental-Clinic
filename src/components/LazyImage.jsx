import React, { useState } from 'react';

/**
 * LazyImage – renders a low‑quality placeholder while the real image loads.
 * The placeholder is a tiny base64‑encoded transparent PNG that gets blurred
 * and then swapped for the full‑resolution image once it finishes loading.
 * This technique reduces perceived load time and avoids layout shift.
 */
const LazyImage = ({ src, alt, className = '', width, height }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const placeholder =
        'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AApIB9ZB6JYcAAAAASUVORK5CYII='; // 1×1 transparent pixel

    return (
        <div className={`relative ${className}`} style={{ width, height }}>
            {/* Placeholder – blurred background */}
            <img
                src={placeholder}
                alt=""
                className="absolute inset-0 w-full h-full object-cover filter blur-2xl scale-110"
                aria-hidden="true"
            />
            {/* Real image */}
            <img
                src={src}
                alt={alt}
                loading="lazy"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => setIsLoaded(true)}
                width={width}
                height={height}
            />
        </div>
    );
};

export default LazyImage;
