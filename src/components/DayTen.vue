<template>
  <div>
    <p>This is DayTen.事件处理--按键修饰符、系统修饰符</p>
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <input v-on:keyup.enter="submit">
    <!-- PageDown 时被调用 -->
    <!-- event.key 获取发生按键事件时按下的键盘按钮 -->
    <input v-on:keyup.page-down="onPageDown">

<!--    为了在必要的情况下支持旧浏览器，Vue 提供了绝大多数常用的按键码的别名：
    .enter
    .tab
    .delete (捕获“删除”和“退格”键)
    .esc
    .space
    .up
    .down
    .left
    .right-->
    <!-- 只有在 `key` 是 `Enter` 时调用 `vm.submit()` -->
    <!-- <input v-on:keyup.enter="submit"> -->
    <!-- enter的键盘码 13 -->
    <!-- <input v-on:keyup.13="submit"> -->
    <!-- 自定义按键修饰符别名 customEnter -->
    <input v-on:keyup.13="submit">

    <!-- PageDown 时被调用 -->
    <!-- event.key 获取发生按键事件时按下的键盘按钮 -->
    <input v-on:keyup.page-down="onPageDown">

    <!-- Alt + C -->
    <input v-on:keyup.alt.67="clear">
    <!-- Ctrl + Click -->
    <div v-on:click.ctrl="doSomething">Do something</div>

    <!-- 请注意修饰键与常规按键不同，在和 keyup 事件一起用时，事件触发时修饰键必须处于按下状态。
    换句话说，只有在按住 ctrl 的情况下释放其它按键，才能触发 keyup.ctrl。而单单释放 ctrl 也不会触发事件。
    如果你想要这样的行为，请为 ctrl 换用 keyCode：keyup.17。 -->

    <!-- 即使 Alt 或 Shift 被一同按下时也会触发 -->
    <button v-on:click.ctrl="onClick">A</button>

    <!-- 有且只有 Ctrl 被按下的时候才触发 -->
    <button v-on:click.ctrl.exact="onCtrlClick">A</button>

    <!-- 没有任何系统修饰符被按下的时候才触发 -->
    <button v-on:click.exact="onClick">A</button>

    <!-- 点击鼠标右键 -->
    <div v-on:click.left="doSomething1">Do something</div>


  </div>
</template>

<script>
export default {
  name: 'DayTen',
  data () {
    return {


    }
  },
  methods:{
    submit(){
      alert('提交了！！！')
    },
    onPageDown(){
      alert('点击了page-down')
    },
    clear(){
      alert('Alt + C 触发了哦！！')
    },
    doSomething(){
      alert('Ctrl + Click 触发了哦！！')
    },
    doSomething1(){
      alert('点击鼠标左键 触发了哦！！')
    },
    onClick(){
      alert('onClick')
    },
    onCtrlClick(){
      alert('onCtrlClick')
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

