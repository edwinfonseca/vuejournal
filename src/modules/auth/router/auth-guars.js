import store from '@/store'

const isAuthenticatedGuard = async(to, from, next)=>{
    const {ok} = await store.dispatch('auth/checkAuthentication')
    console.log(to, from, next)
    if(ok)next()
    else next({name:'login'})
}

export default isAuthenticatedGuard