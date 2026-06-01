export function renderHeader(): string {
  return `
<section id="header" class="bg-slate-800/70 backdrop-blur-lg sticky top-0 z-50">
  <div class="">
    <ul class="text-white flex justify-center gap-12 md:gap-24 lg:gap-36 font-semibold py-6 sm:py-4 tracking-wide text-sm">
        
        <button id="menuBtn" class="sm:hidden absolute left-6 top-2 h-8 w-8 cursor-pointer bg-indigo-50 backdrop-blur-md shadow-md rounded-xl flex items-center justify-center transition-all duration-200 hover:bg-white hover:shadow-lg hover:scale-105 active:scale-95 focus:outline-none">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 6h16M4 12h16M4 18h16"/>
          </svg>
        </button>
        
        <nav id="mobileMenu" class="absolute z-50 text-black top-14 left-6 bg-white shadow-lg rounded-xl p-2 opacity-0 scale-95 pointer-events-none transition-all duration-200 min-w-[150px]">          
          <ul class="space-y-1">
            <li>
              <a href="/pag2/inicio" class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150 active:bg-slate-200">
                Inicio
              </a>
            </li>
            <li>
              <a href="/pag2/informacion" class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150 active:bg-slate-200">
                Información
              </a>
            </li>
            <li>
              <a href="/pag2/contacto" class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150 active:bg-slate-200">
                Contacto
              </a>
            </li>
            <li>
              <a href="/pag2/desarrollo" class="block px-4 py-2 rounded-lg text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors duration-150 active:bg-slate-200">
                En desarrollo
              </a>
            </li>
          </ul>
        </nav>

        <li class="hidden sm:block absolute left-5 top-1.5 h-10 w-10 rounded-lg transition-transform duration-200 hover:scale-105">
            <a href="/" data-link class="block w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-lg">
                <img src="/pag2/logo.png" alt="logo" class="h-full w-full object-cover rounded-lg"/>
            </a>
        </li>

        <li class="hidden ml-12 md:ml-6 sm:block relative group py-1 text-white hover:text-slate-300 transition-colors duration-300">
            <a href="/pag2/informacion" data-link class="block w-full h-full focus:outline-none focus-visible:text-blue-400">
                Información
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li class="hidden sm:block relative group py-1 text-white hover:text-slate-300 transition-colors duration-300">
            <a href="/pag2/inicio" data-link class="block w-full h-full focus:outline-none focus-visible:text-blue-400">
                Inicio
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li class="hidden sm:block relative group py-1 text-white hover:text-slate-300 transition-colors duration-300">
            <a href="/pag2/contacto" data-link class="block w-full h-full focus:outline-none focus-visible:text-blue-400">
                Contacto
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
        </li>
        
        <li class="hidden sm:block relative group py-1 text-white hover:text-slate-300 transition-colors duration-300">
            <a href="/pag2/desarrollo" data-link class="block w-full h-full focus:outline-none focus-visible:text-blue-400">
                En desarrollo
            </a>
            <span class="absolute bottom-0 left-0 w-0 h-[2px] bg-indigo-300 transition-all duration-300 group-hover:w-full"></span>
        </li>

        <li class="hidden xl:block absolute right-5">
            <a href="/pag2/desarrollo" data-link class="block bg-white hover:bg-indigo-400 border border-gray-200 hover:border-indigo-300 py-2 px-4 rounded-full text-indigo-400 hover:text-white text-sm font-semibold transition-colors duration-300 text-center">
                Iniciar sesión
            </a>
        </li>
        
    </ul>
  </div>
</section>
<div id="overlay" class="fixed inset-0 bg-black/30 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-200 z-40"></div>
  `;
}
