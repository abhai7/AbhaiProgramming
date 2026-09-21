$(document).ready(function () {

    // =========================================
    // 1. GET & SET
    // =========================================

    // Show Name
    $("#show-name").click(function () {
        let name = $("#student-name").text();
        $("#output").text(name);
    });

    // Change Name
    $("#change-name").click(function () {
        $("#student-name").text("ChatGPT");
    });

    // Show Bio
    $("#show-bio").click(function () {
        let bio = $("#student-bio").html();
        $("#output").text(bio);
    });

    // Get Input
    $("#get-input").click(function () {
        let nickname = $("#nickname-input").val();
        $("#output").text(nickname);
    });

    // Set Input
    $("#set-input").click(function () {
        $("#nickname-input").val("jQuery Pro");
    });


    // =========================================
    // 2. CSS CLASSES
    // =========================================

    // Add highlighted class
    $("#highlight-card").click(function () {
        $("#profile-card").addClass("highlighted");
    });

    // Remove highlighted class
    $("#remove-highlight").click(function () {
        $("#profile-card").removeClass("highlighted");
    });

    // Toggle dark-mode class
    $("#toggle-dark-mode").click(function () {
        $("#profile-card").toggleClass("dark-mode");
    });

    // Toggle rounded class
    $("#toggle-rounded").click(function () {
        $("#profile-photo").toggleClass("rounded");
    });


    // =========================================
    // 3. CSS METHOD
    // =========================================

    // Red background
    $("#red-background").click(function () {
        $("#profile-card").css("background", "#e74c3c");
    });

    // Reset background
    $("#reset-background").click(function () {
        $("#profile-card").css("background", "white");
    });


    // =========================================
    // 4. HIDE & SHOW
    // =========================================

    // Hide Photo
    $("#hide-photo").click(function () {
        $("#profile-photo").hide("slow");
    });

    // Show Photo
    $("#show-photo").click(function () {
        $("#profile-photo").show("slow");
    });

    // Toggle Bio
    $("#toggle-bio").click(function () {
        $("#student-bio").toggle();
    });


    // =========================================
    // 5. FADE
    // =========================================

    // Fade Out Card
    $("#fade-out-card").click(function () {
        $("#profile-card").fadeOut();
    });

    // Fade In Card
    $("#fade-in-card").click(function () {
        $("#profile-card").fadeIn();
    });

    // Fade to 50%
    $("#fade-50-card").click(function () {
        $("#profile-card").fadeTo("slow", 0.5);
    });


    // =========================================
    // 6. SLIDE
    // =========================================

    // Slide Up Skills
    $("#slide-up-skills").click(function () {
        $("#skills-list").slideUp();
    });

    // Slide Down Skills
    $("#slide-down-skills").click(function () {
        $("#skills-list").slideDown();
    });

    // Slide Toggle Skills
    $("#slide-toggle-skills").click(function () {
        $("#skills-list").slideToggle();
    });


    // =========================================
    // 7. ANIMATE
    // =========================================

    $("#animate-card").click(function () {

        $("#profile-card")
            .animate({
                marginLeft: "200px"
            }, 1000)
            .animate({
                marginLeft: "0px"
            }, 1000);

    });


    // =========================================
    // 8. EVENTS
    // =========================================

    // Mouse Enter
    $("#profile-photo").mouseenter(function () {
        $("#profile-photo").addClass("shadow");
    });

    // Mouse Leave
    $("#profile-photo").mouseleave(function () {
        $("#profile-photo").removeClass("shadow");
    });

    // Keyboard Event
    $("#nickname-input").keydown(function (event) {
        $("#output").text(event.key);
    });

});