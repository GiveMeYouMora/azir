import { massNames } from "./name.js"
import {massDiseas} from "./diseas.js"
import {massProfetion} from "./profession.js"


let title = document.getElementById("title")
let persone_block = document.querySelector(".main-persone_info")
let btn_Generation = document.getElementById("generate")
let persone_list = document.querySelectorAll('.person-info_item')

console.log (persone_list)
const random= (min,max)=> {
    return Math.floor(Math.random()*(max-min+1))+min;}
btn_Generation.onclick= () => {
    generate();
}
    persone_block.style.display="block"
function generate() {
    let name =massNames[random(0,massNames.length)];
    let prof =null
    let age = random(10,100);
    let diseas =null
    let prof_ex =null
    if (age<18) {
        prof_ex = age
        prof = 'jobless'
    } else {
        prof_ex = random (0, age-18)
        prof =massProfetion[random(0,massProfetion.length)];
    }
    if (random(1,3)==1) {
        diseas = 'none'
    } else {
        diseas =massDiseas[random(0,massDiseas.length)];
    }
    persone_list[0].innerText = `Name: ${name}`;
    persone_list[1].innerText = `profetion: ${prof}`;
    persone_list[2].innerText = `work expirience: ${prof}`;
    persone_list[3].innerText = `age: ${age}`;
    console.log(age);
    persone_list[4].innerText = `diseas: ${diseas}`;
}
