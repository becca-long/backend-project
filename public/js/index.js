
    document.addEventListener("DOMContentLoaded", () => {
        axios.get('/dashboard')
        .then((res)=>{
            console.log(res)
        })
    })



