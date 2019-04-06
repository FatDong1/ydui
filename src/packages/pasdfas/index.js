import Pasdfas from './pasdfas.vue';
import './pasdfas.scss';

Pasdfas.install = function(Vue) {
  Vue.component(Pasdfas.name, Pasdfas);
};

export default Pasdfas