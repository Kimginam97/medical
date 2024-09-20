import { Html } from '@react-three/drei'
import React from 'react'

const Poi = ({ visible }) => {
  return (
    <>
      {visible && (
        <>
          <Html position={[-9, -1, 0]}>
            <div className="w-[36px] h-[36px] absolute">
              <img src="vector_warning_poi.svg" />
            </div>
          </Html>
          <Html position={[-9, -1, 4]}>
            <div className="w-[36px] h-[36px] absolute">
              <img src="vector_normal_poi.svg" />
            </div>
          </Html>
          <Html position={[10, -1, -15]}>
            <div className="w-[36px] h-[36px] absolute">
              <img src="vector_danger_poi.svg" />
            </div>
          </Html>
        </>
      )}
    </>
  )
}

export default Poi
