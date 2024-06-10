<template>
  <div>
    <p>This is DaySeven.列表渲染--v-for</p>
    <ul id="example-1">
      <!-- <div v-for="item of data"></div> -->
      <!-- 你也可以用 of 替代 in 作为分隔符，因为它更接近 JavaScript 迭代器的语法： -->

      <li v-for="(item,index) in data" :key="item.message">
        当前项的索引:{{ index }}
        <br>
        当前对象：{{item}}
        <br>
        当前对象中message数据： {{ item.message }}
      </li>
    </ul>

    <ul id="v-for-object" class="demo">
      <li v-for="(value,key,index) in object" :key="index">
        value值：{{ value }}
        <br>
        key值：{{key}}
        <br>
        索引值：{{index}}
      </li>
    </ul>

    <ul id="v-for-object" class="demo">
      <li v-for="(p,index) in persons" :key="index">
        {{p.name}} - {{p.age}}
      </li>
    </ul>
    <button @click="handerAdd">前面添加一条数据</button>

  </div>
</template>

<script>
export default {
  name: 'DaySeven',
  data () {
    return {
      data: [
        { message: 'Foo' },
        { message: 'Bar' }
      ],
      object: {
        title: 'How to do lists in Vue',
        author: 'Jane Doe',
        publishedAt: '2016-04-10'
      },
      persons:[
        {id:'001',name:'张三',age:18},
        {id:'002',name:'李四',age:19},
        {id:'003',name:'王五',age:20}
      ]

    }
  },
  methods:{
    handerAdd(){
      const p = {
        id:'004',
        name:'老刘',
        age:40
      }
      this.persons.unshift(p)
    }
  }
};

</script>

<style scoped>
/* 添加页面样式 */
</style>

