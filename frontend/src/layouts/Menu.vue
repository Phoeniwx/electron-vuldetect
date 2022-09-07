<template>
  <a-layout id="app-menu">
    <a-layout-sider theme="light" class="layout-sider" width="120">
      <a-menu theme="light" mode="inline" :default-selected-keys="['menu_100']">
        <a-menu-item v-for="(menuInfo, subIndex) in showList" :key="subIndex">
          <router-link
            :to="{ name: menuInfo.pageName, params: menuInfo.params }"
          >
            <span>{{ menuInfo.title }}</span>
          </router-link>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-content>
        <keep-alive>
          <router-view />
        </keep-alive>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      menu: {
        menu_100: {
          icon: "profile",
          title: "配置",
          pageName: "BaseConfigIndex",
          params: {},
          show: true,
        },
        menu_300: {
          icon: "profile",
          title: "执行",
          pageName: "BaseExecIndex",
          params: {},
          show: true,
        },
        menu_400: {
          icon: "profile",
          title: "报告",
          pageName: "BaseReportIndex",
          params: {},
          show: true,
        },
        menu_301: {
          icon: "profile",
          title: "支付漏洞配置",
          pageName: "BasePayConfigIndex",
          params: {},
          show: false,
        },
        menu_302: {
          icon: "profile",
          title: "支付漏洞执行",
          pageName: "BasePayExecIndex",
          params: {},
          show: false,
        },
        menu_303: {
          icon: "profile",
          title: "支付漏洞报告",
          pageName: "BasePayReportIndex",
          params: {},
          show: false,
        },
        menu_407: {
          icon: "profile",
          title: "源代码配置",
          pageName: "BasePowerMonitorIndex",
          params: {},
          show: false,
        },
        menu_409: {
          icon: "profile",
          title: "源代码执行",
          pageName: "BaseScreenIndex",
          params: {},
          show: false,
        },
        menu_411: {
          icon: "profile",
          title: "源代码报告",
          pageName: "BaseThemeIndex",
          params: {},
          show: false,
        },
        menu_412: {
          icon: "profile",
          title: "自动更新",
          pageName: "BaseUpdaterIndex",
          params: {},
          show: false,
        },
        menu_500: {
          icon: "profile",
          title: "软件调用",
          pageName: "BaseSoftwareIndex",
          params: {},
          show: false,
        },
        menu_900: {
          icon: "profile",
          title: "测试",
          pageName: "BaseTestApiIndex",
          params: {},
          show: false,
        },
      },
    };
  },
  computed: {
    showList() {
      let fdict = {};
      for (var key in this.menu) {
        if (this.menu[key].show) {
          fdict[key] = this.menu[key];
        }
      }
      return fdict;
    },
  },
  created() {},
  mounted() {
    this.menuHandle({ key: "menu_100" });
  },
  methods: {
    menuHandle(item) {
      const linkInfo = this.menu[item.key];
      this.$router.push({ name: linkInfo.pageName, params: linkInfo.params });
    },
  },
};
</script>
<style lang="less" scoped>
#app-menu {
  height: 100%;
  text-align: center;
  .layout-sider {
    border-top: 1px solid #e8e8e8;
    border-right: 1px solid #e8e8e8;
    background-color: #fafafa;
    overflow: auto;
  }
}
</style>
