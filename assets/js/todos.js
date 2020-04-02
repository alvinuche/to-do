//Check off specific todos by clicking
$('ul').on('click', 'li', function(){
    $(this).toggleClass('done');
})

//Click on X to remove the todo
$('ul').on('click','span',function(event){
    $(this).parent().fadeOut(700, function(){
        $(this).remove();
    })
    event.stopPropagation();
});

//listening for inputs
$('input[type = "text"]').keypress(function(event){
    if(event.which === 13){
        //grabbing new todos from input
        var todoText = $(this).val();
        $(this).val('');
        //creating new Lis and adding to ul
        $('ul').append('<li><span><i class="fa fa-trash"></i></span>  ' + todoText + '</li>');
    }
});

// toggle input 
$('.fa-pencil').click(function(){
    $('input').fadeToggle()
});