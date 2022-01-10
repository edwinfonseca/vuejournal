import daybookRouter from '@/modules/daybook/router'
describe('pruebas en el router module del daybook', () => {

    test('el router debe tener esta configuracion', async () => {
        //console.log(daybookRouter)
        expect(daybookRouter).toMatchObject({
            name: 'daybook',
            component: expect.any(Function),
            children:[
                {
                    path: '',
                    name: 'no-entry',
                    component: expect.any(Function),
                },
                {
                    path: ':id',
                    name: 'entry',
                    component:expect.any(Function),
                    //*enviar el id de la url
                    props:expect.any(Function)
                }
            ]
        })

        //expect((await daybookRouter.children[0].component()).default.name).toBe('NoEntrySelected')
        //expect((await daybookRouter.children[1].component()).default.name).toBe('EntryView')
        //expect(daybookRouter.children[0].component())
        const promiseRoutes =[]
        daybookRouter.children.forEach(child => promiseRoutes.push(child.component()))

        const routes =(await Promise.all(promiseRoutes)).map(r=> r.default.name)
        //console.log(routes)

        expect(routes).toContain('NoEntrySelected')
        expect(routes).toContain('EntryView')

    })
    

    test('debe de retornar el id de la ruta', () => {
        const route ={
            params:{
                id: 'ABC-123'
            }
        }
        //console.log(daybookRouter.children[1].props(route))
        //expect(daybookRouter.children[1].props(route)).toEqual({ id: 'ABC-123' })

        const entryRoute = daybookRouter.children.find(route=>route.name === 'entry')
        //console.log(entryRoute)
        expect(entryRoute.props(route)).toEqual({ id: 'ABC-123' })
    })
    
})
