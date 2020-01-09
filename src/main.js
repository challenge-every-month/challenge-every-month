
import Vuetify from "vuetify";
import 'vuetify/dist/vuetify.min.css'
import "./plugins/vuetify";

import DefaultLayout from "~/layouts/Default.vue";
export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.use(Vuetify);
  Vue.component("Layout", DefaultLayout);
}
