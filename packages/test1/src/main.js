import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { isString, isNumber } from '@pnpm-workspace/share';

console.log('%c label', 'color:#0f0;', isString('123'));
console.log('%c label', 'color:#0f0;', isNumber('123'));

createApp(App).mount('#app')
