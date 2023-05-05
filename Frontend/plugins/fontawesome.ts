import { config, library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//以下は個別にアイコンを指定してimportする方法。こちらのほうが軽量で済む。
//{}には使いたいアイコン名を書く
//import { faCirclePlus, faBars } from '@fortawesome/free-solid-svg-icons'

// @see https://zenn.dev/one_dock/articles/16f1ddb1e49b2c
export default defineNuxtPlugin((nuxtApp) => {
  config.autoAddCss = false
  library.add(fas)
  //個別フォントをimportした場合は以下を使う
  //library.add(faCirclePlus, faBars)
  nuxtApp.vueApp.component('font-awesome-icon', FontAwesomeIcon)
})
