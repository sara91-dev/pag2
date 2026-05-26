
const COOKIE_KEY = 'consentimiento-cookies';

export function comprobarDecisionPrevia(): boolean {
  const decision = localStorage.getItem(COOKIE_KEY);
  return decision !== null;
}

export function guardarDecision(estado: 'aceptado' | 'rechazado'): void {
  localStorage.setItem(COOKIE_KEY, estado);
  
  if (estado === 'aceptado') {
    // Activar scripts de terceros (ej. Google Analytics)
    console.log('Cookies aceptadas por el usuario.');
  } else {
    console.log('Cookies rechazadas. Navegación en modo privado.');
  }
}
