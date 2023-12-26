let jobPosts = []
getAllPosts();

let search = {
    type: [],
    time: 'All'
}

function getAllPosts() {

    $.ajax({
        url: baseURL + 'job-posts',
        method: 'GET',
        success: function (response) {
            console.log(response);
            jobPosts = response;
            bindCards(response)
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });

}

let selectedJobTypes = [];


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

        let newJobPosts = [];
        for (let i = 0; i < selectedJobTypes.length; i++) {
            if (selectedJobTypes[i].type !== filter) {
                newJobPosts.push(selectedJobTypes[i]);
            }
        }

        selectedJobTypes=newJobPosts;
    }


    if (search.type.length===0){
        console.log('here')
        selectedJobTypes=jobPosts;
    }else{
        selectedJobTypes=[];
    }

    loadCards()
}

function loadCards() {
    //switch filter
    for (let i = 0; i < jobPosts.length; i++) {

        for (let j = 0; j < search.type.length; j++) {
            if (!ifExists(jobPosts[i].id)){
                if (jobPosts[i].type === search.type[j]) {
                    selectedJobTypes.push(jobPosts[i]);
                }
            }
        }

    }

    console.log(selectedJobTypes);

    bindCards(selectedJobTypes);
}


function bindCards(list) {
    $('#job-card-container').empty();
    for (let i = 0; i < list.length; i++) {
        jobCard(list[i])
    }
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
    addSwitches('Full time', this.checked);
});

$('#txtFilterPartTime').change(function () {
    addSwitches('Part time', this.checked);
});

$('#txtFilterIntern').change(function () {
    addSwitches('Intern', this.checked);
});

function ifExists(filter) {

    for (let i = 0; i < selectedJobTypes.length; i++) {
        if (selectedJobTypes[i].id === filter) {
            return true;
        }
    }

    return false;
}

function jobCard(post) {

    let card=`<div class="col-10 bg-body-tertiary p-3 w-100 rounded-2" style="height: max-content" jobOB='${JSON.stringify(post)}'>

                            <div class="row p-0 m-0">

                                <div class="col-2 rounded-4 p-0">
                                    <img src="assets/images/bg2.jpg" class="rounded-2 bg-secondary p-0 w-100 h-100"
                                         alt="">
                                </div>

                                <div class="col-10 p-0">
                                    <div class="row p-0 m-0">
                                        <h5 class="col-10 h5 fw-bold mb-0">Software Engineering</h5>
                                        <div class="col-1 p-0"></div>
                                        <div class="col-1 p-0 d-flex justify-content-end">
                                            <button class="btn-fav bi bi-bookmark p-0 noOutline bg-body-tertiary text-success"
                                                    style="background-color: #ffffff"  jobOB='${JSON.stringify(post)}'></button>
                                        </div>
                                    </div>

                                    <div class="row p-0 m-0 mt-3">
                                        <div class="col-3"
                                             style="font-size: 15px ;cursor: pointer;user-select: none">
                                            <i class="bi bi-building pe-2"></i>
                                            <span class="company fw-bold">${post.companyId.name}</span>
                                        </div>

                                        <div class="col-3" style="font-size: 15px">
                                            <i class="bi bi-clock pe-2"></i>
                                            3 Days
                                        </div>

                                        <div class="col-3" style="font-size: 15px">
                                            <i class="bi bi-cash-stack pe-2"></i>
                                            ${post.salary}
                                        </div>

                                    </div>

                                    <div class="row p-0 m-0 mt-3">

                                        <div class="col-3 d-flex justify-content-start">
                                            <span class="bg-success py-1 px-2 text-light rounded-2"
                                                  style="cursor: pointer;height: max-content;padding: 2px">
                                                ${post.type}
                                            </span>
                                        </div>

                                        <div class="col-5"></div>
                                        <div class="col-4 btn btn-success d-none">
                                            <span>Add Resume</span>
                                            <i class="bi bi-plus"></i>
                                        </div>

                                    </div>
                                </div>


                            </div>


                        </div>`

    $('#job-card-container').append(card);
}