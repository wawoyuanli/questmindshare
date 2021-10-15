import Vue from 'vue'
import  VueI18n  from 'vue-i18n';
import zh from './zh'
import en from './en' 
import ge from './ge'
import fr from './fr'
import elementEnLocale from 'element-ui/lib/locale/lang/en' 
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
Vue.use(VueI18n)
const i18n = new VueI18n({
    locale: 'zh',
    messages: {
        'zh': {
            zh,
            ...elementZhLocale
        },
        'en': {
            en,
            ...elementEnLocale
        },
        'ge':ge,
        'fr':fr
    }
})
export default i18n;