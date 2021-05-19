console.log("agrro el js");

function readImage() {
	var num = 4;


	console.log(cantidad.resta());
	if (window.File && window.FileList && window.FileReader) {
		var files = event.target.files; //FileList object
		var output = $(".preview-images-zone");

		for (let i = 0; i < files.length; i++) {
			var file = files[i];
			if (!file.type.match('image')) continue;

			var picReader = new FileReader();

			picReader.addEventListener('load', function (event) {
				var picFile = event.target;
				var html = '<div class="preview-image preview-show-' + num + '">' +
					'<div class="image-cancel" data-no="' + num + '">x</div>' +
					'<div class="image-zone"><img id="pro-img-' + num + '" src="' + picFile.result + '"></div>';

				output.append(html);
				num = num + 1;
			});
			picReader.readAsDataURL(file);
		}
		$("#pro-image").val('');
	} else {
		console.log('Browser not support');
	}
			}