var ad = document.querySelector(".advert");
var solid = document.querySelector(".close");
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
};
//首页小广告部分接受


$(function(){ 
 var $body = $('body'); 
 var setCoverOpacity = function() {
         
  $body.find('header').css({ 
   opacity: ((($body.scrollTop() / 100) > 0.9) ? 0.9 : ($body.scrollTop() / 100)) 
  }) 
 }
//监听滚动条事件 
 $(window).scroll(function() { 
     if(document.body.scrollTop>100){
      document.querySelector("header").style.top ="0";     document.querySelector("header").style.background ="#fff";
     }else{
     document.querySelector("header").style.top ="auto"; 
     }
 }); 
});
//导航条

var mySwiper = new Swiper ('.banner-top .swiper-container', {
    autoplay:true,
    loop: true,
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
  });
//轮播


//main
new Vue({
    el:"#mian",
    data:{
        mtext:[
            {name:"Original Penguin 休息双肩包",i:"5",o:"8",fz:"&8.42约75元 满一百英镑可直邮",fp:"英国GTL运动时尚购物平台",img:"img/home/2.png"},
            {name:"香雪 美味富强粉 面粉 5kg *2袋",i:"0",o:"0",fz:"33.84元 折16.91元/袋 满2件85折后 满99元包...",fp:"京东商城",img:"img/home/1.png"},
            {name:"BEN SHERMAN 双肩背包",i:"0",o:"1",fz:"&13.76约120元 满一百英镑可直邮",fp:"英国GTL运动时尚购物平台",img:"img/home/3.png"},
            {name:"果来丽 广西百色 贵妃芒果 10斤 ",i:"0",o:"0",fz:"25.8元包邮 满33减. 叠加5元优惠券",fp:"天猫",img:"img/home/13.jpg"},
            {name:"9Forty系列 女士纽约洋基队休闲棒球帽",i:"1",o:"0",fz:"&9.47（需用码）约80元 满一百英镑可直邮",fp:"英国GTL运动时尚购物平台",img:"img/home/4.png"},
            {name:"PNSO 儿童百科全书 恐龙的秘密",i:"2",o:"1",fz:"34元包邮 需用35元卷",fp:"天猫",img:"img/home/5.png"},
            {name:"一品玉 和田玉红枣 450g *3箱 整箱装",i:"3",o:"1",fz:"卷后29.9元包邮 折10元/袋",fp:"天猫",img:"img/home/6.png"},
            {name:"Panasonic 松下 EH-NA99 负离子护发吹风机",i:"0",o:"0",fz:"13106日元 转运到手887元",fp:"日本亚马逊",img:"img/home/7.png"},
            {name:"ZARA 男士牛津面料飞行员夹克",i:"1",o:"0",fz:"199元包邮",fp:"天猫",img:"img/home/10.png"},
            {name:"蓝月亮 机洗至尊洗衣液 2.36kg",i:"1",o:"0",fz:"卷后实付69元包邮",fp:"天猫",img:"img/home/11.jpg"},
            {name:"新百伦 返场活动 限时两天",i:"0",o:"0",fz:"联名首发 满379减30 满559减60",fp:"天猫",img:"img/home/12.jpg"},
            {name:"周五盼周五 终于疯狂周五了 生鲜大放价",i:"0",o:"0",fz:"果蔬肉禽海鲜方便素食各种第2件0元",fp:"京东",img:"img/home/14.jpg"},
            {name:"贝兜 儿童小营养面条 250g*4 随机4盒装",i:"0",o:"0",fz:"40元包邮 折合10/盒 需用40元卷",fp:"天猫",img:"img/home/15.jpg"},
            {name:"英国GTL运动时尚购物平台：世界杯专场",i:"0",o:"0",fz:"下单折上6折：GTL666/满100磅免邮费",fp:"英国GTL运动时尚购物平台",img:"img/home/16.jpg"},
            {name:"[返现优惠] 看过这几个箱子 没人能套路你",i:"0",o:"0",fz:"返现商城旅行箱合集 最高可返现8%",fp:"返现公告",img:"img/home/17.png"},
            {name:"Be&Cheery 百草味 每日坚果 30袋 750g",i:"1",o:"3",fz:"69.5元包邮 前500件半价",fp:"天猫",img:"img/home/18.png"},
            {name:"周黑鸭促销专场 休闲麻辣零食减特惠中",i:"0",o:"3",fz:"满199减100 抢到就是赚到",fp:"",img:"img/home/19.jpg"},
            {name:"Nike 耐克 SEQUENT 男士跑步鞋",i:"1",o:"3",fz:"379元包邮",fp:"苏宁易购",img:"img/home/20.jpg"},
            {name:"维达 无芯卫生纸 4层40卷",i:"0",o:"0",fz:"57.9元包邮 折合1.4元/卷 用10元卷后",fp:"天猫",img:"img/home/21.jpg"},
            {name:"22日10点 蓝月亮 茶清 洗洁精套装",i:"1",o:"0",fz:"24元包邮 前1分钟5折",fp:"天猫",img:"img/home/22.png"},
            {name:"三全 珍鲜灌汤猪肉白菜水饺 450g *2件",i:"1",o:"1",fz:"9.9元 满2件5折 折合4.95元/件",fp:"苏宁易购",img:"img/home/23.jpg"},
            {name:"Oral-B 星球大战儿童电动牙刷套装",i:"0",o:"0",fz:"87.52元含税 加入会员可凑单包邮",fp:"亚马逊",img:"img/home/14.png"},
            {name:"世界啤酒节 畅饮嗨购才够劲",i:"0",o:"0",fz:"满129减20 会员专享129减30",fp:"苏宁易购",img:"img/home/24.jpg"},
            {name:"亚马逊中国 镇店之宝 Hasbro 孩之宝玩具",i:"0",o:"0",fz:"低价售价4折",fp:"亚马逊",img:"img/home/25.png"},
            {name:"网红爆款 螺霸王 螺狮粉 280g*6包",i:"0",o:"0",fz:"59.5元包邮 需用10元卷",fp:"天猫",img:"img/home/26.png"},
            {name:"纸品清洁驱蚊特惠 全场各种囤货件",i:"0",o:"0",fz:"满158减50 多数满199减100",fp:"京东商城",img:"img/home/27.jpg"},
            {name:"当当 物有物语旗舰店 开业有礼",i:"0",o:"0",fz:"满99-50元，1元秒杀，9.9抢购",fp:"当当网",img:"img/home/28.png"},
            {name:"最后三天！免费领4999元购物津贴",i:"0",o:"1",fz:"再送10万注彩票+15天免息卷",fp:"网易来钱",img:"img/home/29.png"},
            {name:"吃货福利到 坚果蜜饯/糖巧肉铺/饼干膨化好价促销",i:"3",o:"0",fz:"满199减100 全场低至5折",fp:"京东商城",img:"img/home/30.jpg"},
        ],
        
    }
})
//main  

//回到顶部
window.onload = function(){
    var obtn = document.getElementById('top');  //获取回到顶部按钮的ID
    var abtn = document.getElementById('top-size');
    var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
    var timer = null; //定义一个定时器
    var isTop = true; //定义一个布尔值，用于判断是否到达顶部

    window.onscroll = function(){         //滚动条滚动事件
        if(obtn != null,abtn != null){
        //获取滚动条的滚动高度
        var osTop = document.documentElement.scrollTop || document.body.scrollTop; 

        if(osTop >= clientHeight){  //如果滚动高度大于可视区域高度，则显示回到顶部按钮
            obtn.style.display = 'block';
            abtn.style.display = 'block';
        }else{         //否则隐藏
            obtn.style.display = 'none';
            abtn.style.display = 'none';
        }

        //主要用于判断当 点击回到顶部按钮后 滚动条在回滚过程中，若手动滚动滚动条，则清除定时器
        if(!isTop){

            clearInterval(timer);
        }
        isTop = false;

    }
    }
    if(obtn != null,abtn != null){
    obtn.addEventListener("click",function(){
         //回到顶部按钮点击事件
        //设置一个定时器
        console.log(obtn);
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
    })
    }
}

//首页部分js结束


new Vue({
    el:".banner",
    data:{
        lists:[
            {name:"全部",img:"img/sorts/icon_0.png",link:""},
            {name:"海淘",img:"img/sorts/icon_1.png",link:""},
            {name:"食品",img:"img/sorts/icon_2.png",link:""},
            {name:"服饰",img:"img/sorts/icon_3.png",link:""},
            {name:"日百",img:"img/sorts/icon_4.png",link:""},
            {name:"美妆",img:"img/sorts/icon_5.png",link:""},
            {name:"3C",img:"img/sorts/icon_6.png",link:""},
            {name:"运动",img:"img/sorts/icon_7.png",link:""},
            {name:"健康",img:"img/sorts/icon_8.png",link:""},
            {name:"晒物",img:"img/sorts/icon_9.png",link:""},
            {name:"个护",img:"img/sorts/icon_10.png",link:""},
            {name:"文化",img:"img/sorts/icon_11.png",link:""},
            {name:"母婴",img:"img/sorts/icon_12.png",link:""},
            {name:"其他",img:"img/sorts/icon_13.png",link:""},
        ],
        lit:[
            {name:"优衣库 海贼王男士印花T恤",o:"￥79.0元",img:"img/sorts/5.png"},
            {name:"Puppise 暇步士 男童短袖T恤",o:"￥61.0元",img:"img/sorts/6.png"},
            {name:"红葡萄酒750ml",img:"img/sorts/1.png",link:"",o:"￥51.2"},
            {name:"清州樱 杀鬼 甘口清酒 1.8L",img:"img/sorts/2.png",link:"",o:"￥89"},
            {name:"原味无糖纯燕麦片",img:"img/sorts/3.png",link:"",o:"￥29.9"},
            {name:"泰式风味榴莲饼200g*3包",img:"img/sorts/4.png",link:"",o:"￥24.8"},
            {name:"三全 珍鲜灌汤猪肉白菜水饺",img:"img/home/23.jpg",link:"",o:"￥9.9"},
            {name:"维达 无芯卫生纸 4层40卷",o:"￥57.9元",img:"img/home/21.jpg"},
            {name:"网红爆款 螺霸王 螺狮粉",o:"￥59.5元",img:"img/home/26.png"},
            {name:" 星球大战儿童电动牙刷套装",o:"￥87.52元",img:"img/home/14.png"},
            {name:"Nike 耐克 男士跑步鞋",o:"￥379元",img:"img/home/20.jpg"},
            {name:"老北京布鞋 防臭休闲鞋",o:"￥24.8元",img:"img/sorts/1.jpg"},
            {name:"纯棉刺绣中国风T恤",o:"￥48.0元",img:"img/sorts/2.jpg"},
            {name:"韩版男女手提旅行防水包",o:"￥22.0元",img:"img/sorts/3.jpg"},
            {name:"飞织小白网布运动鞋",o:"￥68.0元",img:"img/sorts/4.jpg"},
            {name:"夏季男个性修身潮流裤",o:"￥63.0元",img:"img/sorts/5.jpg"},
            {name:"妙巴黎 果然美肌粉底液",o:"￥130.0元",img:"img/sorts/7.png"},
            {name:"迪奥 马卡龙遮瑕膏3.5g",o:"￥278.0元",img:"img/sorts/6.jpg"},
            {name:"大红门 老北京熏鸡 550g*10",o:"￥99.2元",img:"img/sorts/8.png"},
            {name:"安德玛 男士保暖连帽卫衣",o:"$24.29元",img:"img/sorts/9.png"},
        ],
        lists1:[
            {name:"食品",img:"img/sorts/icon_2.png",link:""},
            {name:"服饰",img:"img/sorts/icon_3.png",link:""},
            {name:"日百",img:"img/sorts/icon_4.png",link:""},
            {name:"美妆",img:"img/sorts/icon_5.png",link:""},
            {name:"3C",img:"img/sorts/icon_6.png",link:""},
            {name:"运动",img:"img/sorts/icon_7.png",link:""},
            {name:"健康",img:"img/sorts/icon_8.png",link:""},
            {name:"晒物",img:"img/sorts/icon_9.png",link:""},
            {name:"个护",img:"img/sorts/icon_10.png",link:""},
            {name:"文化",img:"img/sorts/icon_11.png",link:""},
            {name:"母婴",img:"img/sorts/icon_12.png",link:""},
            {name:"其他",img:"img/sorts/icon_13.png",link:""},
        ],
        lists2:[
            {name:"全部",img:"img/sorts/icon_0.png",link:""},
            {name:"海淘",img:"img/sorts/icon_1.png",link:""},
            {name:"食品",img:"img/sorts/icon_2.png",link:""},
            {name:"服饰",img:"img/sorts/icon_3.png",link:""},
            {name:"日百",img:"img/sorts/icon_4.png",link:""},
            {name:"美妆",img:"img/sorts/icon_5.png",link:""},
            {name:"3C",img:"img/sorts/icon_6.png",link:""},
            {name:"运动",img:"img/sorts/icon_7.png",link:""},
        ],
    }
})

//选项卡
 var li1=document.querySelectorAll(".sorttext >li");
 var img1=document.querySelectorAll(".sotlis");
for(var m=0;m<img1.length;m++){
    img1[m].style.display="none";
}
if(img1[0] !=null){
    img1[0].style.display="block";
}
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

var top=document.getElementById('#top')
console.log("top")







