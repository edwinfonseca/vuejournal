
import {shallowMount} from '@vue/test-utils'
import About from '../../../src/views/About'
describe('Preubeas de about view',()=>{
    test('debe hacer match con snapshot', () => {
        const wrapper= shallowMount(About)
        expect(wrapper.html()).toMatchSnapshot()
    })
    
})