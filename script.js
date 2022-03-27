var rnd = randomColor()
document.body.style.backgroundColor = `${rnd}`;
document.getElementById("colorPicker").value = `${rnd}`;
document.getElementById("change-color").style.color = `${rnd}`;
document.getElementById("change-color-social").style.color = `${rnd}`;
document.getElementById("hex").value = `${rnd}`;
document.getElementById("rgb").value = `${rnd}`;
const color = rnd
const r = parseInt(color.substr(1,2), 16)
const g = parseInt(color.substr(3,2), 16)
const b = parseInt(color.substr(5,2), 16)
document.getElementById("rgb").value = `rgb(${r}, ${g}, ${b})`

// functions

function randomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function colorPicker() {
	var a = document.getElementById("colorPicker").value;
	document.body.style.backgroundColor = `${a}`;
	const color = a
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
	document.getElementById("rgb").value = `rgb(${r}, ${g}, ${b})`
}

function customColor() {
	var a = document.getElementById("customColor").value;
	document.body.style.backgroundColor = `${a}`;
    document.getElementById("colorPicker").value = `${a}`;
	document.getElementById("change-color").style.color = `${a}`;
	document.getElementById("change-color-social").style.color = `${rnd}`;
	document.getElementById("hex").value = `${a}`;
	document.getElementById("rgb").value = `${a}`;
	const color = a
    const r = parseInt(color.substr(1,2), 16)
    const g = parseInt(color.substr(3,2), 16)
    const b = parseInt(color.substr(5,2), 16)
	document.getElementById("rgb").value = `rgb(${r}, ${g}, ${b})`
}

function randomButton() {
var rb = randomColor()
document.body.style.backgroundColor = `${rb}`;
document.getElementById("colorPicker").value = `${rb}`;
document.getElementById("hex").value = `${rb}`;
document.getElementById("rgb").value = `${rb}`;
document.getElementById("change-color").style.color = `${rb}`;
document.getElementById("change-color-social").style.color = `${rb}`;
const color = rb
const r = parseInt(color.substr(1,2), 16)
const g = parseInt(color.substr(3,2), 16)
const b = parseInt(color.substr(5,2), 16)
document.getElementById("rgb").value = `rgb(${r}, ${g}, ${b})`
}

function selectText(x) {
	document.getElementById(x).select();
}

// other

let hexInput = document.querySelector('#hex');
let colorInput = document.querySelector('#colorPicker');

colorInput.addEventListener('input', () =>{
    let color = colorInput.value;
    hexInput.value = color;
});

// Dont Touch

setInterval(() => {
	  console.log('Source Code - https://github.com/vsl-dev/color-picker');
})
