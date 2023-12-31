function loadImage(image,file) {

    console.log(file)
    const reader = new FileReader();
    reader.readAsDataURL(file);


    reader.onprogress = function (event) {
        reader.onload = function () {
            image.attr('src', reader.result).show();
        }

    };

}

function base64ToUint8Array(base64) {
    const binaryString = window.atob(base64);
    const length = binaryString.length;
    const uint8Array = new Uint8Array(length);

    for (let i = 0; i < length; i++) {
        uint8Array[i] = binaryString.charCodeAt(i);
    }

    return uint8Array;
}


function byteArrayToImage(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const imageUrl = URL.createObjectURL(blob);

    return imageUrl;
}

function byteArrayToFile(byteArray) {
    const blob = new Blob([base64ToUint8Array(byteArray)], { type: 'image/jpeg' });
    const file = new File([blob], 'a.jpg', { type: blob.type });
    return file;
}