<template>
    <template v-if="entry">
    
        <div class="entry-title d-flex justify-content-between p-2">
            <div>
                <span class="text-success fs-3 fw-bold">{{day}}</span>
                <span class="mx-1 fs-3 ">{{month}}</span>
                <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
            </div>

            <div>
                <input type="file" 
                @change="onSelectImg"
                multiple
                v-show="false"
                accept="image/png, image/jpeg"
                ref="imgSelector">
                <button v-if="entry.id" class="btn btn-danger mx-2"
                @click="onDeleteEntry">
                    Borrar
                    <i class="fa fa-trash-alt"></i>
                </button>
                <button class="btn btn-primary"
                @click="selectImg">
                    Subir foto
                    <i class="fa fa-upload"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="d-flex flex-column px-3 h-75 ">
            <textarea placeholder="Que sucedio hoy?"
            v-model="entry.text"></textarea>
        </div>
        
        <img v-if="entry.picture && !localImg"
        :src="entry.picture" 
        alt="entry-img"
        class="img-thumbnail">

        <img v-if="localImg"
        :src="localImg" 
        alt="entry-img"
        class="img-thumbnail">
    </template>

    <Fab icon="fa-save" 
        @on:click="saveEntry"/>


</template>

<script>
import {defineAsyncComponent} from 'vue'
import {mapGetters, mapActions} from 'vuex' 
import getDayMonthYear from '../helpers/getDayMonthYear'
import uploadImage from '../helpers/uploadImage' 

import Swal from 'sweetalert2'

export default {
    name:'EntryView',
    props:{
        id:{
            type:String,
            required:true
        }
    },
    components:{
        Fab: defineAsyncComponent(()=>import('../components/Fab.vue'))
    },
    data(){
        return{
            entry:null,
            localImg:null,
            file:null
        }
    },
    
    computed:{
        ...mapGetters('journal',['getEntryById']),
        day(){
            const {day}= getDayMonthYear(this.entry.date)
            return day
        },
        month(){
            const {month}= getDayMonthYear(this.entry.date)
            return month
        },
        yearDay(){
            const {yearDay}= getDayMonthYear(this.entry.date)
            return yearDay
        },
    },
    methods:{
        ...mapActions('journal', ['updateEntry','createEntry','deleteEntry']),
        //*cargar entrada
        loadEntry(){
            let entry
            //console.log(entry)
            //* si id es igual a new crear nueva entrada
            if(this.id==='new'){
                entry={
                    text:'',
                    date:new Date().getTime()
                }
            }else{
                //*si no extiste se saca al usuario
                entry= this.getEntryById(this.id)
                if(!entry) return this.$router.push({name:'no-entry'})
            }
                this.entry= entry
            
        },
        async saveEntry(){
            new Swal({
                title:'Espere porfavor',
                allowOutsideClick: false
            })
            Swal.showLoading()
            
            //*se llamar la funcion para guardar la imagen en couldinary
            const picture = await uploadImage(this.file)

            this.entry.picture= picture 

            //* si esto tiene un valor significa que quiere actualizar
            if(this.entry.id){
                console.log('guardando entrada')
                //* disparar la accion del journal module
                await this.updateEntry(this.entry)
                //console.log(this.entry)
            }else{
                //*quiere crear una nueva entrada
                //console.log('crear una nueva entrada')
                //await action
                const id = await this.createEntry(this.entry) 
                //console.log(this.entry)
                //console.log(id)
                this.$router.push({name:'entry',params: {id}})
                //redirection al id de la nueva entrada 
            }
            // * limpiar file
            this.file=null

            Swal.fire('Guardado','entrada registrada con exito', 'success')

        }, 
        async onDeleteEntry(){
            const {isConfirmed} =await Swal.fire({
                title:'¿ests seguro ?',
                text:'una vez borrado no se podra recuperar',
                showDenyButton:true,
                confirmButtonText:'Si, estoy seguro'
            })
            //console.log({isConfirmed})
            if(isConfirmed){
                new Swal({
                    title:'Espere por favor',
                    allowOutsideClick:false
                })
                Swal.showLoading()
                
                //console.log('delete',this.entry)
                await this.deleteEntry(this.entry.id)
                //redireccionar al usario fuera de la ruta actual
                //return this.$router.push({name:'no-entry'})
                this.$router.push({name:'no-entry'})
                
                Swal.fire('Eliminado', '', 'success')
            }
        },
        onSelectImg(event){
            //console.log(event.target.files[0])
            const file =event.target.files[0]
            if(!file){
                this.localImg=null
                this.file=null
                return
            }
            this.file=file
            //*usar File Reader()
            const fr= new FileReader()
            fr.onload = ()=> this.localImg = fr.result
            fr.readAsDataURL(file) 
        },
        selectImg(){
            //console.log(this.$refs)
            this.$refs.imgSelector.click()
        }
    },
    created(){
        this.loadEntry()
        //console.log(this.id)
        //console.log(this.$router.params.id)
    },
    watch:{
        id(value, oldValue){
            this.loadEntry()
            //*que cambie la imagen al cambiar de entrada 
            if(value !== oldValue){
                this.localImg=null
            }
            //console.log({value,oldValue})

        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    &:focus{
        outline: none;
    }
}
img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color:#0000, $alpha:0.2);
}
</style>