

  import journalApi from "../../../../api/journalApi"
//?export const myAction = async ({commit})=>{


//?}

export const loadEntries= async ({commit})=>{
    const {data} = await journalApi.get('/entries.json')
    //console.log(data)
    //*en caso de no tener data
    if(!data){
      commit('setEntries',[])
      return
    }
    const entries = []
    for( let id of Object.keys(data)){
        //console.log(id)
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries)
    //console.log(entries)

}
export const updateEntry= async ({commit},entry)=>{ //entry debe ser un parametro
  // extraerl solo lo necesario //-id
    const { date,text,picture}= entry
    const dataSave ={date,text,picture}
    //console.log(commit)
    //console.log(dataSave)
  // await journalApi.put(`PHAT .json`, dataToSave)
  const resp=await journalApi.put(`/entries/${entry.id}.json`,dataSave)
  console.log(resp)

  //Comit de una mutation -> updateEntry
  commit('updateEntry',{...entry})
}
//* crear una nueva entrada 
//TODO:tiene errores
export const createEntry= async ({commit}, entry)=>{
  //datatoSave
  const { date,text,picture}= entry
  const dataToSave= {date,text,picture}

  //const {data}=await journalApi.post(`entries/${entry.id}.json`,dataSave)
  const {data} = await journalApi.post(`entries.json`,dataToSave)

  // data = "name": {"-Mpy59UpEA8g6-RKSyAQ"}
  dataToSave.id = data.name
  //commit de addEntry
  commit('addEntry',{dataToSave})

  return data.name
}

export const deleteEntry = async ({commit},id)=>{
  //await journalApi.post(`entries.json`,dataToSave)
  await journalApi.delete(`/entries/${id}.json`)

  //commit deleteEntry
  commit('deleteEntry',id)
  return id
}