import { shallowMount, mount } from '@vue/test-utils'
import Vue from 'vue';
// import Cell from '../cell.vue';


describe('Cell.vue', () => {
    const wrapper = shallowMount(Cell, {
        
    });
    
    // it('文案展示', () => {
    //     wrapper.setProps({ title: '测试title', subTitle: '测试subTitle', desc: '测试desc', showIcon:true });

    //     return Vue.nextTick().then(function () {
    //         expect(wrapper.find('.yd-cell-title').text()).toBe('测试title');
    //         expect(wrapper.find('.yd-cell-sub-title').text()).toBe('测试subTitle');
    //         expect(wrapper.find('.yd-cell-desc').text()).toBe('测试desc');
    //         expect(wrapper.find('.yd-cell-icon').isEmpty()).toBe(false);
            
    //     })
    // });

});