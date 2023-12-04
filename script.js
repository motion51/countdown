let input = document.querySelectorAll("input");
console.log(input);

//Enter the end Date manually you want
const endDate = "04 December 2023 06:015:40 PM";

function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end - now) / 1000;

    if(diff < 0) return;

    //convert into days
    input[0].value = Math.floor(diff / 3600 / 24);

    //Convert into Hours
    input[1].value = Math.floor(diff / 3600) % 24;

    //Conver into Minutes
    input[2].value = Math.floor(diff / 60) % 60;

    //Convert into Seconds
    input[3].value = Math.floor(diff) % 60;
}

setInterval(()=>{
    clock();
}, 1000)

