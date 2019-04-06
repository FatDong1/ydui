import TASDS from './tasds.vue';
import './tasds.scss';

TASDS.install = function(Vue) {
  Vue.component(TASDS.name, TASDS);
};

export default TASDS