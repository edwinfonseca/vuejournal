

//?export const myAction = (state)=>{
//?return state.algo
//?}

//* retornar una nueva funcion
export const getEntriesByTerm = (state)=> (term='')=>{
    if(term.length===0) return state.entries
    //*filter para filtrar las entradas si almenos una letra o palabra coincide con lo que se esta buscando
    return state.entries.filter(entry => entry.text.toLowerCase().includes(term.toLowerCase()) )
}

//*resibe el ID como un argumento
export const getEntryById = (state)=> (id='1')=>{
    const entry= state.entries.find(entry=> entry.id===id)
    if(!entry) return
    return {...entry} //Todo:probar
}