//---- Functions ----

function getCountries(id, start) {
    let countries = [];
    let tableRows = document.getElementById(id).rows;
    for (let i = start; i < tableRows.length; i++) {
        let elem = tableRows[i].cells[1].innerHTML;
        if (elem.includes("<br>") === true) {
            let newElem = elem.replace("<br>", "").replace(/\s+/g," ");;
            countries.push(newElem);
        }
        else {
            countries.push(elem);
        }
    }
    return countries;
}

function getData(id) {
    myData = document.getElementById(id).rows;
    array = [];
    for (let i = 0; i < myData.length; i++) {
        elem = myData[i].children;
        row = [];
        for (let j = 0; j < elem.length; j++) {
            row.push(elem[j].innerText);
        }
        array.push(row);
    }
    return array;
}

function sortData(id, start) {
    let data = getData(id);
    let sortedData = [];
    for (let i = start; i < data[i].length; i++) {
        let currentCol = [];
        for (let j = start; j < data.length; j++) {
            let elem = data[j][i];
            if (elem.includes(",") === true) {
                let newElem = elem.replace(",", ".");
                currentCol.push(newElem);
            }
            else {
                currentCol.push(elem);
            }
        }
        sortedData.push(currentCol);
    }
    return sortedData;
}

//---- Table 1 Chart ----

let canvasOne = document.createElement("canvas");
canvasOne.setAttribute("id", "chartOne");

let tableOne = document.getElementById("table1");

let containerOne = tableOne.parentNode;
containerOne.insertBefore(canvasOne, tableOne);

let chartOne = document.getElementById("chartOne").getContext("2d");

let crimeChart = new Chart(chartOne, {
    type: "line",
    data: {
        labels: getCountries("table1", 2),
        datasets: [{
            label: 2002,
            data: sortData("table1", 2)[0],
            borderWidth : "1",
            borderColor: "#008900",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2003,
            data: sortData("table1", 2)[1],
            borderWidth : "1",
            borderColor: "#9b59b6",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2004,
            data: sortData("table1", 2)[2],
            borderWidth : "1",
            borderColor: "#f1c40f",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2005,
            data: sortData("table1", 2)[3],
            borderWidth : "1",
            borderColor: "#2ecc71",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2006,
            data: sortData("table1", 2)[4],
            borderWidth : "1",
            borderColor: "#e74c3c",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2007,
            data: sortData("table1", 2)[5],
            borderWidth : "1",
            borderColor: "#3498db",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2008,
            data: sortData("table1", 2)[6],
            borderWidth : "1",
            borderColor: "#e67e22",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2009,
            data: sortData("table1", 2)[7],
            borderWidth : "1",
            borderColor: "#34495e",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2010,
            data: sortData("table1", 2)[8],
            borderWidth : "1",
            borderColor: "#d83290",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2011,
            data: sortData("table1", 2)[9],
            borderWidth : "1",
            borderColor: "#642a02",
            backgroundColor: "rgba(0,0,0,0)"
        }, {
            label: 2012,
            data: sortData("table1", 2)[10],
            borderWidth : "1",
            borderColor: "#111e97",
            backgroundColor: "rgba(0,0,0,0)"
        }]
    },
    options: {
        title: {
            display: true,
            text: "Offences recoreded by the police from 2002 to 2012"
        },
        legend: {
            labels: {
                boxWidth: 20
            }
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Number in thousands",
                    padding: {
                        bottom: 20
                    }
                }
            }]
        }
    }
});

//---- Table 2 Chart ----

let canvasTwo = document.createElement("canvas");
canvasTwo.setAttribute("id", "chartTwo");

let tableTwo = document.getElementById("table2");

let containerTwo = tableTwo.parentNode;
containerTwo.insertBefore(canvasTwo, tableTwo);

let chartTwo = document.getElementById("chartTwo").getContext("2d");

let prisonChart = new Chart(chartTwo, {
    type: "bar",
    data: {
        labels: getCountries("table2", 1),
        datasets: [{
            label: "2007-09",
            data: sortData("table2", 1)[1],
            backgroundColor: "#307824"
        }, {
            label: "2010-12",
            data: sortData("table2", 1)[2],
            backgroundColor: "#87538d"
        }]},
    options : {
        title: {
            display: true,
            text: "Average prison population in 2007-09 and 2010-12"
        },
        scales: {
            yAxes: [{
                scaleLabel: {
                    display: true,
                    labelString: "Average / 100.000 inhabitants",
                    padding: {
                        bottom: 20
                    }
                }
            }]
        }
    }
});