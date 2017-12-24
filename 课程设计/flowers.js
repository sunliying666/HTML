// 给菜单栏添加隐藏菜单
	var menulistli0=document.getElementsByClassName('menulistli')[0];
	var flower=document.getElementsByClassName('flower')[0];
	menulistli0.onmouseover=function (argument) {
		flower.style.display='block';
	}
	menulistli0.onmouseout=function(){
		flower.style.display='none';
	}
	flower.onmouseover=function(){
		flower.style.display='block';
	}
	flower.onmouseout=function(){
		flower.style.display='none';
	}
	var menulistli1=document.getElementsByClassName('menulistli')[1];
	var preservedflowers=document.getElementsByClassName('preservedflowers')[0];
	menulistli1.onmouseover=function (argument) {
		preservedflowers.style.display='block';
	}
	menulistli1.onmouseout=function (argument) {
		preservedflowers.style.display='none';
	}
	preservedflowers.onmouseover=function(){
		preservedflowers.style.display='block';
	}
	preservedflowers.onmouseout=function(){
		preservedflowers.style.display='none';
	}
	var menulistli2=document.getElementsByClassName('menulistli')[2];
	var cake=document.getElementsByClassName('cake')[0];
	menulistli2.onmouseover=function (argument) {
		cake.style.display='block';
	}
	menulistli2.onmouseout=function (argument) {
		cake.style.display='none';
	}
	cake.onmouseover=function(){
		cake.style.display='block';
	}
	cake.onmouseout=function(){
		cake.style.display='none';
	}
	var menulistli3=document.getElementsByClassName('menulistli')[3];
	var gift=document.getElementsByClassName('gift')[0];
	menulistli3.onmouseover=function (argument) {
		gift.style.display='block';
	}
	menulistli3.onmouseout=function (argument) {
		gift.style.display='none';
	}
	gift.onmouseover=function(){
		gift.style.display='block';
	}
	gift.onmouseout=function(){
		gift.style.display='none';
	}
	var menulistli4=document.getElementsByClassName('menulistli')[4];
	var chocolate=document.getElementsByClassName('chocolate')[0];
	menulistli4.onmouseover=function (argument) {
		chocolate.style.display='block';
	}
	menulistli4.onmouseout=function (argument) {
		chocolate.style.display='none';
	}
	chocolate.onmouseover=function(){
		chocolate.style.display='block';
	}
	chocolate.onmouseout=function(){
		chocolate.style.display='none';
	}
	var menulistli5=document.getElementsByClassName('menulistli')[5];
	var languageofflowers=document.getElementsByClassName('languageofflowers')[0];
	menulistli5.onmouseover=function (argument) {
		languageofflowers.style.display='block';
	}
	menulistli5.onmouseout=function (argument) {
		languageofflowers.style.display='none';
	}
	languageofflowers.onmouseover=function(){
		languageofflowers.style.display='block';
	}
	languageofflowers.onmouseout=function(){
		languageofflowers.style.display='none';
	}
	var menulistli6=document.getElementsByClassName('menulistli')[6];
	var enterprise=document.getElementsByClassName('enterprise')[0];
	menulistli6.onmouseover=function (argument) {
		enterprise.style.display='block';
	}
	menulistli6.onmouseout=function (argument) {
		enterprise.style.display='none';
	}
	enterprise.onmouseover=function(){
		enterprise.style.display='block';
	}
	enterprise.onmouseout=function(){
		enterprise.style.display='none';
	}
	var menulistli7=document.getElementsByClassName('menulistli')[7];
	var christmas=document.getElementsByClassName('christmas')[0];
	menulistli7.onmouseover=function (argument) {
		christmas.style.display='block';
	}
	menulistli7.onmouseout=function (argument) {
		christmas.style.display='none';
	}
	christmas.onmouseover=function(){
		christmas.style.display='block';
	}
	christmas.onmouseout=function(){
		christmas.style.display='none';
	}

//图片滚动播放
var picscroll=document.getElementById('picScroll');
var picscroll1=document.getElementById('picScroll1');
function changeToLeft(){
	if(picscroll.scrollLeft >picscroll1.offsetWidth){
		picscroll.scrollLeft=0;
	}
	else{
		picscroll.scrollLeft+=2;
	}
}
var time=setInterval(changeToLeft,1);
picscroll.onmouseover=function(){
	clearInterval(time);
}
picscroll.onmouseout=function(){
	time=setInterval(changeToLeft,1);
}
//鼠标划上商品时出现悬浮层 
var hidea1=document.getElementsByClassName('hidea1')[0];
var lovepic21=document.getElementsByClassName('lovepic21')[0];
lovepic21.onmouseover=function(){
	hidea1.style.display='block';
}
lovepic21.onmouseout=function(){
	hidea1.style.display="none";
}
var hidea2=document.getElementsByClassName('hidea2')[0];
var lovepic22=document.getElementsByClassName('lovepic22')[0];
lovepic22.onmouseover=function(){
	hidea2.style.display='block';
}
lovepic22.onmouseout=function(){
	hidea2.style.display="none";
}
var hidea3=document.getElementsByClassName('hidea3')[0];
var lovepic23=document.getElementsByClassName('lovepic23')[0];
lovepic23.onmouseover=function(){
	hidea3.style.display='block';
}
lovepic23.onmouseout=function(){
	hidea3.style.display="none";
}
var hidea4=document.getElementsByClassName('hidea4')[0];
var lovepic24=document.getElementsByClassName('lovepic24')[0];
lovepic24.onmouseover=function(){
	hidea4.style.display='block';
}
lovepic24.onmouseout=function(){
	hidea4.style.display="none";
}
var hidea5=document.getElementsByClassName('hidea5')[0];
var lovepic25=document.getElementsByClassName('lovepic25')[0];
lovepic25.onmouseover=function(){
	hidea5.style.display='block';
}
lovepic25.onmouseout=function(){
	hidea5.style.display="none";
}
var hidea6=document.getElementsByClassName('hidea6')[0];
var lovepic26=document.getElementsByClassName('lovepic26')[0];
lovepic26.onmouseover=function(){
	hidea6.style.display='block';
}
lovepic26.onmouseout=function(){
	hidea6.style.display="none";
}
var hidea7=document.getElementsByClassName('hidea7')[0];
var lovepic27=document.getElementsByClassName('lovepic27')[0];
lovepic27.onmouseover=function(){
	hidea7.style.display='block';
}
lovepic27.onmouseout=function(){
	hidea7.style.display="none";
}
var hidea8=document.getElementsByClassName('hidea8')[0];
var lovepic28=document.getElementsByClassName('lovepic28')[0];
lovepic28.onmouseover=function(){
	hidea8.style.display='block';
}
lovepic28.onmouseout=function(){
	hidea8.style.display="none";
}
/*-----------------parent--------------------------------*/
var hideb1=document.getElementsByClassName('hideb1')[0];
var parentpic21=document.getElementsByClassName('parentpic21')[0];
parentpic21.onmouseover=function(){
	hideb1.style.display='block';
}
parentpic21.onmouseout=function(){
	hideb1.style.display="none";
}
var hideb2=document.getElementsByClassName('hideb2')[0];
var parentpic22=document.getElementsByClassName('parentpic22')[0];
parentpic22.onmouseover=function(){
	hideb2.style.display='block';
}
parentpic22.onmouseout=function(){
	hideb2.style.display="none";
}
var hideb3=document.getElementsByClassName('hideb3')[0];
var parentpic23=document.getElementsByClassName('parentpic23')[0];
parentpic23.onmouseover=function(){
	hideb3.style.display='block';
}
parentpic23.onmouseout=function(){
	hideb3.style.display="none";
}
var hideb4=document.getElementsByClassName('hideb4')[0];
var parentpic24=document.getElementsByClassName('parentpic24')[0];
parentpic24.onmouseover=function(){
	hideb4.style.display='block';
}
parentpic24.onmouseout=function(){
	hideb4.style.display="none";
}
var hideb5=document.getElementsByClassName('hideb5')[0];
var parentpic25=document.getElementsByClassName('parentpic25')[0];
parentpic25.onmouseover=function(){
	hideb5.style.display='block';
}
parentpic25.onmouseout=function(){
	hideb5.style.display="none";
}
var hideb6=document.getElementsByClassName('hideb6')[0];
var parentpic26=document.getElementsByClassName('parentpic26')[0];
parentpic26.onmouseover=function(){
	hideb6.style.display='block';
}
parentpic26.onmouseout=function(){
	hideb6.style.display="none";
}
var hideb7=document.getElementsByClassName('hideb7')[0];
var parentpic27=document.getElementsByClassName('parentpic27')[0];
parentpic27.onmouseover=function(){
	hideb7.style.display='block';
}
parentpic27.onmouseout=function(){
	hideb7.style.display="none";
}
var hideb8=document.getElementsByClassName('hideb8')[0];
var parentpic28=document.getElementsByClassName('parentpic28')[0];
parentpic28.onmouseover=function(){
	hideb8.style.display='block';
}
parentpic28.onmouseout=function(){
	hideb8.style.display="none";
}
/*-----------------immortal--------------------------------*/
var hidec1=document.getElementsByClassName('hidec1')[0];
var immortalpic21=document.getElementsByClassName('immortalpic21')[0];
immortalpic21.onmouseover=function(){
	hidec1.style.display='block';
}
immortalpic21.onmouseout=function(){
	hidec1.style.display="none";
}
var hidec2=document.getElementsByClassName('hidec2')[0];
var immortalpic22=document.getElementsByClassName('immortalpic22')[0];
immortalpic22.onmouseover=function(){
	hidec2.style.display='block';
}
immortalpic22.onmouseout=function(){
	hidec2.style.display="none";
}
var hidec3=document.getElementsByClassName('hidec3')[0];
var immortalpic23=document.getElementsByClassName('immortalpic23')[0];
immortalpic23.onmouseover=function(){
	hidec3.style.display='block';
}
immortalpic23.onmouseout=function(){
	hidec3.style.display="none";
}
var hidec4=document.getElementsByClassName('hidec4')[0];
var immortalpic24=document.getElementsByClassName('immortalpic24')[0];
immortalpic24.onmouseover=function(){
	hidec4.style.display='block';
}
immortalpic24.onmouseout=function(){
	hidec4.style.display="none";
}
var hidec5=document.getElementsByClassName('hidec5')[0];
var immortalpic25=document.getElementsByClassName('immortalpic25')[0];
immortalpic25.onmouseover=function(){
	hidec5.style.display='block';
}
immortalpic25.onmouseout=function(){
	hidec5.style.display="none";
}
var hidec6=document.getElementsByClassName('hidec6')[0];
var immortalpic26=document.getElementsByClassName('immortalpic26')[0];
immortalpic26.onmouseover=function(){
	hidec6.style.display='block';
}
immortalpic26.onmouseout=function(){
	hidec6.style.display="none";
}
var hidec7=document.getElementsByClassName('hidec7')[0];
var immortalpic27=document.getElementsByClassName('immortalpic27')[0];
immortalpic27.onmouseover=function(){
	hidec7.style.display='block';
}
immortalpic27.onmouseout=function(){
	hidec7.style.display="none";
}
var hidec8=document.getElementsByClassName('hidec8')[0];
var immortalpic28=document.getElementsByClassName('immortalpic28')[0];
immortalpic28.onmouseover=function(){
	hidec8.style.display='block';
}
immortalpic28.onmouseout=function(){
	hidec8.style.display="none";
}
/*-----------------------------angel---------------------*/
var hided1=document.getElementsByClassName('hided1')[0];
var angelpic21=document.getElementsByClassName('angelpic21')[0];
angelpic21.onmouseover=function(){
	hided1.style.display='block';
}
angelpic21.onmouseout=function(){
	hided1.style.display="none";
}
var hided2=document.getElementsByClassName('hided2')[0];
var angelpic22=document.getElementsByClassName('angelpic22')[0];
angelpic22.onmouseover=function(){
	hided2.style.display='block';
}
angelpic22.onmouseout=function(){
	hided2.style.display="none";
}
var hided3=document.getElementsByClassName('hided3')[0];
var angelpic23=document.getElementsByClassName('angelpic23')[0];
angelpic23.onmouseover=function(){
	hided3.style.display='block';
}
angelpic23.onmouseout=function(){
	hided3.style.display="none";
}
var hided4=document.getElementsByClassName('hided4')[0];
var angelpic24=document.getElementsByClassName('angelpic24')[0];
angelpic24.onmouseover=function(){
	hided4.style.display='block';
}
angelpic24.onmouseout=function(){
	hided4.style.display="none";
}
var hided5=document.getElementsByClassName('hided5')[0];
var angelpic25=document.getElementsByClassName('angelpic25')[0];
angelpic25.onmouseover=function(){
	hided5.style.display='block';
}
angelpic25.onmouseout=function(){
	hided5.style.display="none";
}
var hided6=document.getElementsByClassName('hided6')[0];
var angelpic26=document.getElementsByClassName('angelpic26')[0];
angelpic26.onmouseover=function(){
	hided6.style.display='block';
}
angelpic26.onmouseout=function(){
	hided6.style.display="none";
}
var hided7=document.getElementsByClassName('hided7')[0];
var angelpic27=document.getElementsByClassName('angelpic27')[0];
angelpic27.onmouseover=function(){
	hided7.style.display='block';
}
angelpic27.onmouseout=function(){
	hided7.style.display="none";
}
var hided8=document.getElementsByClassName('hided8')[0];
var angelpic28=document.getElementsByClassName('angelpic28')[0];
angelpic28.onmouseover=function(){
	hided8.style.display='block';
}
angelpic28.onmouseout=function(){
	hided8.style.display="none";
}
/*-----------------------------present---------------------*/
var hidee1=document.getElementsByClassName('hidee1')[0];
var presentpic21=document.getElementsByClassName('presentpic21')[0];
presentpic21.onmouseover=function(){
	hidee1.style.display='block';
}
presentpic21.onmouseout=function(){
	hidee1.style.display="none";
}
var hidee2=document.getElementsByClassName('hidee2')[0];
var presentpic22=document.getElementsByClassName('presentpic22')[0];
presentpic22.onmouseover=function(){
	hidee2.style.display='block';
}
presentpic22.onmouseout=function(){
	hidee2.style.display="none";
}
var hidee3=document.getElementsByClassName('hidee3')[0];
var presentpic23=document.getElementsByClassName('presentpic23')[0];
presentpic23.onmouseover=function(){
	hidee3.style.display='block';
}
presentpic23.onmouseout=function(){
	hidee3.style.display="none";
}
var hidee4=document.getElementsByClassName('hidee4')[0];
var presentpic24=document.getElementsByClassName('presentpic24')[0];
presentpic24.onmouseover=function(){
	hidee4.style.display='block';
}
presentpic24.onmouseout=function(){
	hidee4.style.display="none";
}
var hidee5=document.getElementsByClassName('hidee5')[0];
var presentpic25=document.getElementsByClassName('presentpic25')[0];
presentpic25.onmouseover=function(){
	hidee5.style.display='block';
}
presentpic25.onmouseout=function(){
	hidee5.style.display="none";
}
var hidee6=document.getElementsByClassName('hidee6')[0];
var presentpic26=document.getElementsByClassName('presentpic26')[0];
presentpic26.onmouseover=function(){
	hidee6.style.display='block';
}
presentpic26.onmouseout=function(){
	hidee6.style.display="none";
}
var hidee7=document.getElementsByClassName('hidee7')[0];
var presentpic27=document.getElementsByClassName('presentpic27')[0];
presentpic27.onmouseover=function(){
	hidee7.style.display='block';
}
presentpic27.onmouseout=function(){
	hidee7.style.display="none";
}
var hidee8=document.getElementsByClassName('hidee8')[0];
var presentpic28=document.getElementsByClassName('presentpic28')[0];
presentpic28.onmouseover=function(){
	hidee8.style.display='block';
}
presentpic28.onmouseout=function(){
	hidee8.style.display="none";
}


function Star() { 
   this.speed=10; 
   this.img=new Image(); 
   this.img.src="img/"+parseInt(Math.random()*10+1)+".gif"; 
   this.img.style.width=80+'px'; 
   this.img.style.height=80+'px'; 
   this.img.style.top=Math.random()*window.innerHeight+1+'px'; 
   this.img.style.left=Math.random()*window.innerWidth+1+'px'; 
   document.body.appendChild(this.img); 
   this.img.position="absolute";
  } 
  
  Star.prototype.slip=function () { 
  
   var that=this; 
   function move() { 
    that.img.style.top=that.img.offsetTop+that.speed+'px'; 
    // console.log(that.img.offsetTop+"star"); 
    // console.log(window.innerHeight+"window"); 
    if(that.img.offsetLeft>1205){ 
     clearInterval(sh); 
     that.img.style.height=0; 
     that.img.style.width=0; 
    } 
   } 
   var sh=setInterval(move,100); 
  } 
  
   setInterval(function () { 
    for(var i=1;i<5;i++){ 
    new Star().slip(); 
    } 
   },1000) 