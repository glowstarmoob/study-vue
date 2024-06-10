<template>
  <div>
    <p>This is DayEight.列表渲染--数组更新检测</p>
    <div>points：{{points}}</div>

    <ul id="v-for-object" class="demo">
      <li v-for="(p,index) in persons" :key="index">
        {{p.name}} - {{p.age}}
      </li>
    </ul>
    <button @click="handerPush">push</button>
    <button @click="handerPop">pop</button>
    <button @click="handerShift">shift</button>
    <button @click="handerUnshift">unshift</button>
    <button @click="handerSplice">splice</button>
    <button @click="handerSort">sort</button>
    <button @click="handerReverse">reverse</button>

<!--    总结：
    Vue监视数据的原理： vue会监视data中所有层次的数据
    如何监测对象中的数据？
    通过setter实现监视，且要在new Vue时就传入要监测的数据
    对象中后追加的属性，Vue默认不做响应式处理
    如需给后添加的属性做响应式，请使用如下API：
    Vue.set(target,propertyName/index,value)
    vm.$set(target,propertyName/index,value)
    如何监测数组中的数据？
    通过包裹数组更新元素的方法实现，本质就是做了两件事：
    调用原生对应的方法对数组进行更新
    重新解析模板，进而更新页面
    在Vue修改数组中的某个元素一定要用如下方法：
    使用这些API：push()、pop()、shift()、unshift()、splice()、sort()、reverse()
    Vue.set() 或 vm.$set() 或 this.$set()
    特别注意：Vue.set() 和 vm.$set() 不能给vm 或 vm的根数据对象（data等） 添加属性-->

<!--    变更方法，顾名思义，会变更调用了这些方法的原始数组。
    相比之下，也有非变更方法，例如 filter()、concat() 和 slice()。
    它们不会变更原始数组，而总是返回一个新数组。当使用非变更方法时，可以用新数组替换旧数组。-->
    <div>points：{{points}}</div>
    <div>filter新数组：{{filterArr}}</div>
    <div>concat新数组：{{concatArr}}</div>
    <div>slice：{{stringObject}}</div>
    <button @click="handerFilter">filter</button>
    <button @click="handerConcat">concat</button>
    <button @click="handerSlice">slice</button>

<!--    有时，我们想要显示一个数组经过过滤或排序后的版本，而不实际变更或重置原始数据。
    在这种情况下，可以创建一个计算属性，来返回过滤或排序后的数组。-->
    <!-- 1.使用计算属性 -->
    <ul>
      <li v-for="n in evenNumbers" :key="n">{{ n }}</li>
    </ul>

    <!-- 2.使用在嵌套 v-for 循环中可以使用一个方法 -->
    <ul v-for="set in sets" :key="set">
      <li v-for="n in even(set)" :key="n">{{ n }}</li>
    </ul>

    <span v-for="n1 in 10" :key="n1">{{ n1 }} </span>







  </div>
</template>

<script>
export default {
  name: 'DayEight',
  data () {
    return {
      persons:[
        {id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:19},
        {id:'003',name:'王五',age:20}
      ],
      points:[40,100,1,5,25,10],
      filterArr:[],
      concatArr:[],
      stringObject:'',
      numbers: [ 1, 2, 3, 4, 5 ],
      sets: [[ 1, 2, 3, 4, 5 ], [6, 7, 8, 9, 10]]

    }
  },
  computed:{
    evenNumbers:function (){
      return this.numbers.filter(function(number){
        return number % 2 === 0
      })
    }
  },
  methods:{
    //向数组添加一条数据，从数组末尾添加
    handerPush(){
      const obj = {
        id:'004',
        name:'push',
        age:21
      }
      this.persons.push(obj)
    },
    //向数组删除一条数据，从数组末尾删除
    handerPop(){
      this.persons.pop()
    },
    //向数组删除一条数据，从数组开头删除
    handerShift(){
      this.persons.shift()
    },
    //向数组添加一条数据，从数组开头添加
    handerUnshift(){
      const p = {
        id:'000',
        name:'unshift',
        age:40
      }
      this.persons.unshift(p)
    },
    //可向数组添加一条数据，还可以删除一条数据，可指定下标
    handerSplice(){
      // 一共三个参数：1.指定要删除或添加数据的下标；2.删除几条数据；3.要添加的数据
      this.persons.splice(1,1)  //删除下标为1的数据
      let obj = { id:'004',name:'push',age:21 }
      this.persons.splice(1,0,obj)  //向下标为1的地方添加一条数据
    },
    //排序
    handerSort(){
      // this.points.sort()  //结果：1,5,10,25,40,100 默认升序
      this.points.sort(function(a,b){   //升序
        return a - b;
      })
      this.points.sort(function(a,b){   //降序
        return b - a;
      })
    },
    //翻转
    handerReverse(){
      this.points.reverse()   //结果：[10, 25, 5, 1, 100, 40]
    },
    //filter过滤数组，不改变原数组，返回新数组
    handerFilter(){
      this.filterArr = this.points.filter(val => {      //结果：[ 40, 100 ]
        return val > 30
      })
    },
    //concat合并数组，不改变原数组，返回新数组
    handerConcat(){
      const list = ['concat']
      this.concatArr = this.points.concat(list)    //结果：[ 40, 100, 1, 5, 25, 10, "concat" ]
    },
    //slice() 方法可提取字符串的某个部分，并以新的字符串返回被提取的部分。
    /**
     * 拓展：
     * js字符串截取函数slice()、substring()、substr()区别
     * slice(): 第一个参数代表开始位置,第二个参数代表结束位置的下一个位置,截取出来的字符串的长度为第二个参数与
     *        第一个参数之间的差;若参数值为负数,则将该值加上字符串长度后转为正值;若第一个参数等于大于第二个参数,
     *        则返回空字符串.
     substring(): 第一个参数代表开始位置,第二个参数代表结束位置的下一个位置;若参数值为负数,则将该值转为0;
     两个参数中,取较小值作为开始位置,截取出来的字符串的长度为较大值与较小值之间的差.
     substr(): 第一个参数代表开始位置,第二个参数代表截取的长度
     */
    handerSlice(){
      const string = 'ssfasdfaefasdfadswe'
      this.stringObject = string.slice(1,6)   //结果：sfasd
    },
    even:function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

