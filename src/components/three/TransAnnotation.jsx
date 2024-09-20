import { Html } from '@react-three/drei'
import { floorInfo, labelInfo } from '../../store'
import { useState } from 'react'
import { useFrame } from '@react-three/fiber'
import transformMatrix, {
  transformCoordinates,
} from '../../utils/transformation'

export default function TransAnnotation({ label, kind, floor, height }) {
  const { floor: currentFloor } = floorInfo((state) => state)
  const { labelVisual } = labelInfo((state) => state)
  const [cameraHeight, setCameraHeight] = useState(0)

  // Use useFrame to update the camera height
  useFrame(({ camera }) => {
    setCameraHeight(camera.position.y)
  })

  const renderAnnotations = (features, heightFilter) => {
    return features.filter(heightFilter).map((o, index) => {
      const annotationName =
        cameraHeight < 20 ? o?.properties.NAME : o?.properties.kind
      const coordinates = o?.geometry.coordinates
      const transformedCoord = transformCoordinates(
        coordinates[1],
        coordinates[0],
        transformMatrix
      )
      const [x, y, z] = [transformedCoord.x, height, transformedCoord.y]

      const annotationStyle = {
        display:
          (labelVisual && floor === currentFloor) ||
          (labelVisual && currentFloor === '외래') ||
          (labelVisual && currentFloor === '실외')
            ? 'block'
            : 'none',
      }

      return (
        <Html
          key={`${o.properties.FOREIGNKEY}-${index}`}
          position={[x, y, z]}
          className="bottom-0"
          style={annotationStyle}
        >
          <div className="flex flex-col-reverse">
            <div className="w-1 h-30 bg-[#5B5B5B] mr-2 rounded-lg">|</div>
            <div
              className="absolute bottom-4 w-max text-left bg-[#333333] text-xs font-['NanumSquareNeoOTF-Regular'] text-gray-300 p-2 rounded-md"
              style={{
                clipPath:
                  'polygon(0% 0%, 100% 0%, 90% 50%, 100% 100%, 0% 100%)',
              }}
            >
              {annotationName}
            </div>
          </div>
        </Html>
      )
    })
  }

  const lowerHeightFilter = (o) =>
    o.properties.FOREIGNKEY.includes('MDRM') ||
    o.properties.FOREIGNKEY.includes('BSRM') ||
    o.properties.FOREIGNKEY.includes('MVRM') ||
    o.properties.FOREIGNKEY.includes('CVRM')

  const higherHeightFilter = (o) =>
    o.properties.kind?.trim() !== ''

  return (
    <>
      {cameraHeight < 20
        ? renderAnnotations(label.features, lowerHeightFilter)
        : renderAnnotations(kind.features, higherHeightFilter)}
    </>
  )
}
