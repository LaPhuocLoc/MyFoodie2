$(function () {
    let name = getParameter("name");

    $.get("http://helloworld.qyinter.cn/food/findByName?name="+name,{},function (data) {
        $('#search-key-word').html(decodeURI(name))
        let str = ''
        for (let i = 0; i < data.length; i++) {
            str  += '<div class="col-12 col-md-4">'+
                '<div class="recipe-wrapper">'+
                '<div class="recipe-bg">'+
                '<a href="recipe-single.html?rid=' + data[i].rid + '" class="recipe-link">'+
                '<div class="recipe-bg-container" style="background: url('+data[i].small_imgs+');"></div>'+
                '</a>'+
                '</div>'+
                '<div class="recipe-label">'+
                '<span class="badge rounded-pill bg-warning text-white">5.0 <i class="fas fa-star"></i></span>'+
                '</div>'+
                '<div class="recipe-caption">'+
                '<h5 class="recipe-caption__heading">'+data[i].food_name+'</h5>'+
                '<p class="recipe-caption__sub"></p>'+
                '</div>'+
                '</div>'+
                '</div>'
        }

        $("#row-content").html(str)

    })
    $('#icon').click(function(){
        window.location.href='index.html'
    })

    $('#button-addon2').click(function(){
        let name2 = $('#btn2_input').val()
        console.log(name2)
        $.get("http://helloworld.qyinter.cn/food/findByName?name="+name2,{},function (data) {
        $('#search-key-word').html(decodeURI(name2))
        let str = ''
        for (let i = 0; i < data.length; i++) {
            str  += '<div class="col-12 col-md-4">'+
                '<div class="recipe-wrapper">'+
                '<div class="recipe-bg">'+
                '<a href="recipe-single.html?rid=' + data[i].rid + '" class="recipe-link">'+
                '<div class="recipe-bg-container" style="background: url('+data[i].small_imgs+');"></div>'+
                '</a>'+
                '</div>'+
                '<div class="recipe-label">'+
                '<span class="badge rounded-pill bg-warning text-white">5.0 <i class="fas fa-star"></i></span>'+
                '</div>'+
                '<div class="recipe-caption">'+
                '<h5 class="recipe-caption__heading">'+data[i].food_name+'</h5>'+
                '<p class="recipe-caption__sub"></p>'+
                '</div>'+
                '</div>'+
                '</div>'
        }

        $("#row-content").html(str)

    })
    })
})