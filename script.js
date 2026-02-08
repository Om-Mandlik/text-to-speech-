var text =document.getElementById("text")
var read = document.getElementById("read")

function Read() {
    if (text.value) {
        const utterance = new SpeechSynthesisUtterance(text.value)
        const voices = window.speechSynthesis.getVoices();
        voices.forEach( Element => {
            console.log(Element)
        });
        utterance.voice = voices.find(voice =>voice.name.includes("Google"))      
        speechSynthesis.speak(utterance) 
    }
}