document.addEventListener('DOMContentLoaded', () => {
  // ===== Dark mode init =====
  if (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('dark');
  } else {
    document.documentElement.classList.remove('dark');
  }
});

// ===== Navbar & Menu =====
const navbar = document.getElementById("navbar");
const navLink = document.getElementById("navLink");
const mobileMenu = document.getElementById("mobileMenu");

function openMenu() {
  mobileMenu.style.transform = 'translateX(-16rem)';
}

function closeMenu() {
  mobileMenu.style.transform = 'translateX(0)';
}

function toggleTheme() {
  document.documentElement.classList.toggle('dark');

  if (document.documentElement.classList.contains('dark')) {
    localStorage.theme = 'dark';
  } else {
    localStorage.theme = 'light';
  }
}

// ===== Navbar Scroll Effect =====
window.addEventListener('scroll', () => {
  if (scrollY > 50) {
    navbar.classList.add(
      'bg-white',
      'bg-opacity-50',
      'backdrop-blur-lg',
      'shadow-sm',
      'dark:bg-darkTheme',
      'dark:shadow-white/20'
    );
    navLink.classList.remove(
      'bg-white',
      'shadow-sm',
      'bg-opacity-50',
      'dark:border',
      'dark:border-white/30',
      'dark:bg-transparent'
    );
  } else {
    navbar.classList.remove(
      'bg-white',
      'bg-opacity-50',
      'backdrop-blur-lg',
      'shadow-sm',
      'dark:bg-darkTheme',
      'dark:shadow-white/20'
    );
    navLink.classList.add(
      'bg-white',
      'shadow-sm',
      'bg-opacity-50',
      'dark:border',
      'dark:border-white/30',
      'dark:bg-transparent'
    );
  }
});

// ===== Portfolio Filter =====
const filterButtons = document.querySelectorAll('.filter-btn');
const items = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;

    // Active button
    filterButtons.forEach(btn => btn.removeAttribute('data-active'));
    button.setAttribute('data-active', 'true');

    items.forEach(item => {
      const match =
        filter === 'all' || item.dataset.category === filter;

      if (match) {
        item.style.display = 'block';

        // reflow عشان الأنيميشن يتكرر
        item.offsetHeight;

        item.classList.remove('hide');
        item.classList.add('show');
      } else {
        item.classList.remove('show');
        item.classList.add('hide');

        setTimeout(() => {
          item.style.display = 'none';
        }, 350);
      }
    });
  });
});
