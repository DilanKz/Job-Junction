const jobTitleRegex = /^[a-zA-Z0-9\s.,'-]+$/;
const jobDescriptionRegex = /^[a-zA-Z0-9\s.,'-]+$/;
const salaryRegex = /^\d+(\.\d{1,2})?$/;

function validateField(value, regex) {
    return regex.test(value);
}

function validateAllFields() {
    const jobTitleValid = validateField($('#txtJobTitle').val(), jobTitleRegex);
    const jobDescriptionValid = validateField($('#txtJobDescription').val(), jobDescriptionRegex);
    const salaryValid = validateField($('#txtSalary').val(), salaryRegex);

    return jobTitleValid && jobDescriptionValid && salaryValid;
}

function post() {
    return {
        id:'',
        companyId:'',
        title:$('#txtJobTitle').val(),
        description:$('#txtJobDescription').val(),
        skillsRequired:'',
        salary:$('#txtSalary'),
        applicationDeadline:'',
        category:'',
        totalPositions:'',
    }
}
