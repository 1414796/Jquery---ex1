var check = 0;
var check1 = false;
var check2 = false;
var check3 = false;
var check4 = false;
var check5 = false;
var i = 1;
// var checker = ['check1', 'check2', 'check3',  'check4', 'check5'];
// console.log(checker[0]);
// var but = ['#but-menu1', '#but-menu2', '#but-menu3', 'but-menu4', 'but-menu5'];
// var txtInner = [];
var hoverDirec = ["./images/about1_mb_hover.jpg", "./images/about2_mb_hover.jpg", "./images/about3_mb_hover.jpg", "./images/about4_mb_hover.jpg", "./images/about5_mb_hover.jpg"];
var imgDirec = ["./images/about1_mb.jpg", "./images/about2_mb.jpg", "./images/about3_mb.jpg", "./images/about4_mb.jpg", "./images/about5_mb.jpg"];

function callAgain() {

    if (check1 == false) {
        $(".menu__button:eq(0)").bind('click', function () {
            $(".menu__button:eq(0)").attr("src", hoverDirec[0]);
            check1 = true;
        });
    }
    else {
        $(".menu__button:eq(0)").bind('click', function () {
            $(".menu__button:eq(0)").attr("src", imgDirec[0]);
            check1 = false;
        })
    }

    if (check2 == false) {
        $(".menu__button:eq(1)").click(function () {
            $(".menu__button:eq(1)").attr("src", hoverDirec[1]);
            check2 = true;
        })
    }
    else {
        $(".menu__button:eq(1)").click(function () {
            $(".menu__button:eq(1)").attr("src", imgDirec[1]);
            check2 = false;
        })
    }

    if (check3 == false) {
        $(".menu__button:eq(2)").click(function () {
            $(".menu__button:eq(2)").attr("src", hoverDirec[2]);
            check3 = true;
        })
    }
    else {
        $(".menu__button:eq(2)").click(function () {
            $(".menu__button:eq(2)").attr("src", imgDirec[2]);
            check3 = false;
        })
    }

    if (check4 == false) {
        $(".menu__button:eq(3)").click(function () {
            $(".menu__button:eq(3)").attr("src", hoverDirec[3]);
            check4 = true;
        })
    }
    else {
        $(".menu__button:eq(3)").click(function () {
            $(".menu__button:eq(3)").attr("src", imgDirec[3]);
            check4 = false;
        })
    }

    if (check5 == false) {
        $(".menu__button:eq(4)").click(function () {
            $(".menu__button:eq(4)").attr("src", hoverDirec[4]);
            check5 = true;
        })
    }
    else {
        $(".menu__button:eq(4)").click(function () {
            $(".menu__button:eq(4)").attr("src", imgDirec[4]);
            check5 = false;
        })
    }

    // for (var j = 0; j < 5; j++) {
    //     if (check+(j+1) == false) {
    //         $(".menu__button:eq(num)").click(function () {
    //             $(".menu__button:eq(num)").attr("src", hoverDirec[num]);
    //             checker[num] = true;
    //         })
    //     }
    //     else {
    //         $(".menu__button:eq(num)").click(function () {
    //             $(".menu__button:eq(num)").attr("src", imgDirec[num]);
    //             checker[num] = false;
    //         })
    //     }
    // }

}

 $(document).ready(function(){

     // $('.menu__button').click(function() {
     //     $('.menu__inner').stop(true);
     // });

    // Button close in model
    $(".close").click(function () {
        $(".hidden-Model").css("display","none");
        check -= 1;
    });

    // Open model
    $(".menu__detail").click(function(e) {
        // e.preventDefault();
        $(".hidden-Model").css("display", "block");
        check += 1;
        TweenMax.fromTo($(".hidden-Model"),
            0.5,
            {x: 200,y: -200},
            {x: 200,y: 10})
    });

    // slide down buttton 1
    $(".menu__button:eq(0)").click(function(){
        check1 = true;
        //show and hide text
        $(".menu__inner:eq(0)").animate({height: "toggle"});
        // callAgain();

        //Change image hover
        $(".menu__button:eq(0)").attr("src", hoverDirec[0]);
        //Check 'if the orders are on'
        if (check2 == true) {
            $(".menu__inner:eq(1)").hide();
            check2 = false;
            $(".menu__button:eq(1)").attr("src", imgDirec[1]);
        }
        else if (check3 == true) {
            $(".menu__inner:eq(2)").hide();
            check3 = false;
            $(".menu__button:eq(2)").attr("src", imgDirec[2]);
        }
        else if (check4 == true) {
            $(".menu__inner:eq(3)").hide();
            check4 = false;
            $(".menu__button:eq(3)").attr("src", imgDirec[3]);
        }
        else if (check5 == true) {
            $(".menu__inner:eq(4)").hide();
            check5 = false;
            $(".menu__button:eq(4)").attr("src", imgDirec[4]);
        };

    });


    // slide down button 2
    $(".menu__button:eq(1)").click(function(){
        check2 = true;
        //Show and  hode text
        $(".menu__inner:eq(1)").animate({height: "toggle"});
        //Change image hover
        $(".menu__button:eq(1)").attr("src", hoverDirec[1]);

        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $(".menu__inner:eq(0)").hide();
            check1 = false;
            $(".menu__button:eq(0)").attr("src", imgDirec[0]);
        }
        else if (check3 == true) {
            $(".menu__inner:eq(2)").hide();
            check3 = false;
            $(".menu__button:eq(2)").attr("src", imgDirec[2]);
        }
        else if (check4 == true) {
            $(".menu__inner:eq(3)").hide();
            check4 = false;
            $(".menu__button:eq(3)").attr("src", imgDirec[3]);
        }
        else if (check5 == true) {
            $(".menu__inner:eq(4)").hide();
            check5 = false;
            $(".menu__button:eq(4)").attr("src", imgDirec[4]);
        };
        // check += 1  ;

    });

    // slide down button 3
    $(".menu__button:eq(2)").click(function(){
        check3 = true;
        //Show and  hode text
        $(".menu__inner:eq(2)").animate({height: "toggle"});
        //Change image hover
        $(".menu__button:eq(2)").attr("src", hoverDirec[2]);
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $(".menu__inner:eq(0)").hide();
            check1 = false;
            $(".menu__button:eq(0)").attr("src", imgDirec[0]);
        }
        else if (check2 == true) {
            $(".menu__inner:eq(1)").hide();
            check2 = false;
            $(".menu__button:eq(1)").attr("src", imgDirec[1]);
        }
        else if (check4 == true) {
            $(".menu__inner:eq(3)").hide();
            check4 = false;
            $(".menu__button:eq(3)").attr("src", imgDirec[3]);
        }
        else if (check5 == true) {
            $(".menu__inner:eq(4)").hide();
            check5 = false;
            $(".menu__button:eq(4)").attr("src", imgDirec[4]);
        };
        // check += 1;
    });

    // slide down button 4
    $(".menu__button:eq(3)").click(function(){
        check4 = true;
        //Show and  hode text
        $(".menu__inner:eq(3)").animate({height: "toggle"});
        //Change image hover
        $(".menu__button:eq(3)").attr("src", hoverDirec[3]);
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $(".menu__inner:eq(0)").hide();
            check1 = false;
            $(".menu__button:eq(0)").attr("src", imgDirec[0]);
        }
        else if (check2 == true) {
            $(".menu__inner:eq(1)").hide();
            check2 = false;
            $(".menu__button:eq(1)").attr("src", imgDirec[1]);
        }
        else if (check3 == true) {
            $(".menu__inner:eq(2)").hide();
            check3 = false;
            $(".menu__button:eq(2)").attr("src", imgDirec[2]);
        }
        else if (check5 == true) {
            $(".menu__inner:eq(4)").hide();
            check5 = false;
            $(".menu__button:eq(4)").attr("src", imgDirec[4]);
        };
        // check += 1;
    });

    // slide down button 5
    $(".menu__button:eq(4)").click(function(){
        check5 = true;
        //Show and  hode text
        $(".menu__inner:eq(4)").animate({height: "toggle"});
        //Change image hover
        $(".menu__button:eq(4)").attr("src", hoverDirec[4]);
        // callAgain();
        //Check 'if the oders are on'
        if (check1 == true) {
            $(".menu__inner:eq(0)").hide();
            check1 = false;
            $(".menu__button:eq(0)").attr("src", imgDirec[0]);
        }
        else if (check2 == true) {
            $(".menu__inner:eq(1)").hide();
            check2 = false;
            $(".menu__button:eq(1)").attr("src", imgDirec[1]);
        }
        else if (check3 == true) {
            $(".menu__inner:eq(2)").hide();
            check3 = false;
            $(".menu__button:eq(2)").attr("src", imgDirec[2]);
        }
        else if (check4 == true) {
            $(".menu__inner:eq(3)").hide();
            check4 = false;
            $(".menu__button:eq(3)").attr("src", imgDirec[3]);
        };
        // check += 1;
    });

 });
