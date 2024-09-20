import React from 'react'

import LeftSideBars from '../components/LeftSideBars'
import RealTimeOperationMetricsView from '../views/letf-sub-sidebar/RealTimeOperationMetricsView'
import OutpatientCongestionView from '../views/letf-sub-sidebar/OutpatientCongestionView'
import TransferStatusVIew from '../views/letf-sub-sidebar/TransferStatusVIew'
import SampleMedicalAssets from '../views/letf-sub-sidebar/SampleMedicalAssets'
import MapToolView from '../views/map-tool/MapToolView'
import HallymThreeScene from '../components/three/HallymThreeScene'

import { menuInfo } from '../store'
import SampleRobotView from '../views/letf-sub-sidebar/SampleRobotView'
import SearchComponent from '../components/SearchComponent'

const Main = () => {
  const { menuTitle } = menuInfo()

  const renderActiveView = () => {
    switch (menuTitle) {
      case '운영지표':
        return <RealTimeOperationMetricsView />
      case '검색':
        return <SearchComponent />
      case '혼잡도':
        return <OutpatientCongestionView />
      case '이송현황':
        return <TransferStatusVIew />
      case '휠체어':
        return <SampleMedicalAssets menuTitle={menuTitle} />
      case '수액':
        return <SampleMedicalAssets menuTitle={menuTitle} />
      case '제세동기':
        return <SampleMedicalAssets menuTitle={menuTitle} />
      case '마취기':
        return <SampleMedicalAssets menuTitle={menuTitle} />
      case '길 안내 로봇':
        return <SampleRobotView menuTitle={menuTitle} />
      case '약 배송 로봇':
        return <SampleRobotView menuTitle={menuTitle} />
      default:
        return null
    }
  }

  return (
    <div className="flex h-screen min-w-[1440px]">
      {/* LeftSideBar */}
      <div className="w-[65px]">
        <LeftSideBars />
      </div>

      {/* Main Content */}
      <div className="flex-1 relative">
        {renderActiveView() && (
          <div className="absolute">{renderActiveView()}</div>
        )}
        <div
          className="relative h-screen left-[393px]"
          style={{ width: 'calc(100% - 410px)' }}
        >
          <HallymThreeScene />
          <MapToolView />
        </div>
      </div>
    </div>
  )
}

export default Main
