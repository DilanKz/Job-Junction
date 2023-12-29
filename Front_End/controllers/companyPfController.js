$('#lblPfpCompany').css('background-image', 'url(../assets/images/pfpBg.jpg)');

$(document).ready(function () {
    $('#txtPfpCompany').change(function () {
        let file = this.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('#lblPfpCompany').css('background-image', 'url(' + e.target.result + ')');
            };
            reader.readAsDataURL(file);
        }
    });
});