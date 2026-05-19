export function renderHeader(): string {
  return `
<section id="header" class="bg-slate-800/70 backdrop-blur-lg sticky top-0 z-50">
  <div class="">
    <ul class="text-white flex justify-center gap-24 lg:gap-36 font-semibold py-6 sm:py-4 tracking-wide text-sm">
        
        <button id="menuBtn" class="sm:hidden absolute left-6 top-2 h-8 w-8 cursor-pointer bg-white/90 backdrop-blur-md shadow-md rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        
        <nav id="mobileMenu" class="absolute z-50 text-black top-14 left-6 bg-white shadow-lg rounded-xl p-4 opacity-0 scale-95 pointer-events-none transition-all duration-200">          
          <ul class="space-y-2">
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Servicios</a></li>
            <li><a href="#">Contacto</a></li>
          </ul>
        </nav>

                
        <li class="hidden sm:block absolute left-5 top-1.5 item-start cursor-pointer h-10 w-10 rounded-lg">
            <a href="/" data-link class="block w-full h-full">
                <img src="/pag2/logo.png" alt="logo" class="h-full w-full object-cover rounded-lg"/>
            </a>
        </li>
        <li class="hidden sm:block cursor-pointer hover:text-slate-300">
            <a href="/pag2/informacion" data-link class="block w-full h-full">
                Información
            </a>
        </li>
        <li class="hidden sm:block cursor-pointer hover:text-slate-300">
            <a href="/pag2/inicio" data-link class="block w-full h-full">
                Inicio
            </a>
        </li>
        <li class="hidden sm:block cursor-pointer hover:text-slate-300">
            <a href="/pag2/contacto" data-link class="block w-full h-full">
                Contacto
            </a>
        </li>
    </ul>
  </div>
</section>
<div id="overlay" class="fixed inset-0 bg-black/30 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200 z-40"></div>
  `;
}
