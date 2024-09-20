import React, { useState } from 'react'

const OutpatientCongestionMenu = () => {
  const [activeButton, setActiveButton] = useState(null)

  const handleButtonClick = (buttonName) => {
    setActiveButton((prevButton) =>
      prevButton === buttonName ? null : buttonName
    )
  }

  const buttons = [
    { name: '창구·수납', position: 'left-0 top-0' },
    { name: '채혈 대기', position: 'left-[120px] top-0' },
    { name: '입원계 업무', position: 'left-[240px] top-0' },
    { name: '의사 진료', position: 'left-0 top-[48px]' },
    { name: '진료과', position: 'left-[120px] top-[48px]' },
    { name: '외래 대기', position: 'left-[240px] top-[48px]' },
  ]

  return (
    <>
      {/* 외래혼잡도 메뉴 버튼 */}
      <div className="w-[336.09px] left-[26px] top-[70px] h-[77.30px] relative">
        {buttons.map((button, index) => (
          <div
            key={index}
            className={`w-[96.09px] h-[29.30px] absolute ${
              button.position
            } hover:bg-[#CCEEED] ${
              activeButton === button.name
                ? 'text-white bg-[#66CBC8]'
                : 'bg-white text-black'
            } rounded-[40px] shadow border border-gray-200 cursor-pointer flex items-center justify-center`}
            onClick={() => handleButtonClick(button.name)}
            style={{
              boxShadow:
                activeButton === button.name
                  ? '3px 4px 7.4px -2px rgba(33, 117, 114, 0.69)'
                  : '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
            }}
          >
            <div className={`text-[15px] font-['NanumSquareNeoOTF-Bold']`}>
              {button.name}
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default OutpatientCongestionMenu
