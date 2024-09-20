import React, { useEffect, useState } from 'react'
import TransferStatusTable from '../transfer-status/TransferStatusTable'

const TransferStatusView = () => {
  const [bottomOffset, setBottomOffset] = useState(0)

  useEffect(() => {
    const updateBottomOffset = () => {
      const windowHeight = window.innerHeight

      const fixedBottom = Math.max(600, windowHeight - 90)
      setBottomOffset(fixedBottom)
    }

    updateBottomOffset()

    window.addEventListener('resize', updateBottomOffset)

    return () => {
      window.removeEventListener('resize', updateBottomOffset)
    }
  }, [])

  return (
    <>
      <div className="w-[393px] h-screen bg-white shadow absolute ">
        <div className="left-[23px] top-[20px] absolute text-[#333333] text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
          이송 현황
        </div>

        <div className="w-[205px] h-[34px] top-[70px] relative">
          <img
            className="w-[20px] h-[20px] left-7 top-[2px] absolute"
            src="transfer-status/information_icon.png"
            alt="information icon"
          />
          <div className="left-[52px] w-[200px] top-0 absolute text-[#5B5B5B] text-base font-['NanumSquareNeoOTF-Bold']">
            이송 대기 환자 정보
          </div>
        </div>

        <div className="top-[115px] left-[275px] absolute">
          <div className="text-[#212121] text-xs font-['NanumSquareNeoOTF-Regular']">
            대기 시간 단위 : 분
          </div>
        </div>

        {/* 이송현황 테이블 */}
        <TransferStatusTable />

        {/* Fixed footer */}
        <div
          className="w-[333px] h-[47px] left-6 absolute"
          style={{ top: bottomOffset }}
        >
          <div
            className="w-[333px] h-[47px] left-0 top-0 absolute bg-[#66CBC8] hover:bg-[#CCEEED]"
            style={{
              borderRadius: '40px',
              boxShadow: '3px 4px 7.4px -2px rgba(33, 117, 114, 0.69)',
            }}
          >
            <div className="w-[281.64px] h-4 left-[26px] top-[15.27px] absolute text-center text-white text-xl font-bold font-['NanumSquare Neo OTF'] leading-[17px] cursor-pointer">
              이송 요원 배정 시스템
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TransferStatusView
