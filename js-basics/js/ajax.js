
window.addEventListener("load", (e) => {
    const newOption = document.createElement("option");
    const places = document.querySelector('#places');

    fetch(`https://api.meteo.lt/v1/places`)
    .then(response => data=response.json())
    .then( (data) => {
        for(const place of data){
            let option = places.appendChild(newOption.cloneNode(true));
            option.setAttribute('value', place.name);
        }
    })
    
});