$(function(){
    $('#icon').click(function(){
      window.location.href='index.html'
    })
    //页面加载完成后加载数据
    load(1,9)
    $('#button-addon2').click(function(){
            let name2 = $('#btn2_input').val()
            $.get("http://helloworld.qyinter.cn/food/findByName?name="+name2,{},function (data) {
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

            $("#food").html(str)
            $("#from_ul").html('')
        })
        })
  })
  function load(currentPage,pageSize){
      $.get("http://helloworld.qyinter.cn/food/pageQuery?currentPage="+currentPage+"&pageSize="+pageSize,{},function(data){
      //1.分页工具条
        let lis = '';
        //计算上一页的页码
        let fristNum = data.currentPage - 1;
        if(fristNum<=0){
          fristNum = 1;
        }
        let frist = '<li class="page-item"><a class="page-link" href="javascript:load('+fristNum+','+pageSize+')">Previous</a></li>';
        lis+=frist
       for(let i = 1;i<=data.totalPage;i++){
          let li;
          if(data.currentPage==i){
            li = '<li class="page-item active"><a class="page-link" href="javascript:load('+i+','+pageSize+')">'+i+'</a></li>';
          }else{
            li = '<li class="page-item"><a class="page-link" href="javascript:load('+i+','+pageSize+')">'+i+'</a></li>';
          }
          
          lis+=li;
          
        }
        let lastNum = data.currentPage+1
        if(lastNum>data.totalPage){
          lastNum = data.totalPage
        }
        let last = '<li class="page-item"><a class="page-link" href="javascript:load('+lastNum+','+pageSize+')">Next</a></li>'
        lis+=last
        $("#from_ul").html(lis)
       //2.列表数据
        let foodli = '';
        for(let i = 0;i<data.list.length;i++){
          let food = data.list[i]
          let li = '<div class="col-12 col-md-4">'+
                        '<div class="recipe-wrapper">'+
                            '<div class="recipe-bg">'+
                                '<a href="recipe-single.html?rid=' + data.list[i].rid + '" class="recipe-link">'+
                                    '<div class="recipe-bg-container" style="background: url('+data.list[i].small_imgs+');"></div>'+
                               '</a>'+
                            '</div>'+
                            '<div class="recipe-label">'+
                                '<span class="badge rounded-pill bg-warning text-white">5.0 <i class="fas fa-star"></i></span>'+
                            '</div>'+
                            '<div class="recipe-caption">'+
                                '<h5 class="recipe-caption__heading">'+data.list[i].food_name+'</h5>'+
                                // '<p class="recipe-caption__sub">'+data.list[i].small_details+'</p>'+
                            '</div>'+
                       '</div>'+
                   ' </div>'
          foodli += li;
        }
        $('#food').html(foodli);

   })
  }