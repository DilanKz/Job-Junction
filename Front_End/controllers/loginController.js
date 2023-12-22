$("#btnCustomerReg").click(function() {
    let selectedRadioButton = $("input[name='options-outlined']:checked");

    if (validateRegisterFields()) {

        if (selectedRadioButton) {

            let selectedText = selectedRadioButton.next('label').text();

            if (selectedText === 'Employee') {

                let employee = employeeData();
                employee.id='';
                employee.name=$('#txtName').val();
                employee.email=$('#txtEmail').val();
                employee.industry= $("#txtIndustry").val();


                let data = userData();
                data.id='';
                data.username=$('#txtUsername').val();
                data.password=$('#txtPass').val();
                data.type='employees';
                data.entityid='';

                makeAccount('employees',data,employee);

            }else if (selectedText==='Company'){

                let company = companyData();
                company.id='';
                company.name=$('#txtName').val();
                company.email=$('#txtEmail').val();
                company.industry= $("#txtIndustry").val();
                company.state= 'new';


                let data = userData();
                data.id='';
                data.username=$('#txtUsername').val();
                data.password=$('#txtPass').val();
                data.type='companies';
                data.entityid='';

                makeAccount('companies',data,company);
            }


        } else {
            console.log("No radio button selected.");
        }

    }else {
        console.log("invalid")
    }
});
$("#btnLogin").click(function() {
    let username = $('#txtUN').val();
    let password = $('#txtPW').val();

    loginIn(username,password);

});




function makeAccount(url,user,account) {
    $.ajax({
        url:baseURL+url+'/save',
        data:JSON.stringify(account),
        method:'POST',
        contentType: 'application/json',
        success:function (response) {
            console.log(response);
            user.entityId=response.id;

            $.ajax({
                url:baseURL+'users/register',
                data:JSON.stringify(user),
                method:'POST',
                contentType: 'application/json',
                success:function (response) {
                    console.log(response);
                    clearFields();
                    toastShower('1','bg-success','text-light','successfully registered');
                },
                error:function (e) {
                    toastShower('1','bg-danger','text-light','Try again');
                }
            });
        },
        error:function (e) {
            toastShower('1','bg-danger','text-light','Try again');
        }
    });
}



function loginIn(user,password) {

    $.ajax({
        url:baseURL+'users/login?user='+user,
        contentType: 'application/json',
        // async:false,
        success:function (response) {

            console.log()
            if (response.password === password) {

                $.ajax({
                    url:baseURL+response.type+'/'+response.entityId,
                    contentType: 'application/json',
                    // async:false,
                    success:function (response) {
                        console.log(response);
                        toastShower('1','bg-success','text-light','successfully logged in');
                    },
                    error:function (e) {
                        toastShower('1','bg-danger','text-light','Try again');
                    }
                });

            }else {
                toastShower('1','bg-danger','text-light','Wrong Password try again');
            }

            console.log(response);
        },
        error:function (e) {
            toastShower('1','bg-danger','text-light','Try again');
        }
    });

}
