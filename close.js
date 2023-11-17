//Modal y su desmadre
function openModal() {
    document.getElementById('openModal').style.opacity = 1;
    document.getElementById('openModal').style.pointerEvents = 'auto';
}

function closeModal() {
    document.getElementById('openModal').style.opacity = 0;
    document.getElementById('openModal').style.pointerEvents = 'none';
}

// clic cerrar
document.querySelector('.close').addEventListener('click', function() {
    closeModal();
});

/**IMAGeN JS */s

function previewImage() {
    var input = document.getElementById('imageInput');
    var preview = document.getElementById('imagePreview');

    
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            // previsual
            preview.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        preview.innerHTML = '';
    }
}

function submitAndCloseModal() {
    alert('YA LO HACKEAMOS');
    closeModal();
}

/** 

function previewImage() {
    var input = document.getElementById('imageInput');
    var preview = document.getElementById('imagePreview');
   
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {       
            preview.innerHTML = '<img src="' + e.target.result + '" alt="Image Preview">';
        };

        reader.readAsDataURL(input.files[0]);
    } else {
        preview.innerHTML = '';
    }
}
*/