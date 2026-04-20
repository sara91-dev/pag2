import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `

<section id="header" class="bg-slate-800 sticky top-0 z-50">
  <div class="">
    <ul class="text-white flex justify-center gap-24 font-semibold py-4 tracking-wide text-sm">
        <li>Características</li>
        <li>Inicio</li>
        <li>Testimonios</li>
    </ul>
  </div>
</section>

<section id="body" class="mt-34">
    <div class="flex justify-center gap-20 sm:gap-40 lg:gap-60 xl:gap-140">
    
        <div class="text-center">
            <h1 class="flex justify-center text-3xl text-slate-800 font-bold tracking-wide mb-4">Noseque</h1>
            <p class="">sjddjsjdjdsj dsakaiwejd kskdak</p>
            <p class="">sjddjsjdjdsj dsakaiwejd kskdak fdfd dc</p>
            <p class="">sjddjsjdjdsj dsakaiwejd kskdak</p>
        </div>
        
        <div class="text-center bg-black w-50 h-30">
            
        </div>
        
    </div>
    
    <div class="flex justify-center mt-14">
        <p class="bg-red-300 px-2">jojjoo</p>
    </div>
    
</section>


`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
