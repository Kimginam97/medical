import React, { useEffect, useState } from 'react'
import FloorButtons from './FloorButtons'
import { labelInfo, cameraInfo, menuInfo, floorInfo } from '../../store'

const MapToolView = () => {
  const [spaceName, setSpaceName] = useState('')
  const [showMedicalAssets, setShowMedicalAssets] = useState(false)
  const [activeButton, setActiveButton] = useState('')

  const { floor } = floorInfo()
  const { labelVisual, setLabelVisual } = labelInfo()
  const { setCameraPosition, setCameraTarget, setCameraMove } = cameraInfo()
  const { menuTitle, setMenuTitle } = menuInfo()

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName)
    if (buttonName === '공간 명칭') {
      setLabelVisual(!labelVisual)
      setSpaceName(spaceName === buttonName ? '' : buttonName)
    } else if (buttonName === '시점 초기화') {
      if (
        floor === '외래' ||
        floor === 'B1' ||
        floor === '1F' ||
        floor === '2F' ||
        floor === '3F'
      ) {
        setCameraPosition([0, 60, 40])
        setCameraTarget([0, 0, 10])
        setCameraMove(true)
      } else if (floor === '실외') {
        setCameraPosition([-110, 50, 0])
        setCameraTarget([0, 0, 0])
        setCameraMove(true)
      } else {
        setCameraPosition([-10, 40, -10])
        setCameraTarget([0, 0, -10])
        setCameraMove(true)
      }
    } else if (buttonName === '의료자산') {
      setShowMedicalAssets((prev) => !prev)
    } else if (buttonName === '길 안내 로봇' || buttonName === '약 배송 로봇') {
      setMenuTitle(buttonName)
    }
  }

  const handleSetActiveMenu = (title) => {
    setMenuTitle(title)
  }

  const getButtonClass = (buttonName) => {
    let buttonClass = 'bg-white text-[#5B5B5B]'
    if (menuTitle === buttonName || spaceName === buttonName) {
      buttonClass = 'bg-[#66CBC8] text-[#FFFFFF]'
    } else if (buttonName === activeButton) {
      buttonClass = 'bg-white text-[#5B5B5B] shadow-lg'
    }
    return buttonClass
  }

  const getButtonStyle = (buttonName) => {
    if (buttonName === activeButton) {
      return {
        boxShadow: '3px 4px 7px -2px rgba(33, 117, 114, 0.69)',
      }
    }
    return {
      boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
    }
  }

  const getAssetClass = (assetName) => {
    return menuTitle === assetName
      ? 'bg-[#CCEEED] text-[#33B9B5]'
      : 'bg-white text-zinc-600'
  }

  useEffect(() => {
    setShowMedicalAssets(
      menuTitle === '의료자산' ||
        menuTitle === '휠체어' ||
        menuTitle === '수액' ||
        menuTitle === '제세동기' ||
        menuTitle === '마취기'
    )
  }, [menuTitle])

  return (
    <>
      <div className="flex justify-between space-x-4 m-5 cursor-pointer z-10 absolute top-[0px] w-[fill-available] ">
        <div className="flex space-x-4">
          {/* 의료자산 */}
          <div
            className={`w-[100px] h-[38px] relative rounded-[40px] bg-white ml-[16px] hover:bg-[#CCEEED]`}
          >
            <div
              className="w-[100px] h-[38px] absolute rounded-[40px] shadow border border-gray-200"
              style={{
                boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div
              className="w-[100px] h-[38px] left-[10px] top-[8px] relative"
              onClick={() => handleButtonClick('의료자산')}
            >
              <img
                className="w-[20px] h-[20px] relative"
                src="map-tool/asset_icon.png"
              />
              <div className="left-[22px] bottom-[21px] relative text-[#5B5B5B] text-base font-['NanumSquareNeoOTF-Bold']">
                의료자산
              </div>
            </div>
          </div>
          {showMedicalAssets && (
            <div className="w-[100px] h-[193px] absolute left-[0px] top-[55px]">
              <div
                className="w-[100px] h-[193px] bg-stone-300 opacity-50 rounded-[20px] shadow"
                style={{
                  boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
                }}
              />

              <div
                className={`w-[80px] h-[38px] left-[10px] top-[12px] absolute rounded-[40px] shadow border border-gray-200 hover:bg-[#CCEEED] ${getAssetClass(
                  '휠체어'
                )}`}
                style={{
                  boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => handleSetActiveMenu('휠체어')}
              >
                <div className="left-[20px] top-[8px] absolute text-center text-sm font-['NanumSquareNeoOTF-Bold']">
                  휠체어
                </div>
              </div>

              <div
                className={`w-[80px] h-[38px] left-[10px] top-[56px] absolute rounded-[40px] shadow border border-gray-200 hover:bg-[#CCEEED] ${getAssetClass(
                  '수액'
                )}`}
                style={{
                  boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => handleSetActiveMenu('수액')}
              >
                <div className="left-[26px] top-[8px] absolute text-center text-sm font-['NanumSquareNeoOTF-Bold']">
                  수액
                </div>
              </div>

              <div
                className={`w-[80px] h-[38px] left-[10px] top-[100px] absolute rounded-[40px] shadow border border-gray-200 hover:bg-[#CCEEED] ${getAssetClass(
                  '제세동기'
                )}`}
                style={{
                  boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => handleSetActiveMenu('제세동기')}
              >
                <div className="left-[14px] top-[10px] absolute text-center text-sm font-['NanumSquareNeoOTF-Bold']">
                  제세동기
                </div>
              </div>

              <div
                className={`w-[80px] h-[38px] left-[10px] top-[144px] absolute rounded-[40px] shadow border border-gray-200 hover:bg-[#CCEEED] ${getAssetClass(
                  '마취기'
                )}`}
                style={{
                  boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
                }}
                onClick={() => handleSetActiveMenu('마취기')}
              >
                <div className="left-[20px] top-[8px] absolute text-center text-sm font-['NanumSquareNeoOTF-Bold']">
                  마취기
                </div>
              </div>
            </div>
          )}
          {/* 길 안내 로봇 */}
          <div
            className={`w-[130px] h-[38px] relative rounded-[40px] hover:bg-[#CCEEED] ${getButtonClass(
              '길 안내 로봇'
            )}`}
            onClick={() => handleButtonClick('길 안내 로봇')}
            style={getButtonStyle('길 안내 로봇')}
          >
            <div className="w-[130px] h-[38px] absolute rounded-[40px] shadow border border-gray-200" />
            <div className="w-[130px] h-[38px] left-[10px] top-[10px] absolute">
              <img
                className="w-[20px] h-[20px] absolute"
                src="map-tool/robot_icon.svg"
              />
              <div className="left-[25px] bottom-[2px] relative text-base font-['NanumSquareNeoOTF-Bold']">
                길 안내 로봇
              </div>
            </div>
          </div>
          {/* 약 배송 로봇 */}
          <div
            className={`w-[130px] h-[38px] relative rounded-[40px] hover:bg-[#CCEEED] ${getButtonClass(
              '약 배송 로봇'
            )}`}
            onClick={() => handleButtonClick('약 배송 로봇')}
            style={getButtonStyle('약 배송 로봇')}
          >
            <div
              className="w-[130px] h-[38px] absolute rounded-[40px] shadow border border-gray-200"
              style={{
                boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="w-[130px] h-[38px] left-[10px] top-[10px] absolute">
              <img
                className="w-[20px] h-[20px] absolute"
                src="map-tool/robot_icon.svg"
              />
              <div className="left-[25px] bottom-[2px] relative text-base font-['NanumSquareNeoOTF-Bold']">
                약 배송 로봇
              </div>
            </div>
          </div>
        </div>
        {/* 공간명칭 */}
        <div className="flex space-x-4">
          <div
            className={`w-[110px] h-[38px] relative rounded-[40px] hover:bg-[#CCEEED] ${getButtonClass(
              '공간 명칭'
            )}`}
            onClick={() => handleButtonClick('공간 명칭')}
            style={getButtonStyle('공간 명칭')}
          >
            <div className="w-[110px] h-[38px] absolute rounded-[40px] shadow border border-gray-200" />
            <div className="w-[110px] h-[38px] left-[10px] top-[8px] absolute">
              <img
                className="w-[20px] h-[20px] absolute top-[1px]"
                src="map-tool/vector.svg"
              />
              <div className="left-[26px] top-[0px] absolute text-base font-['NanumSquareNeoOTF-Bold']">
                공간 명칭
              </div>
            </div>
          </div>

          {/* 시점 초기화 */}
          <div
            className="w-[130px] h-[38px] relative hover:bg-[#CCEEED] bg-white rounded-[40px]"
            onClick={() => handleButtonClick('시점 초기화')}
          >
            <div
              className="w-[130px] h-[38px] absolute rounded-[40px]  shadow border border-gray-200 "
              style={{
                boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
              }}
            />
            <div className="w-[130px] h-[38px] left-[10px] top-[8px] absolute ">
              <img
                className="w-[20px] h-[20px] absolute top-[1px]"
                src="map-tool/reset_icon.png"
              />
              <div className="left-[26px] top-[0px] relative text-base text-[#5B5B5B] font-['NanumSquareNeoOTF-Bold']">
                시점 초기화
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 층 버튼 */}
      <div className="flex justify-center">
        <FloorButtons />
      </div>
    </>
  )
}

export default MapToolView
