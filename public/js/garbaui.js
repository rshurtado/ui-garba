// Loading en botones

$('.gb-button').click(function () {

	$(this).addClass("disabled").delay(2000).queue(function(){
    $(this).removeClass("disabled").dequeue();;
    });
 
});



// Cerrar elemento feedback global
$('button.close').click (function(){

	$('.alert-dismissible').fadeOut("slow");

});

// Toaster info
$('#toaster-info').click(function () {

	$.notify({
	// options
	message: 'Podes consultar mas medios de pago' 
},{
	// settings

	type: "info", 
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 5000,
	timer: 1000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: 
	'<div class="gb-toaster toaster-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<span data-notify="message">{2}</span>' +
				'<span class="icon"></span>' +
			'</div>'
});

});
// Toaster warning
$('#toaster-warning').click(function () {

	$.notify({
	// options
	message: 'Tu contraseña es poco segura' 
},{
	// settings

	type: "warning",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 5000,
	timer: 1000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: 
	'<div class="gb-toaster toaster-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<span data-notify="message">{2}</span>' +
				'<span class="icon"></span>' +
			'</div>'
});

});
// Toaster danger
$('#toaster-danger').click(function () {

	$.notify({
	// options
	message: 'Existe un error en tu cuenta de usuario' 
},{
	// settings

	type: "danger",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 5000,
	timer: 1000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: 
	'<div class="gb-toaster toaster-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<span data-notify="message">{2}</span>' +
				'<span class="icon"></span>' +
			'</div>'
});

});
// Toaster success
$('#toaster-success').click(function () {

	$.notify({
	// options
	message: 'Tu contraseña se modifico exitosamente' 
},{
	// settings

	type: "success",
	allow_dismiss: true,
	newest_on_top: false,
	showProgressbar: false,
	placement: {
		from: "top",
		align: "right"
	},
	offset: 20,
	spacing: 10,
	z_index: 1031,
	delay: 5000,
	timer: 1000,
	url_target: '_blank',
	mouse_over: null,
	animate: {
		enter: 'animated fadeInRight',
		exit: 'animated fadeOutRight'
	},
	onShow: null,
	onShown: null,
	onClose: null,
	onClosed: null,
	icon_type: 'class',
	template: 
	'<div class="gb-toaster toaster-{0}" role="alert">' +
				'<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
				'<span data-notify="message">{2}</span>' +
				'<span class="icon"></span>' +
			'</div>'
});

});