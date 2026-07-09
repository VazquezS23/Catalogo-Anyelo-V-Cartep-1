import type { Config } from "./tipos";
// Configuración generada con el wizard (/configurar).
export const CONFIG: Config = {
  marca: {
    negocio: "Anyelo Vazquez Cartep Real Estate",
    descripcion: "Vendo y Rento Villas, Apartamentos y Townhouses en Punta Cana, para Residentes e Inversionistas en República Dominicana y Dominicanos en el extranjero",
    logo: "/logo.png", // tu logo, ya subido en public/logo.png
    primario: "#204a9d",
    secundario: "#b0853b",
    fondo: "claro",
    whatsappPrincipal: "18098851203",
    ciudad: "Punta Cana, DO",
    enlace: "anyelov.carteprealestate",
  },
  vendedores: [
    { slug: "anyelo", nombre: "Anyelo Vazquez", whatsapp: "18098851203" },
  ],
  // Categorías combinadas (tipo + operación). La que no tenga propiedades no
  // aparece como sección, pero sí como botón de filtro (que no lleva a nada).
  // Ideal: al menos una propiedad por categoría. Ver lib/productos.ts.
  categorias: ["Villas en venta", "Apartamentos en venta", "Townhouses", "Propiedades en renta"],
  mensajePlantilla:
    "{saludo}vi tu catálogo y me interesa {producto}. ¿Me pueden dar más información y precio?",
};
