btn1 = document.getElementById("btn");


function Speake(text){
    let speketxt = new window.SpeechSynthesisUtterance(text)
    speketxt.rate = 1;
    speketxt.lang = "hi-GB";
    speketxt.pitch = 1;
    speketxt.volume = 1;
    window.speechSynthesis.speak(speketxt);
}

function wishMe (){
    let datetimes = new Date();
    let jourse = datetimes.getHours()
    if(jourse>=0&&jourse<=12){
        Speake("Good day")
    }else{
        Speake("Good night")
    }
}

window.addEventListener("load",wishMe)


let speechrecongnise = window.SpeechRecognition || window.webkitSpeechRecognition;
let recongnize = new speechrecongnise();
recongnize.onresult=(event)=>{
    let currentIndex = event.resultIndex;
    let transcript =  event.results[currentIndex][0].transcript
    btn1.innerText = transcript;
    takeCommand(transcript.toLowerCase())
    btn1.innerText = "Click"
}

function takeCommand(script){
    if(script.includes("hello")){
        Speake(script)
    }else if(script.includes("open youtube")){
        window.open("https://www.youtube.com/")
    }else if(script.includes("open")){
        window.open(`https://www.${script.split(" ")[1]}`)
    }
}

btn1.addEventListener("click",()=>{
    btn1.innerText = "lestning..."
    recongnize.start();
})