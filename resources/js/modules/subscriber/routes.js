// import lib
import { lazy } from 'react'

export default [
  {
    path: '/subscribers',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/list')),
  },
  {
    path: '/subscribers/create',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/add')),
  },
  {
    path: '/subscribers/:id/edit',
    exact: true,
    auth: true,
    component: lazy(() => import('./pages/edit')),
  },
]
