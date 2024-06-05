<template>
  <div>
    <h1>New Page</h1>
    <p>This is a new page content.模板语法--插值</p>
    <p>{{message}}</p>
    <h1>原始 HTML: {{ rawHtml  }}</h1>
    <h1>v-html 指令: <span v-html="rawHtml"></span></h1>
    <button v-bind:disabled = "isButtonDisabled">Button</button>

    <!-- 数字相加 -->
    <div>{{ number + 1 }}</div>

    <!-- 使用三元表达式判断 -->
    <div>{{ ok ? 'YES' : 'NO' }}</div>

    <!-- 这是语句，不是表达式 -->
    <!-- {{ var a = 1 }} -->

    <!-- 流控制也不会生效，请使用三元表达式 -->
    <!-- {{ if (ok) { return message } }} -->

    <div>{{ message.split('').reverse().join('') }}</div>
    <!-- message.split('') => ['m', 'o', 'c', 'h', 'e', 'n', 'g', 'x', 'i', 'y', 'a', '!', '!', '!'] -->
    <!-- message.split('').reverse() => ['!', '!', '!', 'a', 'y', 'i', 'x', 'g', 'n', 'e', 'h', 'c', 'o', 'm'] -->
    <!-- message.split('').reverse().join('') => '!!!ayixgnehcom' -->

    <div v-bind:id="'list-' + id">list-{{id}}</div>
    <!-- id为变量 => data中 bindId -->
    <!-- 结果： id="list-bindId"  -->

  </div>
</template>

<script>
export default {
  name: 'StudyVue',
  data () {
    return {
      message : "hello world",
      rawHtml :'Using mustaches: <span style="color: red">This should be red.</span>',
      isButtonDisabled: true,
      number : 0,
      ok : false,
      id : "under"
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

