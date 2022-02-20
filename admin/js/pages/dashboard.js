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

	
	
	// jQuery UI sortable for the todo list
	  $('.todo-list').sortable({
		placeholder         : 'sort-highlight',
		handle              : '.handle',
		forcePlaceholderSize: true,
		zIndex              : 999999
	  });	

	/* The todo list plugin */
	  $('.todo-list').todoList({
		onCheck  : function () {
		  window.console.log($(this), 'The element has been checked');
		},
		onUnCheck: function () {
		  window.console.log($(this), 'The element has been unchecked');
		}
	  });
	

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
		labels: ['Individual Score', 'Team Score'],
		fillOpacity: 1,
		lineWidth:1,
		lineColors: ['#7460ee', '#2962FF'],
		hideHover: 'auto',
		color: '#666666'
    });
//BAR CHART
    var bar = new Morris.Bar({
      element: 'bar-chart',
      resize: true,
      data: [
        {y: 'Jan', a: 2341, b: 1598},
        {y: 'Feb', a: 2131, b: 2021},
        {y: 'Mar', a: 4374, b: 4120},
        {y: 'Apr', a: 1312, b: 900},
        {y: 'May', a: 4393, b: 3258},
        {y: 'Jun', a: 1210, b: 400},
		{y: 'Jul', a: 3255, b: 3200},
		{y: 'Aug', a: 2323, b: 1980},
		{y: 'Sep', a: 3212, b: 2865},
		{y: 'Oct', a: 6545, b: 5129},
		{y: 'Nov', a: 2323, b: 2010},
		{y: 'Dec', a: 2356, b: 1870},
      ],
		barColors: ['#2962FF', '#36bea6'],
		barSizeRatio: 0.5,
		barGap:5,
		xkey: 'y',
		ykeys: ['a', 'b'],
		labels: ['In store', 'Online'],
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


                


