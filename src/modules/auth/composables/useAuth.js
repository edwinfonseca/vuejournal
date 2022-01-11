import { computed } from "vue"
import { useStore } from "vuex"


const useAuth = ()=>{
    const store = useStore()

    const createUser = async ( user)=>{
        console.log(user)
        //TODO: store.dispatch('auth/createUser', user)
        const resp = await store.dispatch('auth/createUser', user)
        return resp
        // return{ok: false, message:'EMAIL_EXISTS'}
    }

    const loginUser = async(user)=>{
        const resp = await store.dispatch('auth/signInUser', user)
        return resp
    }

    const checkAuthStatus =async()=>{
        const resp = await store.dispatch('auth/checkAuthentication')
        return resp
    }
    
    const logout = ()=>{
        store.commit('auth/logout')
        //limpiar las entradas
        store.commit('journal/clearEntries')
    }

    return{
        createUser,
        checkAuthStatus,
        loginUser,
        logout,

        authStatus: computed(()=> store.getters['auth/currentStage']),
        username: computed(()=> store.getters['auth/username'])

    }
}

export default useAuth