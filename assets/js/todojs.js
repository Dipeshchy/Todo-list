// selecting todo list item
$('ul').on('click','li',function(){
    $(this).toggleClass("completed");
});
// deletinf todo list item
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    });
    event.stopPropagation();
});
$('input[type="text"]').keypress(function(event){
    if(event.which ===13)
    {
        // gradding text
        var todoText=$(this).val();
        $(this).val('');
    //  addint to todolist
    $('ul').append("<li><span><i class='fa fa-trash'></i></span> "+todoText+"</li>");
}
event.stopPropagation();
});
$('.fa-plus').click(function(){
    $('input[type="text"]').fadeToggle();
});