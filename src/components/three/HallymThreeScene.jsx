import { Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { B01B01 } from '../models/B01B01'
import HallymCameraControl from './HallymCameraControl'
import Loader from './Loader'
import { F01F01 } from '../models/F01F01'
import { F02F02 } from '../models/F02F02'
import { F03F03 } from '../models/F03F03'
import { F04F04 } from '../models/F04F04'
import { F05F05 } from '../models/F05F05'
import { F06F06 } from '../models/F06F06'
import { F07F07 } from '../models/F07F07'
import { F08F08 } from '../models/F08F08'
import { F09F09 } from '../models/F09F09'
import { F10F10 } from '../models/F10F10'
import { F11F11 } from '../models/F11F11'
import { F12F12 } from '../models/F12F12'
import { F13F13 } from '../models/F13F13'
import { F14F14 } from '../models/F14F14'
import { HanlimLight } from '../models/HanlimLight'
import { floorInfo } from '../../store'
import Poi from './Poi'

const HallymThreeScene = () => {
  const { floor } = floorInfo((state) => state)
  const canvasRef = useRef()
  return (
    <>
      <Canvas
        ref={canvasRef}
        gl={{
          logarithmicDepthBuffer: true,
          antialias: false,
          preserveDrawingBuffer: true,
        }}
      >
        <Suspense fallback={<Loader />}>
          <Stage preset="rembrandt" intensity={0.9} environment="city">
            {floor === '14F' && <F14F14 position={[-20, -37, 0]} />}
            {floor === '13F' && (
              <F13F13 position={[-20, -33, 0]} rmVisible={false} />
            )}
            {floor === '12F' && <F12F12 position={[-20, -29, 0]} />}
            {floor === '11F' && <F11F11 position={[-20, -25, 0]} />}
            {floor === '10F' && <F10F10 position={[-20, -21, 0]} />}
            {floor === '9F' && <F09F09 position={[-20, -17, 0]} />}
            {floor === '8F' && <F08F08 position={[-20, -13, 0]} />}
            {floor === '7F' && <F07F07 position={[-20, -9, 0]} />}
            {floor === '6F' && <F06F06 position={[-20, -5, 0]} />}
            {floor === '5F' && <F05F05 position={[-20, -1, 0]} />}
            {floor === '4F' && <F04F04 position={[-20, 3, 0]} />}
            {floor === '3F' && <F03F03 position={[-10, 7, 0]} />}
            {floor === '2F' && (
              <F02F02 position={[-10, 11, 0]} rmVisible={false} />
            )}
            {floor === '1F' && (
              <F01F01 position={[-10, 15, 0]} rmVisible={false} />
            )}
            {floor === 'B1' && <B01B01 position={[0, 19, 0]} />}
            {floor === '외래' && (
              <>
                <F01F01 position={[-85, 10, 0]} />
                <F02F02 position={[0, 15, 0]} />
                <F13F13 position={[40, -20, 0]} />
              </>
            )}
            {floor === '실외' && <HanlimLight position={[0, 20, 0]} />}
          </Stage>
          <HallymCameraControl />
        </Suspense>
        {/* <axesHelper args={[100]} /> */}
        {/* <gridHelper args={[100]} /> */}
        <Poi visible={floor === '13F'} />
      </Canvas>
    </>
  )
}

export default HallymThreeScene
