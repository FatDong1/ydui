import Test from './test.vue';
import './test.scss';

Test.install = function(Vue) {
  Vue.component(Test.name, Test);
};

export default Test