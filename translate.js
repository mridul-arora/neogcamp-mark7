var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var txtErrorMsg = document.querySelector("#txt-errormsg");

 var url = "https://api.https://api.funtranslations.com/translate/klingon.json"
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function errorHandler(error){
    console.log("Error: " + error);
    txtErrorMsg.innerHTML = "Error: " + error;
}

function clickHandler() {
    var text = txtInput.value;
    var parametrizedURL = url + "?" + "text=" + text;

    function divOutput(out){        
        if(out.error) {
                        
        }else if(out.success){
            var displayOutput = "Translated text to klingon is as... ";
            txtOutput.innerHTML = displayOutput + out.contents.translated;
        }        
    }

    fetch(parametrizedURL)
    .then(response => response.json())
    .then(json => {
        if(json.error) throw json.error.message
        else divOutput(json)
    })
    .catch(errorHandler)
}

btnTrans.addEventListener("click", clickHandler);








