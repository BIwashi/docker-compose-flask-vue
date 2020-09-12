import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import Home from "@/components/Home"; // ★★★追加★★★
Vue.use(Router);

export default new Router({
  mode: "history", // ★★★追加★★★
  routes: [
    {
      // '/'に対して、frontend/src/components/ 配下のHelloWorld.vueファイルを参照する
      path: "/",
      name: "HelloWorld",
      component: HelloWorld
    }
  ]
});
