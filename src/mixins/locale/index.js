import { i18n } from '../../locales'

export default {
    methods: {
        ydTranslate() {
            return i18n.apply(this, arguments)
        }
    }
}