function speekMessage(message){
    console.log(message);
    const speechMessage = new SpeechSynthesisUtterance(message);
    const Allvoices = speechSynthesis.getVoices(); //array
    speechMessage.voice = Allvoices[0];

    speechSynthesis.speak(speechMessage)
}

// speekMessage('hello')