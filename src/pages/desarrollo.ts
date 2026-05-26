import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

//async function cargarProductos() {
//    const respuesta = await fetch('http://localhost:3001/productos');
//    const productos = await respuesta.json();
//    console.log(productos);
//}

export function renderDesarrollo() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${renderHeader()}

    <main class="flex-1 mb-16 mt-10 md:mt-16">
      <section class="w-full">
        <div class="p-6 lg:px-20 w-full text-left">
            
            
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
`;
}
