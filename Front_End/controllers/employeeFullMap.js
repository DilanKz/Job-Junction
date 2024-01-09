let allCompanies;

function getAllCompanies() {
    $.ajax({
        url: baseURL + 'companies/getAll',
        method: 'GET',
        async:true,
        success: function (response) {
            allCompanies=response;
            loadAllCompaniesToMap(response);
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });
}

function loadAllCompaniesToMap(companies) {
    for (let i = 0; i < companies.length; i++) {

        let company = companies[i];
        console.log(company);

        if (company.location != null && company.profilePicture!=null) {
            const newMarkerPosition = {
                lat: parseFloat(company.location.coordinates.latitude),
                lng: parseFloat(company.location.coordinates.longitude)
            }

            addInfoWindow(newMarkerPosition, byteArrayToImage(company.profilePicture), allMap,company.name);

        }

    }
}