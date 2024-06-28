import { createApp } from "vue";
import App from "./App.vue";
import { isString, isNumber } from "@pnpm-workspace/share";
import { num } from "@pnpm-workspace/utils";

console.log("%c label", "color:#0f0;", isString("123"));
console.log("%c label", "color:#0f0;", isNumber("123"));
console.log("%c num", "color:#0f0;", num.formatCurrency(123456.12));

createApp(App).mount("#app");
