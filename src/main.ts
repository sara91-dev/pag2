import './style.css'
import { renderHeader } from "./components/header";
import { setupHeader } from "./components/header-logic";
import { renderFooter } from "./components/footer";
import { renderPrivacidad } from "./pages/privacidad";
import { renderCookies } from "./pages/cookies";
import { renderAvisoLegal } from "./pages/aviso-legal";
import { renderFormulario } from "./pages/formulario";
import { renderDesarrollo } from "./pages/desarrollo";
import { renderInicioSesion } from "./pages/inicio_sesion";
import { renderAdministracion } from "./pages/administracion";
import { renderCookiesBanner } from "./components/cookies-banner";


function renderHome() {
  const app = document.querySelector<HTMLDivElement>('#app');
  if (!app) return;
  
app.innerHTML = `
    ${renderHeader()}
    <section id="body" class="mt-20 md:mt-34">
        
        <div id="hero" class="scroll-mt-34 md:scroll-mt-46">
            <div class="flex items-center flex-col lg:flex-row justify-center gap-10 md:gap-16 xl:gap-20 2xl:gap-36 3xl:gap-0 mx-6 p-6">
                <div class="flex flex-col justify-center animate-fade-up">
                    <h1 class=" flex justify-center text-xl md:text-2xl font-semibold tracking-wider bg-gradient-to-r from-slate-700 to-slate-400 bg-clip-text text-transparent ">
                        G-Rebel Air
                    </h1>
                    <h2 class="flex justify-center text-center text-lg md:text-xl font-semibold tracking-wider mb-4 bg-gradient-to-r from-slate-500 to-slate-400 bg-clip-text text-transparent ">
                        Aquí te enseñamos lo que estamos probando ahora mismo enn G-Rebel Air
                    </h2>
                    <div class="px-30">
                        <p class="text-gray-800 text-sm lg:text-base flex justify-start">• ideas</p>
                        <p class="text-gray-800 text-sm lg:text-base flex justify-start">• prototipos</p>
                        <p class="text-gray-800 text-sm lg:text-base flex justify-start">• mejoras que todavía no están a la venta, pero que forman parte del camino</p>
                    </div>
                    <span class="mt-4 text-center px-3 py-1 mb-4 text-xs font-semibold tracking-widest text-indigo-600 uppercase bg-indigo-100 rounded-full">
                        <p>No son promesas vacías.</p> 
                        <p>Son desarrollos reales, en fase de diseño, prueba, fabricación o validación.</p> 
                        <p>Cuando algo supere nuestras pruebas, pasará a la zona de venta.</p> 
                    </span>
                    </div>
                                        
                <div class="relative overflow-hidden w-2/3 aspect-video md:w-1/2 lg:w-2/5 xl:w-1/3 rounded-lg bg-black">

                    <img src="img1.jpg" class="slide absolute w-full h-full object-cover transition-opacity duration-700 opacity-100">
                    <img src="img2.jpg" class="slide absolute w-full h-full object-cover transition-opacity duration-700 opacity-0">
                    <img src="img3.jpg" class="slide absolute w-full h-full object-cover transition-opacity duration-700 opacity-0">
                    
                </div>
                
            </div>
        
            
            <div class="flex items-baseline justify-center gap-1.5 mt-12 md:mt-20 tracking-wide">
                <p class="text-gray-800 text-base md:text-sm">Quieres</p>
                
                <p class="md:text-lg text-indigo-800 font-bold">hablarnos?</p>
            </div>
            <div class="flex justify-center mt-4">
                <a 
                    href="/pag2/informacion" 
                    data-link 
                    class="inline-block text-center transition duration-300 ease-in-out transform hover:scale-105 bg-indigo-800 hover:bg-indigo-700 cursor-pointer border border-indigo-600 px-6 py-1 rounded-full tracking-wider text-white text-sm font-bold shadow-md"
                >
                    ¡Sí!
                </a>
            </div>
        </div>
        
        
        
        <div class="my-18 lg:my-24 bg-slate-900 w-full flex flex-col items-center px-4 pt-8 pb-4">
            <div class="w-4/5 max-w-5xl mt-10 aspect-video rounded-3xl overflow-hidden shadow-2xl border border-slate-700">
                <iframe 
                    class="w-full h-full"
                    src="https://www.youtube.com/embed/TU_VIDEO_ID"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>

            <div class="flex justify-center mt-16 mb-12">
                <a 
                    href="https://youtube.com"
                    target="_blank"
                    class="transition duration-300 ease-in-out transform hover:scale-105 bg-white hover:bg-indigo-500 hover:border-indigo-600 hover:text-white cursor-pointer border border-gray-100 px-5 py-2 rounded-full tracking-wide text-indigo-800 text-sm font-bold shadow-md">
                    ¡Ver más vídeos!
                </a>
            </div>
        </div>
        
        
        
        
        <div id="info" class="flex flex-col items-center mt-20 md:mt-28 mb-20 scroll-mt-20 md:scroll-mt-34">
            <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-12">Te interesa?</h3>
                <div class="border border-white bg-slate-100 shadow-inner w-100 h-76 md:w-120 lg:w-140 xl:h-76 xl:w-160 2xl:w-180 rounded-lg">
                    <ul class="m-4 text-sm tracking-wide">
                        <li class="relative flex items-center justify-center mt-8 mb-4 mx-4 bg-slate-600 border border-transparent p-1.5 rounded-lg text-white font-semibold text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-slate-700">
                            <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                              <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                            <span>Personalizable</span>
                        </li>
                        
                        <li class="relative flex items-center justify-center mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md ">
                        <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                        </svg>
                            <span>Seguro</span>
                        </li>
                        
                        <li class="relative flex items-center justify-center mb-4 mx-4 bg-slate-600 border border-transparent p-1.5 rounded-lg text-white font-semibold text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:bg-slate-700">
                            <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                            </svg>
                            <span>Soporte directo por Whatsapp</span>
                        </li>
                        
                        <li class="relative flex items-center justify-center mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold text-center transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                            <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                            </svg>
                            <span>Rápido</span>
                        </li>
                    </ul>
                    <a href="/pag2/formulario" data-link class="block w-fit mx-auto cursor-pointer mt-6 xl:mt-6 px-6 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-semibold rounded-full text-sm tracking-wider transition-all duration-200 hover:bg-gray-300 hover:shadow-md active:scale-95">
                      ¡Háblanos!
                    </a>
                </div>
            </div>
        </div>
        
        
        
        <div class="mt-23 mb-10">
            <hr class="border-t border border-indigo-800 rounded-xl w-3/4 mx-auto"/>
            <div class="flex flex-col items-center my-10">
                <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-4">Hablemos de tus dudas</h3>
                <ul class="mt-6 mb-4 flex flex-col items-start w-full max-w-xs lg:max-w-md mx-auto">
                    <li class="mt-2 text-indigo-900 font-bold mb-2 flex items-center">
                        <span class="mr-2 text-indigo-500">●</span> 
                        ¿Cuánto tarda?
                    </li>                
                    <li class="text-gray-700 text-sm">El tiempo estimado es de 1 mes y medio, dependiendo del proyecto.</li>
                    <hr class="border-t border-slate-300 w-full my-4 mx-auto"/>
                    <li class="mt-2 text-indigo-900 font-bold mb-2 flex items-center">
                        <span class="mr-2 text-indigo-500">●</span> 
                        ¿Cómo ver el estado de mi pedido?
                    </li>                
                    <li class="text-gray-700 text-sm">Puedes consultarlo en tu panel personal tras iniciar sesión.</li>
                    <hr class="border-t border-slate-300 w-full my-4 mx-auto"/>
                    <li class="mt-2 text-indigo-900 font-bold mb-2 flex items-center">
                        <span class="mr-2 text-indigo-500">●</span> 
                        ¿Trabajamos por todo el país?
                    </li> 
                    <li class="text-gray-700 text-sm">No, nuestro límite es x.</li>
                </ul>
            </div>
            <hr class="border-t border-2 border-indigo-800 rounded-xl w-3/4 mx-auto"/>
        </div>
        
        
        <div id="contacto" class="mt-18 md:mt-20 lg:mt-24 mb-38 flex flex-col items-center w-full px-10 scroll-mt-20 md:scroll-mt-34">
            <h3 class="mb-12 lg:mb-18 tracking-wider text-xl font-semibold text-slate-500">Contacto</h3>
            
            <div class="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24 xl:gap-36 2xl:gap-56">
               
                <div class="bg-white relative flex flex-col items-center border-2 border-gray-100 shadow-lg w-90 min-h-[15rem] md:w-110 xl:w-120 rounded-2xl pt-6 pb-6 transition-all duration-300 ease-in-out">    
                    <div class="top-2 left-2 absolute mb-4 flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full bg-indigo-50">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <h4 class="tracking-wide font-bold text-slate-600">Necesitas más información?</h4>
                    <p class="text-sm mt-4 tracking-wide">Pon tu correo y la obtendrás automáticamente!</p>
                    <div class="flex flex-col">
                        <label class="text-indigo-400 mb-1 uppercase italic text-xs font-semibold mt-8 self-start">Pon aquí tu correo</label>
                        <input 
                            type="email" 
                            id="emailInput"
                            placeholder="tucorreo@gmail.com" 
                            class="py-1.5 px-4 border border-gray-300 rounded-xl ring-0 outline-none focus:outline-none focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition caret-gray-400 text-sm text-gray-700"
                        />
                        <span id="errorMsg" class="text-[10px] text-red-500 mt-1 ml-2 hidden">Correo inválido</span>
                    </div>
                    <button id="emailInfoBtn" class="flex items-center justify-center gap-2 mx-auto cursor-pointer text-sm bg-indigo-500 tracking-wide mt-4 px-4 py-1 border-1 border-indigo-400 text-white font-semibold rounded-full hover:bg-white hover:text-indigo-500 transition-all duration-200 active:scale-95">
                        <span id="btnText">¡Aceptar!</span>           
                        <div id="spinner" class="hidden h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    </button>
                    
                    <p id="successMsg" class="hidden text-green-600 text-xs font-bold mt-4 animate-bounce">
                        ✓ ¡Revisa tu bandeja de entrada!
                    </p>                
                </div>
                
                <div class="bg-white border-2 border-gray-100 shadow-lg w-90 h-60 md:w-100 xl:w-120  rounded-2xl pt-4">
                    <h4 class="tracking-wide font-bold text-center text-slate-600">Redes sociales</h4>
                    <div class="mt-10 grid grid-cols-3 gap-y-8 justify-items-center">
                    
                        <div class=" w-10 h-10 rounded-lg flex justify-center items-center ">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">INSTAGRAM</span>
                            </a>
                        </div>
                        
                        <div class=" w-10 h-10 rounded-lg flex justify-center items-center">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-slate-900 p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:-rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M12 .5C5.73.5.75 5.7.75 12c0 5.1 3.29 9.42 7.86 10.95.58.1.79-.25.79-.56v-2.1c-3.2.7-3.87-1.4-3.87-1.4-.53-1.3-1.3-1.65-1.3-1.65-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.8 2.73 1.3 3.4 1 .1-.77.4-1.3.73-1.6-2.55-.3-5.23-1.3-5.23-5.7 0-1.3.45-2.3 1.2-3.1-.1-.3-.52-1.5.12-3.1 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.64 1.6.22 2.8.12 3.1.75.8 1.2 1.8 1.2 3.1 0 4.4-2.7 5.4-5.3 5.7.4.3.75 1 .75 2.1v3.1c0 .3.2.65.8.55A10.8 10.8 0 0 0 23.25 12C23.25 5.7 18.27.5 12 .5z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">GITHUB</span>
                            </a>
                        </div>
                        
                        <div class="w-10 h-10 rounded-lg flex justify-center items-center">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-red-600 p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.7 31.7 0 0 0 0 12a31.7 31.7 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.7 31.7 0 0 0 24 12a31.7 31.7 0 0 0-.5-5.8zM9.5 15.5v-7l6 3.5-6 3.5z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">YOUTUBE</span>
                            </a>
                        </div>
                        
                        <div class="w-10 h-10 rounded-lg flex justify-center items-center">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-black p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:-rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M16.6 1c.3 2.6 1.8 4.2 4.4 4.4v3.1c-1.8.1-3.4-.4-4.4-1.3v7.3c0 3.7-3 6.8-6.8 6.8S3 18.2 3 14.5 6 7.7 9.8 7.7c.5 0 1 .1 1.5.2v3.5c-.5-.2-1-.3-1.5-.3-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.4-1.5 3.4-3.3V1h3.4z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">TIKTOK</span>
                            </a>
                        </div>
                        
                        <div class="w-10 h-10 rounded-lg flex justify-center items-center">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-blue-600 p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H8v-3h2.4V9.3c0-2.4 1.4-3.7 3.6-3.7 1 0 2 .1 2 .1v2.3h-1.1c-1.1 0-1.5.7-1.5 1.4V12H16l-.5 3h-2v7A10 10 0 0 0 22 12z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">FACEBOOK</span>
                            </a>
                        </div>
                        
                        <div class="w-10 h-10 rounded-lg flex justify-center items-center">
                            <a href="#" class="group flex flex-col items-center gap-0.5">
                                <div class="bg-slate-800 p-2.5 rounded-xl shadow-md transition-transform group-hover:-translate-y-1 group-hover:-rotate-6">
                                    <svg class="w-6 h-6 text-white fill-current" viewBox="0 0 24 24"><path d="M18.244 2H21.5l-7.59 8.694L22 22h-6.828l-5.34-6.918L3.8 22H.5l8.02-9.19L2 2h6.95l4.79 6.2L18.244 2zm-1.2 18h1.9L6.1 4h-2L17.044 20z"/></svg>
                                </div>
                                <span class="text-[10px] font-bold text-gray-400 group-hover:text-slate-800 transition-colors">X/TWITTER</span>
                            </a>
                        </div>
                    
                    </div>
                </div>
            </div>
            
        </div>
        
    </section>
    ${renderFooter()}
  `;

   setupHeader();
   setupHomeLogic();
}


function setupHomeLogic() {

    const slides = document.querySelectorAll(".slide");
    let current = 0;

    setInterval(() => {
        slides[current].classList.add("opacity-0");
        current = (current + 1) % slides.length;
        slides[current].classList.remove("opacity-0");
    }, 3000);
   
    
const button = document.getElementById("emailInfoBtn") as HTMLButtonElement;
const emailInput = document.getElementById("emailInput") as HTMLInputElement;
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");
const spinner = document.getElementById("spinner");
const btnText = document.getElementById("btnText");

button?.addEventListener("click", async () => {
    const email = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    errorMsg?.classList.add("hidden");
    successMsg?.classList.add("hidden");

    if (!email || !emailRegex.test(email)) {
        emailInput.blur();
        errorMsg?.classList.remove("hidden");
        
        emailInput.classList.add("border-red-500", "ring-2", "ring-red-200", "animate-shake");

        setTimeout(() => {
            errorMsg?.classList.add("hidden");
            emailInput.classList.remove("border-red-500", "ring-red-200", "ring-2", "animate-shake");
        }, 3000);
        
        emailInput.blur();
        return;
    }

    button.disabled = true;
    spinner?.classList.remove("hidden");
    btnText!.textContent = "Enviando...";

    try {
        const res = await fetch("http://localhost:3001/mandarCorreo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        });

        const data = await res.json();

        if (data.ok) {
            successMsg?.classList.remove("hidden");
            emailInput.value = ""; 

            setTimeout(() => {
                successMsg?.classList.add("hidden");
            }, 3000);

        } else {
            alert("Algo salió mal en el servidor.");
        }
    } catch (err) {
        alert("Error de conexión. ¿Encendiste el servidor?");
    } finally {
        button.disabled = false;
        spinner?.classList.add("hidden");
        btnText!.textContent = "¡Aceptar!";
    }
});
}

function router() {
  const path = window.location.pathname;
  
  
  if (
    path === "/pag2/privacidad" ||
    path === "/pag2/cookies" ||
    path === "/pag2/aviso-legal" ||
    path === "/pag2/formulario" ||
    path === "/pag2/desarrollo" ||
    path === "/pag2/inicio_sesion" ||
    path === "/pag2/administracion" 
  ) {
    window.scrollTo(0, 0); 
  }
  
  if (path === "/pag2/privacidad") {
    renderPrivacidad();
    setupHeader();
  } 
  else if (path === "/pag2/cookies") {
    renderCookies();
    setupHeader();
  }
  else if (path === "/pag2/aviso-legal") {
    renderAvisoLegal();
    setupHeader();
  }
  else if (path === "/pag2/formulario") {
    renderFormulario();
    setupHeader();
  }
  else if (path === "/pag2/desarrollo") {
    renderDesarrollo();
    setupHeader();
  }
  else if (path === "/pag2/inicio_sesion") {
    renderInicioSesion();
    setupHeader();
  }
  else if (path === "/pag2/administracion") {
    const isAdmin = localStorage.getItem('is_admin') === 'true';

    if (!isAdmin) {
      alert("No tienes permisos para acceder a la administración.");
      
      window.history.pushState({}, "", "/pag2/inicio_sesion");
      
      renderInicioSesion();
      setupHeader();
      return; 
    }


    renderAdministracion();
    setupHeader();
  }
  else {
    const heroSection = document.getElementById("hero");
    
    if(!heroSection){
        renderHome();
    }
    
    if (path === "/pag2/inicio") {
      document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
    } 
    else if (path === "/pag2/informacion") {
      document.getElementById("info")?.scrollIntoView({ behavior: "smooth" });
    } 
    else if (path === "/pag2/contacto") {
      document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
    }
  }
  renderCookiesBanner();
}

document.addEventListener("click", (e) => {
  const target = e.target as HTMLElement;
  const link = target.closest("a[data-link]") as HTMLAnchorElement;

  if (!link) return;

  e.preventDefault();
  const href = link.getAttribute("href");

  if (!href) return;

  window.history.pushState({}, "", href);
  router();
});

window.addEventListener("popstate", router);

router();
