//[Dashboard Javascript]

//Project:	Superieur Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';
	
	// Counter
	
		$('.countnm').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 5000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	
	$('#users-1').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.85,
        size: 115,
        lineCap: 'round',
        fill: { color: '#7460ee' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#users-2').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 115,
        lineCap: 'round',
        fill: { color: '#36bea6' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#users-3').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.5,
        size: 115,
        lineCap: 'round',
        fill: { color: '#2962FF' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
    
    $('#users-4').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.3,
        size: 115,
        lineCap: 'round',
        fill: { color: '#f62d51' },
        reverse: false, 
        emptyFill: "#F3F6F9"
    });
	
		
	$("#baralc").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
		type: 'bar',
		height: '80',
		barWidth: 6,
		barSpacing: 4,
		barColor: '#ffbc34',
	});
	
	$("#barchart4").sparkline([32,24,26,24,32,26,40,34,22,24], {
		type: 'bar',
		height: '188',
		width: '70%',
		barWidth: 8,
		barSpacing: 4,
		barColor: '#ffffff',
	});
	
	$("#linearea3").sparkline([32,24,26,24,32,26,40,34,22,24], {
		type: 'line',
		width: '70%',
		height: '188',
		lineColor: '#ffffff',
		fillColor: '#ffffff',
		lineWidth: 1,
	});
	
	
	// Morris bar chart
    Morris.Bar({
        element: 'morris-bar-chart',
        data: [{
            y: 'Jan',
            a: 100,
            b: 90,
            c: 60
        }, {
            y: 'Feb',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'Mar',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'Apr',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'May',
            a: 50,
            b: 40,
            c: 30
        }, {
            y: 'Jun',
            a: 75,
            b: 65,
            c: 40
        }, {
            y: 'Jul',
            a: 100,
            b: 90,
            c: 40
        },  ],
        xkey: 'y',
        ykeys: ['a', 'b', 'c'],
        labels: ['A', 'B', 'C'],
        barColors: ['#f62d51', '#36bea6', '#2962FF'],
        hideHover: 'auto',
        gridLineColor: 'transparent',
        resize: true,
        barSizeRatio: 0.9,
        barRadius: [0, 0, 0, 0],
    });

	Morris.Area({
        element: 'earnings',
        data: [{
            period: '2012',
            SiteA: 485,
            SiteB: 358,
            
        }, {
            period: '2013',
            SiteA: 359,
            SiteB: 210,
            
        }, {
            period: '2014',
            SiteA: 589,
            SiteB: 410,
            
        }, {
            period: '2015',
            SiteA: 458,
            SiteB: 344,
            
        }, {
            period: '2016',
            SiteA: 254,
            SiteB: 200,
            
        }, {
            period: '2017',
            SiteA: 754,
            SiteB: 630,
            
        },
         {
            period: '2018',
            SiteA: 845,
            SiteB: 711,
           
        }],
        xkey: 'period',
        ykeys: ['SiteA', 'SiteB'],
        labels: ['Mi TV', 'Mi Box'],
        pointSize: 3,
        fillOpacity: 0.1,
        pointStrokeColors:['#2962FF', '#f62d51'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 2,
        smooth: true,
        hideHover: 'auto',
        lineColors: ['#2962FF', '#f62d51'],
        resize: true
        
    });
	//DONUT CHART
    var donut = new Morris.Donut({
      element: 'visitor',
      resize: true,
      colors: ["#4fc3f7", "#2962FF", "#f7941d", "#7460ee"],
      data: [
        {label: "Open", value: 40},
        {label: "Clicked", value: 18},
        {label: "Un-Open", value: 23},
        {label: "Bounced", value: 19}
      ],
      hideHover: 'auto'
    });
	
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


                


