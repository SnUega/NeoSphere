(function () {
  const qs = (s, c = document) => c.querySelector(s);
  const qsa = (s, c = document) => Array.from(c.querySelectorAll(s));

  const body = document.body;
  const ctaModal = qs('#cta-modal');
  const ctaForm = qs('#cta-form');
  const confirmModal = qs('#confirm-modal');
  const confirmClose = qs('#confirm-close');
  const progressRing = qs('#progress-ring');
  const scrollTopBtn = qs('#scroll-top');
  const imageModal = qs('#image-modal');
  const imageModalImg = qs('#image-modal-img');
  const langSwitch = qs('#lang-switch');
  const langBtn = qs('#lang-btn');
  const langList = qs('#lang-list');
  let currentLang = 'ru';

  const I18N = {
    ru: {
      'nav.ecosystem': 'Экосистема',
      'nav.courses': 'Курсы',
      'nav.services': 'Услуги',
      'nav.contacts': 'Контакты',
      'hero.title': 'Единая экосистема для всех ваших потребностей',
      'hero.subtitle': 'От ремонта техники до профессионального обучения — комплексные решения для современной жизни',
      'hero.cta': 'Исследовать возможности',
      'ecosystem.title': 'Наша Экосистема Услуг',
      'services.repair.title': 'Ремонт техники',
      'services.repair.desc': 'Профессиональный ремонт любой техники с гарантией и использованием качественных запчастей',
      'services.parts.title': 'Обучение',
      'services.parts.desc': 'Курсы по передовым направлениям с практикой и знаниями от экспертов. Развивайся и опережай время.',
      'services.invest.title': 'Инвестиции',
      'services.invest.desc': 'Помощь в привлечении инвестиций и финансовом развитии вашего бизнеса',
      'services.goods.title': 'Товары и услуги',
      'services.goods.desc': 'Широкий ассортимент продуктов и сервисов для всех сфер жизни',
      'courses.title': 'Преобразуйте Свое Будущее',
      'course1.title': 'Иностранные языки',
      'course1.subtitle': 'Откройте мир без границ',
      'course1.highlight': 'Необходимость в современном мире',
      'course1.intro': 'В эпоху глобализации владение иностранными языками — это не преимущество, а необходимость. Наши курсы помогут вам:',
      'course1.benefits.0': 'Получить доступ к международным карьерным возможностям',
      'course1.benefits.1': 'Свободно путешествовать без языковых барьеров',
      'course1.benefits.2': 'Изучать оригинальные материалы и мировую культуру',
      'course1.benefits.3': 'Развивать когнитивные способности и память',
      'course1.note.title': 'Интерактивное обучение:',
      'course1.note.body': 'Реальные диалоги, игры и общение с носителями языка',
      'course2.title': 'Программирование',
      'course2.subtitle': 'Создавайте технологии будущего',
      'course2.highlight': 'Ключевой навык XXI века',
      'course2.intro': 'Цифровая трансформация охватывает все сферы жизни. Программирование стало новой грамотностью:',
      'course2.benefits.0': 'Доступ к самым востребованным и высокооплачиваемым профессиям',
      'course2.benefits.1': 'Возможность создавать собственные проекты и стартапы',
      'course2.benefits.2': 'Развитие логического и алгоритмического мышления',
      'course2.benefits.3': 'Автоматизация рутинных задач в работе и жизни',
      'course2.note.title': 'Практическое обучение:',
      'course2.note.body': 'Реальные проекты, хакатоны и стажировки',
      'course3.title': 'Финансовая грамотность',
      'course3.subtitle': 'Управляйте своими ресурсами эффективно',
      'course3.highlight': 'Основа личной свободы',
      'course3.intro': 'В условиях экономической нестабильности финансовая грамотность — ваш главный защитник:',
      'course3.benefits.0': 'Избегайте долговых ловушек и финансовых ошибок',
      'course3.benefits.1': 'Научитесь создавать пассивные источники дохода',
      'course3.benefits.2': 'Планируйте бюджет и достигайте финансовых целей',
      'course3.benefits.3': 'Защищайте сбережения от инфляции',
      'course3.benefits.4': 'Понимание инвестиционных инструментов и рисков',
      'course3.note.title': 'Прикладное обучение:',
      'course3.note.body': 'Разбор реальных кейсов, симуляторы инвестиций',
      'courses.cta': 'Начать обучение',
      'webdev.title': 'Мы также создаем сайты',
      'webdev.brand': 'NeoShop',
      'webdev.visit': 'Открыть сайт',
      'webdev.facebook': 'Facebook',
      'webdev.create': 'Создать сайт',
      'cta.title': 'Готовы изменить свою жизнь?',
      'cta.prefix': 'Готовы изменить свою',
      'cta.key.life': 'жизнь',
      'cta.key.business': 'бизнес',
      'cta.key.future': 'будущее',
      'cta.body': 'Присоединяйтесь к экосистеме, которая решает все ваши задачи в одном месте — от бытового сервиса до профессионального развития',
      'cta.cta': 'Присоединиться сейчас',
      'footer.brand.desc': 'Комплексная экосистема услуг для современной жизни. Мы делаем сложное простым, а необходимое — доступным.',
      'footer.directions.title': 'Направления',
      'footer.directions.items.0': 'Ремонт техники',
      'footer.directions.items.1': 'Запчасти Б/У',
      'footer.directions.items.2': 'Инвестиции',
      'footer.directions.items.3': 'Обучающие курсы',
      'footer.directions.items.4': 'Товары и услуги',
      'footer.contacts.title': 'Контакты',
      'footer.contacts.phone': '+373 605 04 199',
      'footer.contacts.email': 'neoconsult.partners@gmail.com',
      'footer.contacts.address': 'Оргеев, ул. Скрисулуй Латин, 10',
      'footer.courses.title': 'Курсы',
      'footer.courses.items.0': 'Иностранные языки',
      'footer.courses.items.1': 'Программирование',
      'footer.courses.items.2': 'Финансовая грамотность',
      'footer.courses.items.3': 'Интерактивное обучение',
      'footer.copy': '© 2025 NeoCorp. Все права защищены.',
      'modal.form.title': 'Оставьте заявку',
      'form.name': 'Имя',
      'form.phone': 'Телефон',
      'form.placeholder.name': 'Ваше имя',
      'form.placeholder.phone': 'Ваш номер телефона',
      'form.submit': 'Отправить',
      'confirm.message': 'Заявка отправлена. Мы свяжемся с вами в ближайшее время.'
    },
    en: {
      'nav.ecosystem': 'Ecosystem',
      'nav.courses': 'Courses',
      'nav.services': 'Services',
      'nav.contacts': 'Contacts',
      'hero.title': 'A unified ecosystem for all your needs',
      'hero.subtitle': 'From device repair to professional education — comprehensive solutions for modern life',
      'hero.cta': 'Explore opportunities',
      'ecosystem.title': 'Our Service Ecosystem',
      'services.repair.title': 'Device Repair',
      'services.repair.desc': 'Professional repair with warranty and quality parts',
      'services.parts.title': 'Education',
      'services.parts.desc': 'Cutting-edge courses with hands-on practice and expert knowledge. Grow and stay ahead.',
      'services.invest.title': 'Investments',
      'services.invest.desc': 'Assistance in raising investments and business growth',
      'services.goods.title': 'Goods and Services',
      'services.goods.desc': 'Wide range of products and services for all areas of life',
      'courses.title': 'Transform Your Future',
      'course1.title': 'Foreign Languages',
      'course1.subtitle': 'Open a world without borders',
      'course1.highlight': 'Essential in the modern world',
      'course1.intro': 'In the age of globalization, languages are a necessity. Our courses will help you:',
      'course1.benefits.0': 'Access global career opportunities',
      'course1.benefits.1': 'Travel freely without language barriers',
      'course1.benefits.2': 'Study original materials and world culture',
      'course1.benefits.3': 'Develop cognitive abilities and memory',
      'course1.note.title': 'Interactive learning:',
      'course1.note.body': 'Real dialogues, games, and practice with native speakers',
      'course2.title': 'Programming',
      'course2.subtitle': 'Create the technology of the future',
      'course2.highlight': 'Key skill of the 21st century',
      'course2.intro': 'Digital transformation covers all fields. Programming is the new literacy:',
      'course2.benefits.0': 'Access the most in-demand high-paid jobs',
      'course2.benefits.1': 'Create your own projects and startups',
      'course2.benefits.2': 'Develop logical and algorithmic thinking',
      'course2.benefits.3': 'Automate routine tasks',
      'course2.note.title': 'Practical learning:',
      'course2.note.body': 'Real projects, hackathons and internships',
      'course3.title': 'Financial Literacy',
      'course3.subtitle': 'Manage your resources effectively',
      'course3.highlight': 'Foundation of personal freedom',
      'course3.intro': 'In an unstable economy, financial literacy is your best defense:',
      'course3.benefits.0': 'Avoid debt traps and financial mistakes',
      'course3.benefits.1': 'Create passive income sources',
      'course3.benefits.2': 'Plan budgets and reach financial goals',
      'course3.benefits.3': 'Protect savings from inflation',
      'course3.benefits.4': 'Understand investment tools and risks',
      'course3.note.title': 'Applied learning:',
      'course3.note.body': 'Real case analysis and investment simulators',
      'courses.cta': 'Start learning',
      'webdev.title': 'We also create websites',
      'webdev.brand': 'NeoShop',
      'webdev.visit': 'Open site',
      'webdev.facebook': 'Facebook',
      'webdev.create': 'Create a website',
      'cta.title': 'Ready to change your life?',
      'cta.prefix': 'Ready to change your',
      'cta.key.life': 'life',
      'cta.key.business': 'business',
      'cta.key.future': 'future',
      'cta.body': 'Join the ecosystem that solves all your tasks in one place — from household service to professional development',
      'cta.cta': 'Join now',
      'footer.brand.desc': 'A comprehensive service ecosystem for modern life. We make the complex simple and the necessary accessible.',
      'footer.directions.title': 'Directions',
      'footer.directions.items.0': 'Device repair',
      'footer.directions.items.1': 'Used parts',
      'footer.directions.items.2': 'Investments',
      'footer.directions.items.3': 'Educational courses',
      'footer.directions.items.4': 'Goods and services',
      'footer.contacts.title': 'Contacts',
      'footer.contacts.phone': '+373 605 04 199',
      'footer.contacts.email': 'neoconsult.partners@gmail.com',
      'footer.contacts.address': 'Orhei, Scrisului Latin 10',
      'footer.courses.title': 'Courses',
      'footer.courses.items.0': 'Foreign languages',
      'footer.courses.items.1': 'Programming',
      'footer.courses.items.2': 'Financial literacy',
      'footer.courses.items.3': 'Interactive learning',
      'footer.copy': '© 2025 NeoCorp. All rights reserved.',
      'modal.form.title': 'Send a request',
      'form.name': 'Name',
      'form.phone': 'Phone',
      'form.placeholder.name': 'Your name',
      'form.placeholder.phone': 'Your phone number',
      'form.submit': 'Send',
      'confirm.message': 'Request sent. We will contact you shortly.'
    },
    ro: {
      'nav.ecosystem': 'Ecosistemă',
      'nav.courses': 'Cursuri',
      'nav.services': 'Servicii',
      'nav.contacts': 'Contacte',
      'hero.title': 'O ecosistemă unificată pentru toate nevoile tale',
      'hero.subtitle': 'De la reparații la educație profesională — soluții complete pentru viața modernă',
      'hero.cta': 'Explorează oportunități',
      'ecosystem.title': 'Ecosistemul nostru de servicii',
      'services.repair.title': 'Reparații dispozitive',
      'services.repair.desc': 'Reparații profesionale cu garanție și piese de calitate',
      'services.parts.title': 'Educație',
      'services.parts.desc': 'Cursuri de ultimă oră cu practică și cunoștințe de la experți. Evoluează și fii cu un pas înainte.',
      'services.invest.title': 'Investiții',
      'services.invest.desc': 'Asistență în atragerea investițiilor și creșterea afacerii',
      'services.goods.title': 'Produse și servicii',
      'services.goods.desc': 'Gamă largă de produse și servicii pentru toate domeniile vieții',
      'courses.title': 'Transformă-ți viitorul',
      'course1.title': 'Limbi străine',
      'course1.subtitle': 'Deschide o lume fără granițe',
      'course1.highlight': 'Esențial în lumea modernă',
      'course1.intro': 'În era globalizării, limbile sunt o necesitate. Cursurile noastre te vor ajuta:',
      'course1.benefits.0': 'Acces la oportunități de carieră internaționale',
      'course1.benefits.1': 'Călătorește liber fără bariere lingvistice',
      'course1.benefits.2': 'Studiază materiale originale și cultura mondială',
      'course1.benefits.3': 'Dezvoltă abilități cognitive și memoria',
      'course1.note.title': 'Învățare interactivă:',
      'course1.note.body': 'Dialoguri reale, jocuri și practică cu vorbitori nativi',
      'course2.title': 'Programare',
      'course2.subtitle': 'Creează tehnologia viitorului',
      'course2.highlight': 'Competența cheie a secolului XXI',
      'course2.intro': 'Transformarea digitală acoperă toate domeniile. Programarea este noua alfabetizare:',
      'course2.benefits.0': 'Acces la cele mai căutate joburi bine plătite',
      'course2.benefits.1': 'Creează proiecte și startup-uri proprii',
      'course2.benefits.2': 'Dezvoltă gândirea logică și algoritmică',
      'course2.benefits.3': 'Automatizează sarcinile de rutină',
      'course2.note.title': 'Învățare practică:',
      'course2.note.body': 'Proiecte reale, hackathoane și stagii',
      'course3.title': 'Alfabetizare financiară',
      'course3.subtitle': 'Gestionează-ți resursele eficient',
      'course3.highlight': 'Baza libertății personale',
      'course3.intro': 'Într-o economie instabilă, alfabetizarea financiară este cea mai bună apărare:',
      'course3.benefits.0': 'Evită capcanele datoriilor și greșelile financiare',
      'course3.benefits.1': 'Creează surse de venit pasiv',
      'course3.benefits.2': 'Planifică bugete și atinge obiective financiare',
      'course3.benefits.3': 'Protejează economiile de inflație',
      'course3.benefits.4': 'Înțelege instrumentele și riscurile investițiilor',
      'course3.note.title': 'Învățare aplicată:',
      'course3.note.body': 'Analiza cazurilor reale și simulatoare de investiții',
      'courses.cta': 'Începe învățarea',
      'webdev.title': 'Creăm și site-uri web',
      'webdev.brand': 'NeoShop',
      'webdev.visit': 'Deschide site-ul',
      'webdev.facebook': 'Facebook',
      'webdev.create': 'Creează un site',
      'cta.title': 'Ești gata să-ți schimbi viața?',
      'cta.prefix': 'Ești gata să-ți schimbi',
      'cta.key.life': 'viața',
      'cta.key.business': 'afacerea',
      'cta.key.future': 'viitorul',
      'cta.body': 'Alătură-te ecosistemului care rezolvă totul într-un singur loc — de la servicii casnice la dezvoltare profesională',
      'cta.cta': 'Alătură-te acum',
      'footer.brand.desc': 'O ecosistemă cuprinzătoare de servicii pentru viața modernă. Facem complexul simplu și necesarul accesibil.',
      'footer.directions.title': 'Direcții',
      'footer.directions.items.0': 'Reparații dispozitive',
      'footer.directions.items.1': 'Piese second-hand',
      'footer.directions.items.2': 'Investiții',
      'footer.directions.items.3': 'Cursuri educaționale',
      'footer.directions.items.4': 'Produse și servicii',
      'footer.contacts.title': 'Contacte',
      'footer.contacts.phone': '+373 605 04 199',
      'footer.contacts.email': 'neoconsult.partners@gmail.com',
      'footer.contacts.address': 'Orhei, Scrisului Latin 10',
      'footer.courses.title': 'Cursuri',
      'footer.courses.items.0': 'Limbi străine',
      'footer.courses.items.1': 'Programare',
      'footer.courses.items.2': 'Alfabetizare financiară',
      'footer.courses.items.3': 'Învățare interactivă',
      'footer.copy': '© 2025 NeoCorp. Toate drepturile rezervate.',
      'modal.form.title': 'Trimite o cerere',
      'form.name': 'Nume',
      'form.phone': 'Telefon',
      'form.placeholder.name': 'Numele tău',
      'form.placeholder.phone': 'Numărul tău de telefon',
      'form.submit': 'Trimite',
      'confirm.message': 'Cererea a fost trimisă. Te vom contacta în curând.'
    }
  };

  function applyI18n(lang) {
    currentLang = I18N[lang] ? lang : 'ru';
    const dict = I18N[currentLang];
    qsa('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      if (key && dict[key]) el.textContent = dict[key];
    });
    qsa('[data-i18n-placeholder]').forEach((el) => {
      const key = el.getAttribute('data-i18n-placeholder');
      if (key && dict[key]) el.setAttribute('placeholder', dict[key]);
    });
    // Reset CTA rotator to 'life' in current language when language changes
    const rotator = qs('.cta-section .cta-rotator');
    const rotatorWord = rotator ? qs('.rotator-word', rotator) : null;
    if (rotatorWord) rotatorWord.textContent = dict['cta.key.life'] || rotatorWord.textContent;
    if (typeof window.__restartCtaRotator === 'function') {
      window.__restartCtaRotator();
    }
  }

  function openModal(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'false');
    body.classList.add('modal-open');
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.setAttribute('aria-hidden', 'true');
    body.classList.remove('modal-open');
  }

  // Open CTA modal on elements that request it via data-open="cta-modal" (delegated for robustness)
  document.addEventListener('click', (e) => {
    const opener = e.target.closest('[data-open="cta-modal"]');
    if (!opener || opener.closest('.modal')) return;
    e.preventDefault();
    openModal(ctaModal);
  });

  // Close on [data-close] click or backdrop click
  qsa('.modal').forEach((modal) => {
    modal.addEventListener('click', (e) => {
      // Close by explicit close target (cross or elements with data-close)
      if (e.target.closest('[data-close]')) {
        closeModal(modal);
        return;
      }
      // Close on backdrop click only (outside window)
      const win = qs('.modal-window', modal);
      if (e.target === modal || e.target === qs('.modal-backdrop', modal)) {
        // Do not show confirm modal in this path; just close
        closeModal(modal);
      }
    });
  });

  // Submit handler: send via AJAX (e.g., Formspree) and show confirm without redirect
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const submitBtn = form.querySelector('[type="submit"]');
    if (!form.checkValidity()) { try { form.reportValidity(); } catch (_) {} return; }
    const formData = new FormData(form);
    // honeypot
    if ((formData.get('botcheck') || '').toString().trim().length > 0) { closeModal(ctaModal); startConfirmCountdown(); return; }
    try {
      if (submitBtn) { submitBtn.disabled = true; submitBtn.dataset.prev = submitBtn.textContent || ''; submitBtn.textContent = submitBtn.textContent || '...'; }
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: formData, headers: { 'Accept': 'application/json' } });
      // proceed regardless, but try to reset on success
      if (res.ok) { try { form.reset(); } catch (_) {} }
      closeModal(ctaModal);
      startConfirmCountdown();
    } catch (_) {
      closeModal(ctaModal);
      startConfirmCountdown();
    } finally {
      if (submitBtn) { submitBtn.disabled = false; submitBtn.textContent = submitBtn.dataset.prev || submitBtn.textContent; }
    }
  }
  if (ctaForm) ctaForm.addEventListener('submit', handleSubmit);

  let confirmTimer;
  function startConfirmCountdown() {
    openModal(confirmModal);
    if (progressRing) progressRing.classList.add('is-on');
    const duration = 3000;
    const start = performance.now();
    cancelAnimationFrame(confirmTimer);
    (function frame(t) {
      const elapsed = Math.min(t - start, duration);
      const p = Math.round((elapsed / duration) * 100);
      if (progressRing) progressRing.style.setProperty('--p', p);
      if (elapsed < duration) confirmTimer = requestAnimationFrame(frame);
      else { if (progressRing) progressRing.classList.remove('is-on'); closeModal(confirmModal); }
    })(start);
  }
  if (confirmClose) confirmClose.addEventListener('click', () => closeModal(confirmModal));

  // Image lightbox: open on web-shot click
  document.addEventListener('click', (e) => {
    const shot = e.target.closest('.web-shot');
    if (!shot) return;
    const img = shot.querySelector('img');
    if (!img) return;
    if (imageModalImg) imageModalImg.src = img.src;
    openModal(imageModal);
  });

  // Scroll-to-top (mobile): show early on scroll, smooth to top on click
  if (scrollTopBtn) {
    let ticking = false;
    function onScroll() {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const y = window.scrollY || document.documentElement.scrollTop;
          if (y > 10) scrollTopBtn.classList.add('is-visible');
          else scrollTopBtn.classList.remove('is-visible');
          ticking = false;
        });
        ticking = true;
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    // Init state
    onScroll();
    scrollTopBtn.addEventListener('click', () => {
      if (window.gsap && window.ScrollToPlugin) {
        window.gsap.registerPlugin(window.ScrollToPlugin);
        window.gsap.to(window, { duration: 0.6, scrollTo: { y: 0 }, ease: 'power2.out' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    });
  }

  // Smooth scroll handled below via GSAP/native; removed third-party smooth-scroll/gumshoe for performance

  // Force smooth scroll for anchor clicks (robust fallback using GSAP or native)
  document.addEventListener('click', (e) => {
    const link = e.target.closest('a[href^="#"]');
    if (!link) return;
    // If this link is intended to open the CTA modal, do not scroll
    const openAttr = link.getAttribute('data-open') || link.dataset.open;
    if (openAttr === 'cta-modal') {
      e.preventDefault();
      if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
      openModal(ctaModal);
      return;
    }
    const href = link.getAttribute('href') || '';
    if (href === '#' || href.length <= 1) return;
    const target = qs(href);
    if (!target) return;
    e.preventDefault();
    // Prevent other handlers from triggering default jumps
    if (typeof e.stopImmediatePropagation === 'function') e.stopImmediatePropagation();
    const headerEl = qs('header');
    const offsetY = headerEl ? headerEl.offsetHeight : 0;
    if (window.gsap && window.ScrollToPlugin) {
      window.gsap.registerPlugin(window.ScrollToPlugin);
      window.gsap.to(window, { duration: 1.0, scrollTo: { y: target, offsetY }, ease: 'power3.out' });
    } else {
      const top = target.getBoundingClientRect().top + window.pageYOffset - offsetY;
      try {
        window.scrollTo({ top, behavior: 'smooth' });
      } catch (_) {
        // last resort manual tween
        const startY = window.pageYOffset;
        const dist = top - startY;
        const dur = 700;
        const startT = performance.now();
        function step(now) {
          const t = Math.min(1, (now - startT) / dur);
          const ease = t < 0.5 ? 2*t*t : -1 + (4 - 2*t) * t;
          window.scrollTo(0, startY + dist * ease);
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      }
    }
  }, true);

  // GSAP: simple hero intro animations
  try {
    if (window.gsap) {
      const { gsap } = window;
      if (window.ScrollTrigger) gsap.registerPlugin(window.ScrollTrigger);
      const hero = qs('.hero .container');
      if (hero) {
        const h1 = qs('.hero h1');
        const p = qs('.hero p');
        const btn = qs('.hero .cta-button');
        // Start states
        h1 && gsap.set(h1, { autoAlpha: 0, y: -36 });
        p && gsap.set(p, { autoAlpha: 0, y: -36 });
        btn && gsap.set(btn, { autoAlpha: 0, y: 18 });
        // Timeline on load (no scroll trigger so it runs immediately once)
        const tl = gsap.timeline();
        if (h1) tl.to(h1, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power2.out' }, 0);
        if (p) tl.to(p, { autoAlpha: 1, y: 0, duration: 1.4, ease: 'power2.out' }, 0.4);
        if (btn) tl.to(btn, { autoAlpha: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 0.6 + 0.2);
      }

      // CTA section: same sequence as hero, triggered on scroll
      const cta = qs('.cta-section .container');
      if (cta) {
        const h2 = qs('.cta-section h2');
        const rotator = qs('.cta-section .cta-rotator');
        const rotatorWord = rotator ? qs('.rotator-word', rotator) : null;
        const rotatorQm = rotator ? qs('.rotator-qm', rotator) : null;
        const p2 = qs('.cta-section p');
        const btn2 = qs('.cta-section .cta-button');
        h2 && gsap.set(h2, { autoAlpha: 0, y: -24 });
        p2 && gsap.set(p2, { autoAlpha: 0, y: -24 });
        btn2 && gsap.set(btn2, { autoAlpha: 0, y: 18 });
        const tlCta = gsap.timeline({
          scrollTrigger: {
            trigger: cta,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
        if (h2) tlCta.to(h2, { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }, 0);
        if (p2) tlCta.to(p2, { autoAlpha: 1, y: 0, duration: 1, ease: 'power2.out' }, 0.4);
        if (btn2) tlCta.to(btn2, { autoAlpha: 1, y: 0, duration: 0.6, ease: 'power2.out' }, 0.6 + 0.2);

        // After reveal, start infinite typewriter rotation per character
        if (rotator && rotatorWord) {
          tlCta.add(() => {
            let typeTimer;
            const TYPE_BASE = 100;  // base typing speed per character (ms)
            const ERASE_BASE = 85;  // base deleting speed per character (ms)
            const HOLD_MS = 600;    // hold full word (ms)
            const INITIAL_HOLD_MS = 300; // shorter hold before first erase
            const startRotator = () => {
              clearTimeout(typeTimer);
              const dict = I18N[currentLang] || I18N['ru'];
              const words = [
                dict['cta.key.life'] || 'life',
                dict['cta.key.business'] || 'business',
                dict['cta.key.future'] || 'future'
              ];
              let wordIndex = 0;
              let charIndex = words[0].length;
              let phase = 'hold'; // hold -> erase -> type -> hold -> ...
              rotatorWord.textContent = words[0];
              if (rotatorQm) rotatorQm.textContent = '?';

              function nextTick(fn, delay) { typeTimer = setTimeout(fn, delay); }
              // Smooth ease for per-character pacing
              function easedDelay(base, progress01) {
                const p = Math.min(Math.max(progress01, 0), 1);
                const easeInOut = 0.5 - 0.5 * Math.cos(Math.PI * p);
                return base * (0.85 + 0.85 * easeInOut);
              }

              function step() {
                const current = words[wordIndex];
                if (phase === 'hold') {
                  return nextTick(() => { phase = 'erase'; step(); }, HOLD_MS);
                }
                if (phase === 'erase') {
                  // Erase question mark first like a character
                  if (rotatorQm && rotatorQm.textContent === '?') {
                    rotatorQm.textContent = '';
                    return nextTick(step, easedDelay(ERASE_BASE, 1));
                  }
                  charIndex = Math.max(0, charIndex - 1);
                  rotatorWord.textContent = current.slice(0, charIndex);
                  if (charIndex > 0) {
                    const p = current.length > 0 ? charIndex / current.length : 0;
                    return nextTick(step, easedDelay(ERASE_BASE, p));
                  }
                  // move to next word
                  wordIndex = (wordIndex + 1) % words.length;
                  charIndex = 0;
                  phase = 'type';
                  return nextTick(step, easedDelay(TYPE_BASE, 0));
                }
                if (phase === 'type') {
                  const target = words[wordIndex];
                  charIndex = Math.min(target.length, charIndex + 1);
                  rotatorWord.textContent = target.slice(0, charIndex);
                  if (charIndex < target.length) {
                    const p = target.length > 0 ? charIndex / target.length : 1;
                    return nextTick(step, easedDelay(TYPE_BASE, p));
                  }
                  // After finishing letters, "type" the question mark as the last step
                  if (rotatorQm && rotatorQm.textContent !== '?') {
                    rotatorQm.textContent = '?';
                    return nextTick(() => { phase = 'hold'; step(); }, easedDelay(TYPE_BASE, 1));
                  }
                  phase = 'hold';
                  return nextTick(step, HOLD_MS);
                }
              }

              // Start with a shorter initial hold before the first erase
              nextTick(step, INITIAL_HOLD_MS);
              window.__stopCtaRotator = () => clearTimeout(typeTimer);
            };
            startRotator();
            window.__restartCtaRotator = () => { if (window.__stopCtaRotator) window.__stopCtaRotator(); startRotator(); };
          }, "+=0.2");
        }
      }

      // Ecosystem cards: cascade reveal from top (DOM order) on scroll
      const ecoCardsArr = gsap.utils.toArray('.ecosystem .service-card');
      if (ecoCardsArr && ecoCardsArr.length) {
        // Use matchMedia so behavior updates on orientation/resize
        gsap.matchMedia().add({
          isMobile: '(max-width: 768px)',
          isDesktop: '(min-width: 769px)'
        }, (ctx) => {
          const { isMobile } = ctx.conditions;
          if (isMobile) {
            ecoCardsArr.forEach((card) => {
              gsap.set(card, { autoAlpha: 0, y: -16 });
              gsap.to(card, {
                autoAlpha: 1,
                y: 0,
                duration: 0.8,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              });
            });
          } else {
            gsap.set(ecoCardsArr, { autoAlpha: 0, y: -20 });
            gsap.to(ecoCardsArr, {
              autoAlpha: 1,
              y: 0,
              duration: 0.8,
              ease: 'power2.out',
              stagger: 0.12,
              scrollTrigger: {
                trigger: qs('.ecosystem .services-grid') || qs('.ecosystem'),
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
            });
          }
        });
      }

      // Courses cards: faster cascade slide-in from left to right (15vw)
      const courseCards = gsap.utils.toArray('.courses .course-card');
      if (courseCards && courseCards.length) {
        courseCards.forEach((card) => {
          gsap.set(card, { autoAlpha: 0, x: '-15vw' });
          gsap.to(card, {
            autoAlpha: 1,
            x: 0,
            duration: 0.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          });
        });
      }

      // Web dev gallery reveal
      const webShots = gsap.utils.toArray('.web-dev .web-shot');
      if (webShots && webShots.length) {
        gsap.set(webShots, { autoAlpha: 0, y: 16 });
        gsap.to(webShots, {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          ease: 'power2.out',
          stagger: 0.12,
          scrollTrigger: {
            trigger: qs('.web-dev .web-gallery') || qs('.web-dev'),
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      }
    }
  } catch (_) {}

  // Language switcher behavior
  if (langBtn) langBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = langSwitch && langSwitch.classList ? langSwitch.classList.toggle('open') : false;
    if (langBtn) {
      langBtn.setAttribute('aria-expanded', String(open));
      langBtn.classList.toggle('is-active', open);
    }
    if (langList) {
      if (open) {
        const targetHeight = Math.min(260, Math.max(180, langList.scrollHeight + 40));
        langList.style.height = '0px';
        langList.style.opacity = '0';
        langList.offsetHeight; // reflow
        langList.style.height = targetHeight + 'px';
        langList.style.opacity = '1';
      } else {
        langList.style.height = '0px';
        langList.style.opacity = '0';
      }
    }
  });
  if (langList) langList.addEventListener('click', (e) => {
    e.stopPropagation();
    const li = e.target.closest('li');
    if (!li) return;
    const sel = (li.dataset.lang || 'ru').toLowerCase();
    if (langBtn) langBtn.textContent = sel.toUpperCase();
    applyI18n(sel);
    if (langSwitch && langSwitch.classList) langSwitch.classList.remove('open');
    if (langBtn) {
      langBtn.setAttribute('aria-expanded', 'false');
      langBtn.classList.remove('is-active');
    }
    if (langList) {
      langList.style.height = '0px';
      langList.style.opacity = '0';
    }
  });
  document.addEventListener('click', (e) => {
    if (!langSwitch || langSwitch.contains(e.target)) return;
    if (langSwitch && langSwitch.classList) langSwitch.classList.remove('open');
    if (langBtn) {
      langBtn.setAttribute('aria-expanded', 'false');
      langBtn.classList.remove('is-active');
    }
    if (langList) {
      langList.style.height = '0px';
      langList.style.opacity = '0';
    }
  });

  // Initial language
  applyI18n(((langBtn && langBtn.textContent) ? langBtn.textContent : 'ru').trim().toLowerCase());
})();


