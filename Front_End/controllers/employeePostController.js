let search={
    type:[]
}

function postFilter() {
    //this where search items are filtered

    //txtFilterPlace
    //txtFilterIndustry
}

/*function addSwitches(filter, isChecked) {
    if (isChecked) {
        search[filter] = true;
    } else {
        delete search[filter];
    }

    console.log(search);
}*/

function addSwitches(filter, isChecked) {
    const index = search.type.indexOf(filter);

    if (isChecked && index === -1) {
        search.type.push(filter);
    } else if (!isChecked && index !== -1) {
        search.type.splice(index, 1);
    }

    console.log(search);
}

function updateSearchTime(time) {
    search.time = time;

    console.log(search);
}

$('input[name="flexRadioDefault"]').change(function () {
    if (this.checked) {
        const selectedTime = $(this).attr('id').replace('txtFilter', '');
        updateSearchTime(selectedTime);
    }
});

$('#txtFilterFullTime').change(function () {
    addSwitches('FullTime', this.checked);
});

$('#txtFilterPartTime').change(function () {
    addSwitches('PartTime', this.checked);
});

$('#txtFilterIntern').change(function () {
    addSwitches('Intern', this.checked);
});