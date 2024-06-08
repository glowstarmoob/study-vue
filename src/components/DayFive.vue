<template>
  <div>
    <p>This is DayFive.Class与Style绑定</p>
    <h4>绑定 HTML Class</h4>
    <!-- 绑定class样式--字符串写法，适用于：样式的类名不确定，需要动态指定 -->
    <div class="basicStyle" :class="classString" @click="changeMood">字符串写法</div>

    <!-- 绑定class样式--对象写法，适用于：要绑定的样式个数确定、名字也确定，但要动态决定用不用 -->
    <div class="basicStyle" :class="classObj">对象写法1</div>

    <div class="basicStyle" :class="{class1:true}">对象写法2</div>

<!-- 对象语法小结
    写法：class="xxx"，xxx可以是字符串、对象、数组
    字符串写法适用于：类名不确定，要动态获取
    对象写法适用于：要绑定多个样式，个数不确定，名字也不确定-->

    <!-- 绑定class样式--数组写法，适用于：要绑定的样式个数不确定、名字也不确定 -->
    <div :class="classArr">数组写法1</div>
    <!-- 渲染结果：<div class="activeClass errorClass"></div> -->

    <div :class="[activeClass, errorClass]">数组写法2</div>
    <!-- 渲染结果：<div class="active text-danger"></div> -->

    <div :class="[isActive ? 'activeClass' : '', 'errorClass']">数组写法3</div>
    <!-- 这样写将始终添加 errorClass，但是只有在 isActive 是 true 时才添加 activeClass -->
    <!-- 渲染结果：<div class="activeClass errorClass"></div> -->

    <div v-bind:class="[{ active: isActive4 }, 'errorClass']">数组写法4</div>
    <!-- 渲染结果：<div class="active errorClass"></div> -->

    <div v-bind:class="[errorClass]">数组写法5</div>
    <!-- errorClass 变量 渲染data中数据 -->
    <!-- 渲染结果：<div class="text-danger"></div> -->
<!--    数组语法小结
    数组写法适用于：要绑定多个样式，个数确定，名字也确定，但不确定用不用-->

    用在组件上后续补上

    <h4>绑定内联样式</h4>.
    <!-- 绑定style样式--对象写法  -->
    <div :style="{ color: activeColor, fontSize: fontSize + 'px' }">对象写法1</div>

    <div :style="styleObject">对象写法2</div>

    <!-- 绑定style样式--数组写法  -->
    <div v-bind:style="[baseStyles, overridingStyles]">数组写法1</div>

    <div v-bind:style="sumStyles">数组写法2</div>

    <h6>从 2.3.0 起你可以为 style 绑定中的 property 提供一个包含多个值的数组，常用于提供多个带前缀的值</h6>
    <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }"></div>
<!--    这样写只会渲染数组中最后一个被浏览器支持的值。
    在本例中，如果浏览器支持不带浏览器前缀的 flexbox，那么就只会渲染 display: flex。-->



  </div>
</template>

<script>
export default {
  name: 'DayFive',
  data () {
    return {
      classString:'string',
      classObj:{
        class1:false,
        class2:true,
      },
      classArr:['activeClass','errorClass'],
      activeClass:'active',
      errorClass:'text-danger',
      isActive:true,
      isActive4:true,
      activeColor:'red',
      fontSize:16,
      styleObject:{
        activeColor:'red',
        fontSize:'16px'
      },
      baseStyles:{
        fontSize: '40px',
        color:'blue',
      },
      overridingStyles:{
        backgroundColor:'yellow',
      },
      sumStyles:[
        {
          fontSize: '40px',
          color:'blue',
        },
        {
          backgroundColor:'green'
        }
      ]
    }

  }
};

</script>

<style scoped>
/* 添加页面样式 */
.string{
  color: red;
  font-weight:bold;
}
.class1{
  color: blue;
}
.class2{
  font-weight:bold;
}
</style>

