export function renderInicioSesion() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen items-center flex justify-center mt-2 bg-gray-50">
    <main class="w-full max-w-xl p-4">
      <section class="w-full">
        <div class="text-left">
          <div class="bg-white rounded-2xl shadow-lg p-10 px-12 pb-12 w-full mx-auto">
            <form id="loginForm" class="flex flex-col gap-6 w-full">
                <h1 class="text-center uppercase mb-2 tracking-wider text-2xl font-semibold text-slate-500">Inicio de sesión</h1>
                <div class="flex justify-center mb-8">
                    <div class="w-20 h-1 bg-indigo-200 rounded-full"></div>
                </div>
                <div class="flex flex-col gap-2">
                    <label for="usuario" class="text-sm font-medium text-gray-700">Usuario</label>
                    <input 
                        type="text" 
                        id="usuario" 
                        name="usuario" 
                        placeholder="Introduce tu usuario" 
                        class="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        required>
                </div>

                <div class="flex flex-col gap-2">
                    <label for="password" class="text-sm font-medium text-gray-700">Contraseña</label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        placeholder="Introduce tu contraseña" 
                        class="border border-gray-300 rounded-xl px-3 py-2 focus:outline-none focus:ring-1 focus:ring-indigo-400"
                        required>
                </div>

                <button 
                    type="submit" 
                    class="self-center cursor-pointer bg-indigo-600/80 text-white font-semibold py-2.5 px-8 rounded-full hover:bg-indigo-600/60 transition-colors mt-4">
                    Iniciar Sesión
                </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
  `;

  setupInicioSesionLogic();
}

function setupInicioSesionLogic() {
  const form = document.getElementById("loginForm") as HTMLFormElement;
  
  form?.addEventListener("submit", async (e) => {
    e.preventDefault();

    const usuarioInput = document.getElementById("usuario") as HTMLInputElement;
    const passwordInput = document.getElementById("password") as HTMLInputElement;

    try {
      const res = await fetch("http://localhost:3001/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          usuario: usuarioInput.value.trim(),
          password: passwordInput.value
        })
      });

      const data = await res.json();

      if (data.ok) {
        const tienePermisos = data.permisos === 1;
        localStorage.setItem('is_admin', String(tienePermisos));
        localStorage.setItem('is_logged_in', 'true'); 

        window.history.pushState({}, "", "/pag2/administracion");
        window.dispatchEvent(new Event('popstate'));
      }   
      else {
         alert(data.message || "Credenciales incorrectas");
      }
    } 
    catch (err) {
      alert("Error al conectar con el servidor.");
    }
  });
}
