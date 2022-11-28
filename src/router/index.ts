import { createRouter, createWebHistory } from 'vue-router'
import routerPath from './path'
const PostList = () => import('../components/post/PostList.vue')
const ProjectList = () => import('../components/project/ProjectList.vue')

const routes = [
  { path: routerPath.post, component: PostList },
  { path: routerPath.projects, component: ProjectList },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
