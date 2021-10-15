import Vue from 'vue'
import VueI18n from 'vue-i18n';
import zh from './zh'
import en from './en'
import ge from './ge'
import fr from './fr'
import elementEnLocale from 'element-ui/lib/locale/lang/en'
import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN'
import store from '../store/index.js'
console.log(store.state.langState,'i18n')
Vue.use(VueI18n)

const i18n = new VueI18n({
    locale:store.state.langState,
    messages: {
        'zh': zh,
        'en': en,
        'ge': ge,
        'fr': fr
    }
})
export default i18n;