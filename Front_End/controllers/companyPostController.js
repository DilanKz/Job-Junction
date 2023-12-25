let selectedPost = {};

let addPost = $('#btnAddPost');
let deletePost = $('#btnDeletePost');
let updatePost = $('#btnUpdatePost');


addPost.click(function () {
    const allFieldsValid = validateAllFields();

    if (allFieldsValid) {
        if (userAccount.company.state === 'approved') {
            savePost(postData());
            console.log(postData());
        }
    } else {
        toastShower('1', 'bg-danger', 'text-light', 'Invalid Data');
    }
});

function savePost(post) {

    $.ajax({
        url: baseURL + 'job-posts/save',
        data: JSON.stringify(post),
        method: 'POST',
        contentType: 'application/json',
        success: function (response) {
            toastShower('1', 'bg-success', 'text-light', 'Job is successfully posted');
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });

}


$('#link-DB').click(function () {
    getPosted()
})

function getPosted() {

    $.ajax({
        url: baseURL + 'job-posts/posted?id=' + userAccount.company.id,
        method: 'GET',
        success: function (response) {
            console.log(response);
            loadPosts(response)
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Try again');
        }
    });

}

function loadPosts(posts) {


    let tblPosts = $('#tblPosts');
    tblPosts.empty();
    for (let i = 0; i < posts.length; i++) {
        let tr = `<tr class="post-tr" post='${JSON.stringify(posts[i])}' style="cursor: pointer">
             <td>${posts[i].id}</td>
             <td>${posts[i].title}</td>
             <td>${posts[i].industry}</td>
             <td>${posts[i].salary}</td>
             <td>10</td>
         </tr>`

        tblPosts.append(tr)

    }
}

$(document).on('click', '.post-tr', function () {

    deletePost.toggleClass('d-none')
    updatePost.toggleClass('d-none')
    addPost.toggleClass('d-none')

    let parseOB = JSON.parse($(this).attr('post'));
    console.log(parseOB);
    $('#txtJobTitle').val(parseOB.title)
    $('#txtJobDescription').val(parseOB.description)
    $('#txtSalary').val(parseOB.salary)
    $('#txtSelectType').val(parseOB.type)
    $('#txtSelectIndustry').val(parseOB.industry)

});