"use client";

import { useState } from "react";
import { FotoProducto } from "./FotoProducto";

interface GaleriaProductoProps {
  /** Lista de fotos (rutas en /public). La primera se muestra grande al abrir. */
  fotos: string[];
  alt: string;
}

/**
 * Galería sencilla para la ficha del producto/propiedad:
 * una foto grande + miniaturas para cambiarla. Si solo hay una foto (o ninguna),
 * se comporta igual que una sola imagen. Sin base de datos ni librerías extra.
 */
export function GaleriaProducto({ fotos, alt }: GaleriaProductoProps) {
  const [activa, setActiva] = useState(0);
  const principal = fotos[activa] ?? fotos[0];

  return (
    <div className="flex flex-col gap-3">
      <FotoProducto
        src={principal}
        alt={alt}
        className="aspect-square rounded-3xl border border-line"
      />

      {fotos.length > 1 && (
        <div className="grid grid-cols-4 gap-2 sm:grid-cols-5">
          {fotos.map((foto, i) => (
            <button
              key={foto}
              type="button"
              onClick={() => setActiva(i)}
              aria-label={`Ver foto ${i + 1} de ${fotos.length}`}
              aria-current={i === activa}
              className="overflow-hidden rounded-xl border transition"
              style={{
                borderColor: i === activa ? "var(--marca)" : "var(--line)",
                opacity: i === activa ? 1 : 0.72,
              }}
            >
              <FotoProducto
                src={foto}
                alt={`${alt} — foto ${i + 1}`}
                className="aspect-square"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
