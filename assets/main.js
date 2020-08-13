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
const liveData = fetch('https://canvasjs.com/services/data/datapoints.php');

liveData.then(response => response.json())
    .then(data => {
        let dataArray = [];
        data.forEach(element => {
            dataArray.push(element[1]);
        });
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
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
        console.log(data);
        
    });