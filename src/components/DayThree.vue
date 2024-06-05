<template>
  <div>
    <p>This is DayThree.计算属性和侦听器--计算属性VS侦听属性</p>
    <div id="demo">{{ fullName }}</div>
    <div id="demo">{{ fullName1 }}</div>

    <div id="demo">{{ info }}</div>
    <button @click="changeLearning">改变</button>
  </div>
</template>

<script>
export default {
  name: 'DayThree',
  data () {
    return {
      firstName: 'Foo',
      lastName: 'Bar',
      fullName: 'Foo Bar',
      firstName1: 'Foo',
      lastName1: 'Bar',
      isMessage: true,
    }
  },
  //侦听属性
  watch: {
    firstName(val) {
      this.fullName = val + this.lastName
    },
    lastName(val) {
      this.fullName = this.firstName + val
    },
    /*当被监视的属性变化时，回调函数自动调用，进行相关操作
      监视的属性必须存在，才能进行监视
      immediate:true, //初始化时让handler调用一下
      监视有两种写法：
      创建Vue时传入watch配置
      通过vm.$watch监视*/
//监听message属性值,newValue代表新值,oldValue代表旧值
    //正常写法
    isMessage: {
      immediate: true, //初始化时让handler调用一下，默认只有属性发生改变时会调用
      //handler什么时候调用？当isHot发生改变时
      handler(newValue, oldValue) {
        console.log('isMessage被修改了', newValue, oldValue);
      }
    },
    //简写
    // isMessage (newValue,oldValue) {
    //   console.log('isMessage被修改了',newValue,oldValue);
    // },

  },
  //计算属性
  computed: {
    fullName1() {
      return this.firstName1 + this.lastName1
    },
    info() {
      return this.isMessage ? "侦听属性" : 'watch'
    }
  },
  methods: {
    changeLearning() {
      this.isMessage = !this.isMessage
    }
  },
  mounted() {
    /*this.$watch('isMessage',{
      immediate:true,
      handler(newValue,oldValue){
        console.log('isMessage被修改了',newValue,oldValue)
      }
    })*/
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

