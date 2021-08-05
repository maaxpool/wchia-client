import Vue from 'vue'
import VueI18n from 'vue-i18n'
// import routesI18n from '@/router/i18n'
import getLangOptions from '@/lang'

/**
 *  create i18n configure
 * @param locale
 * @param fallback
 * @returns {VueI18n}
 */
function initI18n(locale, fallback) {
  Vue.use(VueI18n)
  let i18nOptions = {
    locale,
    fallbackLocale: fallback,
    silentFallbackWarn: true,
    messages: getLangOptions()
  }
  return new VueI18n(i18nOptions)
}


export {
  initI18n,
}
