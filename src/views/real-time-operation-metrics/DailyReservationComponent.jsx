import React from 'react'
import DonutChart from '../../components/charts/DonutChart'

const DailyReservationComponent = () => {
  return (
    <>
      {/* 일간 외래 예약 * 접수 현황 */}
      <div className="w-[337px] h-[175px] left-[25px] top-[70px] absolute">
        <img
          className="w-[20px] h-[20px] left-2 top-[3px] absolute"
          src="real-time-operation-metrics/reservation_icon.svg"
        />
        <div className="left-10 top-0 absolute text-[#5B5B5B] text-base font-['NanumSquareNeoOTF-Bold']">
          일간 외래 예약 · 접수 현황
        </div>

        <div className="w-[337px] h-[122px] left-0 top-[42px] absolute">
          {/* 차트 */}
          <div className="w-[122px] h-[122px] right-60 top-0 absolute">
            <DonutChart
              series={[135, 16, 219]}
              labels={['접수환자', '예약취소', '대기환자']}
              width={180}
            />
            <div className="w-[59px] h-[42px] left-[62px] top-[48px] absolute text-center">
              <span className="text-[#00A8A3] text-2xl font-['NanumSquareNeoOTF-Heavy']">
                45
              </span>
              <span className="text-[#00A8A3] text-base font-['NanumSquareNeoOTF-Bold']">
                %
              </span>
            </div>
          </div>
          {/* 내용 */}
          <div className="w-[171px] h-[122px] left-[160px] top-0 absolute">
            <div className="left-[57px] top-0 absolute text-[#333333] text-base font-['NanumSquareNeoOTF-Bold']">
              예약환자
            </div>

            <div className="w-[94px] h-[33px] left-[38px] top-[28px] absolute text-center">
              <span className="text-[#333333] text-3xl font-['NanumSquareNeoOTF-Heavy']">
                360
              </span>
              <span className="text-[#333333] text-xl  font-['NanumSquareNeoOTF-Bold']">
                명
              </span>
            </div>

            <div className="w-[171px] h-[50px] left-0 top-[72px] absolute">
              <div className="w-[171px] h-[50px] left-0 top-0 absolute bg-white rounded-[10px] shadow border-2 border-gray-200" />

              <div className="w-[60px] h-9 left-[22px] top-[7px] absolute">
                <div className="left-0 top-0 absolute text-center text-[#727171] text-xs font-['NanumSquareNeoOTF-Bold']">
                  접수환자
                </div>
                <div className="left-[11px] top-[19px] absolute text-[#727171] text-xs font-['NanumSquareNeoOTF-Bold'] ">
                  135
                </div>
              </div>

              <div className="w-[60px] h-9 left-[103px] top-[7px] absolute">
                <div className="left-0 top-0 absolute text-center text-[#727171] text-xs font-['NanumSquareNeoOTF-Bold']">
                  예약취소
                </div>
                <div className="left-[15px] top-[19px] absolute text-[#00A8A3] text-xs font-['NanumSquareNeoOTF-Bold']">
                  16
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DailyReservationComponent
