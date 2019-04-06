import Gasa from './gasa.vue';
import './gasa.scss';

Gasa.install = function(Vue) {
  Vue.component(Gasa.name, Gasa);
};

export default Gasa