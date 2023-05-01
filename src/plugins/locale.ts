import { App, nextTick } from 'vue'
import { createI18n } from 'vue-i18n'
import { loadLocaleFile } from '@/locale'

export default (app: App) => {
    const i18n = createI18n({

    })
    i18n.global.locale = 'en'
    document.querySelector('html')!.setAttribute('lang', i18n.global.locale)
    app.use(i18n)

    loadLocaleFile(i18n.global.locale).then(res => {
        i18n.global.setLocaleMessage(i18n.global.locale, res)
        return nextTick()
    })
}

