import { CameraControls } from '@react-three/drei'
import React, { useEffect, useRef } from 'react'

import { floorInfo, cameraInfo } from '../../store'

const HallymCameraControl = () => {
  const cameraControlsRef = useRef()
  const { floor } = floorInfo((state) => state)
  const { cameraPosition, cameraTarget, cameraMove, setCameraMove } =
    cameraInfo()

  useEffect(() => {
    if (cameraControlsRef.current) {
      const camera = cameraControlsRef.current
      camera.setLookAt(0, 60, 40, 0, 0, 10)

      if (floor === '실외') {
        camera.setLookAt(-110, 50, 0, 0, 0, 0)
      } else if (floor === '외래') {
        camera.setLookAt(0, 80, 40, 0, 0, 0)
      } else if (
        floor === '4F' ||
        floor === '5F' ||
        floor === '6F' ||
        floor === '7F' ||
        floor === '8F' ||
        floor === '9F' ||
        floor === '10F' ||
        floor === '11F' ||
        floor === '12F' ||
        floor === '13F' ||
        floor === '14F'
      ) {
        camera.setLookAt(-10, 40, -10, 0, 0, -10)
      }

      if (cameraMove) {
        camera.setLookAt(
          cameraPosition[0],
          cameraPosition[1],
          cameraPosition[2],
          cameraTarget[0],
          cameraTarget[1],
          cameraTarget[2]
        )
        setCameraMove(false)
      }
    }
  }, [floor, cameraPosition])

  return (
    <>
      <CameraControls
        ref={cameraControlsRef}
        verticalDragToForward
        dollySpeed={0.5}
        minPolarAngle={-Math.PI / 4}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  )
}

export default HallymCameraControl
