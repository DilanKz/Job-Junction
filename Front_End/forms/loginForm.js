let txtName = $('#txtName');
let txtEmail = $('#txtEmail');
let txtIndustry = $('#txtIndustry');
let txtUsername = $('#txtUsername');
let txtPass = $('#txtPass');
let txtConfirmPass = $('#txtConfirmPass');
let txtTp = $('#txtTp');
let txtCode = $('#txtCode');

function userData() {
    return {
        id: "",
        username: "",
        password: "",
        type: "",
        entityid: ""
    }
}

function employeeData() {
    return {
        id: "",
        name: "",
        industry: "",
        email: ""
    }
}

function companyData() {
    return {
        id: "",
        name: "",
        industry: "",
        email: "",
        state: ""
    }
}

const nameRegex = /^[a-zA-Z\s]+$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const usernameRegex = /^[a-zA-Z0-9]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

function validateField(value, regex) {
    return regex.test(value);
}

function validateRegisterFields() {
    const nameValid = validateField(txtName.val(), nameRegex);
    const emailValid = validateField(txtEmail.val(), emailRegex);
    const industryValid = txtIndustry.val() !== null && txtIndustry.val() !== '';
    const usernameValid = validateField(txtUsername.val(), usernameRegex);
    const passwordValid = validateField(txtPass.val(), passwordRegex);

    return nameValid && emailValid && industryValid && usernameValid && passwordValid;
}

function clearFields() {
    txtName.val('')
    txtEmail.val('')
    txtIndustry.val('')
    txtUsername.val('')
    txtPass.val('')
    txtTp.val('')
    txtIndustry.val('1')
    txtConfirmPass.val('')
    txtCode.val('')
}