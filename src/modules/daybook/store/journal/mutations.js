

//?export const myAction = (state)=>{

//?}

export const setEntries = (state,entries)=>{
    state.entries= [...state.entries, ...entries]
    state.isLoading= false
}
export const updateEntry = (state,entry)=>{// entry actualizada

    // state.entries => es un arreglo....
    //*buscar el indice que coincida con el id
    const indx= state.entries.map(e=>e.id).indexOf(entry.id)
    //console.log(indx)
    // state.entries = ..entry
    state.entries[indx]=entry
    console.log(entry)

}
export const addEntry = (state, entry)=>{
    //state -> entries _> la nueva entrada deve ser la primera
    state.entries=[entry, ...state.entries]

}
export const deleteEntry = (state,id)=>{
    //remover la entrada que coincida con este id
    //! se devuelventodas las entradas que sean diferentes de el id en este caso solo una la que coincide
    state.entries=state.entries.filter(e=>e.id !==id )

}

export const clearEntries = (state)=>{
    state.entries=[]
}
