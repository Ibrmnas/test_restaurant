(function () {
  const STORE_KEY = 'wb_lang';

  function getDict() { 
    return window.I18N_DICT || { en: {}, it: {} }; 
  }

  function t(lang, key) {
    const dict = getDict();
    return (dict[lang] && dict[lang][key]) || (dict.en && dict.en[key]) || '';
  }

  function apply(lang) {

    // Translate normal text
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(lang, key);
      if (val) el.textContent = val;
    });

    // ✅ Use correct placeholder attribute: data-i18n-ph
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      const key = el.getAttribute('data-i18n-ph');
      const val = t(lang, key);
      if (val) el.setAttribute('placeholder', val);
    });

    document.documentElement.lang = lang;

    document.getElementById('btn-en')?.classList.toggle('active', lang === 'en');
    document.getElementById('btn-it')?.classList.toggle('active', lang === 'it');

    window.dispatchEvent(new CustomEvent('wb:lang', { detail: { lang } }));
  }

  function setLang(lang) {
    lang = (lang === 'it') ? 'it' : 'en';
    localStorage.setItem(STORE_KEY, lang);
    window.__i18n = { lang, t: (key) => t(lang, key), set: setLang };
    apply(lang);
  }

  const saved = localStorage.getItem(STORE_KEY);
  const initial = saved || ((navigator.language || '').toLowerCase().startsWith('it') ? 'it' : 'en');

  window.__i18n = { lang: initial, t: (key) => t(initial, key), set: setLang };

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('btn-en')?.addEventListener('click', () => setLang('en'));
    document.getElementById('btn-it')?.addEventListener('click', () => setLang('it'));
    apply(initial);
  });

})();
