// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//     const closeMenuLink = document.querySelectorAll('.header-link');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };
//   closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

//   // Close the mobile menu on wider screens if the device orientation changes
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const closeMenuLink = document.querySelectorAll('.header-link');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.querySelector(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: 'smooth' });
//       toggleMenu();
//     }
//   };

//   closeMenuLink.forEach(item => {
//     item.addEventListener('click', (event) => {
//       event.preventDefault();
//       const targetSectionId = item.getAttribute('href');
//       scrollToSection(targetSectionId);
//     });
//   });
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

  
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
// (() => {
//   const mobileMenu = document.querySelector('.js-menu-container');
//   const openMenuBtn = document.querySelector('.js-open-menu');
//   const closeMenuBtn = document.querySelector('.js-close-menu');
//   const closeMenuLink = document.querySelectorAll('.header-link');

//   const toggleMenu = () => {
//     const isMenuOpen =
//       openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
//     openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
//     mobileMenu.classList.toggle('is-open');

//     const scrollLockMethod = !isMenuOpen
//       ? 'disableBodyScroll'
//       : 'enableBodyScroll';
//     bodyScrollLock[scrollLockMethod](document.body);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.querySelector(sectionId);
//     if (section) {
//       // Временно отключаем анимацию прокрутки до раздела
//       document.documentElement.style.scrollBehavior = 'auto';
//       section.scrollIntoView({ behavior: 'smooth' });
//       // После завершения прокрутки, восстанавливаем анимацию
//       setTimeout(() => {
//         document.documentElement.style.scrollBehavior = 'smooth';
//       }, 1000); // Установите время, достаточное для завершения прокрутки
//       toggleMenu();
//     }
//   };

//   closeMenuLink.forEach(item => {
//     item.addEventListener('click', (event) => {
//       event.preventDefault();
//       const targetSectionId = item.getAttribute('href');
//       scrollToSection(targetSectionId);
//     });
//   });
//   openMenuBtn.addEventListener('click', toggleMenu);
//   closeMenuBtn.addEventListener('click', toggleMenu);

  
//   window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
//     if (!e.matches) return;
//     mobileMenu.classList.remove('is-open');
//     openMenuBtn.setAttribute('aria-expanded', false);
//     bodyScrollLock.enableBodyScroll(document.body);
//   });
// })();
(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.header-link');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  const scrollToSection = (sectionId) => {
    const section = document.querySelector(sectionId);
    if (section) {
      // Временно отключаем анимацию прокрутки до раздела
      document.documentElement.style.scrollBehavior = 'auto';
      section.scrollIntoView({ behavior: 'smooth' });
      // После завершения прокрутки, восстанавливаем анимацию
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'smooth';
      }, 1000); // Установите время, достаточное для завершения прокрутки
      toggleMenu(); 
    }
  };

  const preventScroll = () => {
    if (mobileMenu.classList.contains('is-open')) {
      bodyScrollLock.disableBodyScroll(document.body);
    } else {
      bodyScrollLock.enableBodyScroll(document.body);
    }
  };

  closeMenuLink.forEach(item => {
    item.addEventListener('click', (event) => {
      event.preventDefault(); 
      const targetSectionId = item.getAttribute('href'); 
      scrollToSection(targetSectionId); 
    });
  });
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });

  // Запретить прокрутку, когда меню открыто
  document.addEventListener('DOMContentLoaded', preventScroll);
})();
// Створення функції для лінивого завантаження зображень
function lazyLoadImages() {
  // Вибір всіх зображень, які мають атрибут data-src
  var lazyImages = document.querySelectorAll("img[data-src]");

  // Ітерація по кожному зображенню
  lazyImages.forEach(function(img) {
    // Присвоєння значення атрибуту src, яке міститься у data-src
    img.src = img.dataset.src;

    // Видалення атрибуту data-src після завантаження зображення
    img.onload = function() {
      img.removeAttribute("data-src");
    };
  });
}

// Виклик функції lazyLoadImages після завантаження сторінки
document.addEventListener("DOMContentLoaded", lazyLoadImages);

// Получаем элемент хедера, к которому нужно добавить класс при скролле
const header = document.querySelector('.header-wrap-main');

// Функция, которая будет вызываться при скролле страницы
function handleScroll() {
    // Если вертикальный скролл больше нуля (т.е. страница прокручена вниз)
    if (window.scrollY > 0) {
        // Добавляем класс к хедеру
        header.classList.add('.header-wrap-main.scrollbar');
    } else {
        // Если вертикальный скролл равен нулю (т.е. страница вверху)
        // Удаляем класс у хедера
        header.classList.remove('.header-wrap-main.scrollbar');
    }
}

// Добавляем обработчик события на скролл страницы
window.addEventListener('scroll', handleScroll);
window.addEventListener('scroll', function() {
  const headerWrapMain = document.querySelector('.header-wrap-main');
  if (window.scrollY > 0) {
    headerWrapMain.classList.add('scrollbar');
  } else {
    headerWrapMain.classList.remove('scrollbar');
  }
});



