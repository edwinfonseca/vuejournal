import uploadImage from '@/modules/daybook/helpers/uploadImage.js'

import axios from 'axios'
import cloudinary from 'cloudinary'

cloudinary.config({
    cloud_name:'dum0cdxqf',
    api_key:'333293418393299',
    api_secret:'K4xebP4CugYi5nzF5GRHvOTLeEs',
})

describe('pruebas en uploadImage.js', () => {
    test('debe cargar un archivo y cargar el url', async (done) => {
        const {data} = await axios.get('https://res.cloudinary.com/dum0cdxqf/image/upload/v1638631347/ch0ri3f7ycta8jdess3v.jpg',{
            responseType: 'arraybuffer'
        })

        const file = new File([data], 'foto.jpg')
        //console.log(file)

        const url = await uploadImage(file)

        expect (typeof url).toBe('string')

        //tomar el id
        //console.log(url)
        const segments = url.split('/')

        const imgId = segments[segments.length-1].replace('.jpg','')
        //console.log({imgId})

        cloudinary.v2.api.delete_resources(imgId,{},()=>{
            done()
        })
        
    })
    
})
