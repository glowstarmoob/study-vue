<template>
  <div>
    <p>This is DayTwo.计算属性和侦听器--计算属性缓存VS方法</p>
<!--    概述：计算属性就是一个提前定义好的方法, 该方法可以看作是一个特殊的值, 可以在插值表达式中使用。
    计算属性必须放在Vue的computed中。-->

    <div>{{ message.split('').reverse().join('') }}</div>

    <p>计算属性 (Computed) 的 getter : "{{ reversedMessage }}"</p>

    姓：<input type="text" v-model="firstName"><br><br>
    名：<input type="text" v-model="lastName"><br><br>
    姓名：<span>{{fullName}}</span>

    <p>方法: "{{ reversedMessageMethod() }}"</p>

<!--    两种方式的最终结果确实是完全相同的。
    然而，不同的是计算属性是基于它们的响应式依赖进行缓存的。
    只在相关响应式依赖发生改变时它们才会重新求值。
    这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
    相比之下，每当触发重新渲染时，调用方法将总会再次执行函数。-->


  </div>
</template>

<script>
export default {
  name: 'DayTwo',
  data () {
    return {
      message:'Hello World!',
      firstName:'',
      lastName:''
    }
  },
  computed: {
    reversedMessage: function () {
      return this.message.split('').reverse().join('')
    },
    // 计算属性的 getter、setter => 对象
    fullName: {
      //get 获取值
      get() {
        return this.firstName + '-' + this.lastName
      },
      //set 修改值
      set(val) {
        const arr = val.split('-')
        this.firstName = arr[0]
        this.lastName = arr[1]
      }

    }
  },
  methods: {
    reversedMessageMethod: function () {
      return this.message.split('').reverse().join('')
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

