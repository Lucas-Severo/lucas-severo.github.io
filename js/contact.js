var form = document.getElementById("form");

form.addEventListener("submit", function(ev) {
    ev.preventDefault();
    var data = new FormData(form);
    form.reset();
    ajax("post", "https://formspree.io/mqkbyzvp", data);
});


function ajax(method, url, data) {
    fetch(url, 
    {
        headers: {"Accept": "application/json"},
        method: method,
        body: data
    })
    .then(response => {return response.json()})
    .then(response => {
        const responseElement = document.querySelector(".response");
        if(response.ok == true)
        {
            responseElement.style.backgroundColor = "lightgreen"
            responseElement.innerHTML = "Formulário enviado com sucesso!"
        } else {
            responseElement.style.backgroundColor = "red"
            responseElement.innerHTML = "Falha ao enviar o formulário."
        }

        setTimeout(function() {
            responseElement.style.backgroundColor = ""
            responseElement.innerHTML = ""
        }, 5000)
    });
}

