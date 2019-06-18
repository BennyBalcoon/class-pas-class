$(document).ready(function () {
    $("#fill").click(function () {
        $(".row div").addClass("fill");
    });
});

$(document).ready(function () {
    $("#empty").click(function () {
        $(".row div").removeClass("fill");
    });
});

$(".circle").click(function () {
    $(this).toggleClass("fill");
});

$(".square.ligne1").click(function () {
    if ($(this).hasClass("fill") && ($(".ligne1").hasClass("fill"))) {
        $(".ligne1").removeClass("fill");
    } else {
        $(".ligne1").addClass("fill");
    }
});

$(".square.ligne2").click(function () {
    if ($(this).hasClass("fill") && ($(".ligne2").hasClass("fill"))) {
        $(".ligne2").removeClass("fill");
    } else {
        $(".ligne2").addClass("fill");
    }
});

$(".square.ligne3").click(function () {
    if ($(this).hasClass("fill") && ($(".ligne3").hasClass("fill"))) {
        $(".ligne3").removeClass("fill");
    } else {
        $(".ligne3").addClass("fill");
    }
});

$(".square.ligne4").click(function () {
    if ($(this).hasClass("fill") && ($(".ligne4").hasClass("fill"))) {
        $(".ligne4").removeClass("fill");
    } else {
        $(".ligne4").addClass("fill");
    }
});

$(".square.ligne5").click(function () {
    if ($(this).hasClass("fill") && ($(".ligne5").hasClass("fill"))) {
        $(".ligne5").removeClass("fill");
    } else {
        $(".ligne5").addClass("fill");
    }
});


$(".lozenge.ligne4").click(function(){
    if ($(this).hasClass("fill") && ($(".ligne4").hasClass("fill")) && ($(".colonne2").hasClass("fill"))) {
        $(".ligne4").removeClass("fill");
        $(".colonne2").removeClass("fill");
    } else {
        $(".ligne4").addClass("fill");
        $(".colonne2").addClass("fill");
    }
})

$(".lozenge.ligne2").click(function(){
    if ($(this).hasClass("fill") && ($(".ligne2").hasClass("fill")) && ($(".colonne4").hasClass("fill"))) {
        $(".ligne2").removeClass("fill");
        $(".colonne4").removeClass("fill");
    } else {
        $(".ligne2").addClass("fill");
        $(".colonne4").addClass("fill");
    }
})