let header1 = document.getElementsByTagName("h1")[0];

let canvasCart = document.createElement("canvas");

setAttributes(canvasCart, {"id": "liveDataCart", "width": "400", "height": "400"});
header1.parentNode.insertBefore(canvasCart, header1.nextSibling);
let ctx = document.getElementById('liveDataCart').getContext('2d');

function setAttributes(el, attrs) {
    for(var key in attrs) {
      el.setAttribute(key, attrs[key]);
    }
  }
  function addData(chart, label, data) {
    chart.data.labels = label;
    chart.data.datasets.forEach((dataset) => {
        dataset.data = data;
    });
    chart.update();
}
const liveData = fetch('https://canvasjs.com/services/data/datapoints.php');
liveData.then(response => response.json())
.then(data => {
    
    let dataArray = [];
    let lableArray = [];
        data.forEach(value => {
            dataArray.push({x: value[0], y: parseInt(value[1])});
            lableArray.push(value[0]);
        });
        let myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: lableArray,
                datasets: [{
                    label: '# Crime statistics',
                    type: 'line',
                    data: dataArray,
                    fill: false,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)'
                    ],
                    borderColor: [
                        'rgba(255, 99, 132, 1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)'
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
        console.log(myChart);
        updateChart();
        function updateChart() {
            //debugger;
            let liveData = fetch("https://canvasjs.com/services/data/datapoints.php?xstart=" + (dataArray.length + 1) + "&ystart=" + (dataArray[dataArray.length - 1].y) + "&length=1&type=json");
            liveData.then(response => response.json()).then(data => {
                data.forEach(value => {
                    dataArray.push({
                        x: parseInt(value[0]),
                        y: parseInt(value[1])
                    });
                    lableArray.push(value[0]);
                });
                
            }); 
            addData(myChart, lableArray, dataArray);
            console.log(dataArray);
              
            setTimeout(function(){updateChart()}, 1000);
            }
    });