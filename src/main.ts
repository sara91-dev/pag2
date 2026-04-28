import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<section id="header" class="bg-slate-800 sticky top-0 z-50">
  <div class="">
    <ul class="text-white flex justify-center gap-24 font-semibold py-4 tracking-wide text-sm">
        <li class="cursor-pointer hover:text-slate-300">Características</li>
        <li class="cursor-pointer hover:text-slate-300">Inicio</li>
        <li class="cursor-pointer hover:text-slate-300">Testimonios</li>
    </ul>
  </div>
</section>

<section id="body" class="mt-20 md:mt-34">
    <div class="flex items-center flex-col md:flex-row justify-center gap-10 md:gap-30 lg:gap-60 xl:gap-100 2xl:gap-140 mx-6">
        <div class="text-center">
            <h1 class="flex justify-center md:text-2xl font-semibold text-gray-600 tracking-wider mb-4">
                Noseque
            </h1>
            <p class="text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
            <p class="text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak fdfd dc</p>
            <p class="text-sm lg:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
        </div>
        
        <div class="text-center bg-black w-60 h-30 md:w-90 md:h-50 rounded-lg">
        </div>
        
    </div>
    
    <div class="flex items-baseline justify-center gap-1.5 mt-20 tracking-wide">
        <p class="text-xs md:text-sm">Quieres</p>
        
        <p class="md:text-lg text-slate-800 font-bold">ver más?</p>
    </div>
    <div class="flex justify-center mt-4">
        <p class="bg-rose-300 cursor-pointer border-1 border-rose-200 px-4 py-1 rounded-lg tracking-wide text-white text-sm font-bold shadow-md">Ver más</p>
    </div>
    
    
    
    <div class="mt-28 mb-20">
        <hr class="border-t border border-red-300 rounded-xl w-3/4 mx-auto"/>
        <div class="flex flex-col items-center my-4">
            <h3 class="text-xl font-semibold tracking-wider mb-4">joejje jeje</h3>
            <ul class="my-4 flex flex-col items-center">
                <li class="">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-rose-200 w-4/5 my-4"></hr>
                <li class="mt-2">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
                <hr class="border-t border border-rose-200 w-4/5 my-4"></hr>
                <li class="mt-2">dfsdfdsd dfdsfd ffsd</li>
                <li class="text-gray-700 text-sm">jejsajs jsjjaks</li>
            </ul>
        </div>
        <hr class="border-t border-2 border-red-300 rounded-xl w-3/4 mx-auto"/>
    </div>
    
    
    <div class="mt-24 lg:mt-32 mb-38 flex flex-col items-center w-full px-10">
        <h3 class="mb-10 tracking-wider text-xl font-semibold text-gray-600">jeje jeje?</h3>
        <div class="flex flex-col lg:flex-row justify-center gap-16 lg:gap-24 xl:gap-36 2xl:gap-48">
            <div class="border-2 border-gray-100 border-gray-200 shadow-lg w-90 h-50 md:w-110 md:h-60 xl:w-120 xl:h-80 rounded-lg">
            </div>
            <div class="border-2 border-gray-100 border-gray-200 shadow-lg w-90 h-50 md:w-110 md:h-60 xl:w-120 xl:h-80 rounded-lg">
            </div>
        </div>
    </div>
    
</section>


`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
