export function renderInicioSesion() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen items-center flex justify-center mt-2 bg-gray-50">

    <main class="w-full max-w-xl p-4">
      <section class="w-full">
        <div class="text-left">
          
          <div class="bg-white rounded-2xl shadow-lg p-10 px-12 pb-12 w-full mx-auto">
            <form class="flex flex-col gap-6 w-full">
                <h1 class=" text-center uppercase mb-8 tracking-wider text-2xl font-semibold text-slate-500">Inicio de sesión</h1>
                <div class="flex flex-col gap-2">
                    <label for="usuario" class="text-sm font-medium text-gray-700">Usuario</label>
                    <input 
                        type="text" 
                        id="usuario" 
                        name="usuario" 
                        placeholder="Introduce tu usuario" 
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="password" class="text-sm font-medium text-gray-700">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Introduce tu contraseña" 
                        class="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required>
                </div>

                <button 
                    type="submit" 
                    class="cursor-pointer bg-blue-600 text-white font-semibold py-2.5 px-4 rounded hover:bg-blue-700 transition-colors mt-4">
                    Iniciar Sesión
                </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>

  </div>
  `;
}
