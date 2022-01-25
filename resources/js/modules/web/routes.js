// import lib
import { lazy } from 'react'

const routes = [
  {
    path: '/',
    exact: true,
    component: lazy(() => import('../auth/pages/login')),
  },
]

export default routes
