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
// Morris-chart
	
	 //Attendance BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: '14/June', a: 100, b: 152},
        {y: '15/June', a: 154, b: 124},
        {y: '26/June', a: 159, b: 128},
        {y: '27/June', a: 192, b: 154},
        {y: '28/June', a: 102, b: 125},
        {y: '29/June', a: 148, b: 136},
		{y: '30/June', a: 195, b: 169}
      ],
		barColors: ['#36bea6', '#2962FF'],
		barSizeRatio: 0.4,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['OPD', 'ICU'],
		hideHover: 'auto'
    });
	
//------------------------------------------------------------------------
	Morris.Area({
        element: 'patients',
        data: [{
            period: '2015',
            OPD: 0,
            ICU: 0,
            
        }, {
            period: '2016',
            OPD: 210,
            ICU: 200,
            
        }, {
            period: '2017',
            OPD: 120,
            ICU: 80,
            
        }, {
            period: '2019',
            OPD: 330,
            ICU: 400,
            
        }, {
            period: '2020',
            OPD: 200,
            ICU: 150,
            
        }, {
            period: '2021',
            OPD: 105,
            ICU: 90,
            
        },
         {
            period: '2022',
            OPD: 250,
            ICU: 150,
           
        }],
        xkey: 'period',
        ykeys: ['OPD', 'ICU'],
        labels: ['OPD', 'ICU'],
        pointSize: 0,
        fillOpacity: 0.4,
        pointStrokeColors:['#7460ee', '#36bea6'],
        behaveLikeLine: true,
        gridLineColor: '#e0e0e0',
        lineWidth: 0,
        smooth: false,
        hideHover: 'auto',
        lineColors: ['#7460ee', '#36bea6'],
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


                


