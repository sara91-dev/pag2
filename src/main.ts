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
        <p class="bg-indigo-800 cursor-pointer border-1 border-indigo-600 px-4 py-1 rounded-lg tracking-wide text-white text-sm font-bold shadow-md">Ver más</p>
    </div>
    
    
    
    <div class="flex flex-col items-center mt-20 md:mt-28 mb-20">
        <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-12">joejje jeje características cortas</h3>
            <div class="border border-white bg-gray-100 shadow-inner w-100 h-72 md:w-120 lg:w-140 xl:h-76 xl:w-160 2xl:w-180 rounded-lg">
                <ul class="m-4 text-sm tracking-wide">
                    <li class="mt-8 mb-4 mx-4 bg-slate-600 border border-slate-200 p-1.5 rounded-lg text-white font-semibold">fdfsdfd</li>
                    <li class="mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold">fdfsdfd</li>
                    <li class="mb-4 mx-4 bg-slate-600 border border-slate-200 p-1.5 rounded-lg text-white font-semibold">fdfsdfd</li>
                    <li class="mb-4 mx-4 bg-white border border-slate-200 p-1.5 rounded-lg text-slate-600 font-semibold">fdfsdfd (falta botón q te lleva a una pag rellenar info para q me lo mande)</li>
                </ul>
                <button class="block mx-auto cursor-pointer mt-2 border border-gray-200 bg-gray-300 shadow-lg px-4 rounded-lg text-sm tracking-wider">jojo</button>
            </div>
        </div>
    </div>
    
    
    <div class="mt-28 mb-10">
        <hr class="border-t border border-indigo-800 rounded-xl w-3/4 mx-auto"/>
        <div class="flex flex-col items-center my-4">
            <h3 class="text-gray-500 text-xl font-semibold tracking-wider mb-4">joejje jejefaq</h3>
            <ul class="my-4 flex flex-col items-center">
                <li class="text-slate-800">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-slate-700 w-4/5 my-4"/>
                <li class="mt-2 text-slate-800">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-slate-700 w-4/5 my-4"/>
                <li class="mt-2 text-slate-800">dfsdfdsd dfdsfd ffsd</li>
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
                    <label class="text-gray-400 italic text-sm mt-6 self-start">dfdsfdsf fdsf</label>
                    <input type="text" placeholder="tucorreo@gmail.com" class="py-1.5 px-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-1 focus:ring-gray-200 focus:border-transparent transition caret-gray-400 text-sm"/>
                </div>
                <button class="cursor-pointer mt-6 border border-gray-200 bg-gray-300 shadow-lg px-4 rounded-lg text-sm tracking-wider">jojo</button>
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



`

