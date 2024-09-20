import React, { useState } from 'react';
import { IoCloseCircleOutline } from 'react-icons/io5';
import { cameraInfo, searchInfo, floorInfo } from '../store';
import searchResults from '../data/searchResults.json'

const SearchComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const { setFloor } = floorInfo();
  const { setCameraPosition, setCameraTarget, setCameraMove } = cameraInfo();
  const { showSearch, setShowSearch } = searchInfo();


  // 검색어에 따라 결과를 필터링합니다.
  const filteredResults = searchResults.filter(result =>
    result.department.includes(searchTerm) || result.location.includes(searchTerm)
  );

  const handleSearch = () => {
    setShowSearch(true);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleClose = () => {
    setShowSearch(false);
    setSearchTerm('');
  };

  const handleResultClick = (result) => {
    setFloor({ floor: result.floor });
    setCameraPosition([
      result.position[0],
      result.position[1]+18,
      result.position[2]+15,
    ]);
    setCameraTarget([
      result.position[0],
      result.position[1],
      result.position[2],
    ]);
    setCameraMove(true);
  };

  return (
    <>
      <div className="w-[336px] h-[40px] left-[25px] top-[20px] absolute z-10">
        <div
          className="w-[336px] h-[40px] left-0 top-0 absolute bg-white rounded-[40px] shadow border-2 border-gray-200"
          style={{
            boxShadow: '3px 4px 9.1px 0px rgba(0, 0, 0, 0.25)',
          }}
        />
        <img
          className="w-10 h-[19.08px] left-[15px] top-[10px] absolute"
          src="hallym_logo_mint.svg"
          alt="Hallym Logo"
        />
        <div className="left-[80px] top-[6px] absolute">
          <input
            type="text"
            className="bg-transparent w-[180px] text-center text-[#909090] font-['NanumSquareNeoOTF-Regular'] text-[15px] "
            placeholder="검색어를 입력하세요"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={handleKeyPress}
          />
        </div>
        <button
          className={`cursor-pointer w-[26px] h-[26px] top-[7px] absolute transition-all duration-300 ${
            showSearch ? 'left-[265px]' : 'left-[285px]'
          }`}
          onClick={handleSearch}
        >
          <img
            className="w-[26px] h-[26px]"
            src="search_btn.png"
            alt="Search Button"
          />
        </button>
        {showSearch && (
          <button
            className="cursor-pointer w-[26px] h-[26px] left-[296px] top-[3px] absolute"
            onClick={handleClose}
          >
            <IoCloseCircleOutline className="w-[34px] h-[34px] text-gray-500" />
          </button>
        )}
      </div>

      {showSearch && filteredResults.length > 0 && (
        <div className={`w-[393px] h-screen overflow-auto bg-white shadow absolute`}>
          {/* 검색 건수 */}
          <div className="text-center relative top-[80px]">
            <span className="text-[#333333] text-xl font-['NanumSquareNeoOTF-Regular']">
              검색결과
            </span>
            <span className="text-[#00A8A3] text-2xl font-['NanumSquareNeoOTF-Bold']">
              {filteredResults.length}
            </span>
            <span className="text-[#333333] text-xl font-['NanumSquareNeoOTF-Regular']">
              건
            </span>
          </div>
          {/* 검색결과 리스트 */}
          <div className="relative top-[90px]">
            {filteredResults.map((result) => (
              <div
                key={result.id}
                className="flex w-[336px] h-[93px] ml-6 bg-white rounded-3xl m-6 shadow border-2 border-gray-200 cursor-pointer"
                onClick={() => handleResultClick(result)}
              >
                <img
                  src="search_poi.svg"
                  className="w-[36px] h-[49px] top-[20px] left-[50px] relative"
                  alt="search_poi Icon"
                />

                <div className="w-[180px] h-11 left-[100px] top-6 relative">
                  <div className="left-0 top-0 absolute text-center text-[#333333] text-lg font-['NanumSquareNeoOTF-Bold']">
                    {result.department}
                  </div>
                  <div className="left-[1px] top-[27px] absolute text-center text-[#333333] text-xs font-['NanumSquareNeoOTF-Regular']">
                    {result.location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchComponent;
