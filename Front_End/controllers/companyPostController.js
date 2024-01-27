let selectedPost = {};

let addPost = $('#btnAddPost');
let deletePost = $('#btnDeletePost');
let updatePost = $('#btnUpdatePost');
let refreshPost = $('#btnRefreshPost');


addPost.click(function () {
    const allFieldsValid = validateAllFields();

    if (allFieldsValid) {
        if (userAccount.company.state === 'approved') {
            console.log(postData());
            savePost(postData());
        }
    } else {
        toastShower('1', 'bg-danger', 'text-light', 'Invalid Data');
    }
});

function savePost(post) {

    $.ajax({
        url: baseURL + 'job-posts/save?id='+userAccount.company.id,
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
    getPosts();
});

function getPosts() {

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

    deletePost.removeClass('d-none')
    updatePost.removeClass('d-none')
    addPost.addClass('d-none')

    let parseOB = JSON.parse($(this).attr('post'));
    console.log(parseOB);

    selectedPost = parseOB;

    $('#txtJobTitle').val(parseOB.title)
    $('#txtJobDescription').val(parseOB.description)
    $('#txtSalary').val(parseOB.salary)
    $('#txtSelectType').val(parseOB.type)
    $('#txtSelectIndustry').val(parseOB.industry)

});

updatePost.click(function () {

    selectedPost.title = $('#txtJobTitle').val()
    selectedPost.description = $('#txtJobDescription').val()
    selectedPost.salary = $('#txtSalary').val()
    selectedPost.type = $('#txtSelectType').val()
    selectedPost.industry = $('#txtSelectIndustry').val()

    $.ajax({
        url: baseURL + 'job-posts/save',
        data: JSON.stringify(selectedPost),
        method: 'POST',
        contentType: 'application/json',
        success: function (response) {
            toastShower('1', 'bg-success', 'text-light', 'Post is successfully updated');
            clearPostFields();
            selectedPost = {}
            deletePost.removeClass('d-none')
            updatePost.removeClass('d-none')
            addPost.addClass('d-none')
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Error try again');
        }
    });

});

deletePost.click(function () {
    $.ajax({
        url: baseURL + 'job-posts?id=' + selectedPost.id,
        method: 'DELETE',
        contentType: 'application/json',
        success: function (response) {
            toastShower('1', 'bg-success', 'text-light', 'Post is successfully updated');
            clearPostFields();
            selectedPost = {}
            deletePost.removeClass('d-none')
            updatePost.removeClass('d-none')
            addPost.addClass('d-none')
        },
        error: function (e) {
            toastShower('1', 'bg-danger', 'text-light', 'Error try again');
        }
    });
});

refreshPost.click(function () {
    clearPostFields()
    deletePost.addClass('d-none')
    updatePost.addClass('d-none')
    addPost.removeClass('d-none')
});