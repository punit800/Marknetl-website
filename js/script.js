let count = document.querySelectorAll(".count")
let arr = Array.from(count)

arr.map(function(foorText){
    let startnumber = 0

    function counterup(){
        startnumber++
        foorText.innerHTML = startnumber

        if(startnumber == foorText.dataset.number){
            clearInterval(stop)
        }
    }
    let stop = setInterval(function(){
        counterup()
    },50)
});