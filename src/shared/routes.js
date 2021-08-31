import Home from './Home'
import Detail from './Detail'
import { fetchPopularRepos } from './api'

const routes =  [
  // {
  //   path: '/',
  //   exact: true,
  //   component: Home,
  // },

  {
    path:'/detail/:id',
    component: Detail,
  }
]

export default routes