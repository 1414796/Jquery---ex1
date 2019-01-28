var check = 0;
var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;
var check5 = false;
var i = 1;
var checker = [check1, check2, check3,  check4, check5];
// var but = ['#but-menu1', '#but-menu2', '#but-menu3', 'but-menu4', 'but-menu5'];
// var txtInner = [];
// var hoverDirec = ["./images/about1_mb_hover.jpg", "./images/about2_mb_hover.jpg", "./images/about3_mb_hover.jpg", "./images/about4_mb_hover.jpg", "./images/about5_mb_hover.jpg"];
// var imgDirec = ["./images/about1_mb.jpg", "./images/about2_mb.jpg", "./images/about3_mb.jpg", "./images/about4_mb.jpg", "./images/about5_mb.jpg"];

function callAgain() {

    if (check1 == false) {
        $("#but-menu1").click(function () {
            $("#but-menu1").attr("src", "./images/about1_mb_hover.jpg");
            check1 = true;
        })
    }
    else {
        $("#but-menu1").click(function () {
            $("#but-menu1").attr("src", "./images/about1_mb.jpg");
            check1 = false;
        })
    }

    if (check2 == false) {
        $("#but-menu2").click(function () {
            $("#but-menu2").attr("src", "./images/about2_mb_hover.jpg");
            check2 = true;
        })
    }
    else {
        $("#but-menu2").click(function () {
            $("#but-menu2").attr("src", "./images/about2_mb.jpg");
            check2 = false;
        })
    }

    if (check3 == false) {
        $("#but-menu3").click(function () {
            $("#but-menu3").attr("src", "./images/about3_mb_hover.jpg");
            check3 = true;
        })
    }
    else {
        $("#but-menu3").click(function () {
            $("#but-menu3").attr("src", "./images/about3_mb.jpg");
            check3 = false;
        })
    }

    if (check4 == false) {
        $("#but-menu4").click(function () {
            $("#but-menu4").attr("src", "./images/about4_mb_hover.jpg");
            check4 = true;
        })
    }
    else {
        $("#but-menu4").click(function () {
            $("#but-menu4").attr("src", "./images/about4_mb.jpg");
            check4 = false;
        })
    }

    if (check5 == false) {
        $("#but-menu5").click(function () {
            $("#but-menu5").attr("src", "./images/about5_mb_hover.jpg");
            check5 = true;
        })
    }
    else {
        $("#but-menu5").click(function () {
            $("#but-menu5").attr("src", "./images/about5_mb.jpg");
            check5 = false;
        })
    }
}

 $(document).ready(function(){

    // Button close in model
    $(".close").click(function () {
        $(".hidden-Model").css("display","none");
    });

    // Open model
    $(".menu__detail").click(function(e) {
        e.preventDefault();
        $(".hidden-Model").css("display", "block");
        // $(".hidden-Model").slideDown();
        // $(".hidden-model").animate({height: "toggle"});
    });

    // slide down buttton 1
    $("#but-menu1").click(function(){
        check1 = true;
        //show and hide text
        $("#menu1-inner").animate({height: "toggle"});
        // callAgain();

        //Change image hover
        $("#but-menu1").attr("src", "./images/about1_mb_hover.jpg");
        //Check 'if the orders are on'
        if (check2 == true) {
            $("#menu2-inner").hide();
            check2 = false;
            $("#but-menu2").attr("src", "./images/about2_mb.jpg");
        }
        else if (check3 == true) {
            $("#menu3-inner").hide();
            check3 = false;
            $("#but-menu3").attr("src", "./images/about3_mb.jpg");
        }
        else if (check4 == true) {
            $("#menu4-inner").hide();
            check4 = false;
            $("#but-menu4").attr("src", "./images/about4_mb.jpg");
        }
        else if (check5 == true) {
            $("#menu5-inner").hide();
            check5 = false;
            $("#but-menu5").attr("src", "./images/about5_mb.jpg");
        };

    });


    // slide down button 2
    $("#but-menu2").click(function(){
        check2 = true;
        //Show and  hode text
        $("#menu2-inner").animate({height: "toggle"});
        //Change image hover
        $("#but-menu2").attr("src", "./images/about2_mb_hover.jpg");

        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $("#menu1-inner").hide();
            check1 = false;
            $("#but-menu1").attr("src", "./images/about1_mb.jpg");
        }
        else if (check3 == true) {
            $("#menu3-inner").hide();
            check3 = false;
            $("#but-menu3").attr("src", "./images/about3_mb.jpg");
        }
        else if (check4 == true) {
            $("#menu4-inner").hide();
            check4 = false;
            $("#but-menu4").attr("src", "./images/about4_mb.jpg");
        }
        else if (check5 == true) {
            $("#menu5-inner").hide();
            check5 = false;
            $("#but-menu5").attr("src", "./images/about5_mb.jpg");
        };
        // check += 1  ;

    });

    // slide down button 3
    $("#but-menu3").click(function(){
        check3 = true;
        //Show and  hode text
        $("#menu3-inner").animate({height: "toggle"});
        //Change image hover
        $("#but-menu3").attr("src", "./images/about3_mb_hover.jpg");
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $("#menu1-inner").hide();
            check1 = false;
            $("#but-menu1").attr("src", "./images/about1_mb.jpg");
        }
        else if (check2 == true) {
            $("#menu2-inner").hide();
            check2 = false;
            $("#but-menu2").attr("src", "./images/about2_mb.jpg");
        }
        else if (check4 == true) {
            $("#menu4-inner").hide();
            check4 = false;
            $("#but-menu4").attr("src", "./images/about4_mb.jpg");
        }
        else if (check5 == true) {
            $("#menu5-inner").hide();
            check5 = false;
            $("#but-menu5").attr("src", "./images/about5_mb.jpg");
        };
        // check += 1;
    });

    // slide down button 4
    $("#but-menu4").click(function(){
        check4 = true;
        //Show and  hode text
        $("#menu4-inner").animate({height: "toggle"});
        //Change image hover
        $("#but-menu4").attr("src", "./images/about4_mb_hover.jpg");
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $("#menu1-inner").hide();
            check1 = false;
            $("#but-menu1").attr("src", "./images/about1_mb.jpg");
        }
        else if (check2 == true) {
            $("#menu2-inner").hide();
            check2 = false;
            $("#but-menu2").attr("src", "./images/about2_mb.jpg");
        }
        else if (check3 == true) {
            $("#menu3-inner").hide();
            check3 = false;
            $("#but-menu3").attr("src", "./images/about3_mb.jpg");
        }
        else if (check5 == true) {
            $("#menu5-inner").hide();
            check5 = false;
            $("#but-menu5").attr("src", "./images/about5_mb.jpg");
        };
        // check += 1;
    });

    // slide down button 5
    $("#but-menu5").click(function(){
        check5 = true;
        //Show and  hode text
        $("#menu5-inner").animate({height: "toggle"});
        //Change image hover
        $("#but-menu5").attr("src", "./images/about5_mb_hover.jpg");
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $("#menu1-inner").hide();
            check1 = false;
            $("#but-menu1").attr("src", "./images/about1_mb.jpg");
        }
        else if (check2 == true) {
            $("#menu2-inner").hide();
            check2 = false;
            $("#but-menu2").attr("src", "./images/about2_mb.jpg");
        }
        else if (check3 == true) {
            $("#menu3-inner").hide();
            check3 = false;
            $("#but-menu3").attr("src", "./images/about3_mb.jpg");
        }
        else if (check4 == true) {
            $("#menu4-inner").hide();
            check4 = false;
            $("#but-menu4").attr("src", "./images/about4_mb.jpg");
        };
        // check += 1;
    });

 });
