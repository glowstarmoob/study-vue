<template>
  <div>
    <p>This is DayFour.侦听器--深度监视</p>
    <div id="name">姓名：{{person.name}}</div>
    <div id="age">年龄：{{person.age}}</div>
    <button @click="changePerson">改变Person属性</button>
<!--    Vue中的watch默认不监测对象内部值的改变（一层）
    在watch中配置  deep:true  可以监测对象内部值的改变（多层）
    注意：
    Vue自身可以监测对象内部值的改变，但Vue提供的watch默认不可以
    使用watch时根据监视数据的具体结构，决定是否采用深度监视-->
  </div>
</template>

<script>
export default {
  name: 'DayFour',
  data () {
    return {
      person:{
        name:'John',
        age:'20'
      }

    }
  },
  //侦听属性
  watch:{
    person:{
      //开启深度监控；监控对象中的属性值变化
      deep: true,
      handler(obj){
        console.log(obj.name,obj.age);
      }
    },
    //监视多级结构中某个属性的变化
    'person.name':{
      handler(){
        console.log('person中name被改变了')
      }
    }
  },
  methods:{
    changePerson(){
      // this.person.age = '10';
      this.person.name = 'starry'
    },
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

