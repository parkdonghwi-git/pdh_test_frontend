import { createRouter, createWebHistory } from "vue-router";
import BoardList from "../components/BoardList.vue"; 
import BoardRegister from "../components/BoardRegister.vue"; 
import BoardDetail from "../components/BoardDetail.vue"; 

const routes = [
  { path: "/", component: BoardList },
  { path: "/board/register", component: BoardRegister },
  { path: "/board/detail/:id", component: BoardDetail },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
