const getData = () => {
    fetch('https://api.datos.gob.mx/v1/calidadAire')
        .then(response => response.json())
        .then(data => showData(data['results']));
}

window.onload = getData();