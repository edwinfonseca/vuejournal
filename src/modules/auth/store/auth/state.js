

export default ()=> ({
    status: 'authenticating',// 'authenticated', 'not-authenticating' 'authenticating'
    user:null,
    idToken:null,
    refreshToken:null,
})


/*
export default ()=>({
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),//genera unos numeros+
            date: new Date().toDateString(),//crea: 
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            picture:null, // https://

        },
        {
            id: new Date().getTime()+1000,//genera unos numeros+
            date: new Date().toDateString(),//crea: 
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            picture:null, // https://

        },
        {
            id: new Date().getTime()+2000,//genera unos numeros+
            date: new Date().toDateString(),//crea: 
            text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum",
            picture:null, // https://

        },
    ],
}) */