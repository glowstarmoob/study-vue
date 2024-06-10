<template>
  <div>
    <p>This is DaySix.条件渲染</p>
    <!-- 在 <template> 元素上使用 v-if 条件渲染分组 -->
    <!-- 把<template> 元素当做不可见的包裹元素，并在上面使用 v-if。最终的渲染结果将不包含 <template> 元素 -->
    <template v-if="ok">
      <h1>Title</h1>
    </template>

    <!-- v-else -->
    <!-- v-else 元素必须紧跟在带 v-if 或者 v-else-if 的元素的后面，否则它将不会被识别。 -->
    <div v-if="Math.random() > 0.5">
      Now you see me
    </div>
    <div v-else>
      Now you don't
    </div>

    <!-- v-else-if -->
    <!-- 类似于 v-else，v-else-if 也必须紧跟在带 v-if 或者 v-else-if 的元素之后。 -->
    <div v-if="type === 'A'">
      A
    </div>
    <div v-else-if="type === 'B'">
      B
    </div>
    <div v-else-if="type === 'C'">
      C
    </div>
    <div v-else>
      Not A/B/C
    </div>

    <!-- 用 key 管理可复用的元素 -->

    <!-- Vue 会尽可能高效地渲染元素，通常会复用已有元素而不是从头开始渲染。
    这么做除了使 Vue 变得非常快之外，还有其它一些好处。
    例如，如果你允许用户在不同的登录方式之间切换： -->
    <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username" key="username-input">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address" key="email-input">
    </template>
    <!-- 那么在上面的代码中切换 loginType 将不会清除用户已经输入的内容。
    因为两个模板使用了相同的元素，<input> 不会被替换掉——仅仅是替换了它的 placeholder -->
    <!-- 这样也不总是符合实际需求，所以 Vue 为你提供了一种方式来表达“这两个元素是完全独立的，不要复用它们”。
    只需添加一个具有唯一值的 key attribute 即可 -->
    <!-- 注意，<label> 元素仍然会被高效地复用，因为它们没有添加 key attribute。 -->

<!--    v-if小结
    适用于：切换频率较低的场景
    特点：不展示的DOM元素直接被移除-->

    <!-- v-show 指令 -->
    <!-- 不同的是带有 v-show 的元素始终会被渲染并保留在 DOM 中。
    v-show 只是简单地切换元素的 CSS property display。 -->
    <!-- 注意，v-show 不支持 <template> 元素，也不支持 v-else。 -->
    <h1 v-show="ok">Hello!</h1>
<!--    v-if vs v-show
    v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
    v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
    相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
    一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。
    因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
    v-if是动态的向DOM树内添加或者删除DOM元素；v-show是通过设置DOM元素的display样式属性控制显隐
    当 v-if 与 v-for 一起使用时，v-for 具有比 v-if 更高的优先级。
    不推荐同时使用 v-if 和 v-for-->




  </div>
</template>

<script>
export default {
  name: 'DaySix',
  data () {
    return {
      ok:true,
      type:'A',
      loginType:'username'
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

