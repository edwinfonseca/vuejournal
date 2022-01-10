import axios from 'axios' 

const journalApi= axios.create({
    baseURL: 'https://vue-demo-665d5-default-rtdb.firebaseio.com'
})

export default journalApi