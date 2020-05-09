// let json = text;

let text = textapi.sentiment({ 'text': 'John is a very good footballer player' }, 
                function(error, response) {
                    if(error === null) {
                        console.log(response);
                        return response;
                    }
                }
            );
console.log(text);
        