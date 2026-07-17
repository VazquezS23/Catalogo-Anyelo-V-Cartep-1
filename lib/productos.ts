import type { Producto } from "./tipos";

/**
 * ================================================================
 *  TUS PROPIEDADES.
 *  Cada ficha sigue la "anatomía del que vende" (ver CLAUDE.md):
 *   paraQuien  → para quién es y qué le resuelve
 *   beneficio  → el resultado, no la característica
 *   caracteristicas → SOLO 3 datos que importan
 *   precioAntes → ancla (opcional) · facilidades → plan de pago
 *   escasez    → honesta (por tiempo o unidades)
 *   prueba     → prueba social (opcional)
 *  Agrega más propiedades copiando este bloque. 3-6 por categoría.
 * ================================================================
 */
export const PRODUCTOS: Producto[] = [
  {
    slug: "villa-diana-tropical-village",
    nombre: "Villa en Diana Tropical Village",
    categoria: "Villas en venta",
    imagen: "/productos/villa-diana-fachada.jpg",
    galeria: [
      "/productos/villa-diana-fachada.jpg",
      "/productos/villa-diana-fachada-noche.jpg",
      "/productos/villa-diana-piscina.jpg",
      "/productos/villa-diana-sala.jpg",
      "/productos/villa-diana-cocina.jpg",
      "/productos/villa-diana-habitacion.jpg",
      "/productos/villa-diana-bano.jpg",
    ],
    paraQuien:
      "ti que buscas una propiedad en Punta Cana como inversión o para vivirla.",
    beneficio:
      "Estrena tu propia villa en Punta Cana, con patio privado, picuzzi y área de BBQ — para vivir o para invertir.",
    caracteristicas: [
      "3 habitaciones · 3.5 baños",
      "Patio privado con picuzzi y área de BBQ",
      "Diana Tropical Village, Punta Cana",
    ],
    precio: "Desde US$246,000",
    facilidades:
      "Reserva con US$5,000, 20% al firmar, 30% durante construcción (12–18 meses) y 50% contra entrega. Financiamiento con el banco de tu preferencia.",
    escasez: { tipo: "unidades", valor: "5 unidades" },
  },
  {
    slug: "apartamento-balcones-de-brisas",
    nombre: "Apartamento en Balcones de Brisas de Punta Cana",
    categoria: "Apartamentos en venta",
    imagen: "/productos/apartamento-balcones-fachada.jpg",
    galeria: [
      "/productos/apartamento-balcones-fachada.jpg",
      "/productos/apartamento-balcones-entrada.jpg",
      "/productos/apartamento-balcones-fachada-2.jpg",
      "/productos/apartamento-balcones-piscina.jpg",
      "/productos/apartamento-balcones-piscina-2.jpg",
      "/productos/apartamento-balcones-acceso.jpg",
      "/productos/apartamento-balcones-sala.jpg",
      "/productos/apartamento-balcones-cocina.jpg",
      "/productos/apartamento-balcones-habitacion.jpg",
      "/productos/apartamento-balcones-bano.jpg",
    ],
    paraQuien:
      "ti que quieres entrar a Punta Cana con una inversión accesible —para estrenar, para rentar o para tu segundo hogar— en un residencial con piscina y gym.",
    beneficio:
      "Estrena tu apartamento en un residencial de Punta Cana con piscina y gimnasio, listo para vivir o para poner a rentar.",
    caracteristicas: [
      "2 habitaciones",
      "Piscina y gimnasio en el residencial",
      "Edificio con ascensor",
    ],
    precio: "Desde US$132,000",
    facilidades:
      "Separa con US$1,000, 20% a la firma del contrato, 30% durante la construcción en cómodas cuotas y 50% contra entrega. Primera etapa lista en noviembre de 2027.",
  },
  {
    slug: "apartamento-renta-unique-vista-cana",
    nombre: "Apartamento en renta en Unique, Vista Cana",
    categoria: "Propiedades en renta",
    imagen: "/productos/renta-unique-sala.jpg",
    galeria: [
      "/productos/renta-unique-sala.jpg",
      "/productos/renta-unique-piscina.jpg",
      "/productos/renta-unique-habitacion.jpg",
      "/productos/renta-unique-cocina.jpg",
      "/productos/renta-unique-comedor.jpg",
      "/productos/renta-unique-gym.jpg",
      "/productos/renta-unique-exterior.jpg",
    ],
    paraQuien:
      "ti que quieres vivir en Punta Cana con estilo resort —sin comprar— dentro de Vista Cana y con acceso a todas sus amenidades.",
    beneficio:
      "Múdate a un apartamento listo en Vista Cana y disfruta piscinas, gimnasio, playa artificial y campo de golf, con wifi incluido.",
    caracteristicas: [
      "1 habitación · 1½ baños",
      "Wifi incluido",
      "Amenidades de Vista Cana: piscinas, gym, playa artificial y golf",
    ],
    precio: "US$1,000/mes",
    facilidades:
      "Requisitos: 2 meses de depósito + 1 mes por adelantado.",
  },
  {
    slug: "apartamento-renta-cid-v-costa-cana",
    nombre: "Apartamento en renta en Residencial Cid V, Costa Cana",
    categoria: "Propiedades en renta",
    imagen: "/productos/renta-cid-sala.jpg",
    galeria: [
      "/productos/renta-cid-sala.jpg",
      "/productos/renta-cid-sala-2.jpg",
      "/productos/renta-cid-balcon.jpg",
      "/productos/renta-cid-habitacion.jpg",
      "/productos/renta-cid-cocina.jpg",
      "/productos/renta-cid-bano.jpg",
    ],
    paraQuien:
      "ti que quieres mudarte a Punta Cana sin complicaciones: un apartamento amueblado y con los servicios incluidos, listo para entrar a vivir.",
    beneficio:
      "Múdate a un apartamento listo para entrar a vivir en Punta Cana y olvídate de las cuentas: los servicios ya vienen incluidos.",
    caracteristicas: [
      "2 habitaciones · 2 baños",
      "Amueblado, en residencial con piscina",
      "Incluye mantenimiento, internet y gas",
    ],
    precio: "US$1,200/mes",
    facilidades: "No se aceptan mascotas.",
  },
  {
    slug: "villa-kerri-plus-vista-cana",
    nombre: "Villa en Kerri Plus, Vista Cana",
    categoria: "Villas en venta",
    imagen: "/productos/villa-kerri-fachada.jpg",
    galeria: [
      "/productos/villa-kerri-fachada.jpg",
      "/productos/villa-kerri-exterior.jpg",
      "/productos/villa-kerri-sala.jpg",
      "/productos/villa-kerri-cocina.jpg",
      "/productos/villa-kerri-habitacion.jpg",
      "/productos/villa-kerri-habitacion-2.jpg",
      "/productos/villa-kerri-bano.jpg",
    ],
    paraQuien:
      "ti que buscas una villa en Punta Cana, para vivirla o como inversión, dentro de Vista Cana y con acceso a todas sus amenidades.",
    beneficio:
      "Estrena tu villa en Vista Cana, para vivirla o para invertir, con acceso a las amenidades de la comunidad: golf, playa, piscinas y más.",
    caracteristicas: [
      "3 habitaciones, cada una con baño y terraza",
      "Escalera de doble altura",
      "Dentro de Vista Cana, con acceso a todas sus amenidades",
    ],
    precio: "Desde US$375,000",
    facilidades:
      "Versión Estándar US$375,000 · Deluxe US$409,000 (agrega piscina, área de BBQ y diseño de interior). Reserva con US$5,000, 20% a la firma, 30% durante construcción y 50% contra entrega. Entrega en 12–24 meses.",
  },
  {
    slug: "apartamento-renta-brisas-punta-cana",
    nombre: "Apartamento en renta en Residencial Brisas de Punta Cana",
    categoria: "Propiedades en renta",
    imagen: "/productos/renta-brisas-sala.jpg",
    galeria: [
      "/productos/renta-brisas-sala.jpg",
      "/productos/renta-brisas-sala-2.jpg",
      "/productos/renta-brisas-cocina.jpg",
      "/productos/renta-brisas-habitacion.jpg",
      "/productos/renta-brisas-habitacion-2.jpg",
      "/productos/renta-brisas-bano.jpg",
      "/productos/renta-brisas-lavadero.jpg",
    ],
    paraQuien:
      "ti que buscas espacio para tu familia en Punta Cana: un apartamento de 3 habitaciones en un residencial con piscina, para ponerlo a tu gusto.",
    beneficio:
      "Múdate con tu familia a un amplio apartamento de 3 habitaciones en Punta Cana, en un residencial con piscina y con el mantenimiento incluido.",
    caracteristicas: [
      "3 habitaciones + habitación de servicio, 2 baños",
      "Residencial con piscina",
      "Incluye mantenimiento y un aire acondicionado",
    ],
    precio: "US$900/mes",
    facilidades:
      "Sin amueblar. No se aceptan mascotas. Requisitos: 2 meses de depósito + 1 mes por adelantado.",
  },
  {
    slug: "apartamento-ced-vi-brisas",
    nombre: "Apartamento en Residencial Ced VI, Brisas de Punta Cana",
    categoria: "Apartamentos en venta",
    imagen: "/productos/apartamento-ced-sala.jpg",
    galeria: [
      "/productos/apartamento-ced-sala.jpg",
      "/productos/apartamento-ced-fachada.jpg",
      "/productos/apartamento-ced-habitacion.jpg",
      "/productos/apartamento-ced-terraza.jpg",
    ],
    paraQuien:
      "ti que quieres invertir o estrenar en Punta Cana con un presupuesto accesible, en un residencial con piscina y gym.",
    beneficio:
      "Estrena un apartamento nuevo en Punta Cana desde un precio muy accesible, en un residencial con piscina, gimnasio y azotea social.",
    caracteristicas: [
      "2 habitaciones",
      "Piscina y gimnasio",
      "Azotea con área social",
    ],
    precio: "Desde US$112,500",
    facilidades:
      "Separa con US$2,000, 15% a la firma del contrato, 25% durante la construcción en cómodas cuotas y 60% contra entrega. Entrega en junio de 2027.",
  },
];

/** Productos de una categoría, con el destacado primero. */
export function productosPorCategoria(categoria: string): Producto[] {
  return PRODUCTOS.filter((p) => p.categoria === categoria).sort(
    (a, b) => Number(b.destacado ?? false) - Number(a.destacado ?? false)
  );
}

/** Busca un producto por su slug (para la ficha individual). */
export function productoPorSlug(slug: string): Producto | undefined {
  return PRODUCTOS.find((p) => p.slug === slug);
}
