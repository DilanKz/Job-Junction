$("#btnCustomerReg").click(function() {
    let selectedRadioButton = $("input[name='options-outlined']:checked");

    if (selectedRadioButton) {

        let selectedText = selectedRadioButton.next('label').text();

        if (selectedText === 'Employee') {

            let data = userData();
            data.id='U001';data.username='Dilan';data.password='1234';data.entityid='E00-001'

            let employee = employeeData();
            employee.id='E00-001';employee.name='Tharindu DIlan';employee.email='abc.email.com';employee.industry='IT';


            console.log(data);
            console.log(employee);

        }else if (selectedText==='Company'){
            console.log('Com');
        }


    } else {
        console.log("No radio button selected.");
    }
});