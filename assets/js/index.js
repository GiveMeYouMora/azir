import { massNames } from "./name.js"
import {massDiseas} from "./diseas.js"
import {massProfetion} from "./profetion.js"


let title = document.getElementById("title")
let persone_block = document.querySelector(".main-persone_info")
let btn_Generation = document.getElementById("generate")
let persone_list = document.querySelectorAll('.person-info_item')

console.log (persone_list)
const_random= (min,max)=> {
    return Math.floor(Math.random()*(max-min+1))+min;}
btn_Generation.onclick= () => {
    generate();

    persone_block.style.display="block"
}
function generate() {
    let name =massNames[random(0,massNames.length)];
    let prof =massProfetion[random(0,massProfetion.length)];
    let age = random(0,100);
    let diseas =massDiseas[random(0,massDiseas.length)];;
    persone_list[0].innerText = `Name: ${name}`;
    persone_list[1].innerText = `profetion: ${prof}`;
    persone_list[2].innerText = `age: ${age}`;
    console.log(age);
    persone_list[3].innerText = `diseas: ${diseas}`;
}
