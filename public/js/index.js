// make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {}

;
(function () {
    // NOTE: referencing "$" and "MYAPP" inside this module prevents standard from
    // yelling at us about unreferenced variables
    const MYAPP = window.MYAPP



    const dataList = document.getElementById('music-list')
    const input = document.getElementById('music-search');
    const inputForm = document.getElementById('music-search-form')

    document.addEventListener("DOMContentLoaded", init)

    function init (){
        // CALLS DATA FROM AN API
        axios.get('/api/test-data')
            .then((res)=>{
                // FUNCTION TAKES IN THE DATA, THE INPUT, AND THE DATALIST
                MYAPP.ajaxAuto(res.data, input, dataList)
            })
    }

    // INPUT.VALUE IS WHAT THE USERS SEACH
    inputForm.addEventListener('submit', (evt)=>{
        evt.preventDefault()
        console.log(input.value)
    })
    
})()




