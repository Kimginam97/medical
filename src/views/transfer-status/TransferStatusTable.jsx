import React, { useState } from 'react'

const TransferStatusTable = () => {
  const headers = [
    { label: '이송 단계', className: 'w-[63px]' },
    { label: '환자 명', className: 'w-[76px]' },
    { label: '대기시간', className: 'w-[77px]' },
    { label: '비고', className: 'w-[70px]' },
    { label: '위치', className: 'w-[50px]' },
  ]

  const data = {
    이송배정: [
      { name: '홍길동', time: 78, status: '응급' },
      { name: '김철수', time: 69, status: '' },
      { name: '가나다', time: 55, status: '' },
    ],
    이송수락: [
      { name: '김현아', time: 82, status: '응급' },
      { name: '서영일', time: 70, status: '' },
      { name: '김주희', time: 0, status: '' },
    ],
    이송시작: [
      { name: '나다라', time: 72, status: '' },
      { name: '마바사', time: 64, status: '' },
      { name: '나다라', time: 72, status: '' },
      { name: '마바사', time: 64, status: '' },
      { name: '나다라', time: 72, status: '' },
    ],
  }

  const [selectedRow, setSelectedRow] = useState(null)

  const handleRowClick = (dept, idx) => {
    setSelectedRow({ dept, idx })
  }

  const getMoveIcon = (dept, idx, status) => {
    const isSelected =
      selectedRow && selectedRow.dept === dept && selectedRow.idx === idx

    if (status === '응급') {
      return (
        <img
          src={`transfer-status/${
            isSelected ? 'move_danger_select_btn.svg' : 'move_danger_btn.svg'
          }`}
          alt="Move Danger"
          className="w-[19px] h-[19px] relative left-3 cursor-pointer"
        />
      )
    } else if (status === '') {
      return (
        <img
          src={`transfer-status/${
            isSelected ? 'move_normal_select_btn.svg' : 'move_normal_btn.svg'
          }`}
          alt="Move Normal"
          className="w-[19px] h-[19px] relative left-3 cursor-pointer"
        />
      )
    }
    return null
  }

  return (
    <>
      <div className="w-[346px] left-[30px] top-[110px] relative ">
        <div className="w-[221px] h-[15px] left-[60px] top-[28px] relative">
          <div className="w-[15px] h-[0px] left-[10px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[80px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[165px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
          <div className="w-[15px] h-[0px] left-[225px] top-0 absolute origin-top-left rotate-90 border-[0.5px] border-[#5B5B5B]"></div>
        </div>
        <div className="max-h-65vh overflow-auto">
          <table className="w-full bg-gray-200">
            <thead>
              <tr className="text-[#333333] text-center text-sm font-['NanumSquareNeoOTF-Regular'] h-[40px]">
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
                  {data[dept].map((row, idx) => {
                    const isSelected =
                      selectedRow &&
                      selectedRow.dept === dept &&
                      selectedRow.idx === idx
                    return (
                      <tr
                        key={idx}
                        className={`text-[#333333] text-center text-xs font-['NanumSquareNeoOTF-Regular'] cursor-pointer ${
                          dept === '이송배정' || dept === '이송시작'
                            ? 'bg-white'
                            : ''
                        }`}
                        style={{ height: '40px' }} // 높이 설정 예시
                        onClick={() => handleRowClick(dept, idx)}
                      >
                        {idx === 0 && (
                          <td rowSpan={data[dept].length}>{dept}</td>
                        )}
                        <td
                          className={`w-[85px] ${
                            isSelected ? 'bg-[#E6F7F6]' : ''
                          }`}
                        >
                          {row.name}
                        </td>
                        <td
                          className={`w-[77px] ${
                            isSelected ? 'bg-[#E6F7F6]' : ''
                          }`}
                        >
                          {row.time}
                        </td>
                        <td
                          className={`w-[70px] ${
                            isSelected ? 'bg-[#E6F7F6]' : ''
                          } ${
                            row.status === '응급'
                              ? 'text-red-600'
                              : 'text-white'
                          } font-bold`}
                        >
                          {row.status}
                        </td>
                        <td
                          className={`w-[50px] ${
                            isSelected ? 'bg-[#E6F7F6]' : ''
                          }`}
                        >
                          {getMoveIcon(dept, idx, row.status)}
                        </td>
                      </tr>
                    )
                  })}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default TransferStatusTable
