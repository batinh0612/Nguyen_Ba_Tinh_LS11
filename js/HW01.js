$(document).ready(function(){
	$(".add").click(function(){
		var text = $(".text").val();
		$(".work").append(`<p><i class="fas fa-check"></i> `+ text + ` <i class="fas fa-times delete"></i></p>`);
		$(".text").val("");
	});
});

$(document).on("click",".delete",function(){
	$(this).parent().remove();
})