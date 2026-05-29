import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

async function cargarProductos() {
  try {
    const respuesta = await fetch('http://localhost:3001/productos');
    const productos = await respuesta.json();

    const contenedor = document.querySelector('#lista-productos');

    if (!contenedor) return;

    contenedor.innerHTML = productos.map((producto: any) => `
      <div class="bg-white border-2 border-gray-100 shadow-lg
                  w-100 h-50 sm:w-130 md:w-160 md:h-60 lg:w-200 lg:h-70 xl:w-240 xl:h-80 2xl:w-260 2xl:h-90
                  p-4 rounded-2xl mb-8 md:mb-12
                  mx-auto flex flex-col">

        <h2 class="text-xl text-center font-bold">
          ${producto.nombre}
        </h2>

        <div class="mt-8 text-center bg-black h-30 w-62 mx-auto"></div>

        <p class="mt-4 text-center">
          Descripción: ${producto.desc}
        </p>

        <p class="text-end mt-auto">
          Stock: ${producto.stock}
        </p>
      </div>
    `).join('');

  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}

export function renderDesarrollo() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${renderHeader()}

    <main class="flex-1 mb-16 mt-10 md:mt-16">
      <section class="w-full">
        <div class="p-6 lg:px-20 w-full text-left">
          <h1 class="text-center uppercase mb-12 lg:mb-18 tracking-wider text-2xl font-semibold text-slate-500">Productos</h3>
          <div class="flex justify-center">
              <div id="lista-productos">
                Cargando productos...
              </div>
          </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
  `;

  cargarProductos();
}
