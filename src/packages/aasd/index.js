import Aasd from './aasd.vue';
import './aasd.scss';

Aasd.install = function(Vue) {
  Vue.component(Aasd.name, Aasd);
};

export default Aasd