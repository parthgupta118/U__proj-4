

const fetchData = (text) => {
   return fetch('http://localhost:8082/test',{
    method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ text })
    })
}

export { handleSubmit };

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    console.log("::: Form Submitted :::");
    fetchData(formText)
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = `Text: ${res.text} <br> Polarity: ${res.polarity} <br> Confidence: ${res.polarity_confidence}`;
    }).catch(err => console.log(err));
}
// module.exports = handleSubmit;
