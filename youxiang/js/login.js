//banner背景轮播
var imgs = ["images/promPic.jpg","images/promPic1.jpg","images/promPic2.jpg","images/promPic3.jpg"];
var bgs = ["rgb(237, 244, 252)","rgb(240, 241, 245)","rgb(243, 244, 246)","rgb(243, 244, 246)"];
var i = 0;
var head=document.getElementById("ban");
var hBg=document.getElementById("banner");
var NextBtn = document.getElementById('Nextbtn');
var PreBtn = document.getElementById('Prebtn');
//初始化背景图片和背景颜色
head.style.background="url("+imgs[0]+")"; 
hBg.style.backgroundColor = bgs[0];
// var goIndex  = function(){
//     head.style.background="url("+imgs[i]+")";
//     hBg.style.backgroundColor = bgs[i];
// }
NextBtn.onclick = function(){
    head.style.background="url("+imgs[i]+")";
    hBg.style.backgroundColor = bgs[i];
    if(i < 3){
        i++;
    } else{
        i=0;
    }
    // goIndex();
    // console.log(imgs[i])//控制台查看背景输出路径
    // console.log(bgs[i])//控制台控制背景颜色输出
}
PreBtn.onclick = function(){
    head.style.background="url("+imgs[i]+")";
    hBg.style.backgroundColor = bgs[i];
    if(i == 0){
        i = 3;
    } else{
        i--;
    }
    // goIndex();
   console.log(imgs[i])//控制台查看背景输出路径
    console.log(bgs[i])//控制台控制背景颜色输出
}

// 表单处理
$(function(){
    // 邮箱处理
    $('.name_input').focus(function(){
        $('#inp1').addClass('active_color')
    })
    $('.name_input').focusout(function(){
        $('#inp1').removeClass('active_color')
    })
    $('.name_input').keyup(function() {
        if($('.name_input').val()==""){
            $('.u_label').css('display','block');
            $('.erro').css('display','none');
            $('#inp1').removeClass('erro_color');
        }else{
            $('.u_label').css('display','none');
            $('.erro').css('display','none');
            $('#inp1').removeClass('erro_color');
        }
    });
    //密码处理
    $('.paswd_input').focus(function(){
        $('#inp2').addClass('active_color');
        $('.deficon').click(function(){
         $('.paswd_input').val('');
         $('.paswd_input').select();
        })
    })
    $('.paswd_input').focusout(function(){
        $('#inp2').removeClass('active_color')
    })
    $('.paswd_input').keyup(function() {
        if($('.paswd_input').val()==""){
            $('.f_label').css('display','block');
            $('.erro').css('display','none');
            $('#inp2').removeClass('erro_color');
            $('.t_ip').css('display','none');
        }else{
            $('.f_label').css('display','none');
            $('.erro').css('display','none');
            $('#inp2').removeClass('erro_color');
            $('.t_ip').css('display','block');
        }
    });

})

$(function(){
    $('#checked').click(function(){
        var Obj = $('.Eduig');
        if(Obj.css('display')=='block'){
            Obj.css('display','none')
        }else{
            Obj.css('display','block')
        }
    })
})
//选项卡切换
$('.loginFunc li').hover(function(){
    $("#"+$(this).attr("control")).show().siblings().hide();
    $(this).addClass("active").siblings().removeClass("active");
});

//验证表单
    //邮箱输入提示信息
    $(function yanzheng(){
        $('.Logini').click(function(){
           if($('.name_input').val() == ""){
                $('#inp1').addClass('erro_color');
                $('.erro').css('display','block');
                $('.erro .ferro').text('请输入账户');
                return false;
           }else if($('.paswd_input').val() == ""){
                $('#inp2').addClass('erro_color');
                $('.erro').css('display','block');
                $('.erro .ferro').text('请输入密码');
                return false;
           }
        })
        $('.name_input').change(function(){
            if($.trim(this.value) == "" || $.trim(this.value).length < 11){
                $('.name_input').val("");
                $('.name_input').select();
                $('#inp1').addClass('erro_color');
                $('.erro').css('display','block');
                $('.erro .ferro').text('账号格不正确');
                n =  false;
            }
        })
        $('.paswd_input').change(function(){
            if($.trim(this.value) == "" || $.trim(this.value).length < 16){
                $('.paswd_input').val("");
                $('.paswd_input').select();
                $('#inp2').addClass('erro_color');
                $('.erro').css('display','block');
                $('.erro .ferro').text('密码格式为（数字+字母）');
                n =  false;
            }
        })
    })
