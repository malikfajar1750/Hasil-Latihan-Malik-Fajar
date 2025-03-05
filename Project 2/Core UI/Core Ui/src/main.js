import { createApp } from 'vue'
import App from './App.vue'

// Import CoreUI Vue.js
import { CContainer, CRow, CCol } from '@coreui/vue'
import '@coreui/coreui/dist/css/coreui.min.css'


// import CCarousel from '@coreui/vue/src/components/carousel/CCarousel'
const app = createApp(App)

// Register CoreUI components globally (optional)
app.component('CContainer', CContainer)
// app.component('CCarousel', CContainer)
app.component('CRow', CRow)
app.component('CCol', CCol)

app.mount('#app')
