export function renderAdministracion() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  app.innerHTML = `
    <div class="p-10">
      <h1 class="text-3xl font-bold text-gray-800">Panel de Administración</h1>
      <p class="text-gray-600 mt-2">ghhgfgdgfd</p>
      <a href="/pag2/inicio" data-link class="text-blue-500 underline mt-4 inline-block">Volver al Inicio</a>
    </div>
  `;
}
