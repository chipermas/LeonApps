// Script para abrir/cerrar menú móvil
document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('mobile-menu');
  
  if (btn && menu) {
    btn.addEventListener('click', () => {
      menu.classList.toggle('hidden');
    });
  }
  
  //script
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projects = document.querySelectorAll(".project");
  const modal = document.getElementById("modal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalLink = document.getElementById("modalLink");
  const closeModal = document.getElementById("closeModal");

  // Filtros
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const category = btn.getAttribute("data-category");

      filterBtns.forEach(b => b.classList.remove("bg-blue-600", "text-white"));
      filterBtns.forEach(b => b.classList.add("bg-gray-200"));

      btn.classList.add("bg-blue-600", "text-white");
      btn.classList.remove("bg-gray-200");

      projects.forEach(project => {
        if (category === "all" || project.getAttribute("data-category") === category) {
          project.classList.remove("opacity-0", "scale-90", "hidden");
          project.classList.add("opacity-100", "scale-100");
        } else {
          project.classList.remove("opacity-100", "scale-100");
          project.classList.add("opacity-0", "scale-90");
          setTimeout(() => {
            if (!project.classList.contains("opacity-100")) {
              project.classList.add("hidden");
            }
          }, 300);
        }
      });
    });
  });

  // Modal
  projects.forEach(project => {
    project.addEventListener("click", () => {
      const category = project.getAttribute("data-category");
      modalImage.src = project.getAttribute("data-image");
      modalTitle.textContent = project.getAttribute("data-title");
      modalDescription.textContent = project.getAttribute("data-description");

      const link = project.getAttribute("data-link");
      if (category === "web" && link) {
        modalLink.href = link;
        modalLink.classList.remove("hidden");
      } else {
        modalLink.classList.add("hidden");
      }

      modal.classList.remove("hidden");
    });
  });

  closeModal.addEventListener("click", () => modal.classList.add("hidden"));
  window.addEventListener("click", e => { if (e.target === modal) modal.classList.add("hidden"); });


});