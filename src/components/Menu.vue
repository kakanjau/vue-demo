<style scoped>

  .layout-logo-left{
    width: 90%;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    margin: 15px auto;
    line-height: 30px;
    text-align: center;
    color: #ddd;
    font-size: 18px;
  }
  .layout-hide-text .layout-text{
    display: none;
  }
  .layout-hide-text .layout-logo-left span{
    display: none;
  }
</style>

<template>
  <Menu :active-name="routeName" theme="dark" width="auto" @on-select="selectMenu">
    <div class="layout-logo-left">
      MLAAS <span>管理后台</span>
    </div>
    <Menu-item name="componentMng">
      <Icon type="ios-navigate" :size="iconSize"></Icon>
      <span class="layout-text">组件管理</span>
    </Menu-item>
    <Menu-item name="componentTypeMng">
      <Icon type="ios-keypad" :size="iconSize"></Icon>
      <span class="layout-text">组件类型管理</span>
    </Menu-item>
    <Menu-item name="experimentMng">
      <Icon type="ios-analytics" :size="iconSize"></Icon>
      <span class="layout-text">实验管理</span>
    </Menu-item>
    <Menu-item name="controllerMng">
      <Icon type="ios-analytics" :size="iconSize"></Icon>
      <span class="layout-text">控件管理</span>
    </Menu-item>
    <Menu-item name="menuMng">
      <Icon type="ios-analytics" :size="iconSize"></Icon>
      <span class="layout-text">菜单管理</span>
    </Menu-item>
  </Menu>
</template>

<script>
  export default {
    props: ['iconSize'],
    data () {
      return {
        routeName: ''
      }
    },
    watch: {
      $route: function () {
        this.routeName = this.$route.name
      }
    },
    mounted () {
      debugger
      this.routeName = this.$route.name
    },
    methods: {
      selectMenu (name) {
        this.$router.push({name})
      }
    }
  }
</script>
