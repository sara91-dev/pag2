import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";


export function renderFormulario() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col bg-gray-100">
    ${renderHeader()}

    <main class="flex-1 flex items-center justify-center px-4 py-10">
      
      <section class="w-full max-w-lg md:max-w-xl lg:max-w-2xl p-4">
        <div class="bg-white rounded-3xl shadow-xl p-8 md:p-10 md:pt-8 border border-gray-200">
          
          <h1 class="text-center tracking-wider text-2xl font-bold pb-4 text-gray-800">
            Formulario
          </h1>
          <div class="flex justify-center mb-10">
              <div class="w-20 h-1 bg-gray-400 rounded-full"></div>
          </div>

          <form class="space-y-6">

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input 
                type="text"
                class="text-sm text-center w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email"
                class="w-full text-sm text-center border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                rows="5"
                class="text-center text-sm w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>
            <div class="flex justify-center">
                <button
                  type="submit"
                  class="tracking-wide px-6 bg-gray-600/50 border border-gray-300 shadow-md hover:bg-blue-700 text-white font-semibold py-1 rounded-full transition"
                >
                  Enviar
                </button>
            </div>
          </form>

        </div>
      </section>

    </main>

    ${renderFooter()}
  </div>
`;
}
