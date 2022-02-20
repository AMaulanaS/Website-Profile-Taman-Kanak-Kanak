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
	
	
    //BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: 'Mon', a: 4, b: 5, c: 6},
        {y: 'Tue', a: 1, b: 2, c: 3},
        {y: 'Wed', a: 7, b: 5, c: 3},
        {y: 'Thu', a: 1, b: 2, c: 5},
        {y: 'Fri', a: 9, b: 5, c: 9},
        {y: 'Sat', a: 10, b: 5, c: 6},
		{y: 'Sun', a: 5, b: 3, c: 7}
      ],
		barColors: ['#2962FF', '#2962FF', '#36bea6'],
		barSizeRatio: 0.5,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b', 'c'],
		labels: ['Morning', 'Evening', 'Night'],
		hideHover: 'auto'
    });
	
	//sparkline
		$("#barchart4").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'bar',
			height: '100',
			width: '65%',
			barWidth: 8,
			barSpacing: 4,
			barColor: '#ffffff',
		});
		$("#linearea3").sparkline([32,24,26,24,32,26,40,34,22,24], {
			type: 'line',
			width: '50%',
			height: '100',
			lineColor: '#ffffff',
			fillColor: '#ffffff',
			lineWidth: 1,
		});
		
		$("#baralc").sparkline([32,24,26,24,32,26,40,34,22,24,22,24,34,32,38,28,36,36,40,38,30,34,38], {
			type: 'bar',
			height: '75',
			barWidth: 6,
			barSpacing: 4,
			barColor: '#7460ee',
		});
	
		  // Sparkline charts
		  var myvalues = [1300, 500, 1920, 927, 831, 1127, 719, 1930, 1221];
		  $('#sparkline-1').sparkline(myvalues, {
			type     : 'line',
			lineColor: '#67757c',
			fillColor: '#b5bbc8',
			height   : '50',
			width    : '70'
		  });
		  myvalues = [715, 319, 620, 342, 662, 990, 730, 467, 559, 340, 881];
		  $('#sparkline-2').sparkline(myvalues, {
			type     : 'line',
			lineColor: '#67757c',
			fillColor: '#b5bbc8',
			height   : '50',
			width    : '70'
		  });
		  myvalues = [88, 49, 22,35, 45, 72, 11, 55, 25, 19, 27];
		  $('#sparkline-3').sparkline(myvalues, {
			type     : 'line',
			lineColor: '#67757c',
			fillColor: '#b5bbc8',
			height   : '50',
			width    : '70'
		  });
//map	
jQuery('#world-map-markers').vectorMap(
{
    map: 'world_mill_en',
    backgroundColor: '#fff',
    borderColor: '#818181',
    borderOpacity: 0.25,
    borderWidth: 1,
    color: '#f4f3f0',
    regionStyle : {
        initial : {
          fill : '#1e88e5'
        }
      },
    markerStyle: {
      initial: {
                    r: 9,
                    'fill': '#fff',
                    'fill-opacity':1,
                    'stroke': '#000',
                    'stroke-width' : 5,
                    'stroke-opacity': 0.4
                },
                },
    enableZoom: true,
    hoverColor: '#0a89c1',
    markers : [{
        latLng : [37.00, 96.00],
        name : 'Text'
      
      }],
    hoverOpacity: null,
    normalizeFunction: 'linear',
    scaleColors: ['#b6d6ff', '#005ace'],
    selectedColor: '#c9dfaf',
    selectedRegions: [],
    showTooltip: true,
    onRegionClick: function(element, code, region)
    {
        var message = 'You clicked "'
            + region
            + '" which has the code: '
            + code.toUpperCase();

        alert(message);
    }
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


                


