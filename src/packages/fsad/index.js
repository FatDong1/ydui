import Fsad from './fsad.vue';
import './fsad.scss';

Fsad.install = function(Vue) {
  Vue.component(Fsad.name, Fsad);
};

export default Fsad