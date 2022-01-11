import { createStore } from "vuex"
import journal from '@/modules/daybook/store/journal'
import { journalState } from "../../../../mock-data/test-journal-state"
import authApi from "../../../../../../src/api/authApi"


const createVuexStore = (initialState) => createStore({
    modules:{
        journal:{
            ...journal,
            state:{...initialState}
        }
    }
})

describe('Vuex -pruebas en journal Module', ()=>{
    beforeAll(async ()=>{
        const {data} = await authApi.post(':signInWithPassword',{
            email:'test@test.com',
            password: '123456',
            returnSecureToken: true
        })
        localStorage.setItem('idToken', data.idToken)
    })
})

describe('Vuex- Pruebas en el journal module', () => {
    //basicas
    test('este es el estado inicial, debe de tener este state', () => {
        const store =createVuexStore(journalState)
        //console.log(store)
        const {isLoading, entries}=store.state.journal
        expect(isLoading).toBeFalsy()
        expect(entries).toEqual(journalState.entries)

    })

    //*mutations
    test('mutation: setEntries', () => {
        const store =createVuexStore({isLoading: true, entries: []})
        //console.log(store)
        store.commit('journal/setEntries', journalState.entries)

        expect(store.state.journal.entries.length).toBe(2)
        expect(store.state.journal.isLoading).toBeFalsy()
    })
    test('mutation: updateEntry', () => {
        //create store
        const store =createVuexStore(journalState)
        //update entry
        const updatedEntry={
            id   : '-Mq-5k0LKTpEFm-PMyjG',
            date : 1638531160179,
            picture : "https://res.cloudinary.com/dum0cdxqf/image/upload/v1638632001/qt2eiugubujoooe0sq8r.jpg",
            text : "actualizar desde pruebas"
        }

        //commit de la mutacion
        store.commit('journal/updateEntry',updatedEntry)

        //expects
        //entries.lenght=2
        expect(store.state.journal.entries.length).toBe(2)
        //entries tiene que existir el updateEntry toEqual
        expect(
            store.state.journal.entries.find(e=>e.id=updatedEntry.id)
            ).toEqual(updatedEntry)
    })

    test('mutation: addEntry y deleteEntry', () => {
        //crear store
        const store =createVuexStore(journalState)
        //comit de addEntry {id:'ABC123', text:'Hola mundo' }
        store.commit('journal/addEntry',{id:'ABC123', text:'Hola mundo'})
        //expects
        //entradas 3
        expect(store.state.journal.entries.length).toBe(3)
        //entrada con el id ABC123 exista
        expect(store.state.journal.entries.find(e=>e.id ==='ABC123')).toBeTruthy()

        //comit deleteEntry, 'ABC123'
        store.commit('journal/deleteEntry','ABC123')
        //expects
        //entradas 2
        expect(store.state.journal.entries.length).toBe(2)
        //entrada con el id ABC123 no exista
        expect(store.state.journal.entries.find(e=>e.id ==='ABC123')).toBeFalsy()

    })
    
    //* getters
    test('getters: getEntriesByTerm getEntryById', () => {
        const store =createVuexStore(journalState)

        //console.log(store.getters['journal/getEntriesByTerm'](''))
        const [entry1,entry2] = journalState.entries

        expect(store.getters['journal/getEntriesByTerm']('').length).toBe(2)
        expect(store.getters['journal/getEntriesByTerm']('aqui').length).toBe(1)

        expect(store.getters['journal/getEntriesByTerm']('aqui')).toEqual([entry2])

        //-Mq-VUjJ5tUe31ITnGTs
        expect(store.getters['journal/getEntryById']('-Mq-5k0LKTpEFm-PMyjG')).toEqual(entry1)
        
    })

    //* actions
    test('actions: loadEntries', async () => {
        const store =createVuexStore({isLoading: true, entries: []})

        await store.dispatch('journal/loadEntries')

        expect(store.state.journal.entries.length).toBe(13)
    })
    
    
    
})
