let speech = new SpeechSynthesisUtterance();

let voices = [];

let SelectVoice = document.querySelector('select');

window.speechSynthesis.onvoiceschanged = ()=>{
    voices = window.speechSynthesis.getVoices();
    speech.voice = voices[0];

    voices.forEach((voice, i) => (SelectVoice.options[i] = new Option(voice.name, i)));
};

SelectVoice.addEventListener('change', () =>{
    speech.voice = voices[SelectVoice.value];
});

document.querySelector("button").addEventListener("click", ()=>{
    speech.text = document.querySelector('textarea').value;
    window.speechSynthesis.speak(speech);
});