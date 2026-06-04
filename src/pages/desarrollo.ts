import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";


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

}
