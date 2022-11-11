let display, value, c

display = document.getElementById('display')
value = document.querySelectorAll('.value')
c = document.getElementsByClassName('c')[0]

// Functions for Clear Iitems
c.addEventListener('click',() => {
    display.value = ''
})

value.forEach((btn) => btn.addEventListener("click", (e) => {
    let userChoice = e.target.value;
    if (display.value.length > 24){
        alert(`You can't Enter More Numbers`)
    } else if (NaN){
        display.value = `${display.value} is not a number`
    }
    else {
        display.value += userChoice
    }
    
}));

document.getElementById('result').addEventListener('click', result)

function result (){
    if (display.value == ''){
        // display.style.fontSize = '2rem'
        display.value = 'Enter a Number'
        setTimeout(function (){
            display.value = ''
        },1000)
        
    } else {
        console.log(display.value)
        display.value = eval(display.value)
    }
}

let color = document.querySelectorAll('.color').forEach((btn) => btn.addEventListener("click", (e) => {
    document.getElementsByClassName('calc')[0].className = `calc ${btn.value}`
    document.getElementById('display').style.color = `${btn.value}`
    
}));
