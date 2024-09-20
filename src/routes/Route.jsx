/* eslint-disable react-refresh/only-export-components */
import { lazy } from 'react'

// Home 페이지를 lazy 로드합니다.
const MainPage = lazy(() => import('../pages/Main'))

// 경로 설정을 객체 형태로 관리
const routeConfig = [
  {
    path: '/',
    title: 'Main',
    component: MainPage,
  },
]

// 경로 설정을 내보냅니다.
export default routeConfig
