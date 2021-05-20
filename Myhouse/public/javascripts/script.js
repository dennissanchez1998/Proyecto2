console.log("agrro el js");

function readImage() {
	var num = 4;
	if (window.File && window.FileList && window.FileReader) {
		var files = event.target.files; //FileList object
		var output = $(".preview-images-zone");
		const imagenes = document.getElementsByClassName('image-cancel');
		console.log(imagenes.length);
		if (imagenes.length >= 5) {
			return;


		} else {
			for (let i = 0; i < files.length; i++) {
				var file = files[i];
				if (!file.type.match('image')) continue;
	
				var picReader = new FileReader();
	
				picReader.addEventListener('load', function (event) {
					var picFile = event.target;
					var html = '<div id="imagen" class="preview-image preview-show-' + num + '">' +
						'<div class="image-cancel" data-no="' + num + '">x</div>' +
						'<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>';
	
					output.append(html);
					num = num + 1;
				});
				picReader.readAsDataURL(file);
			}
			$("#pro-image").val('');
}
	} else {
		console.log('Browser not support');
	}
			}