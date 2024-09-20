import React, { useEffect, useState } from 'react'

const SampleRobotView = ({ menuTitle }) => {
  const [bottomOffset, setBottomOffset] = useState(0)
  const [selectedRow, setSelectedRow] = useState(null)

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

  const handleRowClick = (index) => {
    setSelectedRow(selectedRow === index ? null : index)
  }

  const dummyData = [
    {
      name: 'AAA',
      id: 'aaa',
      deliveryQuantity: [1401, 9501],
      deliveryDistance: [418679, 1273464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
    {
      name: 'BBB',
      id: 'bbb',
      deliveryQuantity: [1305, 9601],
      deliveryDistance: [428679, 1263464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
    {
      name: 'CCC',
      id: 'ccc',
      deliveryQuantity: [1201, 9701],
      deliveryDistance: [318679, 1373464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
    {
      name: 'AAA',
      id: 'aaa',
      deliveryQuantity: [1401, 9501],
      deliveryDistance: [418679, 1273464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
    {
      name: 'BBB',
      id: 'bbb',
      deliveryQuantity: [1305, 9601],
      deliveryDistance: [428679, 1263464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
    {
      name: 'CCC',
      id: 'ccc',
      deliveryQuantity: [1201, 9701],
      deliveryDistance: [318679, 1373464],
      moveIcon: 'transfer-status/move_normal_btn.svg',
    },
  ]

  return (
    <>
      <div className="w-[393px] h-screen bg-white shadow absolute">
        <div className="left-[23px] top-[20px] absolute text-center text-[#333333] text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
          {menuTitle}
        </div>

        {/* 테이블 */}
        <div className="w-[346px] h-[400px] left-[20px] top-[50px] absolute rounded-lg">
          {/* 테이블 타이틀*/}
          <div className="w-[345px] h-[30px] left-[0px] top-[20px] relative bg-gray-200 rounded-lg">
            <div className="left-2 top-[3px] absolute text-center text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              로봇 명
            </div>
            <div className="left-[77px] top-[3px] absolute text-center text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              로봇 ID
            </div>
            <div className="left-[146px] top-[3px] absolute text-center text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              배송 수량
            </div>
            <div className="left-[223px] top-[3px] absolute text-center text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              배송 거리
            </div>
            <div className="left-[300px] top-[3px] absolute text-center text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              이동
            </div>

            <div className="w-[221px] h-[15px] left-[65px] top-[8px] absolute">
              <div className="w-[15px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[68px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[148px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[221px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
            </div>
          </div>

          {/* 테이블 속성 */}
          <div className="w-[346px] top-[50px] max-h-65vh overflow-auto absolute">
            {dummyData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRowClick(index)}
                className={`w-[346px] h-[70px] relative rounded-[5px] cursor-pointer ${
                  selectedRow === index ? 'bg-[#E6F7F6]' : 'bg-white'
                }`}
              >
                <div className="left-[12px] top-[24px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                  {item.name}
                </div>
                <div className="left-[85px] top-[24px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                  {item.id}
                </div>
                <div className="left-[150px] top-[22px] absolute ">
                  <div className="w-[45.12px] h-[12.13px] text-center text-[#00A8A3] text-xs font-['NanumSquareNeoOTF-Heavy']">
                    {item.deliveryQuantity[0].toLocaleString()}
                  </div>
                </div>
                <div className="left-[220px] top-[22px] absolute ">
                  <div className="w-[54.33px] h-[12.13px] text-center text-[#00A8A3] text-xs font-['NanumSquareNeoOTF-Heavy']">
                    {item.deliveryDistance[0].toLocaleString()}
                  </div>
                </div>
                <div className="left-[305px] top-[20px] absolute">
                  <img
                    src={item.moveIcon}
                    alt={item.moveIcon}
                    className="w-[19px] h-[19px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed footer */}
      <div
        className="w-[333px] h-[47px] left-6 absolute"
        style={{ top: bottomOffset }}
      >
        <div
          className="w-[333px] h-[47px] left-0 top-0 absolute bg-[#66CBC8] hover:bg-[#CCEEED]"
          style={{
            borderRadius: '40px',
            boxShadow: '3px 4px 7px -2px rgba(33, 117, 114, 0.69)',
          }}
        >
          <div className="w-[281.64px] h-4 left-[26px] top-[15.27px] absolute text-center text-white text-xl font-bold font-['NanumSquare Neo OTF'] leading-[17px] cursor-pointer">
            병동 로봇 관제 시스템
          </div>
        </div>
      </div>
    </>
  )
}

export default SampleRobotView
