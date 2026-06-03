async function cargarProductos() {
  try {
    const respuesta = await fetch('http://localhost:3001/productos');
    const productos = await respuesta.json();

    const contenedor = document.querySelector('#lista-productos');

    if (!contenedor) return;

    contenedor.innerHTML = productos.map((producto: any) => `
      <div class="bg-white border-2 border-gray-100 shadow-lg
                  w-100 sm:w-130 md:w-160 lg:w-200 xl:w-240 2xl:w-260
                  p-6 rounded-2xl mb-8 md:mb-12
                  mx-auto flex flex-col">

        <h2 class="text-xl tracking-wide text-center font-bold">
          ${producto.nombre}
        </h2>

        <div class="mt-8 bg-black h-50 md:h-70 w-10/12 md:w-11/12 xl:h-80 max-w-xl mx-auto rounded-lg"></div>

        <p class="mt-6 text-center mb-10">
          ${producto.desc}
        </p>

        <p class="text-end text-red-500 font-semibold mt-auto">
          Stock: ${producto.stock}
        </p>
      </div>
    `).join('');

  } catch (error) {
    console.error('Error cargando productos:', error);
  }
}


export function renderAdministracion() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  
  app.innerHTML = `
<div class="mt-4 w-full">
    <div class="relative flex border-b border-indigo-300 pb-4 items-center justify-center w-full min-h-[60px]">
        
        <a href="/pag2/inicio" id="logoutLink" data-link class="absolute left-6 bg-indigo-500 text-white px-4 py-2 rounded-2xl font-semibold hover:bg-indigo-600 text-sm transition-colors">
            Volver al Inicio y cerrar sesión
        </a>
        
        <p class="text-2xl tracking-wide font-bold text-gray-700">Administración de productos</p>
    </div>

    
    <div class="shadow-md mt-16 gap-8 flex justify-center bg-white w-fit mx-auto px-6 py-1 rounded-2xl text-white">
        <p class="cursor-pointer text-indigo-400 font-semibold tracking-wide">crear</p>
        <p class="text-indigo-400 font-semibold">|</p>
        <p class="cursor-pointer text-indigo-400 font-semibold tracking-wide">ver</p>
        <p class="text-indigo-400 font-semibold">|</p>
        <p class="cursor-pointer text-indigo-400 font-semibold tracking-wide">borrar</p>
    </div>
    
    <div class="mt-20 flex justify-center">
        <div id="lista-productos">
            Cargando productos...
        </div>
    </div>
</div>
  `;

  setupAdministracionLogic();
}

function setupAdministracionLogic() {
  const logoutLink = document.getElementById("logoutLink");

  logoutLink?.addEventListener("click", () => {
    localStorage.removeItem('is_admin');
    localStorage.removeItem('is_logged_in');
    

  });
}
