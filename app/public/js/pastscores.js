$( document ).ready(function() {
    populateChart();
});



function populateChart() {
 
    var d1 = [[1482451200000, 1], [1483315200000, 2], [1484092800000, 2], [1487030400000, 3], [1487980800000, 4], [1488240000000, 4], [1488585600000, 5], [1489795200000, 4], [1490313600000, 5], [1491091200000, 2], [1492214400000, 3], [1493078400000, 1]];
    
//    [[1262304000000, 1], [1264982400000, 2], [1267401600000, 2], [1270080000000, 3], [1272672000000, 4], [1275350400000, 4], [1277942400000, 5], [1280620800000, 4], [1283299200000, 5], [1285891200000, 2], [1288569600000, 3], [1291161600000, 1]];
    
    $.ajax({
            type : 'GET',
            url : 'http://localhost:3000/testResults',
            success : function(data, status) {
//              d1 = data;
                console.log(d1);
            },
            error : function(xhr, status, err) {
              console.log('error retrieving test result: ', status, "\n", err);
            }
          });

    var data1 = [
    {data: d1, points: { symbol: "circle", fillColor: "#058DC7" }, color: '#058DC7'}
    ];
    
    var ticks = [1,2,3,4,5];
    
    
    
    $.plot($("#pastScoresChart"), data1, {
        xaxis: {
            min: (new Date(2016, 11, 18)).getTime(),
//            max: (new Date(2017, 11, 15)).getTime(),
            mode: "time",
            timeformat: "%m/%y",
//            tickSize: [1, "month"],
            //timeFormat:"%mm/%dd/%Y",
//            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 0,
            axisLabel: 'Date',
            axisLabelUseCanvas: true,
            axisLabelPadding: 5,
//            rotateTicks: 135
        },
        yaxis: {
            ticks:ticks,
            axisLabelPadding: 5
        },
        series: {
            lines: { show: true },
            points: {
                radius: 3,
                show: true,
                fill: true
            },
        },
        grid: {
            hoverable: true,
            borderWidth: 1,
//            margin: {
//                top: 0,
//                left: 0,
//                bottom: 70,
//                right: 0
//            }
 
        },
        legend: {
            labelBoxBorderColor: "none",
                position: "right"
        }
    });
}


function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css({
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #428bca',
            padding: '2px',
            'background-color': '#f0f8ff'
        }).appendTo("body").fadeIn(200);
}


var previousPoint = null;
$("#pastScoresChart").bind("plothover", function (event, pos, item) {
    if (item) {
        if (previousPoint != item.dataIndex) {
            previousPoint = item.dataIndex;

            $("#tooltip").remove();
            var x = item.datapoint[0].toFixed(0),
                y = item.datapoint[1].toFixed(0);
            
            var date = new Date(x/1)//already in ms
            var d = date.getDate();
            var m = date.getMonth()+1;
            var yr = date.getFullYear();
            showTooltip(item.pageX, item.pageY, "On " + m +"/" + d +"/" + yr + ", score = " + y);
        }
    }
    else {
        $("#tooltip").remove();
        previousPoint = null;
    }
});


window.addEventListener('resize', function(event){
  // replot with new size:
    populateChart();
});