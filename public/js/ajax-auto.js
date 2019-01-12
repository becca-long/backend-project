// create an object for our application "MYAPP" and put it on the global window object
window.MYAPP = window.MYAPP || {}

;
(function () {
    //AJAX AUTO takes in data from XMLHttpRequest, Input datalis
    function ajaxAuto(data, input, datalist) {
        data.forEach((item)=>{
            input.placeholder = "Loading options..."
            let option = document.createElement('option')
            option.value = item
            datalist.appendChild(option)
        })
        console.log('Success')
        input.placeholder = "Search"
    }


    // export the initHomepage function so it may be called outside of this module
    window.MYAPP.ajaxAuto = ajaxAuto
})()