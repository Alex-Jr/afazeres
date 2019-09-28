$("ul").on("click", "li", function(){
    $(this).toggleClass("feito")
})

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$(".fa-plus").on("click",function(event){
    //Adiciona uma nova linha ao UL
    input = $("input")
    if(input.val() != ""){
        $("ul").append('<li><span><i class="fa fa-trash"></i></span>'+ input.val()+ '</li>');
        input.val("");
        input.attr("placeholder", "Nova Tarefa...");
        input.removeClass("nodata");
    } else {
        input.attr("placeholder", "Digite uma tarefa!");
        input.addClass("nodata");
    }
})