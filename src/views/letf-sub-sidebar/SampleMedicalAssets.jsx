import React, { useEffect, useState } from 'react'

const SampleMedicalAssets = ({ menuTitle }) => {
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

  const dummyData = [
    {
      asset: 'EEE',
      ward: '13병동',
      tag: 'eee',
      floor: '13F',
      batteryStatus: '신호상실',
    },
    {
      asset: 'DDD',
      ward: '13병동',
      tag: 'ddd',
      floor: '13F',
      batteryStatus: '배터리 부족',
    },
    {
      asset: 'CCC',
      ward: '13병동',
      tag: 'ccc',
      floor: '13F',
      batteryStatus: '정상',
    },
    {
      asset: 'BBB',
      ward: '13병동',
      tag: 'bbb',
      floor: '13F',
      batteryStatus: '신호상실',
    },
    {
      asset: 'EEE',
      ward: '13병동',
      tag: 'eee',
      floor: '13F',
      batteryStatus: '정상',
    },
    {
      asset: 'DDD',
      ward: '13병동',
      tag: 'ddd',
      floor: '13F',
      batteryStatus: '배터리 부족',
    },
    {
      asset: 'CCC',
      ward: '13병동',
      tag: 'ccc',
      floor: '13F',
      batteryStatus: '신호상실',
    },
    {
      asset: 'BBB',
      ward: '13병동',
      tag: 'bbb',
      floor: '13F',
      batteryStatus: '정상',
    },
    {
      asset: 'EEE',
      ward: '13병동',
      tag: 'eee',
      floor: '13F',
      batteryStatus: '신호상실',
    },
    {
      asset: 'DDD',
      ward: '13병동',
      tag: 'ddd',
      floor: '13F',
      batteryStatus: '배터리 부족',
    },
    {
      asset: 'CCC',
      ward: '13병동',
      tag: 'ccc',
      floor: '13F',
      batteryStatus: '정상',
    },
    {
      asset: 'BBB',
      ward: '13병동',
      tag: 'bbb',
      floor: '13F',
      batteryStatus: '정상',
    },
    {
      asset: 'EEE',
      ward: '13병동',
      tag: 'eee',
      floor: '13F',
      batteryStatus: '신호상실',
    },
    {
      asset: 'DDD',
      ward: '13병동',
      tag: 'ddd',
      floor: '13F',
      batteryStatus: '배터리 부족',
    },
    {
      asset: 'CCC',
      ward: '13병동',
      tag: 'ccc',
      floor: '13F',
      batteryStatus: '정상',
    },
  ]

  const getBatteryIcon = (status, isSelected) => {
    switch (status) {
      case '정상':
        return isSelected
          ? 'medical-assets/move_normal_select_btn.svg'
          : 'medical-assets/move_normal_btn.svg'
      case '신호상실':
        return isSelected
          ? 'medical-assets/move_warning_select_btn.svg'
          : 'medical-assets/move_warning_btn.svg'
      case '배터리 부족':
        return isSelected
          ? 'medical-assets/move_danger_select_btn.svg'
          : 'medical-assets/move_danger_btn.svg'
      default:
        return ''
    }
  }

  const handleRowClick = (index) => {
    setSelectedRow(selectedRow === index ? null : index)
  }

  return (
    <>
      <div className="w-[393px] h-screen bg-white shadow absolute">
        <div className="left-[23px] top-[20px] absolute text-[#333333] text-xl font-['NanumSquareNeoOTF-Extra-Bold']">
          병동 의료자산 관리
        </div>

        <div className="w-[336px] left-[25px] top-[70px] text-[#333333] text-base font-['NanumSquareNeoOTF-Bold'] relative">
          - {menuTitle}
        </div>

        <div className="w-[346px] h-[0px] left-[25px] top-[90px] border border-zinc-600 relative" />

        <div className="w-[346px] left-[25px] top-[140px] absolute ">
          {/* 테이블 배터리 표시 */}
          <div className="w-[335px] h-4 top-0 relative">
            <div className="w-[140px] h-4 left-[201px] top-0 relative">
              <div
                className="w-[51px] h-4 left-0 top-0 absolute bg-rose-400 rounded-[20px] shadow"
                style={{
                  boxShadow: '1px 2px 5.5px -1px rgba(0, 0, 0, 0.25)',
                }}
              />
              <div className="left-[57px] top-0 absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Bold']">
                배터리 부족
                <br />
                응답 없음
              </div>
            </div>
            <div className="w-[110px] h-4 left-[92px] top-0 absolute">
              <div
                className="w-[51px] h-4 left-0 top-0 absolute bg-yellow-400 rounded-[20px] shadow"
                style={{
                  boxShadow: '1px 2px 5.5px -1px rgba(0, 0, 0, 0.25)',
                }}
              />
              <div className="left-[57px] top-[4px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Bold']">
                신호상실
              </div>
            </div>
            <div className="w-[90px] h-4 left-0 top-0 absolute">
              <div
                className="w-[51px] h-4 left-0 top-0 absolute bg-cyan-300 rounded-[20px] shadow"
                style={{
                  boxShadow: '1px 2px 5.5px -1px rgba(0, 0, 0, 0.25)',
                }}
              />
              <div className="left-[57px] top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Bold']">
                정상
              </div>
            </div>
          </div>

          {/* 테이블 타이틀*/}
          <div className="w-[340px] h-[34px] left-[0px] top-[40px] absolute text-sm bg-gray-200 rounded-[5px]">
            <div className="left-2 top-1 absolute text-center text-[#333333] font-['NanumSquareNeoOTF-Regular']">
              자산 명
            </div>
            <div className="left-[77px] top-1 absolute text-center text-[#333333] font-['NanumSquareNeoOTF-Regular']">
              부서/병동
            </div>
            <div className="left-[166px] top-1 absolute text-centertext-[#333333] font-['NanumSquareNeoOTF-Regular']">
              태그 이름
            </div>
            <div className="left-[253px] top-1 absolute text-center text-[#333333] font-['NanumSquareNeoOTF-Regular']">
              층
            </div>
            <div className="left-[295px] top-1 absolute text-center text-[#333333] font-['NanumSquareNeoOTF-Regular']">
              이동
            </div>

            <div className="w-[221px] h-[15px] left-[65px] top-[6px] absolute">
              <div className="w-[15px] h-[0px] left-0 top-[1px] absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[85px] top-[1px] absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[170px] top-[1px] absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
              <div className="w-[15px] h-[0px] left-[215px] top-[1px] absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
            </div>
          </div>

          {/* 테이블 컬럼 */}
          <div className="w-[360px] left-0 top-[70px] max-h-55vh overflow-auto absolute">
            {dummyData.map((item, index) => (
              <div
                key={index}
                onClick={() => handleRowClick(index)}
                className={`w-[343px] h-[37px] relative cursor-pointer ${
                  selectedRow === index
                    ? 'bg-[#E6F7F6]'
                    : index % 2 === 0
                    ? 'bg-white'
                    : 'bg-gray-200'
                }`}
              >
                <div className="w-[301px] h-[19px] left-[19px] top-[9px] absolute">
                  <div className="left-0 top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    {item.asset}
                  </div>
                  <div className="left-[70px] top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    {item.ward}
                  </div>
                  <div className="left-[170px] top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    {item.tag}
                  </div>
                  <div className="left-[232px] top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    {item.floor}
                  </div>
                  <div className="left-[282px] top-[3px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    <img
                      src={getBatteryIcon(
                        item.batteryStatus,
                        selectedRow === index
                      )}
                      alt={item.batteryStatus}
                      className="w-[19px] h-[19px]"
                    />
                  </div>
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
            병동 의료자산 관리 시스템
          </div>
        </div>
      </div>
    </>
  )
}

export default SampleMedicalAssets
