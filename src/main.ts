import './style.css'
import typescriptLogo from './assets/typescript.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { setupCounter } from './counter.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<section id="header" class="bg-black">
  <div class="">
    <p class="text-white">AA</p>
  </div>
</section>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
