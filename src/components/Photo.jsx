import { useState } from "react";
import "./Photo.css";

/**
 * Renders a food photo from /public/images.
 * If the file isn't there yet it shows a labelled placeholder
 * instead of a broken image icon.
 */
export default function Photo({ src, alt, className = "", fallbackSrc }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    if (fallbackSrc && !failed) {
      return (
        <img
          className={`photo ${className}`}
          src={fallbackSrc}
          alt={alt}
          onError={() => setFailed(true)}
        />
      );
    }
    return (
      <div className={`photo photo--empty ${className}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <img
      className={`photo ${className}`}
      src={src}
      alt={alt}
      onError={(e) => {
        if (fallbackSrc) {
          e.currentTarget.src = fallbackSrc;
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
