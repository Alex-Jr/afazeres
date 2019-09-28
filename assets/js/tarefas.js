$("ul").on("click", "li", function(){
    $(this).toggleClass("feito")
})

$("ul").on("click","span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("#novo").on("click",function(event){
    //Adiciona uma nova linha ao UL
    input = $("input")
    if(input.val() != ""){
        $("ul").append('<li><span>X</span> '+ input.val()+ '</li>');
    }
})