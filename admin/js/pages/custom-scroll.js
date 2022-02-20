//[Javascript]



$(function () {
    "use strict";   

		$('#slimtest1').slimScroll({
            height: '250px'
        });
        $('#slimtest2').slimScroll({
            height: '250px'
        });
        $('#slimtest3').slimScroll({
            position: 'left'
            , height: '250px'
            , railVisible: true
            , alwaysVisible: true
        });
        $('#slimtest4').slimScroll({
            color: '#00f'
            , size: '10px'
            , height: '250px'
            , alwaysVisible: true
        });
	
  }); // End of use strict