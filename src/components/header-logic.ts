export function setupHeader() {
  const btn = document.getElementById("menuBtn") as HTMLButtonElement | null;
  const menu = document.getElementById("mobileMenu") as HTMLElement | null;
  const overlay = document.getElementById("overlay") as HTMLElement | null;

  if (!btn || !menu || !overlay) return;

  let open = false;

  const toggle = () => {
    open = !open;

    document.body.classList.toggle("overflow-hidden", open);

    menu.classList.toggle("opacity-0", !open);
    menu.classList.toggle("scale-95", !open);
    menu.classList.toggle("pointer-events-none", !open);

    overlay.classList.toggle("opacity-0", !open);
    overlay.classList.toggle("pointer-events-none", !open);
  };

  btn.addEventListener("click", toggle);
  overlay.addEventListener("click", () => {
    open = false;
    document.body.classList.remove("overflow-hidden");

    menu.classList.add("opacity-0", "scale-95", "pointer-events-none");
    overlay.classList.add("opacity-0", "pointer-events-none");
  });
}
