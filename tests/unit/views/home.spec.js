
import {shallowMount} from '@vue/test-utils'
import Home from '../../../src/views/Home'
describe('Preubeas de Home view',()=>{
    test('debe hacer match con snapshot', () => {
        const wrapper= shallowMount(Home)
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('hacer click en uno de los botones debe redireccionar a no-entry', () => {

        const mockRouter = {
            push: jest.fn()
        }


        const wrapper = shallowMount(Home, {
            global:{
                mocks:{
                    $router: mockRouter
                }
            }
        })

        wrapper.find('button').trigger('click')

        expect(mockRouter.push).toHaveBeenCalled()
        expect(mockRouter.push).toHaveBeenCalledWith({name: 'no-entry'})

        
    })
    
    
})