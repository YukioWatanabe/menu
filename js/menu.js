$.expr[':'].containsIgnoreCase = function (n, i, m) {
    return new RegExp(m[3],"i").test($(n).text());
};

var displayMenu = function(){
    $('.menu').toggleClass('active');
    $('.overlay').toggleClass('active');
    $('.logo').toggleClass('active');
    $('.menu .menu-group > li').removeClass('active');
}

var pesquisaMenu = function(){
    $('.menu .menu-group > li').removeClass('active');
    $('.menu .menu-group.nivel-1 > li').children().hide();
    $('.menu .menu-group .item:containsIgnoreCase('+$('[name=pesquisa-menu]').val()+')').parentsUntil('.menu-group.nivel-1').find('.item').addBack().show();
}

$('.menu').on('click','.menu-group > li > span', function(){
    var add = !$(this).parents('li').eq(0).hasClass('active');
    $('.menu .menu-group > li').removeClass('active');
    $(this).parents('li').addClass('active');
    $(this).parents('li').eq(0).toggleClass('active',add);
});

$('.window').on('click','.window-close',function(){
    var target = $(this).parents('.window');
    target.addClass('close-window');
});

$('[name=pesquisa-menu]').keyup(pesquisaMenu);

$('.logo').click(displayMenu);
$('.overlay').click(displayMenu);