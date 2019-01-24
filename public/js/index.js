
    document.addEventListener("DOMContentLoaded", () => {
        console.log('Hi')
        axios.get('/dashboard')
        .then((res)=>{
            console.log(res)
        })
    })

    

