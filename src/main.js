import Vue from "vue";
import App from "./App.vue";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import IdeEditor from "tiny-python-ide/packages/index.js";

Vue.config.productionTip = false;
Vue.use(Element);
Vue.use(IdeEditor);
import ElSearchTablePagination from "el-search-table-pagination";

// Default use axios as HTTP tool
Vue.use(ElSearchTablePagination);

// or set a custom HTTP tool
import axios from "axios";

import "./plugins/element.js";
Vue.use(ElSearchTablePagination, {
	axios
});

new Vue({
	render: h => h(App)
}).$mount("#app");
