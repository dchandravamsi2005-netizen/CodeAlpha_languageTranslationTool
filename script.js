async function translateText(){

    let text =
    document.getElementById("inputText").value;

    let source =
    document.getElementById("sourceLang").value;

    let target =
    document.getElementById("targetLang").value;

    let loader =
    document.getElementById("loader");

    loader.classList.remove("hidden");

    try{

        let response = await fetch(
        "https://translate.argosopentech.com/translate",
        {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                q:text,
                source:source,
                target:target,
                format:"text"
            })
        });

        let data = await response.json();

        document.getElementById("outputText").value =
        data.translatedText;

    }
    catch(error){
    console.error(error);
    alert("Translation Failed: " + error.message);
}

    loader.classList.add("hidden");
}

function copyText(){

    let text =
    document.getElementById("outputText");

    text.select();

    document.execCommand("copy");

    alert("Copied Successfully");

}

function speakText(){

    let speech =
    new SpeechSynthesisUtterance(
    document.getElementById("outputText").value
    );

    window.speechSynthesis.speak(speech);

}