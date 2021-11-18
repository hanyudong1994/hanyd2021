<template>
<el-container>
    <el-header>
      <el-menu
        :default-active="this.$route.path"
        class="el-menu-demo"
        mode="horizontal"
        router
        @select="handleSelect"
      >
        <el-menu-item v-for="(item, i) in navList" :key="i" :index="item.name">
          <template slot="title">
            <i class="el-icon-s-platform"></i>
            <span> {{ item.navItem }}</span>
          </template>
        </el-menu-item>
      </el-menu>
    </el-header>
    <el-main style="height: 500px;">
      <router-view></router-view>
    </el-main>
    <el-footer>
      <el-link style="padding:20px;" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11011102001555" target="_blank">
         <img src="./assets/image/aaa.png" style="float:left;"/>
         <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
           京公网安备 11011102001555号
         </p>
      </el-link>
      <el-link style="padding:20px" href="http://beian.miit.gov.cn/" target="_blank">
         <p style="float:left;height:20px;line-height:20px;margin: 0px 0px 0px 5px; color:#939393;">
           京ICP备 2021013675号
         </p>
      </el-link>
    </el-footer>
</el-container>
</template>

<script>
 export default {
  data() {
    return {
      navList: [
        { name: "/test1", navItem: "签章项目" },
        { name: "/test2", navItem: "个人测试" },
      ],
    };
  },
  created () {
    document.title = '个人测试';
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
.el-header {
   position: relative;
   width: 100%;
   height: 60px;      
}

.el-footer {
   border-top: .01rem solid #d1d1d1;
}

</style>
