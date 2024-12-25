import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import VueViewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'

const app = createApp(App)

app.use(router)
app.use(VueViewer)

VueViewer.setDefaults({ "inline": false, "button": true, "navbar": false, "title": false, "toolbar": false, "tooltip": false, "movable": false, "zoomable": false, "rotatable": false, "scalable": false, "transition": false, "fullscreen": true, "keyboard": false})

app.mount('#app')
