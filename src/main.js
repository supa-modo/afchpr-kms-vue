import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";
import "./assets/tailwind.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUser, faKey } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

// Add icons to the library
library.add(faUser, faKey);


const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.use(router);
app.mount("#app");
