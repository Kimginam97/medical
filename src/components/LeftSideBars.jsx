import html2canvas from 'html2canvas'
import React from 'react'
import { IoSearchSharp } from 'react-icons/io5'
import { menuInfo, floorInfo } from '../store'

const LeftSideBars = () => {
  const { menuTitle, setMenuTitle } = menuInfo()
  const { setFloor } = floorInfo()
  const handleSetActiveMenu = (title) => {
    setMenuTitle(title)

    if (title === '혼잡도') {
      setFloor({ floor: '외래' })
    }
  }

  const saveAsImageHandler = () => {
    const target = document.getElementById('root')
    if (!target) {
      return alert('결과 저장에 실패했습니다.')
    }
    html2canvas(target).then((canvas) => {
      const link = document.createElement('a')
      document.body.appendChild(link)
      link.href = canvas.toDataURL('image/png')
      link.download = 'result.png'
      link.click()
      document.body.removeChild(link)
    })
  }

  return (
    <div
      className="w-[65px] h-screen bg-white shadow-lg fixed top-0 left-0 z-10"
      style={{
        boxShadow: '3px 4px 10.5px 0px rgba(58, 125, 123, 0.29)',
      }}
    >
      <div className="w-[38px] h-[0px] left-[13px] top-[480px] absolute shadow border border-slate-200"></div>
      <div className="w-[38px] h-[0px] left-[13px] top-[360px] absolute shadow border border-slate-200"></div>
      <div className="w-[38px] h-[0px] left-[13px] top-[240px] absolute shadow border border-slate-200"></div>
      <div className="w-[38px] h-[0px] left-[13px] top-[120px] absolute shadow border border-slate-200"></div>

      {/* 운영지표 */}
      <div
        className={`w-[65px] h-[120px] left-0 top-0 cursor-pointer absolute hover:bg-[#CCEEED] ${
          menuTitle === '운영지표' ? 'bg-[#CCEEED]' : ''
        }`}
        onClick={() => handleSetActiveMenu('운영지표')}
      >
        <img
          src={
            menuTitle === '운영지표'
              ? 'left-side-bar/operating_selected_icon.svg'
              : 'left-side-bar/operating_icon.svg'
          }
          className="left-[16px] top-[16px] absolute w-[30px] h-[30px]"
          alt="Operating Icon"
        />
        <div
          className={`left-[5px] top-[65px] absolute text-[13px] font-['NanumSquareNeoOTF-Bold'] text-center  ${
            menuTitle === '운영지표' ? 'text-[#00A8A3] ' : 'text-[#5B5B5B] '
          }`}
        >
          실시간
          <br />
          운영 지표
        </div>
      </div>

      {/* 검색 */}
      <div
        className={`w-[65px] h-[120px] top-[120px] cursor-pointer absolute hover:bg-[#CCEEED] ${
          menuTitle === '검색' ? 'bg-[#CCEEED]' : ''
        }`}
        onClick={() => handleSetActiveMenu('검색')}
      >
        <IoSearchSharp className="left-[16px] top-[24px] absolute w-[30px] h-[30px] opacity-60" />
        <div
          className={`left-[20px] top-[75px] absolute text-[13px] font-['NanumSquareNeoOTF-Bold'] text-center ${
            menuTitle === '검색' ? 'text-[#00A8A3] ' : 'text-[#5B5B5B] '
          }`}
        >
          검색
        </div>
      </div>

      {/* 혼잡도 */}
      <div
        className={`w-[65px] h-[120px] top-[240px] cursor-pointer absolute hover:bg-[#CCEEED] ${
          menuTitle === '혼잡도' ? 'bg-[#CCEEED]' : ''
        }`}
        onClick={() => handleSetActiveMenu('혼잡도')}
      >
        <img
          src={
            menuTitle === '혼잡도'
              ? 'left-side-bar/jam_selected_icon.svg'
              : 'left-side-bar/jam_icon.svg'
          }
          className="left-[18px] top-[18px] absolute w-[30px] h-[30px]"
          alt="Jam Icon"
        />
        <div
          className={`left-[15px] top-[65px] absolute text-[13px] font-['NanumSquareNeoOTF-Bold'] text-center ${
            menuTitle === '혼잡도' ? 'text-[#00A8A3] ' : 'text-[#5B5B5B] '
          }`}
        >
          외래
          <br />
          혼잡도
        </div>
      </div>

      {/* 이송현황 */}
      <div
        className={`w-[65px] h-[120px] top-[360px] cursor-pointer absolute hover:bg-[#CCEEED] ${
          menuTitle === '이송현황' ? 'bg-[#CCEEED]' : ''
        }`}
        onClick={() => handleSetActiveMenu('이송현황')}
      >
        <img
          src={
            menuTitle === '이송현황'
              ? 'left-side-bar/transfer_selected_icon.svg'
              : 'left-side-bar/transfer_icon.svg'
          }
          className="left-[18px] top-[24px] absolute w-[30px] h-[30px]"
          alt="Transfer Icon"
        />
        <div
          className={`left-[8px] top-[80px] absolute text-[13px] font-['NanumSquareNeoOTF-Bold'] ${
            menuTitle === '이송현황' ? 'text-[#00A8A3] ' : 'text-[#5B5B5B] '
          }`}
        >
          이송 현황
        </div>
      </div>

      {/* 화면저장 */}
      <div
        className="w-[65px] h-[120px] top-[480px] absolute cursor-pointer hover:bg-[#CCEEED]"
        onClick={() => saveAsImageHandler()}
      >
        <img
          src="left-side-bar/download_icon.svg"
          className="left-[18px] top-[24px] absolute w-[30px] h-[30px]"
          alt="Download Icon"
        />
        <div className="left-[9px] top-[80px] absolute text-[#5B5B5B] text-[13px] font-['NanumSquareNeoOTF-Bold']">
          화면저장
        </div>
      </div>
    </div>
  )
}

export default LeftSideBars
