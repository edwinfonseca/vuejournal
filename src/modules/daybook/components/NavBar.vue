<template>
    <nav class="navbar bg-primary">
        <a class="navbar-brand text-white" href="">
            <img class="d-inline-block aling-text-top mx-2"
                src="@/assets/logo.png"
                alt="vue logo"
                height="24">
                
                {{username}}
        </a>

        <div class="d-flex">
            <button class="btn btn-outline-info mx-2"
                @click="onLogout">
                <i class="fa fa-sign-out-alt"></i>
            </button>
        </div>
    </nav>
</template>

<script>
import useAuth from '@/modules/auth/composables/useAuth'
import { useRouter } from 'vue-router'
export default{
    setup(){
        const router = useRouter()
        const { username, logout } = useAuth()

        return{
            username,
            
            onLogout: ()=>{
                router.push({name: 'login'})
                logout()
            }
        }

    }
}
</script>