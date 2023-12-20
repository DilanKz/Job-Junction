$("#btnCustomerReg").click(function() {
    let selectedRadioButton = $("input[name='options-outlined']:checked");

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
            data.type='employee';
            data.entityid='';

            console.log(data);
            console.log(employee);

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
            data.type='company';
            data.entityid='';

            console.log(data);
            console.log(company);
        }


    } else {
        console.log("No radio button selected.");
    }
});