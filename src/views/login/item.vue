<template>
  <div class="">
    <button @click="onBtn">{{text}}</button>
    <h6>{{ title }}</h6>
    <h6>{{ msg }}</h6>
    <input  type="checkbox" :checked="checked" @change="change">
    <input type="text" v-model="inputTxt">
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Emit, Watch, Model } from "vue-property-decorator";
@Component
export default class Item extends Vue {
  // @Prop(Boolean) readonly checked: boolean | undefined
  @Model('change') checked: boolean | undefined
  @Prop({
    type: Number,
    required: true,
    default: ""
  })
  readonly title: number | undefined;
  @Prop({ default: "默认值" }) readonly msg!: string;

  // init data
  text:string = '子组件'
  itemData:object = {name:'张三',age:18};
  inputTxt:string = ''

  @Emit() onBtn() {
    console.log('测试',this.inputTxt)
    return this.itemData;
  }
  @Emit() change(e:any) {
    return  e.target.checked;
  }

  @Watch('title') handlerChange(newVal:string,oldVal:string) {
    console.log('父组件数据变更',newVal,oldVal)
  }
  @Watch('inputTxt') changeInputTxt(newVal:string,oldVal:string) {
      console.log('input数据变更',newVal,oldVal)
  }

}
</script>

<style scoped lang="scss"></style>
