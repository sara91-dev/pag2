import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

export function renderAvisoLegal() {
  const app = document.querySelector<HTMLDivElement>('#app');

  if (!app) return;

  app.innerHTML = `
  <div class="min-h-screen flex flex-col">
    ${renderHeader()}

    <main class="flex-1 mb-16 mt-10 md:mt-16">
      <section class="w-full">
        <div class="p-6 lg:px-20 w-full text-left">
            
            <div class="w-full text-center mb-10">
                <h1 class="text-xl tracking-wide uppercase text-gray-700 font-semibold">
                    Aviso legal
                </h1>
                <p class="mt-2 text-gray-600 max-w-xl mx-auto">
                    En esta web respetamos tu privacidad y protegemos tus datos personales.
                </p>
            </div>
            
            <hr class="max-w-md md:max-w-xl xl:max-w-2xl mx-auto border-t border-gray-300">
            
            <div class="max-w-4xl mt-10">
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Datos del titular del sitio web
                </h2>
                <p class="mt-2 text-gray-800">
                    En cumplimiento de la Ley 34/2002 (LSSI-CE), se informa de que:
                </p>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>Titular: ...</li>
                    <li>NIF/CIF: ...</li>
                    <li>Domicilio social: ...</li>
                    <li>Email de contacto: ...</li>
                    <li>Nombre comercial: ...?</li>
                </ul>
                
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Objeto del sitio web
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Este sitio web tiene como finalidad la venta online de productos/servicios de ...
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Condiciones de uso
                </h2>
                <p class="mt-2 text-gray-800">
                    El acceso y uso de este sitio web atribuye la condición de usuario e implica la aceptación de las presentes condiciones.
                    El usuario se compromete a:
                </p>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>Hacer un uso adecuado del sitio web.</li>
                    <li>No realizar actividades ilícitas o contrarias a la buena fe.</li>
                    <li>No dañar los sistemas físicos o lógicos del sitio.</li>
                </ul>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Condiciones de venta
                </h2>
                <p class="mt-2 text-gray-800">
                    Las compras realizadas en esta web están sujetas a:
                </p>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>disponibilidad de productos</li>
                    <li>precios indicados en el momento de la compra</li>
                    <li>proceso de pago seguro</li>
                </ul>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Propiedad intelectual e industrial
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Todos los contenidos de esta web (textos, imágenes, logotipos, diseño, código) son propiedad del titular o de terceros con licencia.

                    Queda prohibida su reproducción sin autorización previa
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Responsabilidad
                </h2>
                <p class="mt-2 text-gray-800">
                    El titular no se hace responsable de:
                </p>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>interrupciones del servicio</li>
                    <li>errores técnicos</li>
                    <li>uso indebido del sitio por parte de usuarios</li>
                </ul>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Enlaces externos
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Este sitio puede contener enlaces a terceros. El titular no se responsabiliza del contenido de dichas páginas externas.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Protección de datos
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Los datos personales recogidos a través de esta web se tratan conforme a la Política de Privacidad, que el usuario puede consultar en todo momento.
                </p>
                
                 <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Legislación aplicable
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Las presentes condiciones se rigen por la legislación española.
                    Cualquier disputa se someterá a los juzgados y tribunales del domicilio del consumidor o del titular según corresponda.
                </p>
                
            </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
`;
}
