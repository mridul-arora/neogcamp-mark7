var btnTrans = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var txtOutput = document.querySelector("#txt-output");
var txtErrorMsg = document.querySelector("#txt-errormsg");
var outputBox = document.querySelector("#outputbox");

 var url = "https://api.funtranslations.com/translate/klingon.json"
//var url = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

txtErrorMsg.style.display ="none";
outputBox.style.display = "none";

function errorHandler(error){
    console.log("Error: " + error);
    txtErrorMsg.innerHTML = "Error: " + error;
    txtErrorMsg.style.display = "block";
    outputBox.style.display = "none";
}

function clickHandler() {
    var text = txtInput.value;
    var parametrizedURL = url + "?" + "text=" + text;

    function divOutput(out){        
        if(out.error) {
            errorHandler(out.error.message);     
        }else if(out.success){
            txtOutput.innerHTML = out.contents.translated;
            outputBox.style.display = "block";
            txtErrorMsg.style.display ="none";
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








