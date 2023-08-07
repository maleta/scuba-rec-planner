import { createApp } from "vue";
import NotificationComponent from "../src/components/NotificationComponent";
import App from "./App.vue";
import Toast, { POSITION, useToast } from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.component("NotificationComponent", NotificationComponent);
app.use(Toast, {
  position: POSITION.TOP_RIGHT,
});

app.config.errorHandler = (err) => {
  const toast = useToast();
  toast.error(err.message);
};
app.mount("#app");
