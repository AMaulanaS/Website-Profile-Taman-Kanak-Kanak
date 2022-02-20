//[Dashboard Javascript]

//Project:	Superieur Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';

  //sparkline
		$("#linechart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '100',
			height: '38',
			lineColor: '#ffffff',
			fillColor: '#36bea6',
			lineWidth: 2,
			minSpotColor: '#ffffff',
			maxSpotColor: '#ffffff',
		});	
		
	
		$("#barchart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'bar',
			height: '38',
			width: '100%',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#ffffff',
		});
	
	
		$("#discretechart").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'discrete',
			width: '50',
			height: '38',
			lineColor: '#ffffff',
		});

	

$('#usa').vectorMap({
	map : 'us_aea_en',
	backgroundColor : 'transparent',
	regionStyle : {
		initial : {
			fill : '#fc4b6c'
		}
	}
});
// Morris-chart

Morris.Area({
        element: 'morris-area-chart',
        data: [{
            period: '2010',
            tv: 50,
            mobile: 80,
            laptop: 20
        }, {
            period: '2011',
            tv: 130,
            mobile: 100,
            laptop: 80
        }, {
            period: '2012',
            tv: 80,
            mobile: 60,
            laptop: 70
        }, {
            period: '2013',
            tv: 70,
            mobile: 200,
            laptop: 140
        }, {
            period: '2014',
            tv: 180,
            mobile: 150,
            laptop: 140
        }, {
            period: '2015',
            tv: 105,
            mobile: 100,
            laptop: 80
        },
         {
            period: '2016',
            tv: 250,
            mobile: 150,
            laptop: 200
        }],
        xkey: 'period',
        ykeys: ['tv', 'mobile', 'laptop'],
        labels: ['TV', 'Mobile', 'Laptop'],
        pointSize: 3,
        fillOpacity: 0.1,
        pointStrokeColors:['#7460ee', '#2962FF', '#f62d51'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        hideHover: 'auto',
        lineColors: ['#7460ee', '#2962FF', '#f62d51'],
        resize: true
        
    });
	
/*
     * Flot Interactive Chart
     * -----------------------
     */
    // We use an inline data source in the example, usually data would
    // be fetched from a server
    var data = [], totalPoints = 1000

    function getRandomData() {

      if (data.length > 0)
        data = data.slice(1)

      // Do a random walk
      while (data.length < totalPoints) {

        var prev = data.length > 0 ? data[data.length - 1] : 50,
            y    = prev + Math.random() * 10 - 5

        if (y < 0) {
          y = 0
        } else if (y > 200) {
          y = 200
        }

        data.push(y)
      }

      // Zip the generated y values with the x values
      var res = []
      for (var i = 0; i < data.length; ++i) {
        res.push([i, data[i]])
      }

      return res
    }

    var interactive_plot = $.plot('#interactive', [getRandomData()], {
      grid: {
            color: "#AFAFAF"
            , hoverable: true
            , borderWidth: 0
            , backgroundColor: '#FFF'
        },
      series: {
        shadowSize: 0, // Drawing is faster without shadows
        color     : '#2962FF'
      },
	  tooltip: true,
      lines : {
        fill : '#2962FF', //Converts the line chart to area chart
        color: '#2962FF'
      },
	  tooltipOpts: {
            content: "Visit: %y"
            , defaultTheme: false
        },
      yaxis : {
        min : 0,
        max : 200,
        show: true
      },
      xaxis : {
        show: true
      }
    })

    var updateInterval = 10 //Fetch data ever x milliseconds
    var realtime       = 'on' //If == to on then fetch data every x seconds. else stop fetching
    function update() {

      interactive_plot.setData([getRandomData()])

      // Since the axes don't change, we don't need to call plot.setupGrid()
      interactive_plot.draw()
      if (realtime === 'on')
        setTimeout(update, updateInterval)
    }

    //INITIALIZE REALTIME DATA FETCHING
    if (realtime === 'on') {
      update()
    }
    /*
     * END INTERACTIVE CHART
     */

	
//dashboard_daterangepicker
	
	if(0!==$("#dashboard_daterangepicker").length) {
		var n=$("#dashboard_daterangepicker"),
		e=moment(),
		t=moment();
		n.daterangepicker( {
			startDate:e, endDate:t, opens:"left", ranges: {
				Today: [moment(), moment()], Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")], "Last 7 Days": [moment().subtract(6, "days"), moment()], "Last 30 Days": [moment().subtract(29, "days"), moment()], "This Month": [moment().startOf("month"), moment().endOf("month")], "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
			}
		}
		, a),
		a(e, t, "")
	}
	function a(e, t, a) {
		var r="",
		o="";
		t-e<100||"Today"==a?(r="Today:", o=e.format("MMM D")): "Yesterday"==a?(r="Yesterday:", o=e.format("MMM D")): o=e.format("MMM D")+" - "+t.format("MMM D"), n.find(".subheader_daterange-date").html(o), n.find(".subheader_daterange-title").html(r)
	}
	
	
}); // End of use strict


                


