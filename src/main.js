import { createApp } from 'vue'
import App from './App.vue'
import store from "./store/index"
import router from "./router"

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
  faCheckCircle,
  faExclamationCircle,
  faVideoCamera
} from "@fortawesome/free-solid-svg-icons"

library.add(faCheckCircle)
library.add(faExclamationCircle)
library.add(faVideoCamera)

createApp(App)
  .use(store)
  .use(router)
  .component("fa-icon", FontAwesomeIcon)
  .mount("#app")

import "bootstrap/dist/css/bootstrap.min.css"