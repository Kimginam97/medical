import React, { useState } from 'react'

const OutpatientCongestionTable = () => {
  const headers = [
    { label: '진료과', className: 'w-[63px]' },
    { label: '의사 명', className: 'w-[76px]' },
    {
      label: (
        <>
          평균
          <br />
          소요시간
        </>
      ),
      className: 'w-[77px] text-[11px] leading-[13px]',
    },
    { label: '혼잡도', className: 'w-[70px]' },
    { label: '이동', className: 'w-[50px]' },
  ]

  const data = {
    '류마티스 내과': [
      { name: '이현우', time: 2.5, status: '중' },
      { name: '정하영', time: 3.0, status: '중' },
      { name: '박민지', time: -1.0, status: '하' },
    ],
    호흡기내과: [
      { name: '김현아', time: -2.0, status: '하' },
      { name: '서영일', time: 0.0, status: '하' },
      { name: '김주희', time: 6.2, status: '중' },
      { name: '김환일', time: 6.8, status: '중' },
      { name: '황용일', time: 7.9, status: '중' },
      { name: '박지영', time: 5.9, status: '중' },
      { name: '장승훈', time: 11.5, status: '중' },
      { name: '최광용', time: 6.2, status: '중' },
      { name: '정기석', time: -0.4, status: '하' },
      { name: '박성훈', time: -1.0, status: '하' },
    ],
  }

  const [selectedRow, setSelectedRow] = useState(null)

  const handleRowClick = (dept, idx) => {
    setSelectedRow({ dept, idx })
  }

  const getMoveIcon = (dept, idx, status) => {
    const isSelected =
      selectedRow && selectedRow.dept === dept && selectedRow.idx === idx

    if (status === '하') {
      return (
        <img
          src={`outpatient-congestion/${
            isSelected ? 'move_normal_select_btn.svg' : 'move_normal_btn.svg'
          }`}
          alt="Move Normal"
          className="w-[19px] h-[19px] relative left-3 cursor-pointer"
        />
      )
    } else if (status === '중') {
      return (
        <img
          src={`outpatient-congestion/${
            isSelected ? 'move_warning_select_btn.svg' : 'move_warning_btn.svg'
          }`}
          alt="Move Warning"
          className="w-[19px] h-[19px] relative left-3 cursor-pointer"
        />
      )
    }
    return null
  }

  return (
    <>
      {/* 외래혼잡도 테이블 */}
      <div className="w-[346px] left-[24px] top-[120px] relative">
        <div className="w-[221px] h-[15px] left-[65px] top-[8px] absolute">
          <div className="w-[15px] h-[0px] left-0 top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[80px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[160px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[230px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
        </div>
        <table className="w-full h-full">
          <thead className="bg-gray-200">
            <tr className="text-[#333333] text-sm font-['NanumSquareNeoOTF-Regular']">
              {headers.map((header, index) => (
                <th key={index} className={header.className}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {Object.keys(data).map((dept, deptIndex) => (
              <React.Fragment key={deptIndex}>
                {data[dept].map((row, idx) => (
                  <tr
                    key={idx}
                    className={`text-[#333333] text-center rounded-[20px] text-xs font-['NanumSquareNeoOTF-Regular'] cursor-pointer ${
                      dept === '류마티스 내과' ? 'bg-white' : 'bg-gray-100'
                    }`}
                    style={{ height: '40px' }}
                    onClick={() => handleRowClick(dept, idx)}
                  >
                    {idx === 0 && <td rowSpan={data[dept].length}>{dept}</td>}
                    <td
                      className={`w-[85px] text-center ${
                        selectedRow &&
                        selectedRow.dept === dept &&
                        selectedRow.idx === idx
                          ? 'bg-[#E6F7F6]'
                          : ''
                      }`}
                    >
                      {row.name}
                    </td>
                    <td
                      className={`w-[77px] text-center ${
                        selectedRow &&
                        selectedRow.dept === dept &&
                        selectedRow.idx === idx
                          ? 'bg-[#E6F7F6]'
                          : ''
                      }`}
                    >
                      {row.time}
                    </td>
                    <td
                      className={`w-[70px] text-center text-sm ${
                        selectedRow &&
                        selectedRow.dept === dept &&
                        selectedRow.idx === idx
                          ? 'bg-[#E6F7F6]'
                          : ''
                      } ${
                        row.status === '하'
                          ? 'text-cyan-300'
                          : 'text-yellow-400'
                      } font-bold`}
                    >
                      {row.status}
                    </td>
                    <td
                      className={`w-[50px] ${
                        selectedRow &&
                        selectedRow.dept === dept &&
                        selectedRow.idx === idx
                          ? 'bg-[#E6F7F6]'
                          : ''
                      }`}
                    >
                      {getMoveIcon(dept, idx, row.status)}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OutpatientCongestionTable
