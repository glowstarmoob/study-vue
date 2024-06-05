<template>
  <div>
    <p>This is DayOne.模板语法--指令、缩写</p>
    <p v-if="seen">现在你看到我了</p>
    <a v-bind:[attributeName]="url"> 动态参数attributeName </a>
    <!-- attributeName 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。
    这个绑定将等价于 v-bind:href。 -->
    <br>
    <a v-on:[eventName]="doSomething"> 动态的事件名 </a>
    <!-- 同样地，你可以使用动态参数为一个动态的事件名绑定处理函数 -->
    <!-- 当 eventName 的值为 "click" 时，v-on:[eventName] 将等价于 v-on:click -->

    <br>
    <!-- 完整语法 -->
    <a v-bind:href="url">v-bind...完整语法</a>
    <br>
    <!-- 缩写 -->
    <a :href="url">...缩写</a>
    <br>
    <!-- 动态参数的缩写 (2.6.0+) -->
    <a :[key]="url"> ...动态参数的缩写</a>

    <br>
    <!-- 完整语法 -->
    <a v-on:click="doSomething">v-on...完整语法</a>
    <br>
    <!-- 缩写 -->
    <a @click="doSomething">...缩写</a>
    <br>
    <!-- 动态参数的缩写 (2.6.0+) -->
    <a @[event]="doSomething"> ...动态参数的缩写</a>

    <br>
    <a href="StudyVue.vue" @click="goToStudy">跳转到studyVue</a>
    <br>
    <a href="StudyVue.vue" @click.prevent="goToStudy">跳转到studyVue</a>


  </div>
</template>

<script>
export default {
  name: 'DayOne',
  data () {
    return {
      seen: true,
      attributeName: 'href',
      url: 'url',
      eventName: 'click',
      key: 'href',
      event: 'click'

    }
  },
  methods: {
    doSomething: function () {
      console.log('doSomething')
    },
    goToStudy: function () {
      console.log('goToStudy')
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

