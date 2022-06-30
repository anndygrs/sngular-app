import fetch from "node-fetch";

const getData = () => {
    console.log('Initi');
    fetch('https://api.datos.gob.mx/v1/calidadAire')
        .then(response => response.json())
        .then(data => console.log(data));
}

getData();