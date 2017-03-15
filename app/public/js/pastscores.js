$( document ).ready(function() {
    populateChart();
});



function populateChart() {
 
    var d1 = [[1262304000000, 1], [1264982400000, 2], [1267401600000, 2], [1270080000000, 3], [1272672000000, 4], [1275350400000, 4], [1277942400000, 5], [1280620800000, 4], [1283299200000, 5], [1285891200000, 2], [1288569600000, 3], [1291161600000, 1]];

    var data1 = [
    {data: d1, points: { symbol: "circle", fillColor: "#058DC7" }, color: '#058DC7'}
    ];
    
    var ticks = [1,2,3,4,5];
    
    
    
    $.plot($("#pastScoresChart"), data1, {
        xaxis: {
            min: (new Date(2009, 11, 18)).getTime(),
            max: (new Date(2010, 11, 15)).getTime(),
            mode: "time",
            tickSize: [20, "day"],
            monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            tickLength: 0,
            axisLabel: 'Month',
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


window.addEventListener('resize', function(event){
  // replot with new size:
    populateChart();
});