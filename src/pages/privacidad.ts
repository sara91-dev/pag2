import { renderHeader } from "../components/header";
import { renderFooter } from "../components/footer";

export function renderPrivacidad() {
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
                    Política de Privacidad
                </h1>
                <p class="mt-2 text-gray-600 max-w-xl mx-auto">
                    En esta web respetamos tu privacidad y protegemos tus datos personales.
                </p>
            </div>
            
            <hr class="max-w-md md:max-w-xl xl:max-w-2xl mx-auto border-t border-gray-300">
            
            <div class="max-w-4xl mt-10">
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Información sobre el Responsable del Tratamiento
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    El responsable del tratamiento de los datos recogido es ..., con contacto a efectos de privacidad en: ...@gmail.com.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Datos que se recogen
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Recogemos nombre, apellidos, dirección de correo electrónico, teléfono y dirección de envío para la gestión de pedidos y consultas.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Finalidad del tratamiento
                </h2>
                <ul class="mt-2 mb-10 list-disc list-outside ml-5 text-gray-800">
                    <li>Gestionar el contacto y responder mensajes.</li>
                    <li>Mandar información.</li>
                    <li>Tramitar la venta y el envío del producto.</li>
                </ul>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Legitimación
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    La base legal es el consentimiento del usuario al contactarnos y la necesidad de tratar sus datos para ejecutar el contrato de compraventa del producto.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Plazo de conservación de los datos
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Los datos se conservarán mientras dure la relación comercial y, posteriormente, durante los plazos legales para atender posibles reclamaciones o devoluciones.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Destinatarios (Cesión a terceros)
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    No vendemos datos a terceros. Sin embargo, se comunicarán datos a: empresas de transporte (para el envío), pasarelas de pago y nuestro proveedor de hosting.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Derechos del usuario
                </h2>
                <p class="mt-2 mb-10 text-gray-800">
                    Usted puede ejercer sus derechos enviando un email a ...@gmail.com. También tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (aepd.es) si considera que sus derechos han sido vulnerados.
                </p>
                
                <h2 class="px-4 py-1 rounded-lg text-lg bg-gray-200 uppercase text-gray-700 font-semibold inline-block">
                    Medidas de seguridad
                </h2>
                <p class="mt-2 text-gray-800">
                    Aplicamos medidas técnicas y organizativas para garantizar que sus datos están protegidos contra accesos no autorizados o pérdidas.
                </p>
            </div>
        </div>
      </section>
    </main>

    ${renderFooter()}
  </div>
`;
}
