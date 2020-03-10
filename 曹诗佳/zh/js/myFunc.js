/**
 *
 *  滚动宽高
 * @returns
 */
function scroll() {
    if (window.pageXOffset != null) {
      return {
        top: window.pageYOffset,
        left: window.pageXOffset
      }
    } else if (document.compatMode === "CSS1Compat") {
      return {
        top: document.documentElement.scrollTop,
        left: document.documentElement.scrollLeft
      }
    }
    return {
      top: document.body.scrollTop,
      left: document.body.scrollLeft
    }
  }


  /**
   * 获取事件源
   *
   * @param {string} id
   * @returns
   */
  function $(id) {
    return typeof id === "string" ? document.getElementById(id) : null;
  }


  /**
   *显示/隐藏
   *
   * @param {*} obj
   * @returns
   */
  function show(obj){
    return obj.style.display='block';
  }

  function hide(obj){
    return obj.style.display='';
  }

  /**
   * 屏幕宽高
   */

  function client(){
    if(window.innerWidth){
      return{
        width:window.innerWidth,
        height:window.innerHeight
      }
    }else if(document,compatMode==="CSS1Compat"){
      return{
       width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    }
    return {
     width: document.body.clientWidth,
      height: document.body.clientHeight
    }
  }

  /**
 * 匀速动画
 * @param {object} obj 
 * @param {number} target 
 * @param {number} speed 
 */
function constant(obj,target,speed){
  //清除定时器  -对象绑定timer属性
  clearInterval(obj.timer);

  //方向
  var dir=obj.offsetLeft<target?speed:-speed;

  //设置定时器
  obj.timer=setInterval(function(){
      obj.style.left=obj.offsetLeft+dir+'px';

      //console.log(Math.abs(target-obj.offsetLeft));

      if(Math.abs(target-obj.offsetLeft)<Math.abs(dir)){
          clearInterval(obj.timer);

          obj.style.left=target+'px';
          console.log(obj.offsetLeft,target);
      }
  },20);
}


/**
 * 缓动动画
 * @param {object} obj 
 * @param {number} target 
 * 
 */
function buffer(obj,target){
  clearInterval(obj.timer);
  obj.timer = setInterval(function () {
    //步长
    var speed = (target - obj.offsetLeft) * 0.2;

    speed = (target>obj.offsetLeft)?Math.ceil(speed):Math.floor(speed);

    obj.style.left = obj.offsetLeft + speed + 'px';
    obj.innerText = obj.offsetLeft;

    if (obj.offsetLeft === target) {
      clearInterval(obj.timer);
    }

  }, 20);

}

function buffer(obj, attr, target) {

  clearInterval(obj.timer);

  obj.timer = setInterval(function () {
    //获取初始值
    var begin = parseInt(getCssAttrValue(obj, attr));
    console.log(begin);

    //步长
    var speed = (target - begin) * 0.2;

    speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

    obj.style[attr] = begin + speed + 'px';
    obj.innerText = begin;

    if (begin === target) {
      clearInterval(obj.timer);
    }

  }, 20);

}

function buffer(obj, json) {

  clearInterval(obj.timer);

  var begin = 0, target = 0, speed = 0;

  obj.timer = setInterval(function () {
    var flag = true;

    for (var k in json) {
      //获取初始值
      var begin = parseInt(getCssAttrValue(obj, k)) || 0;
      target = parseInt(json[k]);

      //步长
      speed = (target - begin) * 0.2;

      speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

      obj.style[k] = begin + speed + 'px';

      if (begin !== target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(obj.timer);
    }
  }, 20);

}

function buffer(obj, json, fn) {

  clearInterval(obj.timer);

  var begin = 0, target = 0, speed = 0;

  obj.timer = setInterval(function () {
    var flag = true;

    for (var k in json) {
      //获取初始值
      if ("opacity" === k) {//透明度
        begin = parseInt(parseFloat(getCssAttrValue(obj, k)) * 100) || 100;
        target = parseInt(parseFloat(json[k])* 100);
      } else if("scrollTop"===k){
        begin = Math.ceil(obj.scrollTop);
        target = parseInt(json[k]);
      }else {
        begin = parseInt(getCssAttrValue(obj, k)) || 0;
        target = parseInt(json[k]);
      }

      //步长
      speed = (target - begin) * 0.2;

      speed = (target > begin) ? Math.ceil(speed) : Math.floor(speed);

      if ("opacity" === k) {
        //w3c
        obj.style.opacity = (begin + speed) / 100;
        //ie
        obj.style.filter = 'alpha(opacity:' + (begin + speed) + ')';

      } else if("scrollTop"===k){
        obj.scrollTop=begin+speed;
      }else if("zIndex"===k){
        obj.style[k]=json[k];
      }
      else {
        obj.style[k] = begin + speed + 'px';
      }

      if (begin !== target) {
        flag = false;
      }
    }
    if (flag) {
      clearInterval(obj.timer);
      console.log(fn);
      //判断回调
      if (fn) {
        fn();
      }
    }
  }, 20);
}


/**
 *动态设置CSS属性
 *
 * @param {*} obj
 * @param {*} attr
 * @param {*} value
 */
function changeCssStyle(obj, attr, value) {
  obj.style[attr] = value;
  console.log(obj.style[attr]);
}





/**
 *获取属性值
 *
 * @param {object} obj
 * @param {string} attr
 * @returns
 */
function getCssAttrValue(obj, attr) {
  if(obj.currentSty1e){ // IE和opera
      return obj.currentStyle[attr];
  }else {
      return window.getComputedStyle(obj, null)[attr];
  }
}




/**
 *
 *函数节流
 * @param {*} fn
 * @param {*} delay
 * @returns
 */
function throttle(fn,delay){
  var timer=null;
  return function(){
    clearTimeout(timer);
    timer=setTimeout(fn,delay);
  }
}