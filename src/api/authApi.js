import axios from 'axios' 

const authApi= axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params:{
        key:'AIzaSyD4P3dswdMkNDdZyTURwrn6M0dvfKHyi7k'
    }
})

console.log(process.env.NODE_ENV) // TEST durante testing

export default authApi