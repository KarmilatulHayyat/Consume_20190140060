function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    alert("You have been signed in successfully");
    $(".data").css("display", "block");
    $(".g-signin2").css("display", "none");
}



function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert("Masuk Berhasil");
        $(".data").css("display", "none");
        $(".g-signin2").css("display", "block");
    });
}