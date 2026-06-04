import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

export function renderDesarrollo() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${renderHeader()}

    <main class="flex-1 mb-16 mt-10">
      <section class="w-full">
        <div class="p-6 lg:px-20 w-full">
            <h1 class="text-center uppercase mb-16 md:mb-18 lg:mb-20 tracking-wider text-2xl font-semibold text-slate-500">Productos</h1>
          
            <div class="flex gap-10 lg:gap-12 flex-col">
          
                <div class="bg-white rounded-2xl max-w-sm md:max-w-2xl mx-auto w-full overflow-hidden shadow-lg">
                    
                    <div class="w-full aspect-[21/9] bg-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80" 
                          alt="Producto1" 
                          class="w-full h-full object-cover"
                        />
                    </div>
                    
                    <div class="p-4 md:p-6 text-center text-gray-700">
                        <p class="font-bold text-lg md:text-xl uppercase tracking-wider">Nombre del Producto</p>
                        <p class="mt-1 text-sm opacity-90">assdsdsajuj</p>
                    </div>
                </div>
                
                <div class="bg-white rounded-2xl max-w-sm md:max-w-2xl mx-auto w-full overflow-hidden shadow-lg">
                    <div class="w-full aspect-[21/9] bg-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80" 
                          alt="Producto1" 
                          class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-4 md:p-6 text-center text-gray-700">
                        <p class="font-bold text-lg md:text-xl uppercase tracking-wider">Nombre del Producto</p>
                        <p class="mt-1 text-sm opacity-90">assdsdsajuj</p>
                    </div>
                </div>

                <div class="bg-white rounded-2xl max-w-sm md:max-w-2xl mx-auto w-full overflow-hidden shadow-lg">
                    <div class="w-full aspect-[21/9] bg-gray-200">
                        <img 
                          src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=1200&q=80" 
                          alt="Producto1" 
                          class="w-full h-full object-cover"
                        />
                    </div>
                    <div class="p-4 md:p-6 text-center text-gray-700">
                        <p class="font-bold text-lg md:text-xl uppercase tracking-wider">Nombre del Producto</p>
                        <p class="mt-1 text-sm opacity-90">assdsdsajuj</p>
                    </div>
                </div>
                
            </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
  `;
}
