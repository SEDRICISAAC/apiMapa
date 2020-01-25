 class Display{
    constructor(){
        this.estudiantes = '';
        this.Url = 'http://localhost:4000/api/estudiantes'
    }

    consumirApi(){
        var http = new XMLHttpRequest();
        http.open('GET', this.Url, false);
        http.send(null);

        if(http.status == 200){
            this.mapa(JSON.parse(http.response))
        }
    } 

    mapa(estudiantes){
        const map = L.map('mapa').setView([-0.2247332, -78.5179488], 13);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        L.marker([-0.2247332, -78.5179488]).addTo(map).bindPopup('Yavirac Institute');

        estudiantes.forEach(element => {
            let nombre = element.nombre;
            L.marker(element.latlong).addTo(map).bindPopup(nombre);
        });
    }
}

let view = new Display();

view.consumirApi();