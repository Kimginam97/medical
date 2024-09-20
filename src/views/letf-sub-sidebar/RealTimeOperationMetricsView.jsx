import React from 'react'
import DailyReservationComponent from '../real-time-operation-metrics/DailyReservationComponent'
import InpatientStatusComponent from '../real-time-operation-metrics/InpatientStatusComponent'
import DepartmentWaitStatusComponent from '../real-time-operation-metrics/DepartmentWaitStatusComponent'
import HospitalCongestionWarningStatusComponent from '../real-time-operation-metrics/HospitalCongestionWarningStatusComponent'

// 실시간 운영 지표
const RealTimeOperationMetricsView = () => {
  return (
    <>
      <div className="w-[393px] h-screen overflow-auto bg-white shadow absolute">
        <div className="left-[23px] top-[20px] absolute text-[#333333] text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
          실시간 운영 지표
        </div>
        {/* 일간 외래 예약 * 접수 현환 */}
        <DailyReservationComponent />
        {/* 입원 병동 가동 현황 */}
        <InpatientStatusComponent />
        {/* 부서별 환재 대기 현황 */}
        <DepartmentWaitStatusComponent />
        {/* 병원 혼잡도 경고 현황 */}
        <HospitalCongestionWarningStatusComponent />
      </div>
    </>
  )
}

export default RealTimeOperationMetricsView
