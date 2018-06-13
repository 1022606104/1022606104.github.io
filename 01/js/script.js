setInterval(function(){
    x();
},3000);
setInterval(function(){
    e();
    h();
},3500);
//向上负16像素
function x(){
    $(".news .table .text").css({"transform":"translateY(-16px)","transition":"1s"});
}
//归零
function e(){
    $(".news .table .text").css({"transform":"translateY(0)","transition":"0s"});
}
//把第一个移动到末尾
function h(){
    $(".news .table .text").eq(0).appendTo($(".news .table"));
}



//首页京东秒杀部分的效果（倒计时）
function countTime() {
    //获取当前时间
    var date = new Date();
    var now = date.getTime();
    //设置截止时间
    var str = "2018/6/20 20:30:00";
    var endDate = new Date(str);
    var end = endDate.getTime();

    //时间差
    var leftTime = end - now;
    //定义变量 d,h,m,s保存倒计时的时间
    var d, h, m, s;
    if (leftTime >= 0) {
        d = Math.floor(leftTime / 1000 / 60 / 60 / 24);
        h = Math.floor(leftTime / 1000 / 60 / 60 % 24);
        m = Math.floor(leftTime / 1000 / 60 % 60);
        s = Math.floor(leftTime / 1000 % 60);
    }
    
    //递归每秒调用countTime方法，显示动态时间效果
    setTimeout(countTime, 1000);
    if(document.getElementById("_h") != null,document.getElementById("_m") != null,document.getElementById("_s") != null){
        //将倒计时赋值到div中
        document.getElementById("_h").innerHTML = h;
        document.getElementById("_m").innerHTML = m;
        document.getElementById("_s").innerHTML = s;
    }
}
countTime();


//首页搜素条的滑动变色效果
$(function(){ 
 var $body = $('body'); 
 var setCoverOpacity = function() {
         
  $body.find('.search').css({ 
   opacity: ((($body.scrollTop() / 150) > 0.9) ? 0.9 : ($body.scrollTop() / 150)) 
  }) 
 }
//监听滚动条事件 
 $(window).scroll(function() { 
     if(document.body.scrollTop>150){
    document.querySelector(".search").style.background ="#f44";
    document.querySelector(".search").style.top ="0";
     }else{
         document.querySelector(".search").style.background ="none"; 
         document.querySelector(".search").style.top ="auto"; 
     }
 }); 
})

//结束


var mySwiper = new Swiper ('.banner .swiper-container', {
    loop: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  });


// <!-- Initialize Swiper -->

   var swiper = new Swiper('.bochu .swiper-container', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
      },
      pagination: {
        el: '',
      },
    });
//轮播


new Vue({
    el:"#app",
    data:{
        apps:[
        {name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weini/weini1.jpg",price:"￥21.80",pluss:"￥19.80",ip:"自营"},
        {name:"安昕 良选男士船袜5双装 中筒棉袜商务男袜子吸汗透气短袜 船...",img:"img/weini/weini2.jpg",price:"￥38.00",plus:"看相似"}, 
        {name:"苹果原装数据线iphone7plus//6p/5SE/ipadpro手机USB线...",img:"img/weini/weini3.jpg",price:"￥155.00",plus:"看相似"}, 
        {name:"真皮多卡位零钱包女士卡夹信用卡包头层牛皮驾驶证皮套风琴...",img:"img/weini/weini5.jpg",price:"￥59.00",plus:"看相似"},
        {name:"QANLIIY千里鹰便携式双筒望远镜高倍微光夜视仪非红外军演...",img:"img/weini/weini4.jpg",price:"￥138.00",plus:"看相似"},
        {name:"【京东超市】（MENGNIU）成人奶粉 全脂...",img:"img/weini/weini6.jpg",price:"￥27.80",plus:"看相似",ip:"自营"},
        {name:"【京东超市】清风（APP）卷纸 原木纯品 3层270段卫生...",img:"img/weini/weini7.jpg",price:"￥18.90",plus:"看相似",ip:"自营"},
        {name:"【京东超市】绿之源 360°室内装修安全卫士活性炭汽车...",img:"img/weini/weini8.jpg",price:"￥99.00",plus:"看相似",ip:"自营"},
        {name:"澳洲进口 卢卡斯Lucas 番木瓜膏滋润保湿万用膏 驱蚊...",img:"img/weini/weini9.jpg",price:"￥49.00",plus:"看相似",id:"全球购"},
        {name:"海尔（Haier）BCD-201STPA 201升 三门冰...",img:"img/weini/weini10.jpg",price:"￥1199.00",plus:"看相似",ip:"自营"}, {name:"澳洲进口 卢卡斯Lucas 番木瓜膏滋润保湿万用膏 驱蚊...",img:"img/weini/weini9.jpg",price:"￥49.00",plus:"看相似",id:"全球购"},
        {name:"【京东超市】三只松鼠 肉感肉脯 零食小吃 牛肉烧烤小...",img:"img/weini/weini14.jpg",price:"￥21.90",plus:"看相似",ip:"自营"},   
        {name:"【京东超市】泰国进口 休闲零食 小老板 烤海苔卷 脆紫菜...",img:"img/weini/weini15.jpg",price:"￥13.80",plus:"看相似",ip:"自营"},
        {name:"日本 熊野油脂（Horse oil）无硅马油洗发水 丝质顺滑...",img:"img/weini/weini16.jpg",price:"￥49.00",plus:"看相似",ip:"全球购"},
        {name:"【京东超市】惠氏启赋（Wyeth illuma）较大婴儿和...",img:"img/weini/weini17.jpg",price:"￥298.00",plus:"看相似",ip:"自营"},    
        {name:"【国际名品直销】GOLF精品牛皮皮卡多位男士手包可装手机加...",img:"img/weini/weini19.jpg",price:"￥169.00",plus:"看相似",ip:""},    
        {name:"【京东配送】【双轴承 宽轮 可折叠】健爵滑板车 三轮多彩闪...",img:"img/weini/weini20.jpg",price:"￥279.00",plus:"看相似",ip:""},   
        {name:"【京东超市】法国进口 达能正品 依云（evian）天然矿泉水...",img:"img/weini/2.jpg",price:"￥219.00",plus:"看相似",ip:"自营"},   
        {name:"【苏之润记忆棉靠垫】办公室汽车座椅护腰靠垫靠背靠枕...",img:"img/weini/weini22.jpg",price:"￥89.00",plus:"看相似",ip:""},
        {name:"泰昌（taichang）TC-5197全自动按摩足浴洗脚盆泡脚...",img:"img/weini/weini23.jpg",price:"￥369.00",plus:"看相似",ip:"自营"},  
        ],
        
    }
})

//结束


window.onload = function(){
    var obtn = document.getElementById('top');  //获取回到顶部按钮的ID
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部

    window.onscroll = function(){         //滚动条滚动事件
        if(obtn != null){
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; 

        if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            obtn.style.display = 'block';
        }else{         //否则隐藏
            obtn.style.display = 'none';
        }

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    }
        
        
    
    }
    if(obtn != null){
    obtn.onclick = function(){    //回到顶部按钮点击事件
        //设置一个定时器
        timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(timer);
            }
        },30);
    }
    }
}

//首页部分js结束



new Vue({
    el:"#minlis",
    data:{
        lists:[
        {name:"电风扇",img:"img/fenlei/5b056472N771896da.jpg",link:""},
        {name:"手机",img:"img/fenlei/5b054fedN2ba90518.jpg",link:""},
        {name:"空调",img:"img/fenlei/5b055000N410a7553.jpg",link:""},
        {name:"充电宝",img:"img/fenlei/5b055011Nb89b2bda.png",link:""},
        {name:"蓝牙耳机",img:"img/fenlei/5b05507eN6a4152bc.jpg",link:""},
        {name:"蚊帐",img:"img/fenlei/5b056485N5ff83ec1.png",link:""},
        {name:"凉席",img:"img/fenlei/5b05648bN0b429032.png",link:""},
        {name:"耳机",img:"img/fenlei/5b05522dNa2aae1bb.png",link:""},
        {name:"电饭煲",img:"img/fenlei/5b055555N9245f8aa.jpg",link:""},
        {name:"空调挂机",img:"img/fenlei/5b055225N991ebfb0.png",link:""},
        {name:"路由器",img:"img/fenlei/5b0565a7N8dbc0017.png",link:""},
        {name:"空调扇",img:"img/fenlei/5b0552f2Nac9a0c92.png",link:""},
        {name:"男鞋",img:"img/fenlei/5b0552eaNbc8f1bda.png",link:""},
        {name:"热水器",img:"img/fenlei/5b055235Nf8fb2d6c.png",link:""},
        {name:"防嗮",img:"img/fenlei/5b055644Nf0b93238.jpg",link:""},
            
        ],
         lists1:[
        {name:"小米",img:"img/fenlei/5a1692eeN105a64b4.png",link:""},
        {name:"华为",img:"img/fenlei/5a1692e2Nbea6e136.jpg",link:""},
        {name:"荣耀",img:"img/fenlei/5a1692e2N6df7c609.jpg",link:""},
        {name:"iphone",img:"img/fenlei/5a1692ebN8ae73077.jpg",link:""},
        {name:"vivo",img:"img/fenlei/5a169244Nff0179e0.png",link:""},
        {name:"oppo",img:"img/fenlei/5a169254N4bbbd9fb.png",link:""},
        {name:"魅族",img:"img/fenlei/5a169243N40eca33c.jpg",link:""},
        {name:"三星",img:"img/fenlei/5a16925aN8a6dfd03.png",link:""},
        {name:"一加",img:"img/fenlei/5a16923fNfc14307e.jpg",link:""},
        {name:"360手机",img:"img/fenlei/5a16924fNeac7677e.jpg",link:""},
        {name:"锤子手机",img:"img/fenlei/5a9fa5e0N6754e52a.jpg",link:""},
        {name:"努比亚",img:"img/fenlei/5a9fa5e7Nc5cc0f6b.jpg",link:""},
            
        ],
         lists2:[
        {name:"老年机",img:"img/fenlei/5a169217N5d1b842e.jpg",link:""},
        {name:"手机",img:"img/fenlei/5a169216N0701c7f1.jpg",link:""},
        {name:"全面屏手机",img:"img/fenlei/5ac48d27N3f5bb821.jpg",link:""},
        {name:"游戏手机",img:"img/fenlei/5a169238Nc8f0882b.jpg",link:""},
        {name:"拍照手机",img:"img/fenlei/5a169232Ndf76f53c.jpg",link:""},
        {name:"对讲机",img:"img/fenlei/5a169204Nd4aa27bb.jpg",link:""},
        {name:"京东回收",img:"img/fenlei/5a1691e0N62f626e3.jpg",link:""},
        {name:"女性手机",img:"img/fenlei/5a9fa728Nbff29ad2.jpg",link:""},
        {name:"京东维修",img:"img/fenlei/5a169205N84a49a6a.jpg",link:""},
        {name:"京东维修",img:"img/fenlei/5a169205N84a49a6a.jpg",link:""},
            
        ],
    }
})


//选项卡部分

   var li1=document.querySelectorAll(".sorttext >li");
//console.log(li1);
        var img1=document.querySelectorAll(".sotlis");
        for (var i=0;i<li1.length;i++){
            li1[i].aa=i;
            li1[i].onclick=function(){
            for(var j=0;j<img1.length;j++){
                img1[j].style.display="none";
                li1[j].classList.remove("active");
            }
                li1[this.aa].classList.add("active");
             img1[this.aa].style.display="block";
           }
        }
    

// 首页小广告部分

var ad = document.getElementById("ad");
var solid = document.getElementById("solid");

if(ad != null){
 if(sessionStorage.ad =="Smith"){
     ad.style.display = "none";
 }else{
     ad.style.display = " block"
}
}
if(ad != null){
solid.onclick=function(){
    ad.style.display="none";
    sessionStorage.ad="Smith";
}
}



