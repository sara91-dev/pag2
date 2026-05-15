import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

export function renderCookies() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${renderHeader()}
    <main class="flex-1 mb-16 mt-10 md:mt-16">
      <section class="w-full">
        <div class="p-6 lg:px-20 w-full text-left">
            
            <div class="w-full text-center mb-10">
                <h1 class="text-xl tracking-wide uppercase text-gray-700 font-semibold">
                    Política de Cookies
                </h1>
                <p class="mt-2 text-gray-600 max-w-xl mx-auto">
                    En esta web utilizamos cookies propias y de terceros para mejorar la experiencia del usuario, permitir determinadas funcionalidades y analizar el uso del sitio web.
                </p>
            </div>
            
            <hr class="max-w-md md:max-w-xl xl:max-w-2xl mx-auto border-t border-gray-300">
            
            <div class="max-w-4xl mt-10">
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    ¿Qué tipos de cookies utiliza esta web?
                </h2>
                <p class="mt-2 text-gray-800">
                    Cookies técnicas o necesarias - Son esenciales para el funcionamiento de la web y no requieren consentimiento.
                </p>
                <p class="mt-2 mb-10 text-gray-800">
                    Cookies de terceros - Esta web utiliza servicios de terceros que pueden instalar cookies en el navegador del usuario.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Datos que se recogen
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Recogemos nombre, apellidos, dirección de correo electrónico, teléfono y dirección de envío para la gestión de pedidos y consultas.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Finalidad del tratamiento
                </h2>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>Gestionar el contacto y responder mensajes.</li>
                    <li>Mandar información.</li>
                    <li>Tramitar la venta y el envío del producto.</li>
                </ul>
                
            </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
`;
}
