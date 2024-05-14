let audio =document.getElementById('audio')
let volume =document.getElementById('volume')
let onOff =document.getElementById('on-off')

onOff.onclick = () => {
    if (audio.paused) {
        audio.play        
    } else
    audio.pause
}
volume.addEventListener("input",()=>{
    audio.volume = volume.value;
});