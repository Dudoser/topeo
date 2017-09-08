function deletClass(){
	var array = [
		"#container-for-company",
		"#container-for-firstWord",
		"#container-for-aboutUs",
		"#container-for-history",
		"#container-for-rewiews", 
		"#container-for-solutions", 
		"#container-for-partner",
		"#container-for-service", 
		"#container-for-contact"
	];
	for (var i = array.length - 1; i >= 0; i--) {
		$(array[i]).removeClass("inline").addClass("not_see");
	}
	$("#container-for-menu").removeClass("for-men").addClass("for-menu");
};
$("#h1").on("click", function(){
	deletClass();
});	
$("#company").on('click', function () {
	seePage("#container-for-company");
});
$("#us-us").on('click', function () {
	seePage("#container-for-aboutUs");
});
$("#ours").on('click', function () {
	seePage("#container-for-history");
});
$("#otv").on('click', function () {
	seePage("#container-for-rewiews");
});
$("#f-word").on('click', function () {
	seePage("#container-for-firstWord");
});	
$("#solutions").on('click', function () {
	seePage("#container-for-solutions");
});
$("#partners").on('click', function () {
	seePage("#container-for-partner");
});	
$("#services").on('click', function () {
	seePage("#container-for-service");
});
$("#con").on('click', function () {
	seePage("#container-for-contact");
});
$(document).ready(function () {
	$('.vert-nav li').hover(
		function() {
			$('ul', this).slideDown(110);
		},
		function() {
			$('ul', this).slideUp(110);
		}
	);
});
function seen(argument){
	$(argument).removeClass("not_see").addClass("inline");
	$("#container-for-menu").removeClass("for-menu").addClass("for-men");
};
function seePage(argumentForSeen){
	deletClass();
	seen(argumentForSeen);
};