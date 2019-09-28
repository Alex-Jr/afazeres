$("ul").on("click", "li", function(){
    $(this).toggleClass("feito")
})

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})


function adicionar(input){
    if (input.val() != ""){
        input.removeClass("nodata");
        $("ul").append('<li><span><i class="fa fa-trash"></i></span>'+ input.val()+ '</li>');
        input.val("");
        input.attr("placeholder", "Nova tarefa...");
    } else {    
        input.attr("placeholder", "Digite uma tarefa!");
        input.addClass("nodata");
    }
}

$("input").keypress(function(event){
    input = $("#tarefa");
    if (event.which === 13) {
        adicionar(input)
    }
})


$(".fa-plus").click(function(){
    input = $("#tarefa");
    if (input.val() != ""){
        adicionar(input);
    } else {
        input.fadeToggle();
    }
})

$("body").keypress(function(event){
    input.fadeIn();
})
