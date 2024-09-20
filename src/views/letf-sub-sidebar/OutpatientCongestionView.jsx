import React from 'react'
import OutpatientCongestionTable from '../outpatient-congestion/OutpatientCongestionTable'
import OutpatientCongestionMenu from '../outpatient-congestion/OutpatientCongestionMenu'

const OutpatientCongestionView = () => {
  return (
    <div className="w-[393px] h-screen bg-white shadow absolute overflow-auto">
      <div className="left-[23px] top-[20px] absolute text-[#333333] text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
        외래 혼잡도
      </div>

      {/* 외래혼잡도 메뉴 버튼 */}
      <OutpatientCongestionMenu />

      <div className="w-[346px] h-[0px] left-6 top-[100px] border-[1px] border-[#5B5B5B] relative" />

      {/* 외래혼잡도 테이블 */}
      <OutpatientCongestionTable />
    </div>
  )
}

export default OutpatientCongestionView
