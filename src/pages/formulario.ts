import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

export function renderFormulario() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col bg-gray-100">
    ${renderHeader()}

    <main class="flex-1 flex items-center justify-center px-4 py-10">
      
      <section class="w-full max-w-3xl">
        <div class="bg-white rounded-2xl shadow-xl p-8 md:p-10 md:pt-8 border border-gray-200">
          
          <h1 class="text-center text-2xl font-bold mb-10 text-gray-800">
            Formulario
          </h1>

          <form class="space-y-6">

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Nombre
              </label>
              <input 
                type="text"
                class="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu nombre"
              />
            </div>

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input 
                type="email"
                class="w-full border border-gray-300 rounded-full px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="correo@ejemplo.com"
              />
            </div>

            <div>
              <label class="text-end mr-4 block text-sm font-medium text-gray-700 mb-1">
                Mensaje
              </label>
              <textarea
                rows="5"
                class=" w-full border border-gray-300 rounded-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Escribe tu mensaje..."
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Enviar
            </button>

          </form>

        </div>
      </section>

    </main>

    ${renderFooter()}
  </div>
`;
}
