const series = [
    {
        nombre: "",
        descarga: "../images/positivo.png",
        color: "blanco"
    },
    {
        nombre: "",
        descarga: "../images/negativo.png",
        color: "gris"
    },
    {
        nombre: "",
        descarga: "../images/bajar.png",
        color: "blanco"
    },
    {
        nombre: "",
        descarga: "../images/positivo.png",
        color: "gris"
    },
    {
        nombre: "",
        descarga: "../images/negativo.png",
        color: "blanco"
    },
    {
        nombre: "",
        descarga: "../images/bajar.png",
        color: "gris"
    },
];

const body = document.querySelector('.tabla-body-series');

series.forEach(series => {

    const { color, nombre, descarga } = series;

    const fila = document.createElement('tr');
    fila.innerHTML = `
            <td class="${color}">${nombre}</td>
            <td class="descarga ${color}"><img src="${descarga}" alt="image-${nombre}"></td>
    `
    body.appendChild(fila);
});