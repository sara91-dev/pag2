import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<section id="header" class="bg-slate-800 sticky top-0 z-50">
  <div class="">
    <ul class="text-white flex justify-center gap-24 lg:gap-36 font-semibold py-4 tracking-wide text-sm">
        <li class="cursor-pointer hover:text-slate-300">Información</li>
        <li class="cursor-pointer hover:text-slate-300">Inicio</li>
        <li class="cursor-pointer hover:text-slate-300">Contacto</li>
    </ul>
  </div>
</section>

<section id="body" class="mt-20 md:mt-34">
    <div class="flex items-center flex-col md:flex-row justify-center gap-10 md:gap-30 lg:gap-60 xl:gap-100 2xl:gap-140 mx-6">
        <div class="text-center">
            <h1 class="flex justify-center text-xl md:text-2xl font-semibold text-gray-500 tracking-wider mb-4">
                Noseque
            </h1>
            <p class="text-gray-800 text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
            <p class="text-gray-800 text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak fdfd dc</p>
            <p class="text-gray-800 text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
        </div>
        
        <div class="text-center bg-black w-60 h-30 md:w-90 md:h-50 rounded-lg">
        </div>
        
    </div>
    
    <div class="flex items-baseline justify-center gap-1.5 mt-12 md:mt-20 tracking-wide">
        <p class="text-gray-800 text-xs md:text-sm">Quieres</p>
        
        <p class="md:text-lg text-indigo-800 font-bold">ver más?</p>
    </div>
    <div class="flex justify-center mt-4">
        <button class="transition duration-300 ease-in-out transform hover:scale-105 bg-indigo-800 hover:bg-indigo-700 cursor-pointer border-1 border-indigo-600 px-4 py-1 rounded-full tracking-wide text-white text-sm font-bold shadow-md">Ver más</button>
    </div>
    
    
    
    <div class="flex flex-col items-center mt-20 md:mt-28 mb-20">
        <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-12">joejje jeje características cortas</h3>
            <div class="border border-white bg-slate-100 shadow-inner w-100 h-72 md:w-120 lg:w-140 xl:h-76 xl:w-160 2xl:w-180 rounded-lg">
                <ul class="m-4 text-sm tracking-wide">
                    <li class="relative flex items-center justify-center mt-8 mb-4 mx-4 bg-slate-600 border border-slate-200 p-1.5 rounded-lg text-white font-semibold text-center">
                        <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                          <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        <span>fdfsdfd</span>
                    </li>
                    
                    <li class="relative flex items-center justify-center mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold text-center">
                    <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.25-8.25-3.286Zm0 13.036h.008v.008H12v-.008Z" />
                    </svg>
                        <span>fdfsdfd</span>
                    </li>
                    
                    <li class="relative flex items-center justify-center mb-4 mx-4 bg-slate-600 border border-slate-200 p-1.5 rounded-lg text-white font-semibold text-center">
                        <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
                        </svg>
                        <span>fdfsdfd</span>
                    </li>
                    
                    <li class="relative flex items-center justify-center mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold text-center">
                        <svg class="absolute left-3 item-start w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437 1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008Z" />
                        </svg>
                        <span>fdfsdfd</span>
                    </li>
                </ul>
                <button class="block mx-auto cursor-pointer mt-4 xl:mt-6 px-6 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-medium rounded-lg text-sm tracking-wider transition-all duration-200 hover:bg-gray-300 hover:shadow-md active:scale-95">
                  jojo
                </button>
            </div>
        </div>
    </div>
    
    
    <div class="mt-28 mb-10">
        <hr class="border-t border border-indigo-800 rounded-xl w-3/4 mx-auto"/>
        <div class="flex flex-col items-center my-4">
            <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-4">joejje jejefaq</h3>
            <ul class="mt-6 mb-4 flex flex-col items-start w-full max-w-xs mx-auto">
                <li class="text-slate-800 font-bold">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-slate-700 w-full my-4 mx-auto"/>
                <li class="mt-2 text-slate-800 font-bold">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-slate-700 w-full my-4 mx-auto"/>
                <li class="mt-2 text-slate-800 font-bold">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
            </ul>
        </div>
        <hr class="border-t border-2 border-indigo-800 rounded-xl w-3/4 mx-auto"/>
    </div>
    
    
    <div class="mt-18 md:mt-20 lg:mt-24 mb-38 flex flex-col items-center w-full px-10">
        <h3 class="mb-12 lg:mb-18 tracking-wider text-xl font-semibold text-gray-500">jeje jeje?</h3>
        
        <div class="flex flex-col lg:flex-row justify-center items-center gap-16 lg:gap-24 xl:gap-36 2xl:gap-56">
           
            <div class="flex flex-col items-center border-2 border-gray-100 shadow-lg w-90 h-60 md:w-110 md:h-60 xl:w-120 rounded-lg pt-6">
                <h4 class="tracking-wide font-bold text-slate-800">jeje jsas info? mandar correo con info</h4>
                <p class="text-sm mt-6 tracking-wide">dfjhdsfjd fdshjsfdhjfd hjfdsshjhsfd hsdh</p>
                <div class="flex flex-col">
                    <label class="text-indigo-400 italic text-sm mt-6 self-start">dfdsfdsf fdsf</label>
                    <input type="text" placeholder="tucorreo@gmail.com" class="py-1.5 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-transparent transition caret-gray-400 text-sm text-gray-700"/>
                </div>
                <button class="block mx-auto cursor-pointer mt-4 xl:mt-6 px-6 py-2 bg-gray-200 border border-gray-300 text-gray-700 font-medium rounded-lg text-sm tracking-wider transition-all duration-200 hover:bg-gray-300 hover:shadow-md active:scale-95">
                  jojo
                </button>
                            </div>
            
            <div class="border-2 border-gray-100 shadow-lg w-90 h-50 md:w-100 xl:w-120  rounded-lg pt-6">
                <h4 class="tracking-wide font-bold text-center text-slate-800">jeje jsas iconos redes</h4>
                <div class="mt-8 grid grid-cols-3 gap-y-4 justify-items-center">
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                    <div class="bg-black w-10 h-10 rounded-lg"></div>
                </div>
            </div>
        </div>
        
    </div>
    
</section>

<section id="footer" class="border border-t-indigo-500 bg-indigo-300/20">
    <div class="pb-12">
        <p>dsadsad</p>
    </div>
</section>


`

