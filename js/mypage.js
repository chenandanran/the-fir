/**
 * Created by 李锦 on 2017/3/22.
 */
window.onload=function() {
    var timer1 = null;
    var oTop=document.getElementById("top");
    var oPic = document.getElementById("pic");
    var oDv = document.getElementById("nav");
    var oRound = oDv.getElementsByTagName("div");
    var oWidth=parseInt((oTop.clientWidth)/5);
    var client = parseInt((oDv.offsetWidth) / 6);
    var oBody = document.getElementsByTagName("body");
    var oDvRight1=getByClass(oTop,"navRight1")[0];
    var oDvRight2=getByClass(oTop,"navRight2")[0];
    var oBtn1=document.getElementById("btn1");
    var oBtn2=document.getElementById("btn2");
    oBtn2.style.display="block";
    oBtn1.style.display="none";
    var oUl=oDvRight2.getElementsByTagName("ul")[0];
    var oUl2=oDvRight1.getElementsByTagName("ul")[0];
    var aLi=oUl.getElementsByTagName("li");
    var aLi2=oUl2.getElementsByTagName("li");
    var oMain=document.getElementById("main");
    var oML=document.getElementById("mainLeft");
    var oMR=document.getElementById("mainRight");
    oUl.innerHTML=oUl.innerHTML+oUl.innerHTML;
    oUl2.style.height=2*aLi2[0].offsetHeight*aLi2.length;
    oUl.style.width=2*aLi[0].offsetWidth*aLi.length;
    var timer3=null;
    var timer4=null;
    function shortmove(){
        timer4=setInterval(function(){
            var speed=-3;
            oUl2.style.top = oUl2.offsetTop + speed  + "px";
            if (oUl2.offsetTop < -oUl2.offsetHeight / 2) {
                oUl2.style.Top = 0+"px";
            }
            else if (oUl2.offsetTop > 0) {
                oUl2.style.Top = -oUl2.offsetHeight / 2+"px";
            }
        },30);
    }
    shortmove();
    function longmove() {
        var speed = -2;
        timer3 = setInterval(function () {

            oUl.style.left = oUl.offsetLeft + speed + "px";
            if (oUl.offsetLeft < -(oUl.offsetWidth)/2) {
                oUl.style.left =0;
            }
            else if (oUl.offsetLeft > 0) {
                oUl.style.left = -oUl.offsetWidth / 2;
            }
        },25);
    }
    longmove();
    oDvRight2.onmouseover=function(){
        clearInterval(timer3);
    }
    oDvRight2.onmouseout=function(){
        longmove();
    }
    oML.onmouseover=function(){
        alert("123");
        move(oML,0,"left");

    }
    oMR.onmouseover=function(){
        move(oMR,0,"right");
    }
/* oDvRight1.style.display=none;
 oDvRight2.style.display=block;*/
oBtn2.onclick = function () {
    for (var i = 0; i < oRound.length; i++) {
        oRound[i].className = "round7";
        move(oRound[i], i * client , "left");
    }
    oBtn2.style.display="none";
    oBtn1.style.display="block";
    move(oDvRight2,oWidth,"width",function(){
        oDvRight2.style.display="none";
        oDvRight1.style.display="block";
    });
}
    oBtn1.onclick= function () {
        clearTimeout(timer1);
        for (var i = 0; i < oRound.length; i++) {
            oRound[i].style.left = 0;
            oRound[i].className = "round" + (i + 1);
        }
        oBtn1.style.display = "none";
        oBtn2.style.display = "block";
        oDvRight2.style.display = "block";
        move(oDvRight2, 4 * oWidth, "width", function () {
            oDvRight1.style.display = "none";
        });
    }
   /* picmove();
     function picmove()
    {
        var timer6=null;
        timer6=setInterval(function(){
                var speed1 = ;
            oPic.style.top = oPic.offsetTop + speed1 + "px";
            if(oPic.offsetTop==700){
                clearInterval(timer6);
            }
            },30);
    }*/
    move2(oPic,700,"top");
    return false;
}
function shortmove(){
    timer4=setInterval(function(){
        var speed=-1;
        oUl2.style.top = oUl2.offsetTop + speed  + "px";
        if (oUl2.offsetTop< (-oUl2.offsetHeight )/ 2) {
            oUl2.style.Top = 0;
        }
        else if (oUl2.offsetTop > 0) {
            oUl2.style.Top = -oUl2.offsetHeight / 2;
        }
    },30);
}
function getByClass(oParent,sClass)//通过类名找物体
{
    var aResult=[];
    var aEle=oParent.getElementsByTagName('*');
    for(var i=0;i<aEle.length;i++)
    {
        if(aEle[i].className==sClass)
        {
            aResult.push(aEle[i]);
        }
    }
    return aResult;
}
function getStyle(obj,name)
{
    if(obj.currentStyle)
    {
        return obj.currentStyle[name];
    }
    else
    {
        return getComputedStyle(obj,false)[name];
    }
}
function move(obj,iTarget,attr,fn) {
    var timer = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //var obj=document.getElementById("obj");
        var cur = 0;
        if (attr == "opacity")//?ж????????????????
        {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//????100???????????λ??
        }
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) /10;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fn)fn();
        }
        else {
            if (attr == "opacity") {
                //obj.style.filter="alpha(opacity:"+cur+speed+")";//alpha(opcity:x)????
                obj.style.opacity = (cur + speed) / 100;//?????????????100?????????????ó???100??opacity:x???????
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },10);
}
function move2(obj,iTarget,attr,fn) {
    var timer = null;
    clearInterval(obj.timer);
    obj.timer = setInterval(function () {
        //var obj=document.getElementById("obj");
        var cur = 0;
        if (attr == "opacity")//?ж????????????????
        {
            cur = Math.round(parseFloat(getStyle(obj, attr)) * 100);//????100???????????λ??
        }
        else {
            cur = parseInt(getStyle(obj, attr));
        }
        var speed = (iTarget - cur) /50;
        speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
        if (cur == iTarget) {
            clearInterval(obj.timer);
            if (fn)fn();
        }
        else {
            if (attr == "opacity") {
                //obj.style.filter="alpha(opacity:"+cur+speed+")";//alpha(opcity:x)????
                obj.style.opacity = (cur + speed) / 100;//?????????????100?????????????ó???100??opacity:x???????
            }
            else {
                obj.style[attr] = cur + speed + "px";
            }
        }
    },10);
}