window.onload=function(){
    //选项栏
    var content_top = $("content_top");
    var content_center = $("content_center");
    var content_bottom = $("content_bottom");
    var hide = $("hide");

    var enterOne=$("enterOne");
    var enterTwo=$("enterTwo");
    var enterThree=$("enterThree");
    var pic=$("pic");

    var center_one=$("center_one");
    var center_two=$("center_two");
    var status_one=$("status_one");
    var status_two=$("status_two");

    var phonenumber=$("phonenumber");
    //下划线
    enterOne.onclick=function(){
        enterOne.className="current";
        enterTwo.className="";
        //内容改变
        center_one.style.display="block";
        status_one.style.display="block";
        status_two.style.display="block";

        center_two.style.display="none";
    }
    enterTwo.onclick=function(){
        enterOne.className="";
        enterTwo.className="current";
        //内容改变
        center_two.style.display="block";
        status_one.style.display="block";
        status_two.style.display="block";
        
        center_one.style.display="none";
    }
    //换图
    function change(){

    enterThree.onclick=function(){
        
        if(pic.getAttribute("src", 2) == "img/look2.png"){
            pic.setAttribute("src", "img/look1.png");
            hide.style.display="none";

            enterOne.style.display="block";
            enterTwo.style.display="block";
            content_center.style.display="block";
            content_bottom.style.display="block";
            enterTwo.onclick();
        }else{
            pic.setAttribute("src", "img/look2.png");

            enterOne.style.display="none";
            enterTwo.style.display="none";
            content_center.style.display="none";
            content_bottom.style.display="none";

            hide.style.display="block";
        }}
    }
    change();

    //输入框焦点
    
    phonenumber.onblur = function () {
        var value = parseFloat($("score").value);
        if (value == null) {
            this.setAttribute('class',"change");
            this.setAttribute("placeholder","请输入手机号");
        } 
      };
    phonenumber.onfocus = function () {
        this.setAttribute("placeholder","手机号");
    };
    

    // 社交账号登陆
    var enter_wechat=$("enter_wechat");
    var enterForThree=$("enterForThree");
    
    $(function(){
        /* 单机li进行页面跳转 */
        $("ul li").click(function(){
            /*当前标签下的a标签*/
            var obj = $(this).children("a");
            /*获取第一个a标签，进行跳转*/
            window.location.href=$(obj[0]).attr("href");
        });
    })


    //下载
    var download=$("download");
    var choice_one=$("choice_one");
    var downloadpic=$("download_code");
    var choice_one_tip=$("choice_one_tip");
    var choice_one_p=$("choice_one_p");
    var download_bigcodepic=$("download_bigcodepic");

    choice_one.onclick=function(){
        if(choice_one_p.innerText == "关闭二维码"){
            choice_one_p.innerText = "下载知乎 App";
            choice_one.style.display="block";
            content_top.style.display="block";
            content_center.style.display="block";
            content_bottom.style.display="block";
            hide.style.display="none";
    
            downloadpic.style.background='url("img/logo.f6eef033.png") no-repeat';
    
            download_bigcodepic.style.display="none";
        }else{
            content_top.style.display="none";
            content_center.style.display="none";
            content_bottom.style.display="none";
            hide.style.display="none";
    
            choice_one_p.innerText="关闭二维码";
            downloadpic.style.background="none";
    
            download_bigcodepic.style.display="block";
        }
    };

   

}