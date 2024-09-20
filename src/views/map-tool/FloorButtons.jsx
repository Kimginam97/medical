import React from 'react'
import { floorInfo } from '../../store'
const FloorButtons = () => {
  const { floor: currentFloor, setFloor } = floorInfo()
  // 클릭 이벤트 처리 함수
  const handleFloorClick = (floor) => {
    setFloor({ floor: floor })
  }

  return (
    <div className="flex items-center  m-5 absolute bottom-6  z-10">
      {/* 층 버튼 */}
      <div className="w-[140px] h-[48px] text-center text-[#00A8A3] text-5xl font-['NanumSquareNeoOTF-Heavy']">
        {currentFloor}
      </div>
      <div
        className="flex space-x-2 bg-white rounded-[40px] shadow p-2 cursor-pointer"
        style={{
          boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.25)',
        }}
      >
        {[
          '실외',
          '외래',
          'B1',
          '1F',
          '2F',
          '3F',
          '4F',
          '5F',
          '6F',
          '7F',
          '8F',
          '9F',
          '10F',
          '11F',
          '12F',
          '13F',
          '14F',
        ].map((floor, index) => (
          <div
            key={index}
            className="flex justify-center items-center text-center "
            onClick={() => handleFloorClick(floor)} // 클릭 이벤트 핸들러 연결
          >
            {floor === currentFloor ? (
              <div className="relative flex items-center justify-center">
                <div
                  className="absolute w-[38px] h-[38px] rounded-full shadow bg-teal-500"
                  style={{
                    boxShadow: '3px 4px 10.5px 0px rgba(58, 125, 123, 0.73)',
                  }}
                />
                <div className="relative text-white text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
                  {currentFloor}
                </div>
              </div>
            ) : (
              <div className="relative flex items-center justify-center opacity-70 w-[38px] h-[38px] rounded-full hover:bg-[#CCEEED]">
                <div className="relative text-[#212121] text-base font-['NanumSquareNeoOTF-Regular']">
                  {floor}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FloorButtons
