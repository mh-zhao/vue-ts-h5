<template>
  <div class='login'>
    <h1 class="title">{{this.$store.state.common.count}}</h1>
    <van-field v-model="phoneNum" label="手机号" placeholder="请输入手机号" />
    <van-field v-model="password" label="密码" placeholder="请输入密码" />
    <van-field v-model="code" label="验证码" placeholder="请输入验证码" />
    <van-button @click="handleLogin" type="danger">登录</van-button>
    <Item :title="title" @on-item="onItem" />
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from 'vue-property-decorator';
import Item from './item.vue'
@Component({
  components: {
    Item
  }
})
export default class HelloWorld extends Vue {
  // initial data
  private phoneNum = '123';
  private password = '';
  private code = '';
  private title = '子组件btn'
  // lifecycle hook
  private created():void {}
  private mounted():void {}
  private destroyed():void {}
  // methods
  private handleLogin():void {
    this.phoneNum = 'a'
    console.log('登录',this.phoneNum,this.password,this.code)
  }
  private onItem(val:any)  {
    console.log('测试',val)
  }
}
</script>

<style scoped lang='scss'>
.title {
  font-size: 16px;
}
</style>