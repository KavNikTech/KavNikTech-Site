/**
 * Enhanced JavaScript for KavNik Tech Website
 * Features: Theme toggle, smooth animations, mobile navigation, scroll effects
 */

(function() {
  'use strict';

  // ===== Safe localStorage helpers =====
  function storageGet(key) {
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value) {
    try { localStorage.setItem(key, value); } catch (e) { /* private mode or quota */ }
  }

  // ===== Theme Toggle =====
  function initThemeToggle() {
    const themeToggle = document.querySelector('.nk-theme-toggle');
    const currentTheme = storageGet('theme') || 'light';
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
      themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        storageSet('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add animation effect
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(function() {
          themeToggle.style.transform = '';
        }, 300);
      });
    }
  }
  
  function updateThemeIcon(theme) {
    const themeToggle = document.querySelector('.nk-theme-toggle');
    if (themeToggle) {
      themeToggle.textContent = theme === 'dark' ? '☀️' : '🌙';
    }
  }

  // ===== Mobile Navigation =====
  function initMobileNav() {
    const navToggles = document.querySelectorAll('.nk-nav-toggle');
    const navs = document.querySelectorAll('.nk-nav');
    
    navToggles.forEach((toggle, index) => {
      toggle.addEventListener('click', function() {
        const nav = navs[index] || document.querySelector('.nk-nav');
        if (nav) {
          nav.classList.toggle('open');
          
          // Animate hamburger icon
          const isOpen = nav.classList.contains('open');
          toggle.textContent = isOpen ? '✕' : '☰';
          toggle.style.transform = isOpen ? 'rotate(90deg)' : 'rotate(0deg)';
        }
      });
    });
    
    // Close nav when clicking outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.nk-nav') && !e.target.closest('.nk-nav-toggle')) {
        navs.forEach(nav => nav.classList.remove('open'));
        navToggles.forEach(toggle => {
          toggle.textContent = '☰';
          toggle.style.transform = 'rotate(0deg)';
        });
      }
    });
    
    // Close nav when clicking a nav link
    navs.forEach(nav => {
      nav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function() {
          nav.classList.remove('open');
          navToggles.forEach(toggle => {
            toggle.textContent = '☰';
            toggle.style.transform = 'rotate(0deg)';
          });
        });
      });
    });
  }

  // ===== Active Navigation Link =====
  function setActiveNavLink() {
    const pathname = window.location.pathname;
    const currentPath = pathname.split('/').pop() || 'index.html';
    const isAppsSection = pathname.indexOf('apps') !== -1;
    const navLinks = document.querySelectorAll('.nk-nav a, .nk-footer-nav a');
    
    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');
      const isAppsLink = linkPath && (linkPath === 'apps/' || linkPath === 'apps' || linkPath.indexOf('apps/') === 0 || (linkPath === '../index.html' && isAppsSection));
      if (isAppsLink && isAppsSection) {
        link.classList.add('active');
      } else if (linkPath === currentPath || 
          (currentPath === '' && linkPath === 'index.html') ||
          (currentPath === 'index.html' && linkPath === 'index.html')) {
        link.classList.add('active');
      }
    });
  }

  // ===== Scroll Animations (Intersection Observer) =====
  function initScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target); // Only animate once
        }
      });
    }, observerOptions);
    
    // Observe all elements with fade-in class
    document.querySelectorAll('.fade-in').forEach(el => {
      observer.observe(el);
    });
    
    // Auto-add fade-in to sections
    document.querySelectorAll('.nk-section, .nk-card, .app-card').forEach((el, index) => {
      if (!el.classList.contains('fade-in')) {
        el.classList.add('fade-in');
        // Stagger animations
        el.style.transitionDelay = (index * 0.1) + 's';
        observer.observe(el);
      }
    });
  }

  // ===== Smooth Scroll for Anchor Links =====
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
          const target = document.querySelector(href);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      });
    });
  }

  // ===== Header Scroll Effect =====
  function initHeaderScroll() {
    const header = document.querySelector('.nk-header');
    if (!header) return;
    
    let lastScroll = 0;
    window.addEventListener('scroll', function() {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
      
      lastScroll = currentScroll;
    });
  }

  // ===== Button Ripple Effect =====
  function initButtonEffects() {
    document.querySelectorAll('.btn').forEach(button => {
      button.addEventListener('click', function(e) {
        const rect = this.getBoundingClientRect();
        const ripple = document.createElement('span');
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
          position: absolute;
          width: ${size}px;
          height: ${size}px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          top: ${y}px;
          left: ${x}px;
          pointer-events: none;
          animation: ripple 0.6s ease-out;
          transform: scale(0);
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
      });
    });
  }

  // ===== Form Enhancements =====
  function initFormEnhancements() {
    const formInputs = document.querySelectorAll('.contact-form input, .contact-form textarea');
    
    formInputs.forEach(input => {
      // Add focus/blur animations
      input.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.01)';
      });
      
      input.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
      });
      
      // Add floating label effect if input has value
      if (input.value) {
        input.classList.add('has-value');
      }
      
      input.addEventListener('input', function() {
        if (this.value) {
          this.classList.add('has-value');
        } else {
          this.classList.remove('has-value');
        }
      });
    });
  }

  // ===== Device Stack Animation =====
  function initDeviceAnimations() {
    const devices = document.querySelectorAll('.device');
    
    devices.forEach((device, index) => {
      // Add stagger animation on load only
      device.style.animationDelay = (index * 0.2) + 's';
    });
  }

  // ===== App Card Hover Effects =====
  function initAppCardEffects() {
    const appCards = document.querySelectorAll('.app-card');
    
    appCards.forEach(card => {
      card.addEventListener('mouseenter', function() {
        // Handled by CSS now for better performance
      });
      
      card.addEventListener('mouseleave', function() {
        // Handled by CSS now for better performance
      });
    });
  }

  // ===== Contact Form: Email Validation & Formspree Submit =====
  var EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

  function validateEmail(value) {
    if (!value || typeof value !== 'string') return false;
    var trimmed = value.trim();
    return trimmed.length > 0 && EMAIL_REGEX.test(trimmed);
  }

  function showFieldError(fieldId, message) {
    var el = document.getElementById(fieldId);
    if (el) {
      el.textContent = message;
      el.style.display = message ? 'block' : 'none';
    }
  }

  function initContactForm() {
    var form = document.getElementById('contact-form');
    if (!form) return;

    var nameInput = document.getElementById('contact-name');
    var emailInput = document.getElementById('contact-email');
    var messageInput = document.getElementById('contact-message');
    var successEl = document.getElementById('form-success');
    var submitBtn = document.getElementById('contact-submit');

    function clearErrors() {
      showFieldError('name-error', '');
      showFieldError('email-error', '');
      showFieldError('message-error', '');
    }

    if (emailInput) {
      emailInput.addEventListener('blur', function() {
        var val = this.value.trim();
        if (val && !validateEmail(val)) {
          showFieldError('email-error', 'Please enter a valid email address.');
        } else {
          showFieldError('email-error', '');
        }
      });
      emailInput.addEventListener('input', function() {
        var errEl = document.getElementById('email-error');
        if (errEl && errEl.textContent) {
          if (validateEmail(this.value.trim())) showFieldError('email-error', '');
        }
      });
    }

    form.addEventListener('submit', function(e) {
      clearErrors();
      var name = nameInput ? nameInput.value.trim() : '';
      var email = emailInput ? emailInput.value.trim() : '';
      var message = messageInput ? messageInput.value.trim() : '';
      var valid = true;

      if (!name) {
        showFieldError('name-error', 'Please enter your name.');
        valid = false;
      }
      if (!email) {
        showFieldError('email-error', 'Please enter your email address.');
        valid = false;
      } else if (!validateEmail(email)) {
        showFieldError('email-error', 'Please enter a valid email address.');
        valid = false;
      }
      if (!message) {
        showFieldError('message-error', 'Please enter a message.');
        valid = false;
      }

      if (!valid) {
        e.preventDefault();
        return;
      }

      var action = form.getAttribute('action');
      if (!action || action.indexOf('YOUR_FORM_ID') !== -1) {
        e.preventDefault();
        showFieldError('email-error', 'Form is not configured. Replace YOUR_FORM_ID in contact.html with your Formspree form ID.');
        return;
      }

      // Valid: allow normal form POST to Formspree (no fetch — avoids "Load failed" from blockers/CORS)
      // Browser will submit and navigate to Formspree thank-you page or your redirect URL.
    });

    // If Formspree redirected back with ?sent=1, show success message (set redirect in Formspree to contact.html?sent=1)
    if (successEl && typeof window.location !== 'undefined' && window.location.search.indexOf('sent=1') !== -1) {
      successEl.hidden = false;
      successEl.setAttribute('role', 'status');
    }
  }

  // ===== Add Ripple Animation CSS =====
  function addRippleAnimation() {
    if (!document.getElementById('ripple-animation-style')) {
      const style = document.createElement('style');
      style.id = 'ripple-animation-style';
      style.textContent = `
        @keyframes ripple {
          to {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }

  // ===== Initialize Everything =====
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
      return;
    }
    
    // Initialize all features
    initThemeToggle();
    initMobileNav();
    setActiveNavLink();
    initScrollAnimations();
    initSmoothScroll();
    initHeaderScroll();
    initButtonEffects();
    initFormEnhancements();
    initContactForm();
    initDeviceAnimations();
    initAppCardEffects();
    addRippleAnimation();
    
    // Add fade-in class to hero content
    const heroContent = document.querySelector('.nk-hero-content') || document.querySelector('.nk-hero-copy');
    if (heroContent) {
      heroContent.classList.add('fade-in', 'visible');
    }
  }

  // Start initialization
  init();
})();
