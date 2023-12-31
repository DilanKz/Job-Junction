let file;
$('#lblPfpCompany').css('background-image', 'url(../assets/images/pfpBg.jpg)');
$('#btnSavePfp').prop('disabled',true)
$(document).ready(function () {
    $('#txtPfpCompany').change(function () {
        file = this.files[0];

        if (file) {
            let reader = new FileReader();
            reader.onload = function (e) {
                $('#lblPfpCompany').css('background-image', 'url(' + e.target.result + ')');
            };
            reader.readAsDataURL(file);
            $('#btnSavePfp').prop('disabled',false)
        }
    });
});

$('#map-button').click(function () {
    $('#g-map-frame').toggleClass('d-none');
    $('#g-map-frame').toggleClass('d-flex');
});


$('#btnCompLocation').click(function () {

    let location={
        city:userLocation.address,
        coordinates:{
            latitude:userLocation.cord.lat,
            longitude:userLocation.cord.lang
        }
    }

    let requestData = {
        dto: location,
        id: userAccount.company.id,
        uid: userAccount.user.id
    };

    $.ajax({
        url: baseURL + 'companies/location?id='+userAccount.company.id+'&uid='+userAccount.user.id,
        method: "POST",
        contentType: "application/json",
        data: JSON.stringify(location),
        success: function(response) {
            userAccount.user=response
            userAccount.company=response.company;
            toastShower('1','bg-success','text-light','successfully Account updated');
        },
        error: function(error) {
            toastShower('1','bg-danger','text-light','Try again');
        }
    });

});

$('#btnSavePfp').click(function () {

    let formData = new FormData();
    formData.append('image', file);

    $.ajax({
        url: baseURL + 'companies/pfp?id='+userAccount.company.id+'&uid='+userAccount.user.id,
        method: 'POST',
        data:formData,
        contentType: false,
        processData: false,
        success: function (response) {
            userAccount.user=response
            userAccount.company=response.company;
            toastShower('1','bg-success','text-light','successfully Account updated');
        },
        error: function(error) {
            toastShower('1','bg-danger','text-light','Try again');
        }
    });
});