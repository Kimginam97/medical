const geoCoords = {
  topLeft: { lat: 37.39178138, lon: 126.96119163 },
  bottomLeft: { lat: 37.39112873, lon: 126.96155088 },
  topRight: { lat: 37.3920832, lon: 126.96206136 },
  bottomRight: { lat: 37.39145426, lon: 126.96247592 },
}

const targetCoords = {
  topLeft: { x: -28.189, y: 48.349 },
  bottomLeft: { x: 51.646, y: 48.333 },
  topRight: { x: -27.566, y: -35.594 },
  bottomRight: { x: 50.706, y: -41.138 },
}
// 좌표 변환을 위한 선형 변환 행렬을 계산하는 함수
function calculateTransformMatrix(geoCoords, targetCoords) {
  const A = [
    [
      geoCoords.topLeft.lon,
      geoCoords.topLeft.lat,
      1,
      0,
      0,
      0,
      geoCoords.topLeft.lon * geoCoords.topLeft.lat,
      0,
    ],
    [
      0,
      0,
      0,
      geoCoords.topLeft.lon,
      geoCoords.topLeft.lat,
      1,
      0,
      geoCoords.topLeft.lon * geoCoords.topLeft.lat,
    ],
    [
      geoCoords.bottomLeft.lon,
      geoCoords.bottomLeft.lat,
      1,
      0,
      0,
      0,
      geoCoords.bottomLeft.lon * geoCoords.bottomLeft.lat,
      0,
    ],
    [
      0,
      0,
      0,
      geoCoords.bottomLeft.lon,
      geoCoords.bottomLeft.lat,
      1,
      0,
      geoCoords.bottomLeft.lon * geoCoords.bottomLeft.lat,
    ],
    [
      geoCoords.topRight.lon,
      geoCoords.topRight.lat,
      1,
      0,
      0,
      0,
      geoCoords.topRight.lon * geoCoords.topRight.lat,
      0,
    ],
    [
      0,
      0,
      0,
      geoCoords.topRight.lon,
      geoCoords.topRight.lat,
      1,
      0,
      geoCoords.topRight.lon * geoCoords.topRight.lat,
    ],
    [
      geoCoords.bottomRight.lon,
      geoCoords.bottomRight.lat,
      1,
      0,
      0,
      0,
      geoCoords.bottomRight.lon * geoCoords.bottomRight.lat,
      0,
    ],
    [
      0,
      0,
      0,
      geoCoords.bottomRight.lon,
      geoCoords.bottomRight.lat,
      1,
      0,
      geoCoords.bottomRight.lon * geoCoords.bottomRight.lat,
    ],
  ]

  const B = [
    targetCoords.topLeft.x,
    targetCoords.topLeft.y,
    targetCoords.bottomLeft.x,
    targetCoords.bottomLeft.y,
    targetCoords.topRight.x,
    targetCoords.topRight.y,
    targetCoords.bottomRight.x,
    targetCoords.bottomRight.y,
  ]

  // A의 역행렬을 계산합니다
  const A_inv = numeric.inv(A)

  // 변환 행렬 T를 계산합니다
  const T = numeric.dot(A_inv, B)

  return {
    a: T[0],
    b: T[1],
    c: T[2],
    d: T[3],
    e: T[4],
    f: T[5],
    g: T[6],
    h: T[7],
  }
}

// 변환 행렬을 계산합니다
const transformMatrix = calculateTransformMatrix(geoCoords, targetCoords)

export default transformMatrix

export function transformCoordinates(lat, lon, matrix) {
  const x = matrix.a * lon + matrix.b * lat + matrix.c + matrix.g * lon * lat
  const y = matrix.d * lon + matrix.e * lat + matrix.f + matrix.h * lon * lat
  return { x, y }
}
