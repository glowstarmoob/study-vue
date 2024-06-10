<template>
  <div>
    <p>This is DayNine.事件处理--监听事件、事件修饰符</p>
<!--    语法:
    &lt;!&ndash;完整写法&ndash;&gt;
    <button v-on:事件名="函数名/vue表达式">点我</button>
    &lt;!&ndash;简化写法&ndash;&gt;
    <button @事件名="函数名/vue表达式">点我</button>-->
    <button @click="count += 1">Add 1</button>
    <p>The button above has been clicked {{ count }} times.</p>

    <!-- `greet` 是在下面定义的方法名 -->
    <button v-on:click="greet">Greet</button>
    <p>{{counter}}</p>

<!--    内联处理器中的方法-->
    <button v-on:click="say('hi', $event)">Say hi</button>
    <button v-on:click="say('what', $event)">Say what</button>

<!--    在事件处理程序中调用 event.preventDefault() 或 event.stopPropagation() 是非常常见的需求。
    尽管我们可以在方法中轻松实现这点，但更好的方式是：方法只有纯粹的数据逻辑，而不是去处理 DOM 事件细节。
    为了解决这个问题，Vue.js 为 v-on 提供了事件修饰符。之前提过，修饰符是由点开头的指令后缀来表示的。

    语法：	<button @事件名.事件修饰符="函数名/vue表达式"></button>
    prevent：阻止默认事件（常用）
    stop：阻止事件冒泡（常用）
    once：事件只触发一次（常用）
    capture：使用事件的捕获模式
    self：只有event.target是当前操作的元素时才触发事件
    passive：事件的默认行为立即执行，无需等待事件回调执行完毕（.passive 修饰符尤其能够提升移动端的性能。）
    修饰符可以连续写，比如可以这么用：@click.prevent.stop="showInfo"-->

    <br>
    <br>
    <!-- 阻止默认事件 -->
    <a href="http://www.bing.com" @click.prevent="showInfo">点击默认事件</a>

    <!-- 阻止事件冒泡 -->
    <div class="demo1" @click="showInfo">
      <button @click.stop="showInfo">点击事件冒泡</button>
    </div>

    <!-- 事件只触发一次 -->
    <button @click.once="showInfo">点击只触发一次</button>

    <!-- 使用事件的捕获模式 -->
    <div class="box1" @click.capture="showMsg(1)">
      div1
      <div class="box2" @click="showMsg(2)">
        div2
      </div>
    </div>

    <!-- 只有event.target是当前操作的元素时才触发事件 -->
    <div class="demo1" @click.self="showInfo">
      <button @click="showInfo">点我只有event.target是当前操作的元素时才触发事件</button>
    </div>

    <!-- 事件的默认行为立即执行，无需等待事件回调执行完毕 -->
    <!-- passive的作用 让事件的默认行为立即执行，无需等待事件回调执行完毕
         @wheel.passive  让鼠标滚轮滚动的时候先触发默认行为再执行事件回调 -->
    <ul @wheel.passive="demo" class="list">
      <li>1</li>
      <li>2</li>
      <li>3</li>
      <li>4</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'DayNine',
  data () {
    return {
      count: 0,
      counter: 0,
      name:'starry'

    }
  },
  methods:{
    greet: function () {
      this.counter += 1
    },
    say: function (message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault()
      }
      alert(message)
    },
    showInfo(){
      alert('你好！')
    },
    showMsg(msg){
      console.log(msg)
    },
    demo(){
      for (let i = 0; i < 10000; i++) {
        console.log('#')
      }
      console.log('太多了，累坏了')
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
.demo1{
  height: 50px;
  background-color: skyblue;
}
.box1{
  padding: 5px;
  background-color: skyblue;
}
.box2{
  padding: 5px;
  background-color: orange;
}
.list{
  width: 200px;
  height: 200px;
  background-color: peru;
  overflow: auto;
}
li{
  height: 100px;
}
</style>

