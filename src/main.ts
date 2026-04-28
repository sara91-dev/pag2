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
            <h1 class="flex justify-center text-xl md:text-3xl text-slate-800 font-bold tracking-wide mb-4">
                Noseque
            </h1>
            <p class="text-sm md:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
            <p class="text-sm md:text-base">sjddjsjdjdsj dsakaiwejd kskdak fdfd dc</p>
            <p class="text-sm md:text-base">sjddjsjdjdsj dsakaiwejd kskdak</p>
        </div>
        
        <div class="text-center bg-black w-60 h-30 md:w-90 md:h-50 rounded-lg">
            
        </div>
        
    </div>
    
    <div class="flex items-center gap-1.5 justify-center mt-20 tracking-wide">
        <p class="text-sm md:text-base">Quieres</p>
        
        <p class="text-lg md:text-xl text-slate-800 font-bold">ver más?</p>
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
    
</section>


`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
