import Index from './index.vue';
// eslint-disable-import/no-extraneous-dependencies
const Vue = require('vue');

new Vue({
  render: (h) => h(Index),
}).$mount('#app');
