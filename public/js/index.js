// make sure that our global object "MYAPP" exists
window.MYAPP = window.MYAPP || {};
(function () {
    const MYAPP = window.MYAPP
    const dataList = document.getElementById('music-list')
    const input = document.getElementById('music-search');
    const inputForm = document.getElementById('music-search-form')
    document.addEventListener("DOMContentLoaded", () => {
        axios.get('/api/test-data') // CALLS DATA FROM AN API
            .then((res) => {
                MYAPP.ajaxAuto(res.data, input, dataList) // FUNCTION TAKES IN THE DATA, THE INPUT, AND THE DATALIST
            })
    })
    inputForm.addEventListener('submit', (evt) => {
        evt.preventDefault();
        console.log(input.value) // INPUT.VALUE IS THE USERS SEACH
    })

})()