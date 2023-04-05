

let btnEl = document.getElementById("btn")
let txtEl = document.getElementById("txt")
let p1El = document.getElementById("p1")
let p2El = document.getElementById("p2")
let p3El = document.getElementById("p3")

btnEl.addEventListener("click", function(){
    Calculations()
})

function Calculations(){
    a = `${txtEl.value} meters = ${(txtEl.value * 3.281).toFixed(3)} feet | ${txtEl.value} feet = ${(0.3048 * txtEl.value).toFixed(3)} meters`
    p1El.textContent = a
    b = `${txtEl.value} liters = ${(txtEl.value * 0.264).toFixed(3) } gallons | ${txtEl.value} gallons = ${(3.78541 * txtEl.value).toFixed(3)} liters`
    p2El.textContent = b
    c = `${txtEl.value} kilos = ${(txtEl.value * 2.204).toFixed(3)} pounds | ${txtEl.value} pounds = ${(0.453592 * txtEl.value).toFixed(3)} kilos`
    p3El.textContent = c
}