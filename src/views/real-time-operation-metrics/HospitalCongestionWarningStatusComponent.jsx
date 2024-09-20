import React from 'react'

const HospitalCongestionWarningStatusComponent = () => {
  return (
    <>
      {/* 병원 혼잡도 경고 현황 */}
      <div className="w-[336px] h-[94px] left-[20px] top-[775px] absolute">
        <img
          className="w-[20px] h-[20px] left-2 top-[3px] absolute"
          src="real-time-operation-metrics/warn_icon.svg"
        />
        <div className="left-10 top-0 absolute text-[#5B5B5B] text-base font-['NanumSquareNeoOTF-Bold']">
          병원 혼잡도 경고 현황
        </div>

        <div className="w-[336px] left-[2px] top-[35px] absolute">
          <div className="w-[55px] h-[42px] left-0 top-0 absolute">
            <div
              className="w-[55px] h-[25px] left-0 top-0 absolute bg-rose-400 rounded-[20px]"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[10px] top-[5px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              채혈실
            </div>
            <div className="left-[14px] top-[31px] absolute text-[#EA6176] text-xs font-['NanumSquareNeoOTF-Bold']">
              80%
            </div>
          </div>

          <div className="w-[60px] h-[42px] left-[57px] top-0 absolute">
            <div
              className="w-[55px] h-[25px] left-0 top-0 absolute bg-rose-400 rounded-[20px]"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[5px] top-[5px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              의사진료
            </div>
            <div className="left-[15px] top-[31px] absolute text-[#EA6176] text-xs font-['NanumSquareNeoOTF-Bold']">
              80%
            </div>
          </div>

          <div className="w-[65px] h-[42px] left-[114px] top-0 absolute">
            <div className="left-[20px] top-[31px] absolute text-[#FFC700] text-xs font-['NanumSquareNeoOTF-Bold']">
              60%
            </div>
            <div
              className="w-[65px] h-[25px] left-0 top-0 absolute bg-yellow-400 rounded-[20px]"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[3px] top-[4px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              입원계 업무
            </div>
          </div>

          <div className="w-[60px] h-[42px] left-[180px] top-0 absolute">
            <div className="left-[18px] top-[31px] absolute text-[#FFC700] text-xs font-['NanumSquareNeoOTF-Bold']">
              60%
            </div>
            <div
              className="w-[60px] h-[25px] left-0 top-0 absolute bg-yellow-400 rounded-[20px]"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[7px] top-[4px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              외래대기
            </div>
          </div>

          <div className="w-[51px] h-[42px] left-[242px] top-0 absolute">
            <div className="left-[13px] top-[31px] absolute text-[#64CBCB] text-xs font-['NanumSquareNeoOTF-Bold']">
              20%
            </div>
            <div
              className="w-[51px] h-[25px] left-0 top-0 absolute bg-cyan-300 rounded-[20px] shadow"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[8px] top-[4px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              진료과
            </div>
          </div>

          <div className="w-[60px] h-[42px] left-[294px] top-0 absolute">
            <div className="left-[16px] top-[31px] absolute text-[#64CBCB] text-xs font-['NanumSquareNeoOTF-Bold']">
              20%
            </div>
            <div
              className="w-[60px] h-[25px] left-0 top-0 absolute bg-cyan-300 rounded-[20px] shadow"
              style={{
                boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="left-[8px] top-[4px] absolute text-[#FFFFFF] text-xs font-['NanumSquareNeoOTF-Regular']">
              채혈대기
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HospitalCongestionWarningStatusComponent
