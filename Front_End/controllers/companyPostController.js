$('#btnAddPost').click(function() {
    const allFieldsValid = validateAllFields();

    if (allFieldsValid) {
        addPost(postData());
        console.log(postData());
    } else {
        toastShower('1','bg-danger','text-light','Invalid Data');
    }
});

function addPost(post) {

    $.ajax({
        url:baseURL+'job-posts/save',
        data:JSON.stringify(post),
        method:'POST',
        contentType: 'application/json',
        success:function (response) {
            toastShower('1','bg-success','text-light','Job is successfully posted');
        },
        error:function (e) {
            toastShower('1','bg-danger','text-light','Try again');
        }
    });

}