export function renderFooter(): string {
  return `
<section id="footer" class="border border-t-slate-600 bg-slate-800 pb-4">
    <div class="flex flex-row gap-6 justify-between p-4">
        <div class="">
            <p class="text-white text-sm ">© 2026 GRebelAir® Todos los derechos reservados.</p>
            <p class="text-white text-sm ">GRebelAir es una marca registrada.</p>
        </div>
        <div class= "flex flex-col items-center lg:flex-row mr-4 gap-1.5 text-white text-sm font-semibold">
            <a class="lg:mr-12 hover:text-blue-300 hover:underline hover:decoration-1" href="/pag2/privacidad" data-link>Política de privacidad</a>
            <a class="lg:mr-12 hover:text-blue-300 hover:underline hover:decoration-1" href="/">Política de cookies</a>
            <a class="lg:mr-2 hover:text-blue-300 hover:underline hover:decoration-1" href="/">Aviso legal</a>
        </div>
    </div>
</section>
  `;
}
