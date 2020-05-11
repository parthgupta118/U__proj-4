

const fetchData = (text) => (fetch('http://localhost:8082/test',{
    method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    }).then(res => res.json())
);

const validateUrl = (url) => (/^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(url));

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
    if(validateUrl(formText)){
        console.log("The url is valid");
    }
    else {
        console.log("The url is invalid");
    }

    fetchData(formText)
    .then(function(res) {
        document.getElementById('results').innerHTML = `Text: ${res.text} <br><br> Polarity: ${res.polarity} <br><br> Confidence: ${res.polarity_confidence}`;
    }).catch(err => console.log(err));
}


// module.exports = handleSubmit;
export { handleSubmit, fetchData, validateUrl };
