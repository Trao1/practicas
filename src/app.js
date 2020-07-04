window.Vue = require('vue')
window.Buefy = require('buefy')

Vue.use(Buefy)

Vue.component('p-navbar', require('./components/Navbar.vue').default);

var app = new Vue({
    el: '#app'
})
