$("#btnCustomerReg").click(function () {
    let selectedRadioButton = $("input[name='options-outlined']:checked");

    if (validateRegisterFields()) {

        if (selectedRadioButton) {

            let selectedText = selectedRadioButton.next('label').text();

            if (selectedText === 'Employee') {

                let employee = employeeData();
                employee.id = '';
                employee.name = $('#txtName').val();
                employee.email = $('#txtEmail').val();
                employee.industry = $("#txtIndustry").val();


                let data = userData();
                data.id = '';
                data.username = $('#txtUsername').val();
                data.password = $('#txtPass').val();
                data.type = 'employees';
                data.entityid = '';

                makeAccount('employees', data, employee);

            } else if (selectedText === 'Company') {

                let company = companyData();
                company.id = '';
                company.name = $('#txtName').val();
                company.email = $('#txtEmail').val();
                company.industry = $("#txtIndustry").val();
                company.state = 'new';


                let data = userData();
                data.id = '';
                data.username = $('#txtUsername').val();
                data.password = $('#txtPass').val();
                data.type = 'companies';
                data.entityid = '';

                makeAccount('companies', data, company);
            }


        } else {
            console.log("No radio button selected.");
        }

    } else {
        console.log("invalid")
    }
});
$("#btnLogin").click(function () {
    let username = $('#txtUN').val();
    let password = $('#txtPW').val();

    loginIn(username, password);

});


function makeAccount(url, user, account) {
    $.ajax({
        url: baseURL + url + '/save',
        data: JSON.stringify(account),
        method: 'POST',
        contentType: 'application/json',
        success: function (response) {
            if (url === 'employees') {
                user.employee = response;
                user.company = null;
            } else if (url === 'companies') {
                user.company = response;
                user.employee = null;
            }

            $.ajax({
                url: baseURL + 'users/register',
                data: JSON.stringify(user),
                method: 'POST',
                contentType: 'application/json',
                success: function (response) {
                    console.log(response);
                    clearFields();
                    toastShower('1', 'bg-success', 'text-light', 'successfully registered');
                },
                error: function (e) {
                    toastShower('1', 'bg-danger', 'text-light', 'Try again');
                }
            });
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });
}


function loginIn(user, password) {

    $.ajax({
        url: baseURL + 'users/login?user=' + user,
        contentType: 'application/json',
        // async:false,
        success: function (response) {

            if (response) {
                console.log()
                if (response.password === password) {

                    userAccount.user = response

                    if (response.type === 'companies') {
                        userAccount.company = response.company;
                        userAccount.employee = "";

                        /*const newMarkerPosition = {
                            lat: parseFloat(response.company.location.coordinates.latitude),
                            lng: parseFloat(response.company.location.coordinates.longitude)
                        };
                        addInfoWindow(newMarkerPosition,byteArrayToImage(response.company.profilePicture));*/

                        $('#btn-login-main').toggleClass('d-none');
                        let button = `<button id="btn-profile" class="btn btn-sm btn-primary me-3">
                                    ${response.username}
                                    <i class="bi bi-person-fill ps-2"></i>
                                </button>`
                        $('#navbar-content').append(button);

                        $('#link-DB').removeClass('d-none');
                        $('#link-Pro').addClass('d-none');

                        setDataToDashboard(userAccount.company.profilePicture, userAccount.company.name);

                    } else if (response.type === 'employees') {
                        userAccount.employee = response.employee;
                        userAccount.company = "";

                        $('#link-Pro').removeClass('d-none');
                        $('#link-DB').addClass('d-none');

                        $('#btn-login-main').toggleClass('d-none');
                        let button = `<button id="btn-profile" class="btn btn-sm btn-success me-3">
                                    ${response.username}
                                    <i class="bi bi-person-fill ps-2"></i>
                                </button>`
                        $('#navbar-content').append(button)

                    }

                    $('#login-frame').addClass('d-none');
                    $('#register').addClass('d-none');
                    $('#login').addClass('d-none');

                    $('#txtUN').val("");
                    $('#txtPW').val("");

                    toastShower('1', 'bg-success', 'text-light', 'successfully logged in');

                } else {
                    toastShower('1', 'bg-danger', 'text-light', 'Wrong Password try again');
                }
            } else {
                toastShower('1', 'bg-danger', 'text-light', 'No Account found');
            }

            console.log(response);
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });

}

function setDataToDashboard() {
    $('#imgPfp').prop('src', byteArrayToImage(userAccount.company.profilePicture))
    $('#lblCompName').text(userAccount.company.name);

    $('#lblPfpCompany').css('background-image', 'url(' + byteArrayToImage(userAccount.company.profilePicture) + ')');
    $('#txtAddress').val(userAccount.company.location.city);
}

/*Change password*/
let otp;
$("#txtLoginPOTP").click(function () {
    let username = $("#txtLoginName").val();

    if (username.length < 3) {
        $("#txtLoginName").css('border', '2px solid red');
    } else {
        //Send the otp
        $.ajax({
            url: baseURL + 'users/reset?user=' + username,
            contentType: 'application/json',
            async: false,
            success: function (response) {
                otp=response;
                toastShower('1', 'bg-success', 'text-light', 'A OTP code is sent to your account email address');
            },
            error: function (error) {
                toastShower('1', 'bg-danger', 'text-light', 'OTP mismatch');
            }

        });
    }

});

$("#txtLoginName").click(function () {
    $("#txtLoginName").css('border', '1px solid lightgray');
});

$('#btnChangePass').click(function () {
    let pass = $("#txtLoginPassword").val();
    let username = $("#txtLoginName").val();
    if (validateField(pass, passwordRegex)) {
        //user change pass
        if ($("#txtLoginPOTP").val() === otp) {

            $.ajax({
                url: baseURL + 'users/changePass?user=' + username+'&password='+pass,
                contentType: 'application/json',
                method:"PUT",
                success: function (response) {
                    $("#txtLoginPassword").val("");
                    $("#txtLoginName").val("");
                    $("#txtLoginPOTP").val("");
                    $('#forgotPassword').addClass('d-none');
                },
                error: function (error) {
                }

            });

        }else {
            toastShower('1', 'bg-danger', 'text-light', 'OTP mismatch');
        }

    }

});
