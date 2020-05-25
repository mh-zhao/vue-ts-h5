<template>
  <div class="">
    <h1 class="title">{{msg | interceptCharacterLen}}</h1>
    <button @click="handlerClick">{{ computedMsg }}</button>
    <Item :title="num" msg="改变默认值" @on-btn="onBtn" @change="change" />
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import {interceptCharacterLen} from '../../utils/filters'
import Item from "./item.vue";
import {getToken} from '../../utils/auth'
@Component({
  components: {
    Item
  }
})
export default class HelloWorld extends Vue {
  // initial data
  msg = "孙菲菲就开始叫对方世纪东方快结束了开发";
  num = 10;

  //lifecycle hook
  created() {
    console.log("生命周期----created");
    console.log('token:',getToken())
  }
  mounted() {
    console.log("生命周期----mounted");
  }

  get computedMsg() {
    console.log("生命周期----computedMsg");
    return "computed--" + this.msg;
  }

  //method
  handlerClick() {
    console.log(this.msg);
  }
  onBtn(e:object) {
    console.log('子传父',e)
    this.num = 90
  }
  change(e:any) {
    console.log('子传父2',e)
  }
}
</script>

<style scoped lang="scss">
.title {
  font-size: 20px;
  display: flex;
  flex: 1;
}
</style>
