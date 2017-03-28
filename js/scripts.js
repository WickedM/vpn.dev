jQuery(document).ready(function($) {
	// paralax
	$('#scene').parallax();

	// slider
	$("#price-slider").slider({
		tooltip: 'always'
	});
	$("#price-slider").on("slide", function(slideEvt) {

		//discont
		var discount_1;
		if (slideEvt.value < 10) {
			discount_1 = "0";
		}
		if (slideEvt.value >= 10) {
			discount_1 = "5";
		}
		if (slideEvt.value >= 20) {
			discount_1 =+ "10";
		}
		if (slideEvt.value >= 20) {
			discount_1 =+ "10";
		}
		if (slideEvt.value >= 30) {
			discount_1 =+ "15";
		}
		if (slideEvt.value >= 50) {
			discount_1 =+ "20";
		}
		if (slideEvt.value == 100) {
			discount_1 =+ "30";
		}
		$("#discount-1").text(discount_1 + "%");



		// total-1
		var total_1 = slideEvt.value * 2;	
		$("#total-1").text("$" + total_1);

		// total-2
		var total_2 = slideEvt.value * 3;	
		$("#total-2").text("$" + total_2);

		// total-3
		var total_3 = slideEvt.value * 4;	
		$("#total-3").text("$" + total_3);


	});
});