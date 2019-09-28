$("ul").on("click", "li", function(){
    $(this).toggleClass("feito")
})

$("ul").on("click",".trash", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("ul").on("click",".up", function(event){
    index = $(this).parent().index();
    $('ul').find('li:eq('+(index)+')').insertBefore('li:eq('+(index-1)+')');
    event.stopPropagation();
})

$("ul").on("click",".down", function(event){
    index = $(this).parent().index();
    $('ul').find('li:eq('+(index+1)+')').insertBefore('li:eq('+index+')');
    event.stopPropagation();
})

function adicionar(input){
    if (input.val() != ""){
        input.removeClass("nodata");
        $("ul").append('<li> <span class="trash"><i class="fa fa-trash"></i></span>'+ input.val()+'<span class="arrow down"><i class="fa fa-angle-down"></i></span><span class="arrow up"><i class="fa fa-angle-up"></i></span></li>');
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
    input = $("#tarefa");
    input.fadeIn();
    input.focus();
})

