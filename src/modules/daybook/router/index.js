export default {
    name: 'daybook',
    component: () => import(/* webpackChunkName: "daybooklayout" */ '@/modules/daybook/layouts/DayBookLayouts'),
    children:[
        {
            path: '',
            name: 'no-entry',
            component: ()=>import(/* webpackChunkName: "daybook-no-entry"*/ '@/modules/daybook/views/NoEntrySelected.vue')
        },
        {
            path: ':id',
            name: 'entry',
            component:()=>import(/* webpackChunkName: "daybook-EntryView"*/ '@/modules/daybook/views/EntryView'),
            //*enviar el id de la url
            props:(route)=>{
                return{
                    id: route.params.id
                }
            }
        }
    ]
    
}