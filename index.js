console.log('this is alarm clock');
const alarmSubmit=document.getElementById('alarmSubmit');

alarmSubmit.addEventListener('click',setAlarm);
var audio = new Audio('http://www.cooperfulleon.com/sites/cooperfulleon.com/files/sounder_tones/standard/cooper_fulleon_sounder_tone_12.wav');
audio.play();

function ringBell(){
    audio.play();
}

function setAlarm(e){
    e.preventDefault();
    const alarm =document.getElementById('alarm');
    alarmDate =new Date(alarm.value)
    console.log(`Setting Alarm for ${alarmDate}...`);
    now=new Date();

    let timeToAlarm= alarmDate-now;
    console.log(timeToAlarm);
    if(timeToAlarm>=0){
        setTimeout(() => {
            console.log("Ringing now");
            ringBell();
        }, timeToAlarm);
    }
}
// function to validate form
let form = document.getElementById('alarm');
form.addEventListener('blur',()=>{
    console.log('form is blurred');
    let regex = /[0-9]{4}-(0[1-9]|1[0-2])-(0[1-9]|[1-2][0-9]|3[0-1]) (2[0-3]|[01][0-9]):[0-5][0-9]:[0-5][0-9]/
    let str = form.value;
    if(regex.test(str)){
        console.log('vlaue is correct')
    }
    else{
        console.log('value is not correct')
        alert('value in form is incorrct')
    }
})