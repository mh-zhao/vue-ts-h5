<!--
 * @Author: mhzhao
 * @Date: 2020-05-27 13:54:23
 * @LastEditTime: 2020-05-27 14:18:45
--> 
<template>
  <div class='item'>
    <van-button @click="onItem" type="warning">{{title}}</van-button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component
export default class Item extends Vue {
  // initial data

  //Prop
  @Prop(String) readonly title: string | undefined
  
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  @Emit() public onItem() {
    // console.log('子组件')
    return '子组件Data'
  }
}
</script>

<style scoped lang='scss'>

</style>