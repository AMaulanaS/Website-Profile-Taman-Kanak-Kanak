//[Dashboard Javascript]

//Project:	Superieur Admin - Responsive Admin Template
//Primary use:   Used only for the main dashboard (index.html)


$(function () {

  'use strict';

  // Make the dashboard widgets sortable Using jquery UI
  $('.connectedSortable').sortable({
    placeholder         : 'sort-highlight',
    connectWith         : '.connectedSortable',
    handle              : '.box-header, .nav-tabs',
    forcePlaceholderSize: true,
    zIndex              : 999999
  });
  $('.connectedSortable .box-header, .connectedSortable .nav-tabs-custom').css('cursor', 'move');

	
/*****E-Charts function start*****/
		
	if( $('#e_chart_3').length > 0 ){
		var eChart_3 = echarts.init(document.getElementById('e_chart_3'));
		var data = [{
			value: 5713,
			name: ''
		}, {
			value: 8458,
			name: ''
		}, {
			value: 1254,
			name: ''
		}, {
			value: 2589,
			name: ''
		}, {
			value: 7458,
			name: ''
		}, {
			value: 6325,
			name: ''
		}, {
			value: 8452,
			name: ''
		}, {
			value: 9563,
			name: ''
		}, {
			value: 1125,
			name: ''
		}, {
			value: 8546,
			name: ''
		}];
		var option3 = {
			tooltip: {
				show: true,
				trigger: 'item',
				backgroundColor: 'rgba(33,33,33,1)',
				borderRadius:0,
				padding:10,
				formatter: "{b}: {c} ({d}%)",
				textStyle: {
					color: '#fff',
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontFamily: "'Open Sans', sans-serif",
					fontSize: 12
				}	
			},
			series: [{
				type: 'pie',
				selectedMode: 'single',
				radius: ['100%', '30%'],
				color: ['#7460ee', '#e4e7ea', '#26c6da', '#1e88e5', '#ffb22b', '#fc4b6c', '#7460ee', '#e83e8c', '#ffbc34', '#8d6658'],
				labelLine: {
					normal: {
						show: false
					}
				},
				data: data
			}]
		};
		eChart_3.setOption(option3);
		eChart_3.resize();
	}

/*****E-Charts function end*****/	
// table
	$('#invoice-list').DataTable({
	  'paging'      : true,
	  'lengthChange': false,
	  'searching'   : false,
	  'ordering'    : true,
	  'info'        : true,
	  'autoWidth'   : true,
	});	
	

	


// AREA CHART
    var area = new Morris.Area({
      element: 'revenue-chart',
      resize: true,
      data: [
        { y: '2017-01', a: 5,  b: 4 },
		{ y: '2017-02', a: 2,  b: 3 },
		{ y: '2017-03', a: 8,  b: 7 },
		{ y: '2017-04', a: 1,  b: 5 },
		{ y: '2017-05', a: 5,  b: 2 },
		{ y: '2017-06', a: 1,  b: 3 },
		{ y: '2017-07', a: 5,  b: 2 }
      ],
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['In store', 'Online'],
		fillOpacity: 1,
		lineWidth:1,
		lineColors: ['#7460ee', '#ffbc34'],
		hideHover: 'auto',
		color: '#666666'
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


                


