let api = "https://api.exchangerate-api.com/v4/latest/INR";

// console.log(api)

let text = document.querySelector('#amount');
let  btn = document.querySelector('button');
let from = document.querySelector('#from')
let to = document.querySelector('#to');
let msg = document.querySelector('.msg');
let fromValue;
let toValue;

from.addEventListener("change", (e)=>{
    // console.log(e.target.value);
    fromValue =`${e.target.value}`;
    console.log(fromValue)
})

to.addEventListener("change", (e)=>{
    // console.log(e.target.value);
    toValue =`${e.target.value}`;
    console.log(toValue)
})

text.addEventListener( 'input', (e)=>{
    search =e.target.value
    // console.log(search);
})

btn.addEventListener('click', getData);


async function getData(){
    msg.innerHTML="converting..."
    let response =await fetch(api);
    let data = await response.json();
    // console.log(data)
    let fromRate = data.rates[fromValue];
    // console.log(fromRate)
	let toRate = data.rates[toValue];
	msg.innerHTML =
    `<span>${((toRate / fromRate) * search).toFixed(2)}</span>`

}


var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#main",
        // markers:true,
        start:"50% 50%",
        end:"100% 50%",
        scrub:2,
        pin:true
    }
});

tl
.to("#first",{
    top:"-50%"
}, 'a')

.to("#last",{
    bottom:"-50%"
}, 'a')




