/* ═══════════════════════════════════════════════════════════════
   CYBERNEXUS 2050 — script.js
   Created By ResPect
═══════════════════════════════════════════════════════════════ */

/* ─────────────────────────────────────────────────────────────
   1. TRANSLATION DATA
───────────────────────────────────────────────────────────────*/
const translations = {
  en: {
    /* Navbar */
    nav_home:            "Home",
    nav_about:           "About",
    nav_courses:         "Courses",
    nav_contact:         "Contact",

    /* Hero */
    hero_badge:          "[ SYSTEM ONLINE — 2050 ]",
    hero_title1:         "SECURE THE",
    hero_title2:         "FUTURE",
    hero_slogan:         "Securing the Future, One Mind at a Time",
    hero_desc:           "The world's most advanced cybersecurity education platform. Train like elite hackers — defend like digital guardians.",
    hero_cta1:           "▶ Start Training",
    hero_cta2:           "Learn More",
    scroll_hint:         "SCROLL",

    /* Stats */
    stat1:               "Students Trained",
    stat2:               "Expert Courses",
    stat3:               "% Success Rate",

    /* About */
    about_label:         "[ ABOUT US ]",
    about_title:         "What is CyberNexus?",
    about_p1:            "CyberNexus is a next-generation cybersecurity academy built for the digital warriors of tomorrow. We combine cutting-edge curriculum with immersive, hands-on training environments.",
    about_p2:            "Our programs are designed by world-class security engineers, ethical hackers, and defense specialists who have protected critical infrastructure for the world's top organizations.",
    about_p3:            "Whether you're a beginner or an advanced professional, CyberNexus has the path to transform you into a guardian of the digital frontier.",
    about_cta:           "Explore Courses",

    /* Features */
    feat1_title:         "Ethical Hacking",
    feat1_desc:          "Learn offensive security techniques used by real professionals",
    feat2_title:         "Network Defense",
    feat2_desc:          "Protect infrastructure against advanced persistent threats",
    feat3_title:         "AI Security",
    feat3_desc:          "Secure AI systems against adversarial attacks and data poisoning",
    feat4_title:         "Digital Forensics",
    feat4_desc:          "Investigate cyber incidents and recover critical digital evidence",

    /* Courses section */
    courses_label:       "[ TRAINING MODULES ]",
    courses_title:       "Select Your Path",
    courses_subtitle:    "Choose from our elite cybersecurity programs, each crafted to build real-world skills.",

    /* Level badges */
    level_beginner:      "Beginner",
    level_intermediate:  "Intermediate",
    level_advanced:      "Advanced",

    /* Enroll button (shared key) */
    enroll_btn:          "Enroll Now",

    /* Course 1 */
    course1_name:        "Cyber Foundations",
    course1_desc:        "Master the fundamentals of cybersecurity, networking, and digital defense systems.",
    c1t1:                "Network Basics",
    c1t2:                "Linux Essentials",
    c1t3:                "Security Protocols",
    c1_duration:         "8 Weeks",
    c1_mode:             "Online",

    /* Course 2 */
    course2_name:        "Ethical Hacking Pro",
    course2_desc:        "Learn penetration testing, vulnerability assessment, and exploit development.",
    c2t1:                "Recon & Enumeration",
    c2t2:                "Exploitation Techniques",
    c2t3:                "Post-Exploitation",
    c2_duration:         "12 Weeks",
    c2_mode:             "Online",

    /* Course 3 */
    course3_name:        "Red Team Operations",
    course3_desc:        "Simulate advanced adversarial attacks against enterprise infrastructure.",
    c3t1:                "Advanced Persistence",
    c3t2:                "Lateral Movement",
    c3t3:                "C2 Frameworks",
    c3_duration:         "16 Weeks",
    c3_mode:             "Hybrid",

    /* Course 4 */
    course4_name:        "Network Defense",
    course4_desc:        "Build and operate enterprise-grade security operations centers and defense tools.",
    c4t1:                "SIEM & Log Analysis",
    c4t2:                "Intrusion Detection",
    c4t3:                "Incident Response",
    c4_duration:         "10 Weeks",
    c4_mode:             "Online",

    /* Course 5 */
    course5_name:        "AI & Quantum Security",
    course5_desc:        "Protect the next generation of AI systems and quantum communication networks from emerging threats.",
    c5t1:                "Adversarial ML",
    c5t2:                "Post-Quantum Crypto",
    c5t3:                "Neural Network Defense",
    c5_duration:         "14 Weeks",
    c5_mode:             "Online",

    /* Course 6 */
    course6_name:        "Digital Forensics",
    course6_desc:        "Investigate cybercrime, recover digital evidence, and master forensic methodologies.",
    c6t1:                "Evidence Collection",
    c6t2:                "Memory Forensics",
    c6t3:                "Forensic Reporting",
    c6_duration:         "6 Weeks",
    c6_mode:             "Online",

    /* Contact */
    contact_label:       "[ CONTACT ]",
    contact_title:       "Initiate Connection",
    contact_subtitle:    "Send us a secure transmission. Our team will respond within 24 hours.",
    ci_loc_title:        "Location",
    ci_loc:              "Cyber District, Neo-Algiers, 2050",
    ci_freq_title:       "Frequency",
    ci_hours_title:      "Operation Hours",
    ci_hours:            "24 / 7 / 365",
    form_name:           "Full Name",
    form_email:          "Email Address",
    form_subject:        "Subject",
    form_message:        "Message",
    form_submit:         "📡 Transmit Message",
    form_success_msg:    "✓ Message transmitted successfully. Standing by for response.",

    /* Footer */
    footer_tagline:      "Securing the Future, One Mind at a Time",
    footer_nav:          "Navigation",
    footer_programs:     "Programs",
    footer_connect:      "Connect",
    footer_copy:         "© 2050 CyberNexus. All rights reserved.",
  },

  /* ─── FRENCH ─── */
  fr: {
    nav_home:            "Accueil",
    nav_about:           "À propos",
    nav_courses:         "Formations",
    nav_contact:         "Contact",

    hero_badge:          "[ SYSTÈME EN LIGNE — 2050 ]",
    hero_title1:         "SÉCURISEZ LE",
    hero_title2:         "FUTUR",
    hero_slogan:         "Sécuriser l'avenir, un esprit à la fois",
    hero_desc:           "La plateforme de formation en cybersécurité la plus avancée au monde. Entraînez-vous comme les élites — défendez comme des gardiens numériques.",
    hero_cta1:           "▶ Commencer la formation",
    hero_cta2:           "En savoir plus",
    scroll_hint:         "DÉFILER",

    stat1:               "Étudiants formés",
    stat2:               "Cours experts",
    stat3:               "% Taux de réussite",

    about_label:         "[ À PROPOS ]",
    about_title:         "Qu'est-ce que CyberNexus ?",
    about_p1:            "CyberNexus est une académie de cybersécurité nouvelle génération conçue pour les guerriers numériques de demain. Nous allions un programme de pointe à des environnements de formation immersifs.",
    about_p2:            "Nos programmes sont conçus par des ingénieurs en sécurité de classe mondiale, des hackers éthiques et des spécialistes de la défense ayant protégé des infrastructures critiques pour les plus grandes organisations.",
    about_p3:            "Que vous soyez débutant ou professionnel confirmé, CyberNexus trace votre voie vers la maîtrise de la cyberdéfense.",
    about_cta:           "Explorer les formations",

    feat1_title:         "Hacking éthique",
    feat1_desc:          "Apprenez les techniques de sécurité offensive utilisées par de vrais professionnels",
    feat2_title:         "Défense réseau",
    feat2_desc:          "Protégez les infrastructures contre les menaces persistantes avancées",
    feat3_title:         "Sécurité IA",
    feat3_desc:          "Sécurisez les systèmes d'IA contre les attaques adversariales et l'empoisonnement des données",
    feat4_title:         "Forensique numérique",
    feat4_desc:          "Enquêtez sur les incidents cyber et récupérez des preuves numériques critiques",

    courses_label:       "[ MODULES DE FORMATION ]",
    courses_title:       "Choisissez votre voie",
    courses_subtitle:    "Parcourez nos programmes d'élite en cybersécurité, conçus pour développer des compétences concrètes.",

    level_beginner:      "Débutant",
    level_intermediate:  "Intermédiaire",
    level_advanced:      "Avancé",
    enroll_btn:          "S'inscrire",

    course1_name:        "Fondamentaux cyber",
    course1_desc:        "Maîtrisez les bases de la cybersécurité, du réseau et des systèmes de défense numérique.",
    c1t1:                "Bases des réseaux",
    c1t2:                "Essentiels Linux",
    c1t3:                "Protocoles de sécurité",
    c1_duration:         "8 semaines",
    c1_mode:             "En ligne",

    course2_name:        "Ethical Hacking Pro",
    course2_desc:        "Apprenez les tests d'intrusion, l'évaluation des vulnérabilités et le développement d'exploits.",
    c2t1:                "Reconnaissance & Énumération",
    c2t2:                "Techniques d'exploitation",
    c2t3:                "Post-exploitation",
    c2_duration:         "12 semaines",
    c2_mode:             "En ligne",

    course3_name:        "Opérations Red Team",
    course3_desc:        "Simulez des attaques adversariales avancées contre des infrastructures d'entreprise.",
    c3t1:                "Persistance avancée",
    c3t2:                "Mouvement latéral",
    c3t3:                "Frameworks C2",
    c3_duration:         "16 semaines",
    c3_mode:             "Hybride",

    course4_name:        "Défense réseau",
    course4_desc:        "Construisez et opérez des centres opérationnels de sécurité de niveau entreprise.",
    c4t1:                "SIEM & Analyse des logs",
    c4t2:                "Détection des intrusions",
    c4t3:                "Réponse aux incidents",
    c4_duration:         "10 semaines",
    c4_mode:             "En ligne",

    course5_name:        "Sécurité IA & Quantique",
    course5_desc:        "Protégez la prochaine génération de systèmes IA et de réseaux quantiques contre les menaces émergentes.",
    c5t1:                "ML adversarial",
    c5t2:                "Cryptographie post-quantique",
    c5t3:                "Défense des réseaux neuronaux",
    c5_duration:         "14 semaines",
    c5_mode:             "En ligne",

    course6_name:        "Forensique numérique",
    course6_desc:        "Enquêtez sur la cybercriminalité, récupérez des preuves numériques et maîtrisez les méthodologies forensiques.",
    c6t1:                "Collecte de preuves",
    c6t2:                "Forensique mémoire",
    c6t3:                "Rapports forensiques",
    c6_duration:         "6 semaines",
    c6_mode:             "En ligne",

    contact_label:       "[ CONTACT ]",
    contact_title:       "Initier la connexion",
    contact_subtitle:    "Envoyez-nous une transmission sécurisée. Notre équipe répondra sous 24 heures.",
    ci_loc_title:        "Localisation",
    ci_loc:              "District Cyber, Néo-Alger, 2050",
    ci_freq_title:       "Fréquence",
    ci_hours_title:      "Heures d'opération",
    ci_hours:            "24 / 7 / 365",
    form_name:           "Nom complet",
    form_email:          "Adresse e-mail",
    form_subject:        "Sujet",
    form_message:        "Message",
    form_submit:         "📡 Transmettre le message",
    form_success_msg:    "✓ Message transmis avec succès. En attente de réponse.",

    footer_tagline:      "Sécuriser l'avenir, un esprit à la fois",
    footer_nav:          "Navigation",
    footer_programs:     "Programmes",
    footer_connect:      "Nous rejoindre",
    footer_copy:         "© 2050 CyberNexus. Tous droits réservés.",
  },

  /* ─── ARABIC ─── */
  ar: {
    nav_home:            "الرئيسية",
    nav_about:           "من نحن",
    nav_courses:         "الدورات",
    nav_contact:         "التواصل",

    hero_badge:          "[ النظام متصل — 2050 ]",
    hero_title1:         "أمِّن",
    hero_title2:         "المستقبل",
    hero_slogan:         "نحمي المستقبل، عقلاً واحداً في كل مرة",
    hero_desc:           "أكثر منصات التعليم في الأمن السيبراني تقدماً على مستوى العالم. تدرّب كالمخترقين النخبة — دافع كحرّاس العالم الرقمي.",
    hero_cta1:           "▶ ابدأ التدريب",
    hero_cta2:           "اعرف المزيد",
    scroll_hint:         "مرر للأسفل",

    stat1:               "طالب مدرَّب",
    stat2:               "دورة متخصصة",
    stat3:               "% نسبة النجاح",

    about_label:         "[ من نحن ]",
    about_title:         "ما هو CyberNexus؟",
    about_p1:            "CyberNexus هي أكاديمية جيل جديد للأمن السيبراني، بُنيت لمحاربي الفضاء الرقمي في المستقبل. نجمع بين مناهج متطورة وبيئات تدريب عملية وغامرة.",
    about_p2:            "صمّم برامجنا مهندسو أمن من الطراز العالمي، وقراصنة أخلاقيون، ومتخصصون في الدفاع السيبراني حمَوا بنى تحتية حيوية لكبرى المؤسسات في العالم.",
    about_p3:            "سواء كنت مبتدئاً أو محترفاً متقدماً، يمتلك CyberNexus المسار الذي يحوّلك إلى حارس للحدود الرقمية.",
    about_cta:           "استعرض الدورات",

    feat1_title:         "الاختراق الأخلاقي",
    feat1_desc:          "تعلّم تقنيات الأمن الهجومي التي يستخدمها المحترفون الحقيقيون",
    feat2_title:         "الدفاع الشبكي",
    feat2_desc:          "احمِ البنية التحتية من التهديدات المستمرة المتقدمة",
    feat3_title:         "أمن الذكاء الاصطناعي",
    feat3_desc:          "أمِّن أنظمة الذكاء الاصطناعي من الهجمات العدائية وتسمم البيانات",
    feat4_title:         "الجنائيات الرقمية",
    feat4_desc:          "حقّق في الحوادث الإلكترونية واستعِد الأدلة الرقمية الحيوية",

    courses_label:       "[ وحدات التدريب ]",
    courses_title:       "اختر مسارك",
    courses_subtitle:    "اختر من بين برامجنا النخبوية في الأمن السيبراني، المصمَّمة لبناء مهارات حقيقية.",

    level_beginner:      "مبتدئ",
    level_intermediate:  "متوسط",
    level_advanced:      "متقدم",
    enroll_btn:          "سجّل الآن",

    course1_name:        "أساسيات الأمن السيبراني",
    course1_desc:        "أتقن أساسيات الأمن السيبراني والشبكات وأنظمة الدفاع الرقمي.",
    c1t1:                "أساسيات الشبكات",
    c1t2:                "أساسيات لينكس",
    c1t3:                "بروتوكولات الأمان",
    c1_duration:         "8 أسابيع",
    c1_mode:             "أونلاين",

    course2_name:        "الاختراق الأخلاقي الاحترافي",
    course2_desc:        "تعلّم اختبار الاختراق، وتقييم الثغرات، وتطوير الاستغلالات.",
    c2t1:                "الاستطلاع والتعداد",
    c2t2:                "تقنيات الاستغلال",
    c2t3:                "ما بعد الاستغلال",
    c2_duration:         "12 أسبوعاً",
    c2_mode:             "أونلاين",

    course3_name:        "عمليات الفريق الأحمر",
    course3_desc:        "محاكاة هجمات عدائية متقدمة ضد البنية التحتية للمؤسسات.",
    c3t1:                "الثبات المتقدم",
    c3t2:                "الحركة الجانبية",
    c3t3:                "أطر C2",
    c3_duration:         "16 أسبوعاً",
    c3_mode:             "هجين",

    course4_name:        "الدفاع الشبكي",
    course4_desc:        "بناء وتشغيل مراكز العمليات الأمنية على مستوى المؤسسات.",
    c4t1:                "SIEM وتحليل السجلات",
    c4t2:                "كشف التسلل",
    c4t3:                "الاستجابة للحوادث",
    c4_duration:         "10 أسابيع",
    c4_mode:             "أونلاين",

    course5_name:        "أمن الذكاء الاصطناعي والحوسبة الكمية",
    course5_desc:        "حماية الجيل القادم من أنظمة الذكاء الاصطناعي وشبكات الاتصالات الكمية من التهديدات الناشئة.",
    c5t1:                "تعلم الآلة العدائي",
    c5t2:                "التشفير ما بعد الكمومي",
    c5t3:                "الدفاع عن الشبكات العصبية",
    c5_duration:         "14 أسبوعاً",
    c5_mode:             "أونلاين",

    course6_name:        "الجنائيات الرقمية",
    course6_desc:        "التحقيق في الجرائم الإلكترونية، واستعادة الأدلة الرقمية، وإتقان المنهجيات الجنائية.",
    c6t1:                "جمع الأدلة",
    c6t2:                "جنائيات الذاكرة",
    c6t3:                "التقارير الجنائية",
    c6_duration:         "6 أسابيع",
    c6_mode:             "أونلاين",

    contact_label:       "[ التواصل ]",
    contact_title:       "ابدأ الاتصال",
    contact_subtitle:    "أرسل لنا رسالة آمنة. سيرد فريقنا خلال 24 ساعة.",
    ci_loc_title:        "الموقع",
    ci_loc:              "حي الفضاء الإلكتروني، نيو-الجزائر، 2050",
    ci_freq_title:       "قناة التواصل",
    ci_hours_title:      "ساعات العمل",
    ci_hours:            "24 / 7 / 365",
    form_name:           "الاسم الكامل",
    form_email:          "البريد الإلكتروني",
    form_subject:        "الموضوع",
    form_message:        "الرسالة",
    form_submit:         "📡 إرسال الرسالة",
    form_success_msg:    "✓ تم إرسال الرسالة بنجاح. في انتظار الرد.",

    footer_tagline:      "نحمي المستقبل، عقلاً واحداً في كل مرة",
    footer_nav:          "التنقل",
    footer_programs:     "البرامج",
    footer_connect:      "تواصل معنا",
    footer_copy:         "© 2050 CyberNexus. جميع الحقوق محفوظة.",
  }
};

/* ─────────────────────────────────────────────────────────────
   2. LANGUAGE SWITCHER
───────────────────────────────────────────────────────────────*/
let currentLang = 'en';

function applyLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];
  if (!t) return;

  /* Update every [data-key] element */
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) {
      /* Preserve inner HTML structure for buttons that have a .btn-icon span */
      if (el.classList.contains('btn-primary') || el.classList.contains('btn-outline') || el.classList.contains('form-submit')) {
        const iconSpan = el.querySelector('.btn-icon');
        if (iconSpan) {
          /* Replace only the text node after the icon span */
          el.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) node.textContent = ' ' + t[key].replace(/^[▶📡]\s*/, '');
          });
          /* If no text node found, fall back */
          if ([...el.childNodes].every(n => n.nodeType !== Node.TEXT_NODE || n.textContent.trim() === '')) {
            el.innerHTML = iconSpan.outerHTML + ' ' + t[key].replace(/^[▶📡]\s*/, '');
          }
        } else {
          el.textContent = t[key];
        }
      } else {
        el.textContent = t[key];
      }
    }
  });

  /* RTL / font switch */
  if (lang === 'ar') {
    document.documentElement.setAttribute('lang', 'ar');
    document.body.classList.add('rtl');
  } else {
    document.documentElement.setAttribute('lang', lang);
    document.body.classList.remove('rtl');
  }

  /* Update glitch data-text attribute for hero title2 */
  const glitch = document.querySelector('.glitch[data-key="hero_title2"]');
  if (glitch && t['hero_title2']) {
    glitch.setAttribute('data-text', t['hero_title2']);
  }

  /* Highlight active button */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  /* Persist choice */
  localStorage.setItem('cn_lang', lang);
}

/* Wire up the buttons */
document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.getAttribute('data-lang')));
});

/* ─────────────────────────────────────────────────────────────
   3. PARTICLE CANVAS  (performance-optimised)
   Key changes vs old version:
   • COUNT: 80 → 35  (O(n²) line check was the #1 lag source)
   • Lines drawn every 2nd frame only (frame-skip flag)
   • Distance check uses squared distance — no Math.sqrt per pair
   • Canvas DPR-aware but capped at 1× to halve fill cost
   • Resize debounced (250 ms) — no thrash on window drag
   • Page-visibility API pauses RAF when tab is hidden
───────────────────────────────────────────────────────────────*/
(function initParticles() {
  const canvas = document.getElementById('particle-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d', { alpha: true });
  const COUNT      = 35;
  const MAX_DIST   = 130;
  const MAX_DIST_SQ = MAX_DIST * MAX_DIST;
  let particles    = [];
  let frameCount   = 0;
  let rafId        = null;
  let running      = true;

  /* ── resize (debounced) ── */
  let resizeTimer;
  function resize() {
    canvas.width  = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 250);
  });

  /* ── particle class ── */
  function makeParticle() {
    return {
      x:    Math.random() * canvas.width,
      y:    Math.random() * canvas.height,
      vx:   (Math.random() - 0.5) * 0.35,
      vy:   (Math.random() - 0.5) * 0.35,
      r:    Math.random() * 1.2 + 0.4,
      alpha: 0.3 + Math.random() * 0.4
    };
  }
  function resetParticle(p) {
    p.x = Math.random() * canvas.width;
    p.y = Math.random() * canvas.height;
    p.vx  = (Math.random() - 0.5) * 0.35;
    p.vy  = (Math.random() - 0.5) * 0.35;
    p.alpha = 0.3 + Math.random() * 0.4;
  }

  for (let i = 0; i < COUNT; i++) particles.push(makeParticle());

  /* ── draw lines (only every other frame) ── */
  function drawLines() {
    ctx.lineWidth = 0.5;
    for (let i = 0; i < COUNT - 1; i++) {
      const pi = particles[i];
      for (let j = i + 1; j < COUNT; j++) {
        const pj = particles[j];
        const dx = pi.x - pj.x;
        const dy = pi.y - pj.y;
        const dSq = dx * dx + dy * dy;
        if (dSq < MAX_DIST_SQ) {
          const a = 0.1 * (1 - dSq / MAX_DIST_SQ);
          ctx.beginPath();
          ctx.strokeStyle = `rgba(0,180,255,${a.toFixed(3)})`;
          ctx.moveTo(pi.x, pi.y);
          ctx.lineTo(pj.x, pj.y);
          ctx.stroke();
        }
      }
    }
  }

  /* ── main loop ── */
  function loop() {
    if (!running) return;
    rafId = requestAnimationFrame(loop);
    frameCount++;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const W = canvas.width, H = canvas.height;
    for (let i = 0; i < COUNT; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) resetParticle(p);
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, 6.2832);
      ctx.fillStyle = `rgba(0,180,255,${p.alpha})`;
      ctx.fill();
    }

    /* draw connecting lines only every 2nd frame */
    if (frameCount % 2 === 0) drawLines();
  }

  loop();

  /* pause when tab is hidden — saves CPU completely */
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      running = false;
      cancelAnimationFrame(rafId);
    } else {
      running = true;
      frameCount = 0;
      loop();
    }
  });
})();

/* ─────────────────────────────────────────────────────────────
   4. NAVBAR — scroll + hamburger
───────────────────────────────────────────────────────────────*/
const navbar    = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('nav-links');

window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
});

/* Close menu when a link is clicked */
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    navLinks.classList.remove('open');
  });
});

/* ─────────────────────────────────────────────────────────────
   5. COUNTER ANIMATION
───────────────────────────────────────────────────────────────*/
function animateCounter(el, target, duration = 2000) {
  let start = null;
  const step = timestamp => {
    if (!start) start = timestamp;
    const progress = Math.min((timestamp - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3);
    el.textContent = Math.floor(eased * target).toLocaleString();
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

/* Trigger counters when hero is visible */
const counters = document.querySelectorAll('.stat-number[data-target]');
let countersStarted = false;

const heroObserver = new IntersectionObserver(entries => {
  if (entries[0].isIntersecting && !countersStarted) {
    countersStarted = true;
    counters.forEach(el => animateCounter(el, +el.getAttribute('data-target')));
  }
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) heroObserver.observe(heroSection);

/* ─────────────────────────────────────────────────────────────
   6. SCROLL REVEAL
───────────────────────────────────────────────────────────────*/
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll(
  '.feature-card, .course-card, .about-text p, .about-text a, .contact-info-item, .terminal-box'
).forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});

/* ─────────────────────────────────────────────────────────────
   7. CONTACT FORM
───────────────────────────────────────────────────────────────*/
const contactForm    = document.getElementById('contact-form');
const formSuccessMsg = document.getElementById('form-success');

if (contactForm) {
  contactForm.addEventListener('submit', e => {
    e.preventDefault();
    /* Simulate send */
    const btn = contactForm.querySelector('.form-submit');
    const originalText = btn.textContent;
    btn.textContent = '⏳ Transmitting...';
    btn.disabled = true;

    setTimeout(() => {
      btn.textContent  = originalText;
      btn.disabled     = false;
      formSuccessMsg.classList.add('visible');
      contactForm.reset();
      setTimeout(() => formSuccessMsg.classList.remove('visible'), 5000);
    }, 1500);
  });
}

/* ─────────────────────────────────────────────────────────────
   8. ACTIVE NAV LINK on scroll
───────────────────────────────────────────────────────────────*/
const sections  = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-link');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navAnchors.forEach(a => {
        a.classList.toggle('active-link', a.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));

/* ─────────────────────────────────────────────────────────────
   9. INIT — restore saved language
───────────────────────────────────────────────────────────────*/
const savedLang = localStorage.getItem('cn_lang') || 'en';
applyLanguage(savedLang);



/* loadin screen */


(function() {
      const screen   = document.getElementById('loader-screen');
      const bar      = document.getElementById('loader-bar');
      const pct      = document.getElementById('loader-percent');
      const status   = document.getElementById('loader-status');
      const messages = [
        'Initializing secure connection...',
        'Loading encrypted protocols...',
        'Authenticating neural matrix...',
        'Deploying firewall layers...',
        'Calibrating threat vectors...',
        'System online. Welcome, Agent.'
      ];
      let progress = 0;
      let msgIndex = 0;
      const interval = setInterval(() => {
        progress += Math.random() * 14 + 4;
        if (progress > 100) progress = 100;
        bar.style.width = progress + '%';
        pct.textContent = Math.floor(progress) + '%';
        const mi = Math.min(Math.floor(progress / 17), messages.length - 1);
        if (mi !== msgIndex) { msgIndex = mi; status.textContent = messages[msgIndex]; }
        if (progress >= 100) {
          clearInterval(interval);
          status.textContent = messages[messages.length - 1];
          setTimeout(() => { screen.classList.add('hidden'); }, 600);
        }
      }, 120);
    })();