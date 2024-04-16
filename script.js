
const price = document.querySelector(".value");
const progress = document.querySelector(".slide");
const checkbox = document.querySelector("#switch");
const slide = document.querySelector("#price-range");
const pageviews = document.querySelector(".pageviews");
const time = document.querySelector(".month");
const check = document.querySelector(".check");

check.addEventListener("click", function(){
    check.classList.toggle('active');
    checkIt();
});

slide.addEventListener("input", checkIt);

function checkIt() {
    if(slide.value == 1 && check.classList.contains('active')){
        progress.style.width = 0 + "%";
        pageviews.innerHTML =  10 + "K PAGEVIEWS";
        price.innerHTML = (8 - (8 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slide.value == 1){
        progress.style.width = 0 + "%";
        pageviews.innerHTML =  10 + "K PAGEVIEWS";
        price.innerHTML = 8;
        time.innerHTML = "/month";
    }else if(slide.value == 2  && check.classList.contains('active')){
        progress.style.width = 25 + "%";
        pageviews.innerHTML =  50 + "K PAGEVIEWS";
        price.innerHTML = (12 - (12 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slide.value == 2){
        progress.style.width = 25 + "%";
        pageviews.innerHTML =  50 + "K PAGEVIEWS";
        price.innerHTML = 12;
        time.innerHTML = "/month";
    }else if(slide.value == 3  && check.classList.contains('active')){
        progress.style.width = 50 + "%";
        pageviews.innerHTML =  100 + "K PAGEVIEWS";
        price.innerHTML = (16 - (16 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slide.value == 3){
        progress.style.width = 50 + "%";
        pageviews.innerHTML =  100 + "K PAGEVIEWS";
        price.innerHTML = 16;
        time.innerHTML = "/month";
    }else if(slide.value == 4  && check.classList.contains('active')){
        progress.style.width = 75 + "%";
        pageviews.innerHTML =  500 + "K PAGEVIEWS";
        price.innerHTML = (24 - (24 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slide.value == 4){
        progress.style.width = 75 + "%";
        pageviews.innerHTML =  500 + "K PAGEVIEWS";
        price.innerHTML = 24;
        time.innerHTML = "/month";
    }else if(slide.value == 5 && check.classList.contains('active')){
        progress.style.width = 100 + "%";
        pageviews.innerHTML =  1 + "M PAGEVIEWS";
        price.innerHTML = (32 - (32 * 0.25)) * 12;
        time.innerHTML = "/year";
    }else if(slide.value == 5){
        price.innerHTML = 32;
        progress.style.width = 100 + "%";
        pageviews.innerHTML =  1 + "M PAGEVIEWS";
        time.innerHTML = "/month";
    }  
}