import React, { useState } from 'react'
import PieChart from '../../components/charts/PieChart'

const DepartmentWaitStatusComponent = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const departmentList = [
    '류마티스 내과',
    '이비인후과',
    '순환기내과',
    '정형외과',
    '신경외과',
  ]

  return (
    <>
      <div className="w-[366px] h-[318.10px] left-0 top-[450px] absolute">
        <img
          className="w-[20px] h-[20px] left-8 top-[3px] absolute"
          src="real-time-operation-metrics/wait_icon.svg"
        />
        <div className="left-16 top-0 absolute text-[#5B5B5B] text-base font-['NanumSquareNeoOTF-Bold']">
          부서별 환자 대기 현황
        </div>
        <div className="w-[340px] left-[22px] top-[40px] absolute">
          <div className="relative z-10">
            <div
              className={`w-full  absolute bg-white rounded-[17px] shadow border-2 border-gray-200  ${
                isDropdownOpen ? 'bg-transparent h-[160px]' : 'h-[35px]'
              }`}
            />
            {departmentList.map((department, index) => {
              const topValue =
                index === 0 ? '8px' : `${40 + 32 * (index - 1)}px`
              const textColor = index === 0 ? '#909090' : '#BABABA'
              const visibilityClass =
                isDropdownOpen || index === 0 ? '' : 'hidden'

              return (
                <div
                  key={index}
                  className={`w-[133.57px] h-4 left-[103.21px] absolute text-center text-sm font-['NanumSquareNeoOTF-Regular'] cursor-pointer ${visibilityClass}`}
                  style={{ top: topValue, color: textColor }}
                >
                  {department}
                </div>
              )
            })}
            {[32, 64, 96, 128].map((top, index) => (
              <div
                key={index}
                className={`w-[310px] h-[0px] absolute border border-gray-200 ${
                  isDropdownOpen ? '' : 'hidden'
                }`}
                style={{ top: `${top}px`, left: '17px' }}
              ></div>
            ))}
            <img
              className="w-[16px] h-[16px] right-6 top-[10px] absolute cursor-pointer"
              src={
                isDropdownOpen
                  ? 'real-time-operation-metrics/dropdown_up_btn.svg'
                  : 'real-time-operation-metrics/dropdown_btn.svg'
              }
              onClick={toggleDropdown}
            />
          </div>
        </div>

        {/* 실시간 대기 환자 수 */}
        <div className="w-[376px] h-[42px] left-0 top-[95px] absolute">
          <div className="w-[376px] h-[42px] left-0 top-0 absolute bg-emerald-50" />
          <div className="left-[102px] top-[13px] absolute text-[#272727] text-[14px] font-['NanumSquareNeoOTF-Bold']">
            실시간 대기 환자 수
          </div>
          <div className="w-14 h-9 left-[228px] top-[5px] absolute text-[#00A8A3] text-[25px] font-['NanumSquareNeoOTF-Extra-Bold']">
            45
          </div>
          <div className="left-[269px] top-[13px] absolute text-[#272727] text-[14px] font-['NanumSquareNeoOTF-Bold']">
            명
          </div>
        </div>

        <div className="w-[340px] h-[152px] left-[15px] top-[150px] absolute">
          {/* 차트 */}
          <div className="w-[152px] h-[152px] right-4 relative">
            <div className="w-[152px] h-[152px] absolute top-[0px] left-[30px] z-[5]">
              <div className="left-[95px] top-[25px] absolute text-center">
                <span className="text-[#727171] text-[10px] font-bold font-['NanumSquareNeoOTF-Bold']">
                  도착
                  <br />
                </span>
                <span className="text-[#727171] text-[13px] font-extrabold font-['NanumSquareNeoOTF-Extra-Bold'] ">
                  12명
                </span>
              </div>
              <div className="left-[90px] top-[86px] absolute text-center">
                <span className="text-[#727171] text-[10px] font-bold font-['NanumSquareNeoOTF-Bold']">
                  준비 중<br />
                </span>
                <span className="text-[#727171] text-[13px] font-extrabold font-['NanumSquareNeoOTF-Extra-Bold']">
                  10명
                </span>
              </div>
              <div className="left-[21px] top-[85px] absolute text-center">
                <span className="text-[#727171] text-[10px] font-bold font-['NanumSquareNeoOTF-Bold']">
                  준비 완료
                  <br />
                </span>
                <span className="text-[#727171] text-[13px] font-extrabold font-['NanumSquareNeoOTF-Extra-Bold']">
                  12명
                </span>
              </div>
              <div className="left-[29px] top-[26px] absolute text-center">
                <span className="text-[#FFFFFF] text-[10px] font-bold font-['NanumSquareNeoOTF-Bold']">
                  진료대기
                  <br />
                </span>
                <span className="text-[#FFFFFF] text-[13px] font-extrabold font-['NanumSquareNeoOTF-Extra-Bold']">
                  11명
                </span>
              </div>
            </div>
            <PieChart series={[11, 12, 10, 12]} />
          </div>
          {/* 내용 */}
          <div className="w-[146px] h-[110px] left-[194px] top-[18px] absolute">
            <div className="w-[55px] h-11 left-[11px] top-0 absolute">
              <div className="left-[14px] top-[35px] absolute text-[#333333] text-[14px] font-['NanumSquareNeoOTF-Bold']">
                도착
              </div>
              <div className="left-[12px] top-0 absolute text-[#AAAAAA] text-[25px] font-['NanumSquareNeoOTF-Heavy']">
                12
              </div>
            </div>
            <div className="w-11 h-11 left-[97px] top-0 absolute">
              <div className="left-0 top-[35px] absolute text-[#333333] text-[14px] font-['NanumSquareNeoOTF-Bold']">
                준비중
              </div>
              <div className="left-[2px] top-0 absolute text-[#8E8D8D] text-[25px] font-['NanumSquareNeoOTF-Heavy']">
                10
              </div>
            </div>
            <div className="w-[55px] h-11 left-[11px] top-[66px] absolute">
              <div className="left-0 top-[35px] absolute text-[#333333] text-[14px] font-['NanumSquareNeoOTF-Bold']">
                준비완료
              </div>
              <div className="left-[12px] top-0 absolute text-[#99DCDA] text-[25px] font-['NanumSquareNeoOTF-Heavy']">
                12
              </div>
            </div>
            <div className="w-[54px] h-11 left-[92px] top-[66px] absolute">
              <div className="left-0 top-[35px] absolute text-[#333333] text-[14px] font-['NanumSquareNeoOTF-Bold']">
                진료대기
              </div>
              <div className="left-[8px] top-0 absolute text-center text-[#00A8A3] text-[25px] font-['NanumSquareNeoOTF-Heavy']">
                11
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DepartmentWaitStatusComponent
