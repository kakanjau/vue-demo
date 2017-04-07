<style scoped>
  .layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }
  .layout-menu{
    background: #464c5b;
    width: 230px;
    position: absolute;
    top: 0;
    left: 0; 
  }
  .layout-menu.collaps-menu{
    width: 70px;
  }
  .layout-breadcrumb{
    padding: 10px 15px 0;
  }
  .layout-content{
    min-height: 200px;
    background: #fff;
    border-radius: 4px;
    margin: 0;
    width: 100%;
    margin-left: 230px;
  }
  .layout-content.collaps-menu{
    margin-left: 70px;
  }
  .layout-content-main{
    padding: 10px;
  }
  .layout-header{
    height: 60px;
    background: #fff;
    box-shadow: 0 1px 1px rgba(0,0,0,.1);
  }
  .ivu-col{
    transition: width .2s ease-in-out;
  }
</style>
<template>
  <div class="layout" :class="{'layout-hide-text': collapsMenu}">
    <Row type="flex">
      <i-col class="layout-menu" :class="{'collaps-menu': collapsMenu}" :style="{ minHeight: minHeight + 'px' }">
        <v-menu :iconSize="iconSize"></v-menu>
      </i-col>
      <i-col class="layout-content" :class="{'collaps-menu': collapsMenu}" :style="{ minHeight: minHeight + 'px' }">
        <div class="layout-header">
          <i-button type="text" @click="toggleClick">
            <Icon type="navicon" size="32"></Icon>
          </i-button>
        </div>
        <div class="layout-content">
          <router-view></router-view>
        </div>
      </i-col>
    </Row>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        collapsMenu: false,
        minHeight: 0
      }
    },
    computed: {
      iconSize () {
        return !this.collapsMenu ? 14 : 24
      }
    },
    methods: {
      toggleClick () {
        this.collapsMenu = !this.collapsMenu
      }
    },
    mounted () {
      let onresize = () => {
        const windowHeight = window.innerHeight
        // const menu = document.querySelector('body > .layout > div > .layout-menu')
        // const content = document.querySelector('body > .layout > div > .layout-content')
        // const menuHeight = menu.offsetHeight
        // const contentHeight = content.offsetHeight
        this.minHeight = windowHeight - 2
      }
      onresize()
      window.addEventListener('resize', onresize)
    }
  }
</script>
