import { useState } from "react";

/**
 * Imagen local con respaldo: si el archivo no existe o falla,
 * muestra `fallback` (o nada) en lugar del ícono de imagen rota.
 */
export default function Photo({ src, alt, className, fallback = null, onFail }) {
  const [failed, setFailed] = useState(!src);

  if (failed) return fallback;

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      onError={() => {
        setFailed(true);
        onFail?.();
      }}
    />
  );
}
