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
	
	// donut chart
		$('.donut').peity('donut');
		
		// bar chart
		$(".bar").peity("bar");	
	
	//bootstrap WYSIHTML5 - text editor
	$('.textarea').wysihtml5();	
	
   // Morris-chart
	
	Morris.Area({
        element: 'morris-area-chart2',
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
        labels: ['Total Ticket', 'Close Ticket'],
        pointSize: 5,
        fillOpacity: 0.2,
        pointStrokeColors:['#2962FF', '#f62d51'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 3,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#2962FF', '#f62d51'],
        resize: true
        
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


                


