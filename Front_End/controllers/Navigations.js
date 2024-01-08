$(document).on('click', '#btn-profile', function () {
    if (userAccount.user.type === 'companies') {
        showDashboard()
        setDataToDashboard()
    } else if (userAccount.user.type === 'employees') {

    }
});

$(document).ready(function () {
    $('#sidebar-menu .nav-item').on('click', function () {
        $('#sidebar-menu .nav-link').removeClass('active');

        $(this).find('.nav-link').removeClass('link-body-emphasis');
        $(this).find('.nav-link').addClass('active');
        $('#sidebar-menu .nav-link').not('.active').addClass('link-body-emphasis');
    });
});

$(document).ready(function () {
    $('#btnRefreshFilter').click(function () {
        $(this).addClass('rotate');

        setTimeout(function () {
            $('#btnRefreshFilter').removeClass('rotate');
        }, 1000);
    });
});

$('#dashboard-frame').css('display', 'block');
$('#post-frame').css('display', 'none');
$('#profile-frame').css('display', 'none');
// $('#employer-home-frame').addClass('d-none');

$('#login-back-ground').click(function () {
    $('#login-frame').addClass('d-none');
    $('#register').addClass('d-none');
    $('#login').addClass('d-none');
});
$('#btnCompLocation').prop('disabled', true)

$('#g-map-bg').click(function () {
    $('#g-map-frame').toggleClass('d-none');
    $('#g-map-frame').toggleClass('d-flex');
    $('#txtAddress').val(userLocation.address);
    if (userLocation.address !== null) {
        $('#btnCompLocation').prop('disabled', false);
    }
});

$('#g-map-bg1').click(function () {
    $('#g-map-frame1').toggleClass('d-none');
    $('#g-map-frame1').toggleClass('d-flex');
    $('#txtAddress').val(userLocation.address);
    if (userLocation.address !== null) {
        $('#btnCompLocation').prop('disabled', false);
    }
});

$('#btn-login-main').click(function () {
    $('#login-frame').removeClass('d-none');
    $('#login').removeClass('d-none');
    $('#register').addClass('d-none');
});

$('#btn-register-second').click(function () {
    $('#login').toggleClass('d-none');
    $('#register').toggleClass('d-none');

});

$('#btnForgotPass').click(function () {
    $('#forgotPassword').removeClass('d-none');
    $("#txtLoginName").focus();
});

$('#btnForgotPassClose').click(function () {
    $('#forgotPassword').addClass('d-none');
});

$('#btn-login-second').click(function () {
    $('#login').toggleClass('d-none');
    $('#register').toggleClass('d-none');
});

$(document).ready(function () {
    $('.btn-fav').click(function () {
        console.log('fav');
        $(this).toggleClass('bi-bookmark-fill');
        $(this).toggleClass('bi-bookmark');
    });
});

$(document).ready(function () {
    let prevScrollPos = $(window).scrollTop();

    $(window).scroll(function () {
        let currentScrollPos = $(window).scrollTop();

        if (prevScrollPos > currentScrollPos) {
            $("#navbar").css("top", "0");
        } else {
            $("#navbar").css("top", "-100px");
        }

        prevScrollPos = currentScrollPos;
    });
});

$('#jobs-frame').css('display', 'none');

$('#footer').removeClass('d-none');

function showHome() {
    $('#home-page').css('display', 'block');
    $('#jobs-frame').css('display', 'none');
    $('#footer').removeClass('d-none');
    $('#employer-home-frame').addClass('d-none');
}

function showJobs() {
    $('#home-page').css('display', 'none');
    $('#jobs-frame').css('display', 'block');
    $('#footer').removeClass('d-none');
    $('#employer-home-frame').addClass('d-none');
}

function showDashboard() {
    $('#home-page').css('display', 'none');
    $('#jobs-frame').css('display', 'none');
    $('#employer-home-frame').removeClass('d-none');
    $('#footer').addClass('d-none');
}

function showDB() {
    $('#dashboard-frame').css('display', 'block');
    $('#post-frame').css('display', 'none');
    $('#profile-frame').css('display', 'none');
    clearPostFields()
}

function showPosts() {
    $('#dashboard-frame').css('display', 'none');
    $('#post-frame').css('display', 'block');
    $('#profile-frame').css('display', 'none');
    clearPostFields()
}

function showProfile() {
    $('#dashboard-frame').css('display', 'none');
    $('#post-frame').css('display', 'none');
    $('#profile-frame').css('display', 'block');
    clearPostFields()
}

function chart() {
    const xValues = [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150];
    const yValues = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];

    new Chart("myChart", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                fill: false,
                lineTension: 0,
                backgroundColor: "rgba(0,0,255,1.0)",
                borderColor: "rgba(0,0,255,0.1)",
                data: yValues
            }]
        },
        options: {
            legend: {display: false},
            scales: {
                yAxes: [{ticks: {min: 6, max: 16}}],
            }
        }
    });
}

chart();

$('#toggleButton').click(function () {
    $('#job-filter-menu').toggleClass('job-filter-hidden job-filter-shown');
    clearPostFields();
});

$('.accordion-c-button').click(function () {
    $('.accordion-c-button').toggleClass('bi-chevron-double-down bi-chevron-double-up');
    $('#add-post-accordion').toggleClass('d-none');
    clearPostFields();
});


/*$(document).ready(function () {
$('#post-tab-pane .nav-item').on('click', function () {
    $('#post-tab-pane .nav-link').removeClass('active');
    $(this).find('.nav-link').addClass('active');
});
});*/