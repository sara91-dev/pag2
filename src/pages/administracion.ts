let pestañaActiva: string = 'tab-ver';

async function cargarProductos() {
  try {
    const respuesta = await fetch('http://localhost:3001/productos');
    const productos = await respuesta.json();

    const contenedor = document.querySelector('#lista-productos');
    if (!contenedor) return;

    if (pestañaActiva !== 'tab-ver') return;

    contenedor.innerHTML = productos.map((producto: any) => `
      <div class="bg-white border-2 border-gray-100 shadow-lg
                  w-100 sm:w-130 md:w-160 lg:w-200 xl:w-240 2xl:w-260
                  p-6 rounded-2xl mb-8 md:mb-12
                  mx-auto flex flex-col">

        <h2 class="text-xl tracking-wide text-center font-bold">
          ${producto.nombre}
        </h2>

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

async function cargarProductosParaBorrar() {
  try {
    const respuesta = await fetch('http://localhost:3001/productos');
    const productos = await respuesta.json();

    const contenedor = document.querySelector('#lista-productos');
    if (!contenedor) return;

    if (pestañaActiva !== 'tab-borrar') return;

    if (productos.length === 0) {
      contenedor.innerHTML = '<p class="text-gray-500 font-medium">No hay productos para eliminar.</p>';
      return;
    }

    contenedor.innerHTML = productos.map((producto: any) => `
      <div class="bg-white border-2 border-gray-100 shadow-lg
                  w-100 sm:w-130 md:w-160 lg:w-200 xl:w-240 2xl:w-260
                  p-6 rounded-2xl mb-8 md:mb-12
                  mx-auto flex flex-col justify-between">

        <div>
          <h2 class="text-xl tracking-wide text-center font-bold">
            ${producto.nombre}
          </h2>

          <p class="mt-6 text-center mb-6">
            ${producto.desc}
          </p>
        </div>

        <div class="flex items-center justify-between mt-auto border-t pt-4 border-gray-100">
          <p class="text-red-500 font-semibold">
            Stock: ${producto.stock}
          </p>
          
          <button data-id="${producto.id}" class="cursor-pointer btn-eliminar bg-red-500 text-white px-4 py-1.5 rounded-xl font-semibold text-sm hover:bg-red-600 transition-colors shadow-sm active:scale-95 transform">
            Eliminar
          </button>
        </div>
      </div>
    `).join('');

    const botonesEliminar = contenedor.querySelectorAll('.btn-eliminar');
    botonesEliminar.forEach(boton => {
      boton.addEventListener('click', async (e) => {
        const target = e.currentTarget as HTMLButtonElement;
        const productoId = target.getAttribute('data-id');
        
        if (confirm('¿Estás seguro de que deseas eliminar este producto?')) {
          try {
            const deleteRes = await fetch(`http://localhost:3001/productos/${productoId}`, {
              method: 'DELETE'
            });
            
            if (deleteRes.ok) {
              cargarProductosParaBorrar();
            } else {
              alert('Error al intentar eliminar el producto.');
            }
          } catch (err) {
            console.error('Error en la petición DELETE:', err);
          }
        }
      });
    });

  } catch (error) {
    console.error('Error cargando productos para borrar:', error);
  }
}

function mostrarFormularioCrear(contenedor: HTMLElement) {
  contenedor.innerHTML = `
    <div class="bg-white shadow-xl rounded-2xl p-6 w-full max-w-4xl border border-gray-100 animate-fadeIn mx-auto">
      <h3 class="text-xl font-bold text-gray-700 mb-6 border-b pb-2 border-indigo-100 text-center md:text-left">Añadir nuevo producto</h3>
      
      <div class="grid grid-cols-1 md:grid-cols-12 gap-4 items-start text-sm text-gray-600">
        
        <div class="flex flex-col gap-1.5 md:col-span-3">
          <label class="font-semibold text-indigo-700 uppercase tracking-wider text-xs">Nombre</label>
          <input type="text" id="input-nombre" placeholder="Ej: nombre12" class="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm" />
        </div>

        <div class="flex flex-col gap-1.5 md:col-span-3">
          <label class="font-semibold text-indigo-700 uppercase tracking-wider text-xs">Descripción</label>
          <input type="text" id="input-desc" placeholder="Breve descripción" class="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm" />
        </div>

        <div class="flex flex-col gap-1.5 md:col-span-2">
          <label class="font-semibold text-indigo-700 uppercase tracking-wider text-xs">Stock</label>
          <input type="number" id="input-stock" min="0" placeholder="0" class="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent text-sm" />
        </div>

        <div class="flex flex-col gap-1.5 md:col-span-2">
          <label class="font-semibold text-indigo-700 uppercase tracking-wider text-xs">Imagen</label>
          <div class="w-full">
            <label for="input-imagen" class="w-full cursor-pointer bg-indigo-50 text-indigo-700 px-3 py-2 rounded-xl font-semibold text-sm hover:bg-indigo-100 transition-colors block text-center shadow-sm active:scale-95 transform truncate">
              Seleccionar
            </label>
            <input type="file" id="input-imagen" accept="image/*" class="hidden" />
            <span id="nombre-archivo" class="text-[11px] text-gray-400 max-w-full truncate block mt-1 text-center md:text-left">Ningún archivo</span>
          </div>
        </div>

        <div class="flex flex-col gap-1.5 md:col-span-2 w-full">
          <label class="hidden md:block text-xs invisible select-none">Alinear</label>
          <button id="btn-guardar" class="w-full cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:bg-indigo-600 transition-colors shadow-sm active:scale-95 transform">
            Guardar
          </button>
        </div>

      </div>
    </div>
  `;

  // Toda la lógica de eventos permanece intacta y funcional
  const inputImagen = document.getElementById('input-imagen') as HTMLInputElement;
  const txtNombreArchivo = document.getElementById('nombre-archivo');

  inputImagen?.addEventListener('change', () => {
    const archivo = inputImagen.files?.[0];
    if (txtNombreArchivo) {
      txtNombreArchivo.textContent = archivo ? archivo.name : 'Ningún archivo';
    }
  });

  document.getElementById('btn-guardar')?.addEventListener('click', async () => {
    const inputNombre = document.getElementById('input-nombre') as HTMLInputElement;
    const inputDesc = document.getElementById('input-desc') as HTMLInputElement;
    const inputStock = document.getElementById('input-stock') as HTMLInputElement;

    const nombre = inputNombre.value.trim();
    const desc = inputDesc.value.trim();
    const stock = inputStock.value;

    if (!nombre || !desc || stock === '') {
      alert('Por favor, rellena los campos obligatorios (Nombre, Descripción y Stock).');
      return;
    }

    let imagenBase64 = '';
    const archivo = inputImagen.files?.[0];

    if (archivo) {
      try {
        imagenBase64 = await new Promise<string>((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result as string);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(archivo);
        });
      } catch (error) {
        console.error('Error al procesar el archivo de imagen:', error);
        alert('Hubo un problema al cargar tu archivo.');
        return;
      }
    }

    try {
      const respuesta = await fetch('http://localhost:3001/productos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre: nombre,
          desc: desc,
          stock: parseInt(stock),
          imagen: imagenBase64 
        })
      });

      if (respuesta.ok) {
        alert('🎉 ¡Producto añadido con éxito!');
        const tabVer = document.getElementById('tab-ver');
        tabVer?.click();
      } else {
        const errorData = await respuesta.json();
        alert(`Error del servidor: ${errorData.error}`);
      }
    } catch (error) {
      console.error('Error al enviar el producto:', error);
      alert('Error crítico de conexión con el servidor.');
    }
  });
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

    <div class="shadow-md mt-16 gap-4 flex items-center justify-center bg-white w-fit mx-auto px-4 py-2 rounded-2xl">
        <p id="tab-crear" class="tab-btn cursor-pointer text-indigo-400 font-semibold tracking-wide px-3 py-1 rounded-xl">crear</p>
        <p class="text-indigo-200 font-semibold">|</p>
        <p id="tab-ver" class="tab-btn cursor-pointer bg-indigo-100 text-indigo-700 font-semibold tracking-wide px-3 py-1 rounded-xl">ver</p>
        <p class="text-indigo-200 font-semibold">|</p>
        <p id="tab-borrar" class="tab-btn cursor-pointer text-indigo-400 font-semibold tracking-wide px-3 py-1 rounded-xl">borrar</p>
    </div>
    
    <div class="mt-20 flex justify-center">
        <div id="lista-productos">
            Cargando productos...
        </div>
    </div>
</div>
  `;
  
  pestañaActiva = 'tab-ver';
  setupAdministracionLogic();
  cargarProductos();
}

function setupAdministracionLogic() {
  const logoutLink = document.getElementById("logoutLink");

  logoutLink?.addEventListener("click", () => {
    localStorage.removeItem('is_admin');
    localStorage.removeItem('is_logged_in');
  });
  
  const pestañas = document.querySelectorAll('.tab-btn');
  const contenedorProductos = document.getElementById('lista-productos');
  
  pestañas.forEach(pestaña => {
    pestaña.addEventListener('click', (e) => {
      
      pestañas.forEach(p => {
        p.classList.remove('bg-indigo-100', 'text-indigo-700');
        p.classList.add('text-indigo-400');
      });
      
      const elementoActivo = e.currentTarget as HTMLElement;
      elementoActivo.classList.remove('text-indigo-400');
      elementoActivo.classList.add('bg-indigo-100', 'text-indigo-700');      
      
      pestañaActiva = elementoActivo.id;
      
      if (pestañaActiva === 'tab-crear') {
        if (contenedorProductos) {
          mostrarFormularioCrear(contenedorProductos);
        }
      } else if (pestañaActiva === 'tab-ver') { 
         if (contenedorProductos) {
          contenedorProductos.innerHTML = 'Cargando productos...';
         }
         cargarProductos();
      } else if (pestañaActiva === 'tab-borrar') {
        if (contenedorProductos) {
          contenedorProductos.innerHTML = 'Cargando productos para eliminar...'; 
        }
        cargarProductosParaBorrar();
      }
    }); 
  });
}
