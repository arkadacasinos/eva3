document.addEventListener('DOMContentLoaded', function () {

  if (window.lucide) {
    lucide.createIcons();
  }

  const menuToggle = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuToggle && mobileMenu) {
    menuToggle.addEventListener('click', function () {
      const isExpanded = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isExpanded));
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.add('hidden');
        menuToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  const faqItems = document.querySelectorAll('.h8q_question');

  faqItems.forEach(function (button) {
    button.addEventListener('click', function () {
      const answer = button.nextElementSibling;
      const icon = button.querySelector('[data-lucide="chevron-down"]');
      const isHidden = answer.classList.contains('hidden');

      document.querySelectorAll('.h8q_answer').forEach(function (ans) {
        if (ans !== answer) ans.classList.add('hidden');
      });
      document.querySelectorAll('.h8q_question [data-lucide="chevron-down"]').forEach(function (ic) {
        if (ic !== icon) ic.style.transform = 'rotate(0deg)';
      });
      document.querySelectorAll('.h8q_question').forEach(function (btn) {
        if (btn !== button) btn.setAttribute('aria-expanded', 'false');
      });

      if (isHidden) {
        answer.classList.remove('hidden');
        button.setAttribute('aria-expanded', 'true');
        if (icon) icon.style.transform = 'rotate(180deg)';
      } else {
        answer.classList.add('hidden');
        button.setAttribute('aria-expanded', 'false');
        if (icon) icon.style.transform = 'rotate(0deg)';
      }
    });
  });
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});
