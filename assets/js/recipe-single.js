$(function () {
    let rid = getParameter("rid")
    $.get("https://helloworld.qyinter.cn/food/findByRid?rid="+rid,{},function (data) {
      $('#description_text').html(data.food_details)
      $('#food_time').html(data.time +' min')
      $('#energy').html(data.energy+' kcal')
      if(data.cid ==1){
        $('#city').html("日本")
      }else if (data.cid ==2) {
        $('#city').html("中国")
      }else if(data.cid==3){
        $('#city').html("ベトナム")
      }
      let food_materialArr = data.food_material.split('|')

      let strs = ''
      for (let i = 0; i < food_materialArr.length; i++) {
        strs += '<li>'+
                '<input class="form-check-input" type="checkbox" value="" id="material_'+(i+1)+'">'+
                '<label class="form-check-label" for="material_'+(i+1)+'">'+ food_materialArr[i]+
                '</label>'+
                '</li>'
      }
      let str_beijing = '<div class="banner-bg" style="background: url('+data.big_imgs+') no-repeat center/cover;"></div>'
      let beijing_text = '<div class="banner-text d-flex justify-content-center align-items-center"><h1 class="banner-title text-white text-center" id="food_name">富山ブラック</h1></div>'
      str_beijing+=beijing_text
      $('#beijing').html(str_beijing)
      $('#food_name').html(data.food_name)
     
      $('#food_ul').html(strs)
      let food_methodArr = data.making_method.split('|')
      let strs_ol= ''
      for (let i = 0; i < food_methodArr.length; i++) {
        strs_ol += '<li>'+'<p>'+food_methodArr[i]+'</p>'+'</li>'
      }
      $('#food_method_ol').html(strs_ol)
      let str_video = '<iframe src="'+data.media+'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'
      $('#video_wrapper').html(str_video)
    })
    $('#icon').click(function(){
    window.location.href='index.html'
   })
  })