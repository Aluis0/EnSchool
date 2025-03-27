document.addEventListener("DOMContentLoaded", () => {
  const navbar = document.querySelector(".navbar");
  const mobileMenu = document.querySelector(".mobile-menu");
  const navLinks = document.querySelector(".nav-links");
  const scrollToTopButton = document.getElementById("scrollToTop");

  // Adiciona ou remove a classe "scrolled" na navbar ao rolar a página
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("scrolled", window.scrollY > 50);

    // Exibe ou oculta o botão de scroll para o topo
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = "flex";
    } else {
      scrollToTopButton.style.display = "none";
    }
  });

  // Abre e fecha o menu mobile
  mobileMenu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    mobileMenu.classList.toggle("active");
  });

  // Swiper for Opinião dos Nossos Alunos
  var newDepoimentosSwiper = new Swiper(".new-depoimentos-slider", {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });
});
