import { App } from 'vue'
import { createI18n } from 'vue-i18n'

export default (app: App) => {
    const i18n = createI18n({
        messages: {
            zhCN,
        }
    })
}
