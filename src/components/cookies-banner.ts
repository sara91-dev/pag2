import { comprobarDecisionPrevia, guardarDecision } from './cookies-logic';


export function renderCookiesBanner() {
  if (comprobarDecisionPrevia()) return;

  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  const banner = document.createElement('div');
  banner.id = 'banner-cookies';
  banner.className = 'fixed bottom-4 left-4 right-4 md:left-8 md:right-auto md:max-w-md bg-white p-6 rounded-2xl shadow-2xl border border-gray-100 z-50 flex flex-col gap-4 transition-all duration-300';

  banner.innerHTML = `
    <div>
      <h3 class="text-lg font-bold text-gray-900">🍪 Valoramos tu privacidad</h3>
      <p class="text-sm text-gray-600 mt-1">
        Utilizamos cookies para mejorar tu experiencia. Puedes aceptar todas o configurar tus preferencias. Lee nuestra <a href="/pag2/cookies" class="text-indigo-600 underline">Política de Cookies</a>.
      </p>
    </div>
    <div class="flex flex-col sm:flex-row gap-2 justify-end text-sm">
      <button id="btn-rechazar-cookies" class="px-4 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 font-medium rounded-xl transition-colors">
        Rechazar todo
      </button>
      <button id="btn-aceptar-cookies" class="px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700 font-medium rounded-xl transition-colors">
        Aceptar todo
      </button>
    </div>
  `;

  app.appendChild(banner);

  
  const btnAceptar = document.getElementById('btn-aceptar-cookies');
  const btnRechazar = document.getElementById('btn-rechazar-cookies');

  btnAceptar?.addEventListener('click', () => {
    guardarDecision('aceptado');
    banner.remove(); 
  });

  btnRechazar?.addEventListener('click', () => {
    guardarDecision('rechazado');
    banner.remove(); 
  });
}
