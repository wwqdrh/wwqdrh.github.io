===tag=随笔
===description=花了一天时间用vue3.2重写了原来的vue2版本站点，新的语法糖还有ts类型系统真香

setup语法糖总览

```typescript
import {
  defineProps,
  computed,
  ref,
  onMounted,
  onBeforeMount,
} from "@vue/runtime-core";
import { reactive, onUnmounted } from "vue";
import { useStore } from "vuex";

import Dock from "@/components/dock/Dock.vue";
import Modal from "@/components/modal/Modal.vue";
import { HotKeyManager } from "@/utils/hotkey";
import { tabspage } from "@/constant";
import { key } from "@/store/index";

// const message = ref<string[]>([]);
const tabsdata = ref<object[]>(tabspage);
// const docktab = ref({} as HTMLElement);

const store = useStore(key);
onBeforeMount(async () => {
  await store.dispatch("InitData").then(() => {
    store.dispatch("question/InitData");
    console.log("获取完成了");
  });
});
import Modal from "@/components/modal/Modal.vue";

// 特别注意：接口类型需要使用 import type 否则编译出错
import type { PropType } from "@vue/runtime-core";
type User = { name: string; password: string };

// ref
const msg = ref(""); //  会默认约束成 string 类型
const msg2 = ref<string>("Hello"); //  可以通过范型约束类型
const user = ref({} as User); // 自定义类型强制转化 通过 user.value. 访问

// reactive
const obj = reactive({});
const user2 = reactive<User>({ name: "", password: "" });
const user3 = reactive({} as User); // 自定义类型强制转化

// computed
const str3 = computed(() => ""); // 会默认约束成 string 类型
const user5 = computed<User>(() => {
  return { name: "", password: "" };
});

const props = defineProps({
  str: {
    type: String as PropType<string>,
    // string 首字母小写为 typescript 对应 js 中的基础类型
    default: "",
  },
  user: {
    type: Object as PropType<User>,
    default() {
      return {};
    },
  },
});

// const divRef = ref<HTMLElement>({} as HTMLElement); // 新版本已支持如下写法
const divRef = ref({} as HTMLElement);
const itemRefs = ref([] as Array<HTMLElement>);
function setItemRef(el: HTMLElement) {
  if (el) {
    itemRefs.value.push(el);
  }
}

const state = reactive({
  counter: 0,
});
// 定时器 每秒都会更新数据
const timer = setInterval(() => {
  state.counter++;
}, 1000);

onUnmounted(() => {
  clearInterval(timer);
});

const docktab = ref({} as HTMLElement);
const mymodal = ref({} as HTMLElement);
HotKeyManager.register(0, "v", () => {
  docktab.value.toggle();
});
onMounted(() => {
  mymodal.value.toggle();
});
```
