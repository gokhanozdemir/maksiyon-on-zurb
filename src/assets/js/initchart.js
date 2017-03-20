document.addEventListener("DOMContentLoaded", function(event) { 
  const ctx = document.getElementById("myChart");
  let data = {
    labels: [],
    datasets: []
  };
  

const keyData = {
    "status": "OK",
    "data": [
        {
            "appName": "Spotify Music",
            "history": [
                [
                    1488499200000,
                    4
                ],
                [
                    1488585600000,
                    4
                ],
                [
                    1488672000000,
                    3
                ],
                [
                    1488758400000,
                    3
                ],
                [
                    1488844800000,
                    3
                ],
                [
                    1488931200000,
                    3
                ],
                [
                    1489017600000,
                    3
                ],
                [
                    1489104000000,
                    3
                ],
                [
                    1489190400000,
                    4
                ],
                [
                    1489276800000,
                    4
                ],
                [
                    1489363200000,
                    4
                ],
                [
                    1489449600000,
                    4
                ],
                [
                    1489536000000,
                    4
                ],
                [
                    1489622400000,
                    4
                ]
            ],
            "value": "music"
        },
        {
            "appName": "Pandora - Music & Ra",
            "history": [
                [
                    1488499200000,
                    9
                ],
                [
                    1488585600000,
                    9
                ],
                [
                    1488672000000,
                    9
                ],
                [
                    1488758400000,
                    9
                ],
                [
                    1488844800000,
                    9
                ],
                [
                    1488931200000,
                    10
                ],
                [
                    1489017600000,
                    10
                ],
                [
                    1489104000000,
                    10
                ],
                [
                    1489190400000,
                    10
                ],
                [
                    1489276800000,
                    9
                ],
                [
                    1489363200000,
                    9
                ],
                [
                    1489449600000,
                    9
                ],
                [
                    1489536000000,
                    9
                ],
                [
                    1489622400000,
                    9
                ]
            ],
            "value": "music"
        },
        {
            "appName": "SoundCloud - Music &",
            "history": [
                [
                    1488499200000,
                    7
                ],
                [
                    1488585600000,
                    7
                ],
                [
                    1488672000000,
                    6
                ],
                [
                    1488758400000,
                    6
                ],
                [
                    1488844800000,
                    6
                ],
                [
                    1488931200000,
                    6
                ],
                [
                    1489017600000,
                    6
                ],
                [
                    1489104000000,
                    6
                ],
                [
                    1489190400000,
                    6
                ],
                [
                    1489276800000,
                    6
                ],
                [
                    1489363200000,
                    6
                ],
                [
                    1489449600000,
                    6
                ],
                [
                    1489536000000,
                    6
                ],
                [
                    1489622400000,
                    7
                ]
            ],
            "value": "music"
        }
    ]
}

// extract labels for X axis
for (let m = 0; keyData.data[0]['history'].length > m; m++) {
  let ts = keyData.data[0]['history'][m][0];
  // thedate = new Date(Number(ts)).toDateString();
  const thedate = new Date(Number(ts)).toDateString().slice(4,10);
  // thedate = new Date(Number(ts)).getDate() + '.' + (new Date(Number(ts)).getMonth() + 1);
  data.labels.push(thedate);
  // console.log(thedate);
}

function randomColor() {
  return Math.floor(Math.random() * (255 - 0 + 1));
}

// for each app
for (let k = 0; keyData.data.length > k; k++){ 
  const yVals = [];

  // get labels
  let dataLabel = keyData.data[k]['appName'];
  // console.log(dataLabel); 
  
  // get yValues for related app
  for (let n = 0; keyData.data[k]['history'].length > n; n++) {
    yVals.push(keyData.data[k]['history'][n][1]);
  }
  let thecolor = "rgba(" + randomColor() + "," + randomColor() + ", " + randomColor() + ", 1)";
  // console.log(thecolor);

  data.datasets.push({
    label: dataLabel, 
    data: yVals, 
    fill: false,
    lineTension: 0.1,
    backgroundColor: thecolor,
    borderColor: thecolor,
    borderCapStyle: 'butt',
    borderJoinStyle: 'miter',
    pointBorderColor: thecolor,
    pointBackgroundColor: thecolor,
    pointBorderWidth: 3,
    pointHoverRadius: 5,
    pointHoverBackgroundColor: thecolor,
    pointHoverBorderColor: "rgba(220,220,220,1)",
    pointHoverBorderWidth: 2,
    pointRadius: 2,
    pointHitRadius: 20,
    
  })

  // console.log('data.datasets', data.datasets);
}

var scatterChart = new Chart(ctx, {
    type: 'line',
    data: data,
    tooltips: {
      mode: 'x'
    },
    options: {
        legend: {
          position: 'bottom',
        },
        scales: {
            yAxes: [{
              ticks: {
                  reverse: true,
                  max: 12, // shame calculate this dynamically
                  min: 1,
              }
            }]
        }
    }
});

  console.log('chart ready');
  
});