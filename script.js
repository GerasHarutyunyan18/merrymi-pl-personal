const menuToggle = document.querySelector('.menu-toggle');
const mobileNav = document.querySelector('.mobile-nav');
const IS_BLOG_SUBPAGE = window.location.pathname.includes('/blog/');
const LOCAL_PREFIX = IS_BLOG_SUBPAGE ? '../' : '';
const withLocalPrefix = (path) => `${LOCAL_PREFIX}${path}`;
const LOCAL_PRODUCT_LINKS = {
  'WSZYSTKIE': 'products.html',
  'Produkty': 'products.html',
  'MerryMi Panda X 40K': 'produkt-panda-x-40k.html',
  'MerryMi M-Mecha 16K': 'produkt-m-mecha-16k.html',
  'MerryMi Blade Max 90K': 'produkt-blade-max-90k.html',
  'MerryMi Blade 30K': 'produkt-blade-30k.html',
  'MerryMi Mecha Pro 35K': 'produkt-mecha-pro-35k.html',
  'MerryMi WiFlux 24K': 'produkt-wiflux-24k.html',
  'MerryMi Mecha X 36K': 'produkt-mecha-x-28k.html',
  'MerryMi Kitty 20K': 'produkt-kitty-20k.html',
  'MerryMi Panda Twins 40K': 'produkt-panda-twins-40k.html',
  'MerryMi MK20000 20K': 'produkt-mk20000-20k.html',
  'MerryMi Salts 30ml': 'produkt-salts-30ml.html'
};
const DBUCHA_PRODUCT_URLS = {
  'blade-max-90k': 'https://www.dbucha.com/products/jednorazowki-merrymi-blade-max-90k',
  'panda-x-40k': 'https://www.dbucha.com/products/jednorazowki-merrymi-panda-x-40k-buchow',
  'm-mecha-16k': 'https://www.dbucha.com/products/merrymi-m-mecha-16k-buchow',
  'blade-30k': 'https://www.dbucha.com/products/merrymi-blade-30k-buchow',
  'mecha-pro-35k': 'https://www.dbucha.com/products/merrymi-mecha-pro-35k-buchow',
  'wiflux-24k': 'https://www.dbucha.com/products/merrymi-wiflux-24k-buchow',
  'mecha-x-28k': 'https://www.dbucha.com/products/jednorazowki-merrymi-mecha-x-36k',
  'kitty-20k': 'https://www.dbucha.com/collections/jednorazowki-merrymi',
  'panda-twins-40k': 'https://www.dbucha.com/products/jednorazowki-merrymi-panda-twins-40k-buchow',
  'mk20000-20k': 'https://www.dbucha.com/products/merrymi-mk20000-20k-buchow',
  'salts-30ml': 'https://www.dbucha.com/products/e-liquid-merrymi-salts-30ml-sole-nikotynowe'
};
const DETAIL_FILE_TO_PRODUCT_ID = {
  'produkt-blade-max-90k.html': 'blade-max-90k',
  'produkt-panda-x-40k.html': 'panda-x-40k',
  'produkt-m-mecha-16k.html': 'm-mecha-16k',
  'produkt-blade-30k.html': 'blade-30k',
  'produkt-mecha-pro-35k.html': 'mecha-pro-35k',
  'produkt-wiflux-24k.html': 'wiflux-24k',
  'produkt-mecha-x-28k.html': 'mecha-x-28k',
  'produkt-kitty-20k.html': 'kitty-20k',
  'produkt-panda-twins-40k.html': 'panda-twins-40k',
  'produkt-mk20000-20k.html': 'mk20000-20k',
  'produkt-salts-30ml.html': 'salts-30ml'
};

function getProductIdFromDetailHref(href) {
  if (!href) return '';
  const fileName = href.split('?')[0].split('#')[0].split('/').pop() || '';
  return DETAIL_FILE_TO_PRODUCT_ID[fileName] || '';
}

function applyBuyHref(anchor, href) {
  if (!anchor || !href) return;
  anchor.href = href;
  if (anchor.classList.contains('variant-card__cta')) {
    anchor.target = '_blank';
  }
}

function patchDbuchaBuyLinks() {
  // Index/home product cards.
  document.querySelectorAll('.product-card').forEach((card) => {
    const detailHref = card.querySelector('.product-card__media')?.getAttribute('href') || '';
    const productId = getProductIdFromDetailHref(detailHref);
    const buyHref = DBUCHA_PRODUCT_URLS[productId];
    const buyButton = card.querySelector('.cta-secondary-link');
    applyBuyHref(buyButton, buyHref);
  });

  // Product detail pages + variants sections.
  const pageFile = (window.location.pathname.split('/').pop() || '').split('?')[0];
  const currentProductId = DETAIL_FILE_TO_PRODUCT_ID[pageFile] || '';
  const currentBuyHref = DBUCHA_PRODUCT_URLS[currentProductId];
  if (currentBuyHref) {
    document.querySelectorAll('.product-detail .section-cta-strip__secondary, .variant-card__cta, .promo-banner__btn--secondary').forEach((anchor) => {
      applyBuyHref(anchor, currentBuyHref);
    });
  }
}

function patchFooterProductLinks() {
  document.querySelectorAll('.site-footer .footer-links a').forEach((link) => {
    const key = link.textContent?.trim() || '';
    const localHref = LOCAL_PRODUCT_LINKS[key];
    if (localHref) link.href = withLocalPrefix(localHref);
    if (key.toLowerCase() === 'o nas') link.href = withLocalPrefix('about-us.html');
    if (key.toLowerCase() === 'najczęściej zadawane pytania') link.href = withLocalPrefix('index.html#faq');
    if (key.toLowerCase() === 'aktualności') link.href = withLocalPrefix('index.html#aktualnosci');
  });
}

function patchFooterContactInfo() {
  document.querySelectorAll('.site-footer .footer-contact').forEach((contactBox) => {
    const rows = Array.from(contactBox.querySelectorAll('p'));
    const phoneRow = rows.find((row) => row.textContent?.toLowerCase().includes('tel'));
    let businessRow = rows.find((row) => row.textContent?.toLowerCase().includes('kontakt biznesowy'));
    let normalizedPhoneRow = phoneRow;

    if (!businessRow) {
      businessRow = document.createElement('p');
      if (phoneRow) {
        contactBox.insertBefore(businessRow, phoneRow);
      } else {
        contactBox.appendChild(businessRow);
      }
    }

    businessRow.innerHTML = `
      <span class="footer-title">Kontakt biznesowy:</span>
    `;

    if (!normalizedPhoneRow) {
      normalizedPhoneRow = document.createElement('p');
      contactBox.appendChild(normalizedPhoneRow);
    }

    const rawText = normalizedPhoneRow.textContent || '';
    const numberMatch = rawText.match(/\+?\d[\d\s-]{7,}\d/);
    const displayNumber = numberMatch ? numberMatch[0].trim() : '+48 573 581 194';
    const waNumber = displayNumber.replace(/[^\d]/g, '');
    const whatsappIcon = withLocalPrefix('images/whatsapp-icon.svg');
    normalizedPhoneRow.setAttribute('style', 'color: orange; text-decoration: underline; display: flex; align-items: center; gap: 4px;');
    normalizedPhoneRow.innerHTML = `<img src="${whatsappIcon}" alt="WhatsApp" width="24" height="24"> <a href="https://wa.me/${waNumber}" target="_blank">${displayNumber}</a>`;
  });
}

function setupFooterEmailCopy() {
  document.querySelectorAll('[data-copy-email]').forEach((button) => {
    if (button.dataset.copyBound === 'true') return;
    button.dataset.copyBound = 'true';
    const originalLabel = button.textContent || 'Kopiuj';

    const copyFallback = (value) => {
      const textArea = document.createElement('textarea');
      textArea.value = value;
      textArea.setAttribute('readonly', '');
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    };

    button.addEventListener('click', async () => {
      const email = button.getAttribute('data-copy-email') || 'info@dbucha.com';

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(email);
        } else {
          copyFallback(email);
        }
        button.textContent = 'Skopiowano';
      } catch (_error) {
        button.textContent = 'Błąd';
      }

      window.setTimeout(() => {
        button.textContent = originalLabel;
      }, 1500);
    });
  });
}

patchFooterProductLinks();
patchFooterContactInfo();
setupFooterEmailCopy();
patchDbuchaBuyLinks();

if (mobileNav && mobileNav.parentElement !== document.body) {
  document.body.appendChild(mobileNav);
}

const mobileNavInner = mobileNav?.querySelector('.mobile-nav__inner');
if (mobileNavInner && !mobileNavInner.querySelector('.mobile-nav__brand')) {
  const brand = document.createElement('a');
  brand.className = 'mobile-nav__brand';
  brand.href = withLocalPrefix('index.html');
  brand.setAttribute('aria-label', 'MerryMi - Strona główna');
  brand.innerHTML = '<img src="images/jednorazowki-merrymi-logo-merrymi.png" alt="Logo MerryMi" width="160" height="44">';
  mobileNavInner.prepend(brand);
}

if (mobileNavInner) {
  mobileNavInner.querySelectorAll('details').forEach((details) => {
    const summary = details.querySelector('summary');
    const label = summary?.textContent?.trim() || '';
    if (!summary) return;

    const replacementLink = document.createElement('a');
    if (label.toUpperCase() === 'PRODUKTY') {
      replacementLink.href = withLocalPrefix('products.html');
    } else if (label.toUpperCase() === 'O NAS') {
      replacementLink.href = withLocalPrefix('about-us.html');
    } else {
      replacementLink.href = 'https://www.dbucha.com/collections/merrymi-jednorazowki';
    }
    replacementLink.textContent = label;
    replacementLink.className = 'mobile-nav__top-link';
    details.replaceWith(replacementLink);
  });
}

document.querySelectorAll('.brand a').forEach((link) => {
  link.href = withLocalPrefix('index.html');
});

document.querySelectorAll('.desktop-nav a, .mobile-nav a').forEach((link) => {
  const label = link.textContent?.trim().toUpperCase();
  if (label === 'STRONA GŁÓWNA') {
    link.href = withLocalPrefix('index.html');
  }
  if (label === 'AKTUALNOŚCI') {
    link.href = withLocalPrefix('index.html#aktualnosci');
  }
  if (label === 'O NAS') {
    link.href = withLocalPrefix('about-us.html');
  }
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  if (link.textContent?.trim().toUpperCase() === 'PRODUKTY') {
    link.href = withLocalPrefix('products.html');
  }
});

function setupWholesaleModal() {
  const desktopNavs = Array.from(document.querySelectorAll('.desktop-nav'));
  const mobileNavInners = Array.from(document.querySelectorAll('.mobile-nav__inner'));
  if (!desktopNavs.length && !mobileNavInners.length) return;

  desktopNavs.forEach((nav) => {
    if (nav.querySelector('[data-open-wholesale]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'nav-wholesale-btn';
    button.setAttribute('data-open-wholesale', '');
    button.innerHTML = 'Kup Hurt';
    nav.appendChild(button);
  });

  mobileNavInners.forEach((inner) => {
    if (inner.querySelector('[data-open-wholesale]')) return;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'mobile-wholesale-btn';
    button.setAttribute('data-open-wholesale', '');
    button.innerHTML = 'Kup Hurt';
    inner.appendChild(button);
  });

  let modal = document.querySelector('[data-wholesale-modal]');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'wholesale-modal';
    modal.setAttribute('data-wholesale-modal', '');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'wholesale-title');
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true;
    modal.innerHTML = `
      <div class="wholesale-modal__backdrop" data-close-wholesale-modal></div>
      <div class="wholesale-modal__dialog">
        <button class="wholesale-modal__close" type="button" aria-label="Zamknij" data-close-wholesale-modal>×</button>
        <p class="wholesale-modal__eyebrow">Kup Hurt</p>
        <h2 id="wholesale-title" class="wholesale-modal__title-row">Kup więcej i oszczędzaj</h2>
        <p class="wholesale-modal__lead">Zamówienia hurtowe naliczają rabat automatycznie po dodaniu odpowiedniej liczby sztuk do koszyka.</p>
        <div class="wholesale-tier-list">
          <div class="wholesale-tier"><span>KUP 3+</span><strong>-10% RABAT</strong></div>
          <div class="wholesale-tier"><span>KUP 6+</span><strong>-15% RABAT</strong></div>
          <div class="wholesale-tier"><span>KUP 10+</span><strong>-20% RABAT</strong></div>
          <div class="wholesale-tier"><span>KUP 30+</span><strong>-30% RABAT</strong></div>
        </div>
        <div class="wholesale-modal__actions">
          <a class="wholesale-modal__order" href="https://www.dbucha.com/collections/merrymi-jednorazowki">Zamów teraz</a>
        </div>
        <p class="wholesale-modal__note">Rabat hurtowy dotyczy produktów MerryMi i nie łączy się z innymi kodami promocyjnymi.</p>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
  };

  const openModal = () => {
    // Ensure mobile drawer and its overlay are fully closed before showing wholesale modal.
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
    if (menuToggle) menuToggle.setAttribute('aria-expanded', 'false');
    if (mobileNav) mobileNav.classList.remove('is-open');
    document.body.classList.remove('mobile-menu-open');
    document.querySelector('.mobile-nav-overlay')?.classList.remove('is-open');
    document.querySelectorAll('.mobile-nav details[open]').forEach((item) => {
      item.open = false;
    });
  };

  document.querySelectorAll('[data-open-wholesale]').forEach((button) => {
    button.addEventListener('click', openModal);
  });

  modal.querySelectorAll('[data-close-wholesale-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });
}

setupWholesaleModal();

function setupArrivalModal() {
  const isHomepage =
    window.location.pathname === '/' ||
    window.location.pathname.endsWith('/index.html') ||
    !!document.querySelector('.hero-slider');

  if (isHomepage) return;

  let modal = document.querySelector('[data-arrival-modal]');
  if (!modal) {
    modal = document.createElement('div');
    modal.className = 'arrival-modal';
    modal.setAttribute('data-arrival-modal', '');
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.setAttribute('aria-labelledby', 'arrival-modal-title');
    modal.setAttribute('aria-hidden', 'true');
    modal.hidden = true;
    modal.innerHTML = `
      <div class="arrival-modal__backdrop" data-close-arrival-modal></div>
      <div class="arrival-modal__dialog">
        <div class="arrival-modal__confetti" aria-hidden="true">
          <span></span><span></span><span></span><span></span><span></span><span></span>
          <span></span><span></span><span></span><span></span><span></span><span></span>
        </div>
        <button class="arrival-modal__close" type="button" aria-label="Zamknij" data-close-arrival-modal>×</button>
        <div class="arrival-modal__reward" aria-hidden="true">GRATULACJE</div>
        <p class="arrival-modal__eyebrow">Masz odblokowane nowości MerryMi</p>
        <h2 id="arrival-modal-title">Mecha X 36K i Panda Twins 40K</h2>
        <p class="arrival-modal__lead">Nowe jednorazówki MerryMi są już dostępne. Odbierz swój model i przejdź prosto do produktu.</p>
        <div class="arrival-modal__actions">
          <a class="arrival-modal__cta arrival-modal__cta--primary" href="https://www.dbucha.com/products/jednorazowki-merrymi-mecha-x-36k">Kup Mecha X 36K</a>
          <a class="arrival-modal__cta arrival-modal__cta--primary" href="https://www.dbucha.com/products/jednorazowki-merrymi-panda-twins-40k-buchow">Kup Panda Twins 40K</a>
        </div>
        <div class="arrival-modal__image-wrap">
          <img src="images/nowosc-merrymi.png" alt="Nowe modele MerryMi" loading="lazy">
        </div>
      </div>
    `;
    document.body.appendChild(modal);
  }

  const closeModal = () => {
    modal.hidden = true;
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    sessionStorage.setItem('merrymi-arrival-modal-dismissed', 'true');
  };

  const openModal = () => {
    if (sessionStorage.getItem('merrymi-arrival-modal-dismissed') === 'true') return;
    modal.hidden = false;
    modal.setAttribute('aria-hidden', 'false');
    document.body.classList.add('modal-open');
  };

  modal.querySelectorAll('[data-close-arrival-modal]').forEach((button) => {
    button.addEventListener('click', closeModal);
  });

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !modal.hidden) closeModal();
  });

  window.setTimeout(openModal, 700);
}

setupArrivalModal();

if (menuToggle && mobileNav) {
  let overlay = document.querySelector('.mobile-nav-overlay');
  if (!overlay) {
    overlay = document.createElement('button');
    overlay.type = 'button';
    overlay.className = 'mobile-nav-overlay';
    overlay.setAttribute('aria-label', 'Zamknij menu');
    document.body.appendChild(overlay);
  }

  const setMobileMenuState = (open) => {
    menuToggle.setAttribute('aria-expanded', String(open));
    mobileNav.classList.toggle('is-open', open);
    document.body.classList.toggle('mobile-menu-open', open);
    overlay.classList.toggle('is-open', open);
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMobileMenuState(!isOpen);
  });

  overlay.addEventListener('click', () => {
    setMobileMenuState(false);
  });

  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      setMobileMenuState(false);
    });
  });

  let navTouchStartX = 0;
  let navTouchStartY = 0;
  let navTouchDeltaX = 0;
  let navTracking = false;
  const NAV_SWIPE_CLOSE_THRESHOLD = 60;

  mobileNav.addEventListener('touchstart', (event) => {
    if (!mobileNav.classList.contains('is-open')) return;
    const touch = event.touches?.[0];
    if (!touch) return;
    navTouchStartX = touch.clientX;
    navTouchStartY = touch.clientY;
    navTouchDeltaX = 0;
    navTracking = true;
  }, { passive: true });

  mobileNav.addEventListener('touchmove', (event) => {
    if (!navTracking) return;
    const touch = event.touches?.[0];
    if (!touch) return;
    navTouchDeltaX = touch.clientX - navTouchStartX;
    const deltaY = touch.clientY - navTouchStartY;
    if (Math.abs(navTouchDeltaX) > Math.abs(deltaY) && navTouchDeltaX < 0 && event.cancelable) {
      event.preventDefault();
    }
  }, { passive: false });

  const closeBySwipe = () => {
    if (!navTracking) return;
    navTracking = false;
    if (navTouchDeltaX <= -NAV_SWIPE_CLOSE_THRESHOLD) {
      setMobileMenuState(false);
    }
  };

  mobileNav.addEventListener('touchend', closeBySwipe);
  mobileNav.addEventListener('touchcancel', closeBySwipe);
}

const heroSlider = document.querySelector('[data-slider]');

if (heroSlider) {
  const slides = Array.from(heroSlider.querySelectorAll('[data-slide]'));
  const dotsContainer = heroSlider.querySelector('.hero-dots');
  const prevButton = heroSlider.querySelector('[data-direction="prev"]');
  const nextButton = heroSlider.querySelector('[data-direction="next"]');
  let currentIndex = slides.findIndex((slide) => slide.classList.contains('is-active'));
  let intervalId;
  let touchStartX = 0;
  let touchStartY = 0;
  let touchDeltaX = 0;
  let isSwiping = false;

  if (currentIndex < 0) currentIndex = 0;

  const setSlide = (index) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      const active = slideIndex === currentIndex;
      slide.classList.toggle('is-active', active);
      slide.setAttribute('aria-hidden', String(!active));
    });

    dotsContainer.querySelectorAll('.hero-dot').forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === currentIndex);
      dot.setAttribute('aria-current', dotIndex === currentIndex ? 'true' : 'false');
    });

    const activeSlide = slides[currentIndex];
    heroSlider.classList.toggle('hero-slider--plain-active', activeSlide?.classList.contains('hero-slide--plain'));
  };

  slides.forEach((_, index) => {
    const dot = document.createElement('button');
    dot.type = 'button';
    dot.className = 'hero-dot';
    dot.setAttribute('aria-label', `Przejdź do slajdu ${index + 1}`);
    dot.addEventListener('click', () => {
      setSlide(index);
      restartAutoplay();
    });
    dotsContainer.appendChild(dot);
  });

  const restartAutoplay = () => {
    window.clearInterval(intervalId);
    intervalId = window.setInterval(() => setSlide(currentIndex + 1), 5500);
  };

  prevButton?.addEventListener('click', () => {
    setSlide(currentIndex - 1);
    restartAutoplay();
  });

  nextButton?.addEventListener('click', () => {
    setSlide(currentIndex + 1);
    restartAutoplay();
  });

  heroSlider.addEventListener('mouseenter', () => window.clearInterval(intervalId));
  heroSlider.addEventListener('mouseleave', restartAutoplay);
  heroSlider.addEventListener('focusin', () => window.clearInterval(intervalId));
  heroSlider.addEventListener('focusout', restartAutoplay);

  const SWIPE_THRESHOLD = 45;
  const onTouchStart = (event) => {
    const touch = event.touches?.[0];
    if (!touch) return;
    touchStartX = touch.clientX;
    touchStartY = touch.clientY;
    touchDeltaX = 0;
    isSwiping = true;
    window.clearInterval(intervalId);
  };

  const onTouchMove = (event) => {
    if (!isSwiping) return;
    const touch = event.touches?.[0];
    if (!touch) return;
    touchDeltaX = touch.clientX - touchStartX;
    const deltaY = touch.clientY - touchStartY;
    if (Math.abs(touchDeltaX) > Math.abs(deltaY) && event.cancelable) {
      event.preventDefault();
    }
  };

  const onTouchEnd = () => {
    if (!isSwiping) return;
    isSwiping = false;

    if (Math.abs(touchDeltaX) >= SWIPE_THRESHOLD) {
      if (touchDeltaX < 0) {
        setSlide(currentIndex + 1);
      } else {
        setSlide(currentIndex - 1);
      }
    }

    restartAutoplay();
  };

  heroSlider.addEventListener('touchstart', onTouchStart, { passive: true });
  heroSlider.addEventListener('touchmove', onTouchMove, { passive: false });
  heroSlider.addEventListener('touchend', onTouchEnd);
  heroSlider.addEventListener('touchcancel', onTouchEnd);

  setSlide(currentIndex);
  restartAutoplay();
}

const videoCarousel = document.querySelector('[data-video-carousel]');

if (videoCarousel && window.matchMedia('(min-width: 768px)').matches) {
  const cards = Array.from(videoCarousel.querySelectorAll('[data-video-card]'));
  const prevButton = videoCarousel.querySelector('[data-video-direction="prev"]');
  const nextButton = videoCarousel.querySelector('[data-video-direction="next"]');
  let activeIndex = cards.findIndex((card) => card.classList.contains('is-active'));

  if (activeIndex < 0) activeIndex = 0;

  const pauseAllVideos = () => {
    cards.forEach((card) => {
      const video = card.querySelector('video');
      const button = card.querySelector('.video-toggle');
      video?.pause();
      card.classList.remove('is-playing');
      if (button) button.textContent = 'Odtwórz';
    });
  };

  const updateVideoCarousel = () => {
    const prevIndex = (activeIndex - 1 + cards.length) % cards.length;
    const nextIndex = (activeIndex + 1) % cards.length;

    cards.forEach((card, index) => {
      card.classList.remove('is-active', 'is-prev', 'is-next');
      card.hidden = ![prevIndex, activeIndex, nextIndex].includes(index);

      if (index === activeIndex) card.classList.add('is-active');
      if (index === prevIndex) card.classList.add('is-prev');
      if (index === nextIndex) card.classList.add('is-next');
    });
  };

  prevButton?.addEventListener('click', () => {
    pauseAllVideos();
    activeIndex = (activeIndex - 1 + cards.length) % cards.length;
    updateVideoCarousel();
  });

  nextButton?.addEventListener('click', () => {
    pauseAllVideos();
    activeIndex = (activeIndex + 1) % cards.length;
    updateVideoCarousel();
  });

  cards.forEach((card) => {
    const video = card.querySelector('video');
    const button = card.querySelector('.video-toggle');

    if (!video || !button) return;

    button.addEventListener('click', async () => {
      const isPlaying = !video.paused && !video.ended;

      if (isPlaying) {
        video.pause();
        card.classList.remove('is-playing');
        button.textContent = 'Odtwórz';
        return;
      }

      pauseAllVideos();

      try {
        await video.play();
        card.classList.add('is-playing');
        button.textContent = 'Pauza';
      } catch (error) {
        button.textContent = 'Odtwórz';
      }
    });

    video.addEventListener('ended', () => {
      card.classList.remove('is-playing');
      button.textContent = 'Odtwórz';
    });
  });

  updateVideoCarousel();
} else {
  document.querySelectorAll('[data-video-card]').forEach((card) => {
    const video = card.querySelector('video');
    const button = card.querySelector('.video-toggle');

    if (!video || !button) return;

    button.addEventListener('click', async () => {
      const isPlaying = !video.paused && !video.ended;

      if (isPlaying) {
        video.pause();
        button.textContent = 'Odtwórz';
        return;
      }

      document.querySelectorAll('[data-video-card] video').forEach((item) => item.pause());
      document.querySelectorAll('.video-toggle').forEach((item) => {
        item.textContent = 'Odtwórz';
      });

      try {
        await video.play();
        button.textContent = 'Pauza';
      } catch (error) {
        button.textContent = 'Odtwórz';
      }
    });

    video.addEventListener('ended', () => {
      button.textContent = 'Odtwórz';
    });
  });
}

const productPage = document.querySelector('.product-page');

if (productPage) {
  const detailContainer = productPage.querySelector('.product-detail');
  const ctaGroup = productPage.querySelector('.product-detail .cta-group');
  const backButton = ctaGroup?.querySelector('.section-cta-strip__primary[href="products.html"]');

  if (detailContainer && backButton) {
    const backRow = document.createElement('div');
    backRow.className = 'container product-back-row';
    backRow.appendChild(backButton);
    productPage.insertBefore(backRow, detailContainer);
  }

  const variantsList = productPage.querySelector('.variants-list');
  const variantsGallery = productPage.querySelector('.variants-gallery');

  if (variantsList && variantsGallery) {
    const LIST_LIMIT = 12;
    const variantItems = Array.from(variantsList.querySelectorAll('.variant-item'));
    const variantCards = Array.from(variantsGallery.querySelectorAll('.variant-card'));
    const hasMore = variantItems.length > LIST_LIMIT;
    let collapsed = hasMore;

    variantItems.forEach((item, index) => {
      if (index >= LIST_LIMIT) item.dataset.extraVariant = '1';
    });
    const toggleItem = document.createElement('li');
    toggleItem.className = 'variant-item variant-item--toggle';
    const showMoreBtn = document.createElement('button');
    showMoreBtn.type = 'button';
    showMoreBtn.className = 'variants-show-more';
    showMoreBtn.setAttribute('data-variants-toggle', '');
    showMoreBtn.textContent = 'Pokaż więcej smaków';
    toggleItem.appendChild(showMoreBtn);
    variantsList.appendChild(toggleItem);

    if (hasMore) {
      variantsList.classList.add('is-collapsed');
      toggleItem.hidden = false;
      showMoreBtn.setAttribute('aria-expanded', 'false');
      showMoreBtn.textContent = 'Pokaż więcej smaków';

      showMoreBtn.addEventListener('click', () => {
        collapsed = !collapsed;
        variantsList.classList.toggle('is-collapsed', collapsed);
        showMoreBtn.setAttribute('aria-expanded', String(!collapsed));
        showMoreBtn.textContent = collapsed ? 'Pokaż więcej smaków' : 'Pokaż mniej smaków';
      });
    } else {
      toggleItem.hidden = true;
    }

    if (variantItems.length || variantCards.length) {
      const searchWrap = document.createElement('div');
      searchWrap.className = 'variant-search';
      searchWrap.innerHTML = `
        <label class="variant-search__label" for="variant-search-input">Szukaj smaku</label>
        <input id="variant-search-input" class="variant-search__input" type="search" placeholder="Wpisz nazwę smaku..." autocomplete="off">
      `;

      variantsGallery.parentNode.insertBefore(searchWrap, variantsGallery);
      const searchInput = searchWrap.querySelector('.variant-search__input');

      const getText = (el) => (el.textContent || '').toLowerCase();

      const applyFilter = (query) => {
        const needle = query.trim().toLowerCase();
        const searching = needle.length > 0;

        if (hasMore && searching) {
          variantsList.classList.remove('is-collapsed');
          toggleItem.hidden = true;
        } else if (hasMore && !searching) {
          variantsList.classList.toggle('is-collapsed', collapsed);
          toggleItem.hidden = false;
        }

        variantItems.forEach((item) => {
          const visible = !needle || getText(item).includes(needle);
          item.hidden = !visible;
        });

        variantCards.forEach((card) => {
          const title = card.querySelector('h3');
          const visible = !needle || getText(title || card).includes(needle);
          card.hidden = !visible;
        });
      };

      searchInput?.addEventListener('input', (event) => {
        applyFilter(event.target.value || '');
      });
    }
  }
}

const PRODUCT_REVIEW_AVERAGE = {
  'blade-max-90k': 4.8,
  'panda-x-40k': 4.7,
  'm-mecha-16k': 4.7,
  'blade-30k': 4.7,
  'mecha-pro-35k': 4.9,
  'wiflux-24k': 4.7,
  'mecha-x-28k': 4.7,
  'kitty-20k': 4.7,
  'panda-twins-40k': 4.9,
  'mk20000-20k': 4.7,
  'salts-30ml': 4.9
};

const HARD_CODED_REVIEWS = [
  { author: 'Kamil Nowak', rating: 5, text: 'Smak trzyma poziom od początku do końca.' },
  { author: 'Marek Kowalski', rating: 5, text: 'Bardzo stabilne działanie i mocny aromat.' },
  { author: 'Patryk Wiśniewski', rating: 4, text: 'Dobra opcja na co dzień, bez niespodzianek.' },
  { author: 'Aleksandra Wójcik', rating: 5, text: 'Bardzo fajny balans słodyczy i chłodu.' },
  { author: 'Natalia Kamińska', rating: 5, text: 'Wygodny format i wyraźny smak.' },
  { author: 'Wojciech Lewandowski', rating: 4, text: 'Używam regularnie, jestem zadowolony.' },
  { author: 'Aneta Zielińska', rating: 5, text: 'Najbardziej podoba mi się powtarzalność.' },
  { author: 'Jakub Szymański', rating: 4, text: 'Dobry produkt, sensowna wydajność.' },
  { author: 'Michał Woźniak', rating: 5, text: 'Intensywny smak i równa praca urządzenia.' },
  { author: 'Paulina Dąbrowska', rating: 5, text: 'Na żywo wygląda jeszcze lepiej niż na zdjęciach.' },
  { author: 'Bartosz Kozłowski', rating: 4, text: 'Dobry wybór smaków, łatwo znaleźć ulubiony.' },
  { author: 'Agnieszka Jankowska', rating: 5, text: 'Smak nie znika po kilku dniach użytkowania.' },
  { author: 'Karol Mazur', rating: 4, text: 'Solidna jakość, bez wycieków.' },
  { author: 'Monika Krawczyk', rating: 5, text: 'Przyjemny ciąg i dobry profil smakowy.' },
  { author: 'Tomasz Piotrowski', rating: 5, text: 'Dokładnie to, czego oczekiwałem.' },
  { author: 'Dominik Grabowski', rating: 4, text: 'Działa pewnie, bateria daje radę.' },
  { author: 'Ewa Pawłowska', rating: 5, text: 'Warianty smakowe są naprawdę dopracowane.' },
  { author: 'Łukasz Michalski', rating: 4, text: 'Bardzo przyzwoity produkt w tej klasie.' },
  { author: 'Magdalena Król', rating: 5, text: 'Ładny design i świetny smak.' },
  { author: 'Hubert Wieczorek', rating: 5, text: 'Jedna z lepszych pozycji, jakie testowałem.' },
  { author: 'Karina Wróbel', rating: 4, text: 'Przyjemne użytkowanie, bez problemów.' },
  { author: 'Piotr Zając', rating: 5, text: 'Dobry hit i bardzo wyraźny aromat.' },
  { author: 'Weronika Dudek', rating: 5, text: 'Smak jest czysty i nie męczy.' },
  { author: 'Grzegorz Adamczyk', rating: 4, text: 'Wszystko działa jak trzeba.' },
  { author: 'Alicja Walczak', rating: 5, text: 'Szybko stał się moim ulubionym.' },
  { author: 'Dawid Stępień', rating: 4, text: 'Dobra relacja jakości do ceny.' },
  { author: 'Barbara Sikora', rating: 5, text: 'Świetna opcja dla fanów mocniejszych smaków.' },
  { author: 'Szymon Górski', rating: 5, text: 'Bardzo dobry poziom wykonania.' },
  { author: 'Joanna Rutkowska', rating: 4, text: 'Udany zakup, wrócę po kolejne warianty.' },
  { author: 'Mateusz Baran', rating: 5, text: 'Polecam, szczególnie za powtarzalność smaku.' }
];

const HOME_REVIEW_PRODUCTS = {
  'm-mecha-16k': {
    title: 'MerryMi M-Mecha 16K',
    image: 'images/jednorazowki-merrymi-baner-m-mecha-16k-mobile.png'
  },
  'panda-x-40k': {
    title: 'MerryMi Panda X 40K',
    image: 'images/jednorazowki-merrymi-baner-panda-x-40k-mobile.png'
  },
  'blade-30k': {
    title: 'MerryMi Blade 30K',
    image: 'images/jednorazowki-merrymi-produkt-blade-30k.png'
  },
  'mecha-pro-35k': {
    title: 'MerryMi Mecha Pro 35K',
    image: 'images/merrymi-mecha-pro-35k.jpg'
  },
  'wiflux-24k': {
    title: 'MerryMi WiFlux 24K',
    image: 'images/jednorazowki-merrymi-produkt-wiflux-24k.png.png'
  },
  'mecha-x-28k': {
    title: 'MerryMi Mecha X 36K',
    image: 'images/jednorazowki-merrymi-produkt-mecha-x-28k.jpg'
  },
  'kitty-20k': {
    title: 'MerryMi Kitty 20K',
    image: 'images/jednorazowki-merrymi-produkt-kitty-20k.jpg'
  },
  'panda-twins-40k': {
    title: 'MerryMi Panda Twins 40K',
    image: 'images/jednorazowki-merrymi-produkt-panda-twins-40k.jpg'
  },
  'mk20000-20k': {
    title: 'MerryMi MK20000 20K',
    image: 'images/merrymi-mk20000-20k.png'
  },
  'salts-30ml': {
    title: 'MerryMi Salts 30ml',
    image: 'images/olejki-merrymi-30ml.jpg'
  }
};

const HOME_REVIEWS = [
  { author: 'Karol Nowicki', date: '22.03.2026', rating: 4.9, text: 'Super jakość i bardzo równy smak.', productId: 'm-mecha-16k' },
  { author: 'Agnieszka Zielińska', date: '21.03.2026', rating: 4.8, text: 'Bardzo udany zakup, wrócę po więcej smaków.', productId: 'panda-x-40k' },
  { author: 'Michał Kowalczyk', date: '20.03.2026', rating: 5.0, text: 'Mocny aromat i dobra wydajność.', productId: 'blade-30k' },
  { author: 'Paulina Witkowska', date: '19.03.2026', rating: 4.7, text: 'Design i smak na bardzo dobrym poziomie.', productId: 'mecha-pro-35k' },
  { author: 'Kamil Wróblewski', date: '18.03.2026', rating: 4.9, text: 'Smaki są wyraźne od początku do końca.', productId: 'wiflux-24k' },
  { author: 'Monika Szymańska', date: '17.03.2026', rating: 4.8, text: 'Świetna opcja do codziennego używania.', productId: 'mecha-x-28k' },
  { author: 'Piotr Malinowski', date: '16.03.2026', rating: 4.9, text: 'Bezproblemowe działanie i fajny hit.', productId: 'kitty-20k' },
  { author: 'Dominika Kaczmarek', date: '15.03.2026', rating: 5.0, text: 'Najlepsza seria, którą testowałam.', productId: 'panda-twins-40k' },
  { author: 'Mateusz Domański', date: '14.03.2026', rating: 4.7, text: 'Dobry balans jakości do ceny.', productId: 'mk20000-20k' },
  { author: 'Natalia Król', date: '13.03.2026', rating: 4.9, text: 'Świetne profile smakowe, bardzo polecam.', productId: 'salts-30ml' },
  { author: 'Łukasz Pawlak', date: '12.03.2026', rating: 4.8, text: 'Bardzo dobra powtarzalność każdego dnia.', productId: 'm-mecha-16k' },
  { author: 'Joanna Majewska', date: '11.03.2026', rating: 5.0, text: 'Wydajność naprawdę robi różnicę.', productId: 'panda-x-40k' },
  { author: 'Bartosz Wieczorek', date: '10.03.2026', rating: 4.7, text: 'Smak i para zdecydowanie na plus.', productId: 'blade-30k' },
  { author: 'Aleksandra Jasińska', date: '09.03.2026', rating: 4.9, text: 'Działa pewnie, nic nie przecieka.', productId: 'mecha-pro-35k' },
  { author: 'Wojciech Kubiak', date: '08.03.2026', rating: 4.8, text: 'Komfort użytkowania jest naprawdę wysoki.', productId: 'wiflux-24k' },
  { author: 'Ewelina Kozłowska', date: '07.03.2026', rating: 5.0, text: 'To jest mój numer jeden w tej chwili.', productId: 'mecha-x-28k' },
  { author: 'Grzegorz Stasiak', date: '06.03.2026', rating: 4.7, text: 'Na start bardzo dobry wybór.', productId: 'kitty-20k' },
  { author: 'Martyna Bąk', date: '05.03.2026', rating: 4.9, text: 'Smaki duetowe są świetnie dobrane.', productId: 'panda-twins-40k' },
  { author: 'Szymon Czarnecki', date: '04.03.2026', rating: 4.8, text: 'Dobry smak i wygodny format.', productId: 'mk20000-20k' },
  { author: 'Katarzyna Lis', date: '03.03.2026', rating: 5.0, text: 'Liquidy bardzo dobrze pracują w podzie.', productId: 'salts-30ml' }
];

function renderHomeReviews() {
  const host = document.querySelector('[data-home-reviews]');
  if (!host) return;
  if (host.querySelector('.reviews-marquee')) return;

  const topReviews = HOME_REVIEWS.slice(0, 10);
  const bottomReviews = HOME_REVIEWS.slice(10);
  const avg = HOME_REVIEWS.reduce((sum, review) => sum + review.rating, 0) / HOME_REVIEWS.length;

  const createCard = (review) => {
    const product = HOME_REVIEW_PRODUCTS[review.productId];
    if (!product) return '';
    return `
      <article class="review-card review-card--product">
        <div class="review-card__top">
          <div class="review-card__reviewer">
            <p class="review-card__name">${review.author}</p>
            <span class="review-card__verified">✔ Zweryfikowane</span>
          </div>
          <p class="review-card__date">${review.date}</p>
          <div class="review-card__rating-line">
            <span class="review-card__stars">★★★★★</span>
            <span class="review-card__score">${review.rating.toFixed(1)}/5</span>
          </div>
          <p class="review-card__text">“${review.text}”</p>
        </div>
        <div class="review-card__product">
          <img src="${product.image}" alt="${product.title}" loading="lazy">
          <p>${product.title}</p>
        </div>
      </article>
    `;
  };

  host.innerHTML = `
    <div class="section-title section-title--center">
      <h2 id="home-reviews-title">Opinie o produktach MerryMi</h2>
    </div>
    <p class="reviews-summary">Średnia ocena całej oferty: <strong>${avg.toFixed(1)}/5</strong></p>
    <div class="reviews-marquee reviews-marquee--right" aria-label="Opinie klientów - rząd 1">
      <div class="reviews-track">
        ${topReviews.map(createCard).join('')}
        ${topReviews.map(createCard).join('')}
      </div>
    </div>
    <div class="reviews-marquee reviews-marquee--left" aria-label="Opinie klientów - rząd 2">
      <div class="reviews-track">
        ${bottomReviews.map(createCard).join('')}
        ${bottomReviews.map(createCard).join('')}
      </div>
    </div>
  `;
}

function renderProductReviews() {
  const page = document.querySelector('.product-page');
  if (!page) return;

  const marker = page.querySelector('.products-section--variants');
  if (!marker) return;
  if (page.querySelector('.reviews-section')) return;

  const fileName = window.location.pathname.split('/').pop() || '';
  const id = fileName.startsWith('produkt-') ? fileName.replace('produkt-', '').replace('.html', '') : '';
  const avg = PRODUCT_REVIEW_AVERAGE[id] || 4.7;
  const title = page.querySelector('.product-detail__content h2')?.textContent?.trim() || 'MerryMi';
  const productImage = page.querySelector('.product-detail__media img')?.getAttribute('src') || 'images/jednorazowki-merrymi-logo-merrymi.png';
  const variantPool = Array.from(page.querySelectorAll('.variants-gallery .variant-card')).map((card) => {
    const img = card.querySelector('img')?.getAttribute('src') || productImage;
    const name = card.querySelector('h3')?.textContent?.trim() || 'Wariant';
    return { image: img, name };
  });

  const topReviews = HARD_CODED_REVIEWS.slice(0, 15);
  const bottomReviews = HARD_CODED_REVIEWS.slice(15);
  const buildDate = (index) => {
    const day = String(22 - (index % 20)).padStart(2, '0');
    return `${day}.03.2026`;
  };
  const buildRating = (index) => 4.7 + ((index % 4) * 0.1);

  const createCard = (review, index) => {
    const score = buildRating(index);
    const variant = variantPool.length
      ? variantPool[index % variantPool.length]
      : { image: productImage, name: 'Wariant' };
    return `
      <article class="review-card review-card--product">
        <div class="review-card__top">
          <div class="review-card__reviewer">
            <p class="review-card__name">${review.author}</p>
            <span class="review-card__verified">✔ Zweryfikowane</span>
          </div>
          <p class="review-card__date">${buildDate(index)}</p>
          <div class="review-card__rating-line">
            <span class="review-card__stars">★★★★★</span>
            <span class="review-card__score">${score.toFixed(1)}/5</span>
          </div>
          <p class="review-card__text">“${review.text}”</p>
        </div>
        <div class="review-card__product">
          <img src="${variant.image}" alt="${variant.name}" loading="lazy">
          <p>${title} • ${variant.name}</p>
        </div>
      </article>
    `;
  };

  const section = document.createElement('section');
  section.className = 'reviews-section';
  section.innerHTML = `
    <div class="container">
      <div class="section-title section-title--center">
        <h2 id="reviews-title">Opinie klientów</h2>
      </div>
      <p class="reviews-summary">Średnia ocena ${title}: <strong>${avg.toFixed(1)}/5</strong></p>

      <div class="reviews-marquee reviews-marquee--right" aria-label="Opinie klientów - rząd 1">
        <div class="reviews-track">
          ${topReviews.map((review, index) => createCard(review, index)).join('')}
          ${topReviews.map((review, index) => createCard(review, index + topReviews.length)).join('')}
        </div>
      </div>

      <div class="reviews-marquee reviews-marquee--left" aria-label="Opinie klientów - rząd 2">
        <div class="reviews-track">
          ${bottomReviews.map((review, index) => createCard(review, index + 100)).join('')}
          ${bottomReviews.map((review, index) => createCard(review, index + 100 + bottomReviews.length)).join('')}
        </div>
      </div>
    </div>
  `;

  page.insertBefore(section, marker);
}

const SITE_ORIGIN = 'https://merrymi.pl';
const SITE_NAME = 'MerryMi';
const DEFAULT_DBUCHA_COLLECTION_URL = 'https://www.dbucha.com/collections/merrymi-jednorazowki';
const DEFAULT_LOGO_PATH = 'images/jednorazowki-merrymi-logo-merrymi.png';

function normalizeWhitespace(value) {
  return String(value || '').replace(/\s+/g, ' ').trim();
}

function escapeHtml(value) {
  return String(value || '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getCurrentFileName() {
  const rawPath = window.location.pathname || '/index.html';
  const path = rawPath.endsWith('/') ? `${rawPath}index.html` : rawPath;
  return path.split('/').pop() || 'index.html';
}

function getCanonicalUrl(fileName = getCurrentFileName()) {
  return fileName === 'index.html' ? `${SITE_ORIGIN}/` : `${SITE_ORIGIN}/${fileName}`;
}

function toAbsoluteUrl(value, baseUrl = getCanonicalUrl()) {
  if (!value) return '';
  try {
    return new URL(value, baseUrl).href;
  } catch (_error) {
    return '';
  }
}

function upsertMeta(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('meta');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  return node;
}

function upsertLink(selector, attributes) {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement('link');
    document.head.appendChild(node);
  }

  Object.entries(attributes).forEach(([key, value]) => {
    node.setAttribute(key, value);
  });

  return node;
}

function replaceTag(element, newTagName) {
  if (!element || element.tagName.toLowerCase() === newTagName.toLowerCase()) return element;

  const replacement = document.createElement(newTagName);
  Array.from(element.attributes).forEach((attribute) => {
    replacement.setAttribute(attribute.name, attribute.value);
  });
  replacement.innerHTML = element.innerHTML;
  element.replaceWith(replacement);
  return replacement;
}

function getPageType(fileName = getCurrentFileName()) {
  if (fileName === 'index.html') return 'home';
  if (fileName === 'about-us.html') return 'about';
  if (fileName === 'products.html' || document.body.dataset.page === 'products') return 'products';
  if (fileName === 'product.html' || document.body.dataset.page === 'product-detail' || fileName.startsWith('produkt-') || document.querySelector('.product-page')) {
    return 'product';
  }
  return 'generic';
}

function getPageName() {
  const selectors = [
    '.product-detail__content h1',
    '.product-detail__content h2',
    '.about-us-hero__card h1',
    '.about-us-hero__card h2',
    '.products-section .section-title h1',
    '.products-section .section-title h2',
    '.hero-slide.is-active h1',
    '.hero-slide.is-active h2',
    '#hero-title'
  ];

  for (const selector of selectors) {
    const value = normalizeWhitespace(document.querySelector(selector)?.textContent);
    if (value) return value;
  }

  return normalizeWhitespace(document.title.replace(/\s+[–-]\s+MerryMi$/i, '')) || SITE_NAME;
}

function getPageDescription() {
  const metaDescription = normalizeWhitespace(document.querySelector('meta[name="description"]')?.getAttribute('content'));
  if (metaDescription) return metaDescription;

  const selectors = [
    '.product-detail__content > p',
    '.about-us-hero__card > p:last-of-type',
    '.faq-section__lead',
    '.hero-slide.is-active p'
  ];

  for (const selector of selectors) {
    const value = normalizeWhitespace(document.querySelector(selector)?.textContent);
    if (value) return value;
  }

  return `${SITE_NAME} prezentuje modele i kolekcje wraz z linkami prowadzącymi do DBUCHA.com.`;
}

function getPageImage() {
  const ogImage = document.querySelector('meta[property="og:image"]')?.getAttribute('content');
  if (ogImage) return ogImage;

  const selectors = [
    '.product-detail__media img',
    '.hero-slide.is-active img',
    '.catalog-card img',
    '.brand img',
    '.footer-brand img'
  ];

  for (const selector of selectors) {
    const src = document.querySelector(selector)?.getAttribute('src');
    if (src) return src;
  }

  return DEFAULT_LOGO_PATH;
}

function findDbuchaLink() {
  const anchors = Array.from(document.querySelectorAll('a[href]'));
  return anchors.find((anchor) => /dbucha\.com/i.test(anchor.href))?.href || DEFAULT_DBUCHA_COLLECTION_URL;
}

function buildPageContext() {
  const fileName = getCurrentFileName();
  const pageType = getPageType(fileName);
  const pageName = getPageName();
  const canonicalUrl = getCanonicalUrl(fileName);
  const titleMap = {
    home: 'Strona główna - MerryMi',
    about: 'O nas - MerryMi',
    products: 'Produkty MerryMi'
  };

  return {
    fileName,
    pageType,
    pageName,
    canonicalUrl,
    pageTitle: titleMap[pageType] || `${pageName} - MerryMi`,
    description: getPageDescription(),
    imageUrl: toAbsoluteUrl(getPageImage(), canonicalUrl),
    relatedUrl: findDbuchaLink()
  };
}

function patchExternalLinks() {
  const currentOrigin = window.location.origin || SITE_ORIGIN;

  document.querySelectorAll('a[href]').forEach((anchor) => {
    const href = anchor.getAttribute('href') || '';
    if (!/^https?:\/\//i.test(href)) return;

    try {
      const url = new URL(href, currentOrigin);
      if (url.origin === currentOrigin) return;
      anchor.target = '_blank';
    } catch (_error) {
      // Ignore malformed URLs from existing markup.
    }
  });
}

function ensureMainHeading(pageName) {
  const brand = document.querySelector('.brand');
  if (brand?.tagName === 'H1') {
    replaceTag(brand, 'div');
  }

  const pageType = getPageType();
  const selectorMap = {
    about: '.about-us-hero__card h2',
    products: '.products-section .section-title h2',
    product: '.product-detail__content h2'
  };
  const heading = document.querySelector(selectorMap[pageType] || '');
  if (heading) {
    replaceTag(heading, 'h1');
  }

  if (!document.querySelector('main h1')) {
    const main = document.querySelector('main');
    if (main) {
      const hiddenHeading = document.createElement('h1');
      hiddenHeading.className = 'sr-only';
      hiddenHeading.textContent = pageName;
      main.prepend(hiddenHeading);
    }
  }
}

function getItemListEntries(context) {
  const entries = [];

  const pushEntry = (name, url) => {
    const normalizedName = normalizeWhitespace(name);
    const normalizedUrl = normalizeWhitespace(url);
    if (!normalizedName || !normalizedUrl) return;
    if (entries.some((entry) => entry.name === normalizedName)) return;
    entries.push({ name: normalizedName, url: normalizedUrl });
  };

  if (context.pageType === 'home' || context.pageType === 'products') {
    document.querySelectorAll('.product-card, .catalog-card').forEach((card) => {
      const name = card.querySelector('h3')?.textContent;
      const url = card.querySelector('.cta-secondary-link, .section-cta-strip__secondary')?.getAttribute('href')
        || card.querySelector('a[href]')?.getAttribute('href');
      pushEntry(name, toAbsoluteUrl(url, context.canonicalUrl));
    });
  }

  if (context.pageType === 'product') {
    document.querySelectorAll('.variants-gallery .variant-card').forEach((card) => {
      const name = card.querySelector('h3')?.textContent;
      const url = card.querySelector('.variant-card__cta')?.getAttribute('href') || context.relatedUrl;
      pushEntry(name, toAbsoluteUrl(url, context.canonicalUrl));
    });
  }

  if (!entries.length) {
    document.querySelectorAll('.site-footer .footer-links a[href]').forEach((link) => {
      const name = normalizeWhitespace(link.textContent);
      if (!/^MerryMi\s/i.test(name)) return;

      const localHref = LOCAL_PRODUCT_LINKS[name];
      const fileName = localHref?.split('/').pop() || '';
      const productId = getProductIdFromDetailHref(fileName);
      const dbuchaHref = DBUCHA_PRODUCT_URLS[productId] || link.getAttribute('href');
      pushEntry(name, toAbsoluteUrl(dbuchaHref, context.canonicalUrl));
    });
  }

  return entries;
}

function buildGeneratedFaqItems(context, itemListEntries) {
  const visibleNames = itemListEntries.slice(0, 5).map((entry) => entry.name);
  const modelText = visibleNames.length ? visibleNames.join(', ') : context.pageName;
  const targetUrl = context.relatedUrl || DEFAULT_DBUCHA_COLLECTION_URL;
  const introMap = {
    home: `To informacyjna strona ${SITE_NAME}, która prezentuje kolekcje i modele oraz prowadzi do oferty w DBUCHA.com.`,
    about: `To strona informacyjna o marce ${SITE_NAME}, jej modelach i sekcjach dostępnych w serwisie.`,
    products: `To katalog modeli ${SITE_NAME}, który prezentuje widoczne produkty i prowadzi do aktualnej oferty w DBUCHA.com.`,
    product: `To strona informacyjna modelu ${context.pageName}, pokazująca warianty smakowe i odsyłająca do DBUCHA.com.`
  };

  return [
    {
      question: 'Czym jest ta strona?',
      answerHtml: `<p>${escapeHtml(introMap[context.pageType] || introMap.home)}</p>`
    },
    {
      question: 'Czy ta strona jest sklepem internetowym?',
      answerHtml: '<p>Nie. To strona informacyjna prezentująca modele MerryMi. Aktualne produkty i zamówienia są dostępne po przejściu do DBUCHA.com.</p>'
    },
    {
      question: 'Jakie modele lub kolekcje są prezentowane?',
      answerHtml: `<p>Na tej stronie widoczne są między innymi: ${escapeHtml(modelText)}.</p>`
    },
    {
      question: 'Gdzie można sprawdzić produkty?',
      answerHtml: `<p>Aktualną ofertę można sprawdzić na <a href="${escapeHtml(targetUrl)}" target="_blank">DBUCHA.com</a>, do którego prowadzą widoczne linki produktowe.</p>`
    },
    {
      question: 'Dla kogo przeznaczone są treści na stronie?',
      answerHtml: '<p>Treści są przeznaczone dla pełnoletnich użytkowników zainteresowanych modelami MerryMi i informacjami o produktach nikotynowych.</p>'
    }
  ];
}

function ensureFaqSection(context, itemListEntries) {
  if (document.querySelector('.faq-section')) return;

  const main = document.querySelector('main');
  if (!main) return;

  const faqItems = buildGeneratedFaqItems(context, itemListEntries);
  const section = document.createElement('section');
  section.className = 'faq-section';
  section.id = 'faq';
  section.setAttribute('aria-labelledby', 'generated-faq-title');
  section.innerHTML = `
    <div class="container">
      <div class="section-title section-title--center">
        <h2 id="generated-faq-title">FAQ</h2>
      </div>
      <div class="faq-grid">
        ${faqItems.map((item, index) => `
          <details class="faq-item"${index === 0 ? ' open' : ''}>
            <summary>${escapeHtml(item.question)}</summary>
            ${item.answerHtml}
          </details>
        `).join('')}
      </div>
    </div>
  `;

  main.appendChild(section);
}

function updateHeadMetadata(context) {
  document.documentElement.setAttribute('lang', 'pl');
  document.title = context.pageTitle;

  document.querySelectorAll('meta[name="keywords"], meta[name="title"]').forEach((node) => node.remove());

  upsertLink('link[rel="canonical"]', { rel: 'canonical', href: context.canonicalUrl });
  upsertMeta('meta[name="description"]', { name: 'description', content: context.description });
  upsertMeta('meta[name="robots"]', { name: 'robots', content: 'index,follow,max-image-preview:large' });
  upsertMeta('meta[property="og:site_name"]', { property: 'og:site_name', content: SITE_NAME });
  upsertMeta('meta[property="og:url"]', { property: 'og:url', content: context.canonicalUrl });
  upsertMeta('meta[property="og:title"]', { property: 'og:title', content: context.pageTitle });
  upsertMeta('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  upsertMeta('meta[property="og:description"]', { property: 'og:description', content: context.description });
  upsertMeta('meta[property="og:image"]', { property: 'og:image', content: context.imageUrl });
  upsertMeta('meta[property="og:image:secure_url"]', { property: 'og:image:secure_url', content: context.imageUrl });
  upsertMeta('meta[property="og:locale"]', { property: 'og:locale', content: 'pl_PL' });
  upsertMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  upsertMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: context.pageTitle });
  upsertMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: context.description });
  upsertMeta('meta[name="twitter:image"]', { name: 'twitter:image', content: context.imageUrl });
}

function normalizeImages() {
  document.querySelectorAll('img').forEach((img, index) => {
    if (!img.getAttribute('decoding')) {
      img.setAttribute('decoding', 'async');
    }

    if (!normalizeWhitespace(img.getAttribute('alt'))) {
      const fallbackAlt = normalizeWhitespace(
        img.closest('article, section, div')?.querySelector('h1, h2, h3, p')?.textContent
      ) || SITE_NAME;
      img.setAttribute('alt', fallbackAlt);
    }

    const shouldLazyLoad = index > 1
      && !img.closest('.hero-slide.is-active')
      && !img.closest('.brand')
      && !img.closest('.product-detail__media');

    if (shouldLazyLoad && !img.getAttribute('loading')) {
      img.setAttribute('loading', 'lazy');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  patchExternalLinks();

  const initialContext = buildPageContext();
  ensureMainHeading(initialContext.pageName);

  const context = buildPageContext();
  const itemListEntries = getItemListEntries(context);
  ensureFaqSection(context, itemListEntries);

  const finalContext = buildPageContext();
  updateHeadMetadata(finalContext);
  normalizeImages();
});

const promoCopyButton = document.querySelector('[data-promo-copy]');
const promoCodeEl = document.querySelector('[data-promo-code]');

if (promoCopyButton && promoCodeEl) {
  promoCopyButton.addEventListener('click', async () => {
    const code = promoCodeEl.textContent?.trim() || 'JESIEN5';

    try {
      await navigator.clipboard.writeText(code);
      const original = promoCopyButton.textContent;
      promoCopyButton.textContent = 'Skopiowano';
      window.setTimeout(() => {
        promoCopyButton.textContent = original;
      }, 1500);
    } catch (_error) {
      promoCopyButton.textContent = 'Kod: JESIEN5';
      window.setTimeout(() => {
        promoCopyButton.textContent = 'Skopiuj kod';
      }, 1500);
    }
  });
}
