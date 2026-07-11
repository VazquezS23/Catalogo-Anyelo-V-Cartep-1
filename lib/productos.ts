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
    slug: "townhouse-diana-tropical-village",
    nombre: "Townhouse en Diana Tropical Village",
    categoria: "Townhouses",
    imagen: "/productos/townhouse-diana-fachada.jpg",
    galeria: [
      "/productos/townhouse-diana-fachada.jpg",
      "/productos/townhouse-diana-fachada-2.jpg",
      "/productos/townhouse-diana-exterior.jpg",
      "/productos/townhouse-diana-exterior-2.jpg",
      "/productos/townhouse-diana-exterior-3.jpg",
      "/productos/townhouse-diana-sala.jpg",
      "/productos/townhouse-diana-cocina.jpg",
      "/productos/townhouse-diana-habitacion.jpg",
      "/productos/townhouse-diana-bano.jpg",
    ],
    paraQuien:
      "ti que buscas tu propia casa en Punta Cana —para vivirla o para rentarla como inversión— con espacio para toda la familia.",
    beneficio:
      "Estrena tu propia casa en Punta Cana, lista para vivir o para rentar, con área de BBQ y picuzzi para disfrutar todo el año.",
    caracteristicas: [
      "3 habitaciones, cada una con baño privado",
      "Habitación de servicio completa y medio baño de visita",
      "Picuzzi y área de BBQ privados",
    ],
    precio: "Desde US$185,000",
    facilidades:
      "Separa con US$2,000, 20% a la firma del contrato, 30% durante la construcción y 50% contra entrega.",
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
