import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { useMemo } from 'react'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F02F02.json'
import kind from '../../assets/F02F02_KIND.json'

const url = './models/F02F02.glb'

const rmData = [
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100001',
    position: [-19.877, 9.55, -39.046],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100001',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100002',
    position: [-2.888, 9.55, 15.984],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100002',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100003',
    position: [31.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100003',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100004',
    position: [-14.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100004',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100005',
    position: [-22.982, 9.55, -39.046],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100005',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100006',
    position: [-10.94, 9.55, -38.958],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100006',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100007',
    position: [-7.915, 9.55, -38.958],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100007',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100008',
    position: [-17.804, 9.55, 6.058],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100008',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100009',
    position: [-2.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100009',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100010',
    position: [49.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100010',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100011',
    position: [21.916, 9.55, -0.918],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100011',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100012',
    position: [-26.095, 9.55, -38.308],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100012',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100013',
    position: [-23.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100013',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100014',
    position: [22.422, 9.55, -38.054],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100014',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100015',
    position: [-26.147, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100015',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100016',
    position: [22.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100016',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100017',
    position: [-5.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100017',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100018',
    position: [-11.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100018',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100019',
    position: [52.84, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100019',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100020',
    position: [1.07, 9.55, -38.582],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100020',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100021',
    position: [31.86, 9.55, -40.045],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100021',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100022',
    position: [19.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100022',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100023',
    position: [-0.84, 9.55, -31.793],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100023',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100024',
    position: [40.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100024',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100025',
    position: [-25.469, 9.55, 12.607],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100025',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100026',
    position: [-17.181, 9.55, 45.817],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100026',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100027',
    position: [43.96, 9.55, 45.812],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100027',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100028',
    position: [10.719, 9.55, 38.295],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100028',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100029',
    position: [16.085, 9.55, 12.532],
    useData: {
      name: 'M_SUNGSIM0001F02F02_BSRM_0100029',
    },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100030',
    position: [22.422, 9.55, -42.507],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100030' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100031',
    position: [34.96, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100031' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100032',
    position: [37.96, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100032' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100033',
    position: [22.56, 9.55, 12.533],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100033' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100034',
    position: [-4.965, 9.55, -38.158],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100034' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100035',
    position: [28.96, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100035' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100036',
    position: [6.035, 9.55, -38.582],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100036' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100037',
    position: [3.065, 9.55, -38.582],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100037' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100038',
    position: [15.86, 9.55, -1.434],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100038' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100039',
    position: [37.96, 9.55, 34.262],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100039' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100040',
    position: [0.95, 9.55, 20.888],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100040' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100041',
    position: [-14.19, 9.55, -38.158],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100041' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100042',
    position: [25.885, 9.55, -0.918],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100042' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100043',
    position: [4.45, 9.55, 7.139],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100043' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100044',
    position: [29.935, 9.55, -0.918],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100044' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100045',
    position: [-8.181, 9.55, 45.817],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100045' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100046',
    position: [0.95, 9.55, 16.263],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100046' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100047',
    position: [18.67, 9.55, -0.443],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100047' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100048',
    position: [-1.815, 9.55, -38.582],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100048' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100049',
    position: [-23.919, 9.55, 6.058],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100049' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100050',
    position: [-20.181, 9.55, 45.817],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100050' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100051',
    position: [25.955, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100051' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100052',
    position: [0.95, 9.55, 12.832],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100052' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100053',
    position: [-5.37, 9.55, 21.323],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100053' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100054',
    position: [22.233, 9.55, -17.268],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100054' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100055',
    position: [46.96, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100055' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100056',
    position: [31.86, 9.55, -43.357],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100056' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100057',
    position: [52.61, 9.55, -33.605],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100057' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100058',
    position: [8.1, 9.55, -32.059],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100058' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100059',
    position: [15.885, 9.55, -16.518],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100059' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100060',
    position: [52.089, 9.55, -23.532],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100060' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100061',
    position: [0.95, 9.55, 7.758],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100061' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100062',
    position: [-2.888, 9.55, 12.54],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100062' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100063',
    position: [13.675, 9.55, 38.295],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100063' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100064',
    position: [-2.888, 9.55, 20.759],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100064' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100065',
    position: [-26.095, 9.55, -33.414],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100065' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100066',
    position: [-25.469, 9.55, 9.333],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100066' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100067',
    position: [3.885, 9.55, 21.697],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100067' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100068',
    position: [52.09, 9.55, -30.143],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100068' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100069',
    position: [37.82, 9.55, -29.718],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100069' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100070',
    position: [-24.595, 9.55, 22.38],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100070' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100071',
    position: [8.1, 9.55, -35.011],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100071' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100072',
    position: [19.083, 9.55, -17.268],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100072' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100073',
    position: [-8.34, 9.55, 21.322],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100073' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100074',
    position: [-2.888, 9.55, 9.409],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100074' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100075',
    position: [33.185, 9.55, -32.793],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100075' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100076',
    position: [-25.469, 9.55, 19.213],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100076' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100077',
    position: [52.089, 9.55, -26.855],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100077' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100078',
    position: [6.735, 9.55, 21.697],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100078' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100079',
    position: [22.422, 9.55, -33.603],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100079' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100080',
    position: [19.535, 9.55, 12.532],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100080' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0100081',
    position: [-25.469, 9.55, 15.86],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0100081' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0200001',
    position: [39.46, 9.55, -41.643],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0200002',
    position: [39.279, 9.55, -23.406],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0300001',
    position: [42.595, 9.55, 9.787],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0300002',
    position: [40.96, 9.55, 34.262],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0300002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400001',
    position: [-14.19, 9.55, -33.169],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400002',
    position: [-8.04, 9.55, -23.643],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400003',
    position: [-4.84, 9.55, -23.643],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400004',
    position: [-26.117, 9.55, -23.93],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400005',
    position: [-14.19, 9.55, -30.134],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400006',
    position: [37.82, 9.55, -26.499],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400007',
    position: [52.61, 9.55, -38.305],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400008',
    position: [15.885, 9.55, -11.893],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400009',
    position: [16.26, 9.55, 6.332],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400010',
    position: [-5.678, 9.55, -29.268],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400011',
    position: [25.635, 9.55, 12.533],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400012',
    position: [-4.965, 9.55, -32.935],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400013',
    position: [-8.19, 9.55, -31.32],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400014',
    position: [29.035, 9.55, 12.533],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0400015',
    position: [28.647, 9.55, 6.332],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0400015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0500001',
    position: [15.91, 9.55, -24.54],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0500001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0500002',
    position: [37.96, 9.55, 25.655],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0500002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600001',
    position: [-0.84, 9.55, -25.893],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600002',
    position: [-21.594, 9.55, -0.467],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600003',
    position: [22.785, 9.55, -27.13],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600004',
    position: [30.36, 9.55, 24.122],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600005',
    position: [0.818, 9.55, 39.569],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600006',
    position: [37.325, 9.55, 6.322],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600007',
    position: [7.051, 9.55, 46.9],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600008',
    position: [49.73, 9.55, 9.332],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600009',
    position: [4.069, 9.55, 46.9],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600010',
    position: [-20.24, 9.55, -8.743],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600011',
    position: [40.836, 9.55, -2.243],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600012',
    position: [33.185, 9.55, -36.768],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600013',
    position: [26.155, 9.55, -31.918],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600014',
    position: [33.185, 9.55, -34.743],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600015',
    position: [25.27, 9.55, 6.332],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600016',
    position: [45.643, 9.55, -2.243],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600016' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600017',
    position: [26.155, 9.55, -36.542],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600017' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600018',
    position: [0.813, 9.55, 46.06],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600018' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600019',
    position: [0.818, 9.55, 36.456],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600019' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600020',
    position: [28.615, 9.55, 13.577],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600020' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600021',
    position: [51.286, 9.55, 22.955],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600021' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600022',
    position: [16.99, 9.55, 39.835],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600022' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600023',
    position: [23.035, 9.55, 16.533],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600023' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600024',
    position: [4.41, 9.55, -24.393],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600024' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600025',
    position: [36.455, 9.55, 16.205],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600025' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600026',
    position: [43.835, 9.55, 24.122],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600026' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600027',
    position: [51.286, 9.55, 14.69],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600027' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600028',
    position: [22.422, 9.55, -29.637],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600028' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600029',
    position: [16.74, 9.55, 33.064],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600029' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600030',
    position: [26.155, 9.55, -26.43],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600030' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600031',
    position: [48.185, 9.55, -40.08],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600031' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600032',
    position: [-20.24, 9.55, -10.52],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600032' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600033',
    position: [16.99, 9.55, 36.507],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600033' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600034',
    position: [26.155, 9.55, -42.318],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600034' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600035',
    position: [52.624, 9.55, 9.332],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600035' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600036',
    position: [47.46, 9.55, -41.143],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600036' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600037',
    position: [22.66, 9.55, 24.122],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600037' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600038',
    position: [44.71, 9.55, 34.262],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600038' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600039',
    position: [26.155, 9.55, -29.143],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600039' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600040',
    position: [7.712, 9.55, 38.295],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600040' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600041',
    position: [20.897, 9.55, -24.139],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600041' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600042',
    position: [37.325, 9.55, 11.757],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600042' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600043',
    position: [52.61, 9.55, -42.968],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600043' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600044',
    position: [50.59, 9.55, 34.262],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600044' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0600045',
    position: [47.61, 9.55, -36.943],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0600045' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0800001',
    position: [-26.15, 9.55, 37.467],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0800001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_0800002',
    position: [-23.191, 9.55, 37.567],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_0800002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000001',
    position: [19.31, 9.55, -4.053],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000002',
    position: [15.86, 9.55, -4.053],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000003',
    position: [-2.181, 9.55, 33.649],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000004',
    position: [16.93, 9.55, 45.812],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000005',
    position: [-8.286, 9.55, 37.975],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000006',
    position: [-8.286, 9.55, 33.649],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1000007',
    position: [-17.007, 9.55, 33.992],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1000007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1200001',
    position: [26.155, 9.55, -23.539],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1200001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1200002',
    position: [-20.181, 9.55, 37.567],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1200002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1200003',
    position: [-5.184, 9.55, 33.649],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1200003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1600001',
    position: [-6.85, 9.55, 6.957],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1600001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1600002',
    position: [-2.265, 9.55, 6.297],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1600002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1600003',
    position: [26.36, 9.55, -16.393],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1600003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1600004',
    position: [-3.681, 9.55, 37.975],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1600004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1700001',
    position: [17.01, 9.55, 16.582],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1700001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1700002',
    position: [52.097, 9.55, -20.297],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1700002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1700003',
    position: [48.239, 9.55, -20.297],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1700003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1700004',
    position: [19.72, 9.55, 16.534],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1700004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1800001',
    position: [41.16, 9.55, 14.707],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1800001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1800002',
    position: [7.56, 9.55, 5.931],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1800002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1800003',
    position: [30.79, 9.55, -4.343],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1800003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_BSRM_1800004',
    position: [7.56, 9.55, 8.489],
    userData: { name: 'M_SUNGSIM0001F02F02_BSRM_1800004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVFC_0500001',
    position: [-14.87, 9.175, 5.809],
    userData: { name: 'M_SUNGSIM0001F02F02_CVFC_0500001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200001',
    position: [41.64, 9.55, 16.645],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200002',
    position: [28.64, 9.55, 29.732],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200003',
    position: [-25.449, 9.55, -20.263],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200004',
    position: [-22.705, 9.55, -15.908],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200005',
    position: [7.81, 9.55, -25.143],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200006',
    position: [-24.915, 9.55, -16.918],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200007',
    position: [-23.197, 9.55, 33.382],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200008',
    position: [7.81, 9.55, -22.643],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200009',
    position: [26.11, 9.55, 29.007],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200010',
    position: [39.59, 9.55, 16.644],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200011',
    position: [52.22, 9.55, -0.303],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200012',
    position: [-22.407, 9.55, -21.168],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200013',
    position: [23.305, 9.55, 29.72],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200014',
    position: [52.22, 9.55, -4.033],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200015',
    position: [-20.281, 9.55, 33.382],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0200016',
    position: [-26.064, 9.55, -21.638],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0200016' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0300001',
    position: [41.44, 9.55, 19.972],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0300002',
    position: [39.095, 9.55, 19.972],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0300002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400001',
    position: [31.505, 9.55, 5.607],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400002',
    position: [-17.64, 9.55, -30.134],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400003',
    position: [31.505, 9.55, 7.727],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400004',
    position: [44.11, 9.55, 14.994],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400005',
    position: [44.11, 9.55, 16.851],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400006',
    position: [-17.64, 9.55, -38.248],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400007',
    position: [16.26, 9.55, -34.193],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400008',
    position: [0.818, 9.55, 42.321],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400009',
    position: [15.035, 9.55, 9.282],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_CVRM_0400010',
    position: [-17.64, 9.55, -33.25],
    userData: { name: 'M_SUNGSIM0001F02F02_CVRM_0400010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900001',
    position: [10.572, 10.15, 22.732],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900002',
    position: [7.591, 9.55, 44.083],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900003',
    position: [10.509, 10.15, -41.457],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900004',
    position: [16.66, 9.55, -41.455],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900005',
    position: [32.035, 9.55, 34.957],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900006',
    position: [39.11, 10.15, -10.293],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900007',
    position: [-2.715, 9.55, -34.793],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900008',
    position: [43.51, 9.55, -36.093],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900009',
    position: [52.06, 10.15, -12.068],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900010',
    position: [31.26, 10.15, -15.843],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900011',
    position: [49.81, 9.55, -12.468],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900012',
    position: [44.285, 9.55, -32.58],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900013',
    position: [46.907, 10.15, -11.568],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900014',
    position: [37.71, 9.55, -2.243],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900015',
    position: [10.415, 10.15, -38.718],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900016',
    position: [-18.469, 9.55, -0.404],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900016' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900017',
    position: [39.685, 9.55, -32.593],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900017' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900018',
    position: [50.67, 9.55, -5.398],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900018' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900019',
    position: [16.635, 9.55, -37.218],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900019' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900020',
    position: [29.585, 9.55, -13.142],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900020' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900021',
    position: [30.51, 10.15, -16.943],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900021' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900022',
    position: [37.56, 9.55, -32.593],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900022' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900023',
    position: [-21.19, 9.55, 3.757],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900023' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900024',
    position: [31.31, 10.15, -10.467],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900024' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900025',
    position: [9.76, 10.15, -41.857],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900025' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900026',
    position: [46.907, 10.15, -17.38],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900026' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900027',
    position: [52.96, 10.15, -11.043],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900027' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900028',
    position: [9.76, 10.15, -43.018],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900028' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900029',
    position: [-17.007, 9.55, 31.682],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900029' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900030',
    position: [7.693, 9.55, 41.66],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900030' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_ETRM_9900031',
    position: [37.96, 9.55, 22.19],
    userData: { name: 'M_SUNGSIM0001F02F02_ETRM_9900031' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200001',
    position: [19.835, 9.55, 7.457],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200002',
    position: [10.757, 9.55, 34.017],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200003',
    position: [-9.89, 9.55, -29.244],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200004',
    position: [17.797, 9.55, -34.81],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200005',
    position: [3.435, 9.55, -31.393],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200006',
    position: [20.66, 9.55, -12.643],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200007',
    position: [11.81, 9.55, 16.182],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200008',
    position: [-7.451, 9.55, 13.982],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200009',
    position: [45.135, 9.55, 11.057],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200010',
    position: [34.81, 9.55, 36.702],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200011',
    position: [-14.148, 9.55, 36.992],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200012',
    position: [4.718, 9.55, 38.34],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200013',
    position: [46.86, 9.55, -28.658],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200014',
    position: [-24.594, 9.55, -10.497],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200015',
    position: [-21.844, 9.55, -29.372],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200016',
    position: [-19.315, 9.55, 14.186],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200016' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0200017',
    position: [32.905, 9.55, -33.32],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0200017' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300001',
    position: [35.405, 9.55, 11.705],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300002',
    position: [-14.09, 9.55, -28.055],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300003',
    position: [16.739, 9.55, 26.532],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300004',
    position: [35.24, 9.55, 19.563],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300005',
    position: [53.07, 9.55, 3.761],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300006',
    position: [-8.051, 9.55, 10.064],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300007',
    position: [44.36, 9.55, -27.339],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300008',
    position: [-26.791, 9.55, -8.668],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300008' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300009',
    position: [29.286, 9.55, -23.894],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300009' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300010',
    position: [7.317, 9.55, 10.491],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300010' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300011',
    position: [8.742, 9.55, 18.078],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300011' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300012',
    position: [16.14, 9.55, -8.693],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300012' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300013',
    position: [22.785, 9.55, 6.472],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300013' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300014',
    position: [22.95, 9.55, -11.236],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300014' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300015',
    position: [-18.44, 9.55, 22.28],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300015' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300016',
    position: [-17.006, 9.55, 37.617],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300016' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300017',
    position: [-23.031, 9.55, -23.905],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300017' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300018',
    position: [52.263, 9.55, 39.429],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300018' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300019',
    position: [-17.14, 9.55, -9.81],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300019' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300020',
    position: [0.919, 9.55, 33.23],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300020' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300021',
    position: [14.247, 9.55, 33.078],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300021' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300022',
    position: [32.398, 9.55, -30.207],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300022' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300023',
    position: [39.663, 9.55, 42.646],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300023' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300024',
    position: [7.01, 9.55, -29.468],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300024' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300025',
    position: [20.797, 9.55, -27.102],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300025' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300026',
    position: [15.86, 9.55, 0.443],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300026' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300027',
    position: [23.236, 9.55, 33.295],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300027' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300028',
    position: [15.91, 9.55, -31.109],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300028' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300029',
    position: [26.925, 9.55, 42.841],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300029' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300030',
    position: [25.43, 9.55, -4.528],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300030' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0300031',
    position: [-17.14, 9.55, -0.968],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0300031' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0400001',
    position: [28.86, 10.2, -10.467],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0700001',
    position: [53.06, 9.55, -9.181],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0700001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0800001',
    position: [49.47, 9.55, 0.472],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0800001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0800002',
    position: [25.46, 9.55, -11.768],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0800002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MDRM_0800003',
    position: [28.66, 9.55, 34.095],
    userData: { name: 'M_SUNGSIM0001F02F02_MDRM_0800003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100001',
    position: [13.96, 9.55, 27.457],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100002',
    position: [9.981, 10.15, 27.407],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100003',
    position: [33.331, 10.15, 32.99],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100004',
    position: [9.96, 10.15, -44.893],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100005',
    position: [-26.122, 10.15, 32.17],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100006',
    position: [-18.605, 10.15, -15.31],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0100007',
    position: [52.959, 10.15, -15.543],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0100007' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300001',
    position: [46.907, 10.15, -14.805],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300002',
    position: [37.86, 10.15, -14.743],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300003',
    position: [40.71, 10.15, -14.743],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300004',
    position: [49.785, 10.15, -16.943],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300005',
    position: [13.91, 10.15, -44.868],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0300006',
    position: [-19.053, 10.15, -15.293],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0300006' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700001',
    position: [27.31, 9.55, 9.282],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700001' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700002',
    position: [39.475, 9.55, -39.305],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700002' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700003',
    position: [29.54, 9.55, 12.582],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700003' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700004',
    position: [14.935, 9.55, -2.268],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700004' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700005',
    position: [13.11, 9.55, -39.918],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700005' },
  },
  {
    name: 'M_SUNGSIM0001F02F02_MVRM_0700006',
    position: [41.125, 9.55, -29.349],
    userData: { name: 'M_SUNGSIM0001F02F02_MVRM_0700006' },
  },
]

export function F02F02(props) {
  const { nodes, materials, scene } = useGLTF(url)
  const colors = ['#ff0000', '#ffa500', '#00ff00', '#ffff00'] // 빨간색, 주황색, 녹색, 노란색

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const material = useMemo(() => {
    return rmData.reduce((acc, mesh) => {
      acc[mesh.name] = new THREE.MeshStandardMaterial({
        color: getRandomColor(),
        transparent: true,
        opacity: 0.5,
      })
      return acc
    }, {})
  }, [])
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'2F'} height={8.5} />
      <group visible={props.rmVisible}>
        {rmData.map(({ name, position, useData }) => (
          <mesh
            key={name}
            name={name}
            castShadow
            receiveShadow
            geometry={nodes[name].geometry}
            material={material[name]}
            position={position}
            userData={{ useData }}
          />
        ))}
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0100001.geometry}
        material={materials.F00_FFFC_0100001}
        position={[32.206, 10.381, 20.543]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0100002.geometry}
        material={materials.F00_FFFC_0100001}
        position={[41.679, 10.381, -9.529]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0100003.geometry}
        material={materials.F00_FFFC_0100001}
        position={[-9.995, 10.381, 36.565]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200001.geometry}
        material={materials.F00_FFFC_0200001}
        position={[7.071, 8.564, 29.063]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200002.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-10.111, 8.564, 35.906]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200003.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-5.169, 8.564, 42.863]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200004.geometry}
        material={materials.F00_FFFC_0200001}
        position={[23.418, 8.564, -3.442]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200005.geometry}
        material={materials.F00_FFFC_0200001}
        position={[14.404, 8.564, 25.828]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200006.geometry}
        material={materials.F00_FFFC_0200001}
        position={[5.959, 8.564, 31.767]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200007.geometry}
        material={materials.F00_FFFC_0200001}
        position={[2.839, 8.564, 14.385]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200008.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-20.182, 8.564, 42.863]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200009.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-21.261, 8.564, 14.434]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200010.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-19.106, 8.564, -7.864]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200011.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-18.761, 8.564, -11.481]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200012.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-21.748, 8.564, -11.498]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200013.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-24.252, 8.564, 29.204]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200014.geometry}
        material={materials.F00_FFFC_0200001}
        position={[18.439, 8.564, -11.836]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200015.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-10.219, 8.564, 8.758]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200016.geometry}
        material={materials.F00_FFFC_0200001}
        position={[18.769, 8.564, 41.249]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200017.geometry}
        material={materials.F00_FFFC_0200001}
        position={[30.865, 8.564, -22.367]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200018.geometry}
        material={materials.F00_FFFC_0200001}
        position={[16.997, 8.564, -19.172]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200019.geometry}
        material={materials.F00_FFFC_0200001}
        position={[36.221, 8.564, -18.872]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200020.geometry}
        material={materials.F00_FFFC_0200001}
        position={[49.744, 8.564, -22.101]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200021.geometry}
        material={materials.F00_FFFC_0200001}
        position={[42.561, 8.564, -35.198]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200022.geometry}
        material={materials.F00_FFFC_0200001}
        position={[20.281, 8.564, -29.146]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200023.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-21.261, 8.564, -22.073]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200024.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-26.085, 8.564, -25.826]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200025.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-10.419, 8.564, -22.086]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200026.geometry}
        material={materials.F00_FFFC_0200001}
        position={[12.066, 8.564, -36.014]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200027.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-0.1, 8.564, -35.664]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200028.geometry}
        material={materials.F00_FFFC_0200001}
        position={[46.154, 8.564, -9.414]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200029.geometry}
        material={materials.F00_FFFC_0200001}
        position={[49.902, 8.564, 37.196]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200030.geometry}
        material={materials.F00_FFFC_0200001}
        position={[36.271, 8.564, 36.669]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200031.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-0.741, 8.564, 4.228]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200032.geometry}
        material={materials.F00_FFFC_0200001}
        position={[14.536, 8.564, 4.277]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200033.geometry}
        material={materials.F00_FFFC_0200001}
        position={[32.182, 8.564, 20.428]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200034.geometry}
        material={materials.F00_FFFC_0200001}
        position={[36.139, 8.564, 4.031]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200035.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-5.143, 8.564, 14.211]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200036.geometry}
        material={materials.F00_FFFC_0200001}
        position={[38.432, 8.564, 17.981]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0200037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0200037.geometry}
        material={materials.F00_FFFC_0200001}
        position={[32.599, 8.564, 8.964]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0200037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500001.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.566, 10.735, 31.183]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500002.geometry}
        material={materials.F00_FFFC_0500001}
        position={[51.295, 10.75, -13.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500003.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-24.369, 10.538, 29.75]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500004.geometry}
        material={materials.F00_FFFC_0500001}
        position={[17.81, 10.75, -20.419]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500005.geometry}
        material={materials.F00_FFFC_0500001}
        position={[38.135, 10.75, 18.533]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500006.geometry}
        material={materials.F00_FFFC_0500001}
        position={[34.186, 10.75, -21.987]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500007.geometry}
        material={materials.F00_FFFC_0500001}
        position={[14.545, 10.75, -28.531]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500008.geometry}
        material={materials.F00_FFFC_0500001}
        position={[13.442, 10.75, -36.128]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500009.geometry}
        material={materials.F00_FFFC_0500001}
        position={[42.863, 10.735, -20.175]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500010.geometry}
        material={materials.F00_FFFC_0500001}
        position={[44.635, 10.75, -21.987]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500011.geometry}
        material={materials.F00_FFFC_0500001}
        position={[41.478, 10.75, -21.987]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500012.geometry}
        material={materials.F00_FFFC_0500001}
        position={[21.175, 10.75, 19.532]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500013.geometry}
        material={materials.F00_FFFC_0500001}
        position={[33.62, 10.75, 4.622]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500014.geometry}
        material={materials.F00_FFFC_0500001}
        position={[36.025, 10.75, 2.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500015.geometry}
        material={materials.F00_FFFC_0500001}
        position={[25.839, 10.735, 32.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500016.geometry}
        material={materials.F00_FFFC_0500001}
        position={[42.501, 10.735, 37.185]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500017.geometry}
        material={materials.F00_FFFC_0500001}
        position={[30.145, 10.75, 32.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500018.geometry}
        material={materials.F00_FFFC_0500001}
        position={[4.459, 10.735, 40.536]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500019.geometry}
        material={materials.F00_FFFC_0500001}
        position={[3.572, 10.75, 31.858]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500020.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.736, 10.735, 41.506]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500021.geometry}
        material={materials.F00_FFFC_0500001}
        position={[11.197, 10.45, 31.858]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500022.geometry}
        material={materials.F00_FFFC_0500001}
        position={[46.927, 10.735, 4.328]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500023.geometry}
        material={materials.F00_FFFC_0500001}
        position={[17.206, 10.75, 30.312]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500024.geometry}
        material={materials.F00_FFFC_0500001}
        position={[11.726, 10.75, -22.027]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500025.geometry}
        material={materials.F00_FFFC_0500001}
        position={[17.534, 10.75, 3.198]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500026.geometry}
        material={materials.F00_FFFC_0500001}
        position={[17.9, 10.75, 3.198]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500027.geometry}
        material={materials.F00_FFFC_0500001}
        position={[20.102, 10.75, 4.733]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500028.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-3.696, 10.75, 2.949]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500029.geometry}
        material={materials.F00_FFFC_0500001}
        position={[11.413, 10.75, 4.833]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500030.geometry}
        material={materials.F00_FFFC_0500001}
        position={[13.696, 10.75, 25.908]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500031.geometry}
        material={materials.F00_FFFC_0500001}
        position={[29.914, 10.75, -7.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500032.geometry}
        material={materials.F00_FFFC_0500001}
        position={[14.539, 10.75, -7.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500033.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.566, 10.735, 23.722]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500034.geometry}
        material={materials.F00_FFFC_0500001}
        position={[17.619, 10.75, -20.419]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500035.geometry}
        material={materials.F00_FFFC_0500001}
        position={[30.28, 10.75, -7.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500036.geometry}
        material={materials.F00_FFFC_0500001}
        position={[25.52, 10.75, -5.512]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500037.geometry}
        material={materials.F00_FFFC_0500001}
        position={[20.41, 10.75, -9.908]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500038.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.009, 10.735, -20.128]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500039.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.27, 10.75, -22.036]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500040.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-18.852, 10.75, -22.036]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500041.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-3.506, 10.75, -20.419]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500042.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-3.737, 10.75, -20.419]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500043.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-6.256, 10.75, -18.832]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500044.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-9.681, 10.75, 13.072]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500045.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-12.554, 10.75, 5.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500046.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-15.709, 10.75, 19.218]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500047.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-15.03, 10.75, -13.513]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0500048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0500048.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-15.709, 10.75, 9.084]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0500048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0600001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0600001.geometry}
        material={materials.F00_FFFC_0600001}
        position={[-19.372, 8.657, -3.01]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0600001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700001.geometry}
        material={materials.F00_FFFC_0700001}
        position={[13.023, 8.99, 24.701]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700002.geometry}
        material={materials.F00_FFFC_0700001}
        position={[12.551, 9.023, -36.13]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700003.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-9.994, 9.003, 36.427]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700004.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-21.377, 9.023, -21.062]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700005.geometry}
        material={materials.F00_FFFC_0700001}
        position={[36.387, 9.186, 35.983]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700006.geometry}
        material={materials.F00_FFFC_0700001}
        position={[46.882, 9.023, -9.53]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0700007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0700007.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-15.377, 8.99, 3.97]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0700007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800001.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-6.715, 10.86, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800002.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.513, 10.86, -2.093]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800003.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.846, 10.86, -2.093]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800004.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-0.766, 10.86, 1.325]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800005.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-6.715, 10.86, 1.325]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800006.geometry}
        material={materials.F00_FFFC_0800001}
        position={[5.284, 10.86, 1.325]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800007.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.513, 10.86, -8.743]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800008.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.513, 10.86, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800009.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-0.765, 10.86, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800010.geometry}
        material={materials.F00_FFFC_0800001}
        position={[34.16, 10.86, -18.679]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800011.geometry}
        material={materials.F00_FFFC_0800001}
        position={[19.639, 10.86, 27.455]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800012.geometry}
        material={materials.F00_FFFC_0800001}
        position={[43.81, 10.86, -18.679]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800013.geometry}
        material={materials.F00_FFFC_0800001}
        position={[30.084, 10.86, -7.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800014.geometry}
        material={materials.F00_FFFC_0800001}
        position={[17.723, 10.86, -20.447]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800015.geometry}
        material={materials.F00_FFFC_0800001}
        position={[18.084, 10.86, 29.723]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800016.geometry}
        material={materials.F00_FFFC_0800001}
        position={[43.81, 10.86, -9.609]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800017.geometry}
        material={materials.F00_FFFC_0800001}
        position={[34.16, 10.86, -9.609]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800018.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-15.43, 10.86, -15.352]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800019.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-12.74, 10.86, 23.564]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800020.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.846, 10.86, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800021.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.846, 10.86, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800022.geometry}
        material={materials.F00_FFFC_0800001}
        position={[17.723, 10.86, 3.032]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800023.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-3.814, 10.86, 2.957]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800024.geometry}
        material={materials.F00_FFFC_0800001}
        position={[5.284, 10.86, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_FFFC_0800025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_FFFC_0800025.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-3.602, 10.86, -20.355]}
        userData={{ name: 'M_SUNGSIM0001F02F02_FFFC_0800025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200001.geometry}
        material={materials.F02_IFFC_0200002}
        position={[11.253, 10.708, 31.496]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200002.geometry}
        material={materials.F02_IFFC_0200002}
        position={[13.665, 10.539, 3.035]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200003.geometry}
        material={materials.F02_IFFC_0200002}
        position={[14.33, 10.547, -20.372]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200004.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-5.848, 10.539, 1.486]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200005.geometry}
        material={materials.F02_IFFC_0200002}
        position={[11.423, 10.539, 1.458]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200006.geometry}
        material={materials.F02_IFFC_0200001}
        position={[34.729, 10.201, 15.631]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200007.geometry}
        material={materials.F02_IFFC_0200002}
        position={[32.253, 10.539, 19.594]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200007' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_IFFC_0200008"
        position={[32.048, 10.603, -20.421]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200008' }}
      >
        <mesh
          name="Mesh893"
          castShadow
          receiveShadow
          geometry={nodes.Mesh893.geometry}
          material={materials.F02_IFFC_0200002}
        />
        <mesh
          name="Mesh893_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh893_1.geometry}
          material={materials.F02_IFFC_0200001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200009.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-9.987, 10.539, -16.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200010.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-12.357, 10.34, 1.27]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200011.geometry}
        material={materials.F02_IFFC_0200002}
        position={[17.931, 10.437, 30.455]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200012.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.035, 9.91, -24.963]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200013.geometry}
        material={materials.F02_IFFC_0200001}
        position={[6.654, 9.383, 44.067]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200014.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.999, 10.6, 19.502]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200015.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.243, 9.523, -21.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200016.geometry}
        material={materials.F02_IFFC_0200001}
        position={[23.863, 10.092, 20.416]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200017.geometry}
        material={materials.F02_IFFC_0200001}
        position={[32.611, 10.212, 6.511]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200018.geometry}
        material={materials.F02_IFFC_0200002}
        position={[19.622, 10.6, 27.351]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200019.geometry}
        material={materials.F02_IFFC_0200002}
        position={[13.758, 10.373, -7.769]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200020.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-7.44, 10.539, 1.486]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200021.geometry}
        material={materials.F02_IFFC_0200002}
        position={[34.136, 10.539, 2.652]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200022.geometry}
        material={materials.F02_IFFC_0200002}
        position={[34.083, 10.539, -9.698]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200023.geometry}
        material={materials.F02_IFFC_0200002}
        position={[3.679, 10.696, 31.497]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200024.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-10.8, 10.488, 28.761]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200025.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-15.249, 10.539, -11.732]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200026.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.189, 9.459, 40.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200027.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-2.238, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200028.geometry}
        material={materials.F02_IFFC_0200001}
        position={[12.094, 10.578, 36.401]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200029.geometry}
        material={materials.F02_IFFC_0200001}
        position={[10.596, 10.578, 36.402]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200030.geometry}
        material={materials.F02_IFFC_0200001}
        position={[5.703, 9.67, 45.051]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200031.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-2.169, 9.945, 31.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200032.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-14.251, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200033.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-8.249, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200034.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-11.119, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200035.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.227, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200036.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.13, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200037.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-17.11, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200038.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-15.372, 10.578, 33.041]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200039.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-22.611, 10.533, -13.595]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200040.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.89, 9.799, -15.242]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200041.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-22.973, 9.799, -15.242]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200042.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.203, 10.418, -6.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200043.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.203, 10.418, -4.154]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200044.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-22.536, 9.799, -15.242]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200045.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.236, 9.85, 30.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200046.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.699, 9.85, 30.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200047.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-15.566, 10.07, 30.841]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200048.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.242, 9.799, -15.242]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200049.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-10.099, 10.469, 5.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200050.geometry}
        material={materials.F02_IFFC_0200002}
        position={[-12.542, 10.279, 14.423]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200051.geometry}
        material={materials.F02_IFFC_0200001}
        position={[32.611, 10.107, 8.631]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200052.geometry}
        material={materials.F02_IFFC_0200001}
        position={[12.739, 10.547, -29.678]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200053.geometry}
        material={materials.F02_IFFC_0200001}
        position={[24.456, 10.206, 18.81]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200053' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200054.geometry}
        material={materials.F02_IFFC_0200001}
        position={[9.027, 10.589, 10.583]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200054' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200055.geometry}
        material={materials.F02_IFFC_0200001}
        position={[44.635, 10.705, -21.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200055' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200056.geometry}
        material={materials.F02_IFFC_0200001}
        position={[33.914, 10.177, 20.305]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200056' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200057.geometry}
        material={materials.F02_IFFC_0200001}
        position={[27.939, 10.132, 18.81]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200058.geometry}
        material={materials.F02_IFFC_0200001}
        position={[34.115, 10.664, -21.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200058' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200059.geometry}
        material={materials.F02_IFFC_0200001}
        position={[22.352, 10.76, -7.914]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200060.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-12.157, 10.76, -21.529]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200060' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200061.geometry}
        material={materials.F02_IFFC_0200001}
        position={[39.495, 10.549, 41.552]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200061' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200062.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-13.902, 10.386, 31.605]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200062' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200063.geometry}
        material={materials.F02_IFFC_0200001}
        position={[51.417, 10.444, 39.381]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200063' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200064.geometry}
        material={materials.F02_IFFC_0200001}
        position={[51.417, 10.444, 40.802]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200064' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200065.geometry}
        material={materials.F02_IFFC_0200001}
        position={[9.639, 10.547, -29.687]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200065' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200066.geometry}
        material={materials.F02_IFFC_0200001}
        position={[34.86, 10.6, 13.402]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200066' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200067.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-14.002, 10.515, 5.672]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200067' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200068.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-14.596, 10.6, 6.728]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200068' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200069.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-10.907, 10.578, -36.535]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200069' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200070.geometry}
        material={materials.F02_IFFC_0200001}
        position={[34.887, 10.453, 4.173]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200070' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200071.geometry}
        material={materials.F02_IFFC_0200001}
        position={[10.696, 10.586, 16.93]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200071' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200072.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-14.027, 10.523, 2.788]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200072' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200073.geometry}
        material={materials.F02_IFFC_0200001}
        position={[37.705, 10.768, -24.131]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200073' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200074.geometry}
        material={materials.F02_IFFC_0200001}
        position={[32.497, 10.583, -29.101]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200074' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200075.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-15.505, 10.758, -20.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200075' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200076.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-12.632, 10.758, -18.54]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200076' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200077.geometry}
        material={materials.F02_IFFC_0200001}
        position={[11.355, 10.596, 30.176]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200077' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200078.geometry}
        material={materials.F02_IFFC_0200001}
        position={[1.719, 10.673, 30.34]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200078' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200079.geometry}
        material={materials.F02_IFFC_0200001}
        position={[21.583, 10.548, 3.081]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200079' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200080.geometry}
        material={materials.F02_IFFC_0200001}
        position={[17.722, 10.172, -26.921]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200080' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200081.geometry}
        material={materials.F02_IFFC_0200001}
        position={[8.985, 10.162, 7.189]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200081' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200082.geometry}
        material={materials.F02_IFFC_0200001}
        position={[36.003, 10.15, -26.828]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200082' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200083.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-8.452, 9.945, 31.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200083' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200084.geometry}
        material={materials.F02_IFFC_0200001}
        position={[17.399, 10.259, 18.632]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200084' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200085.geometry}
        material={materials.F02_IFFC_0200001}
        position={[19.519, 10.133, 18.632]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200085' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200086.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-12.149, 10.112, -32.519]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200086' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200087.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-7.884, 10.219, -35.286]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200087' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200088.geometry}
        material={materials.F02_IFFC_0200001}
        position={[36.864, 10.211, 20.415]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200088' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200089.geometry}
        material={materials.F02_IFFC_0200001}
        position={[34.728, 10.175, 6.342]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200089' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200090.geometry}
        material={materials.F02_IFFC_0200001}
        position={[35.869, 10.128, -4.131]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200090' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200091.geometry}
        material={materials.F02_IFFC_0200001}
        position={[27.243, 10.193, 4.266]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200091' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200092.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-12.149, 10.112, -30.072]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200092' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200093.geometry}
        material={materials.F02_IFFC_0200001}
        position={[44.289, 9.735, 37.077]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200093' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200094.geometry}
        material={materials.F02_IFFC_0200001}
        position={[37.936, 9.735, 37.077]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200094' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200095.geometry}
        material={materials.F02_IFFC_0200001}
        position={[48.009, 9.735, 37.077]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200095' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200096.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.105, 9.824, -26.88]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200096' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200097.geometry}
        material={materials.F02_IFFC_0200001}
        position={[47.912, 10.444, 38.756]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200097' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200098.geometry}
        material={materials.F02_IFFC_0200001}
        position={[19.572, 10.76, -7.914]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200098' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200099.geometry}
        material={materials.F02_IFFC_0200001}
        position={[45.634, 10.514, -6.053]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200099' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200100.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.469, 9.685, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200100' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200101.geometry}
        material={materials.F02_IFFC_0200001}
        position={[40.949, 9.735, 37.077]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200101' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200102.geometry}
        material={materials.F02_IFFC_0200001}
        position={[8.652, 9.701, -21.788]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200102' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200103.geometry}
        material={materials.F02_IFFC_0200001}
        position={[8.13, 9.712, -27.003]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200103' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200104.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.469, 9.894, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200104' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200105.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.931, 9.547, 39.454]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200105' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200106.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-25.431, 9.547, 39.452]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200106' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200107.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.479, 9.655, 42.397]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200107' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200108.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-6.45, 10.498, -36.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200108' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200109.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-12.28, 10.578, -35.134]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200109' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200110.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.097, 10.578, -36.791]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200110' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200111.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-9.398, 10.578, -36.535]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200111' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200112.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-6.243, 10.194, -27.353]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200112' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200113.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.627, 10.194, -25.684]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200113' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200114.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-9.233, 10.194, -25.684]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200114' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200115.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-22.715, 10.578, -36.791]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200115' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200116.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-24.38, 9.799, -19.586]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200116' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200117"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200117.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-24.38, 9.799, -18.921]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200117' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200118"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200118.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.13, 10.578, 9.721]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200118' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200119"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200119.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-25.487, 9.803, -25.707]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200119' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200120"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200120.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-24.462, 10.578, -35.668]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200120' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200121"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200121.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-24.462, 10.578, -33.991]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200121' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200122"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200122.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-19.319, 10.578, -34.03]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200122' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200123"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200123.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.4, 10.578, -33.58]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200123' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200124"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200124.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.4, 10.578, -38.108]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200124' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200125"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200125.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.4, 10.578, -41.823]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200125' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200126"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200126.geometry}
        material={materials.F02_IFFC_0200001}
        position={[18.412, 10.005, -34.901]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200126' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200127"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200127.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.306, 10.005, -36.81]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200127' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200128"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200128.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.306, 10.005, -42.069]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200128' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200129"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200129.geometry}
        material={materials.F02_IFFC_0200001}
        position={[18.412, 10.005, -38.984]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200129' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200130"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200130.geometry}
        material={materials.F02_IFFC_0200001}
        position={[10.9, 10.578, -32.519]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200130' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200131"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200131.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.12, 10.578, -29.902]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200131' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200132"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200132.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.12, 9.944, -28.464]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200132' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200133"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200133.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.12, 9.697, -28.464]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200133' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200134"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200134.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-0.156, 10.578, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200134' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200135"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200135.geometry}
        material={materials.F02_IFFC_0200001}
        position={[10.9, 10.578, -34.989]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200135' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200136"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200136.geometry}
        material={materials.F02_IFFC_0200001}
        position={[5.857, 10.578, -27.003]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200136' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200137"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200137.geometry}
        material={materials.F02_IFFC_0200001}
        position={[3.96, 10.578, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200137' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200138"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200138.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-20.134, 10.578, 7.668]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200138' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200139"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200139.geometry}
        material={materials.F02_IFFC_0200001}
        position={[18.238, 10.173, 4.265]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200139' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200140"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200140.geometry}
        material={materials.F02_IFFC_0200001}
        position={[22.57, 10.578, 10.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200140' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200141"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200141.geometry}
        material={materials.F02_IFFC_0200001}
        position={[21.208, 10.578, 10.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200141' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200142"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200142.geometry}
        material={materials.F02_IFFC_0200001}
        position={[15.733, 10.173, 1.799]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200142' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200143"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200143.geometry}
        material={materials.F02_IFFC_0200001}
        position={[3.8, 10.578, 19.247]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200143' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200144"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200144.geometry}
        material={materials.F02_IFFC_0200001}
        position={[6.698, 10.578, 19.247]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200144' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200145"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200145.geometry}
        material={materials.F02_IFFC_0200002}
        position={[14.054, 10.539, 19.462]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200145' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200146"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200146.geometry}
        material={materials.F02_IFFC_0200001}
        position={[15.87, 10.578, 10.091]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200146' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200147"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200147.geometry}
        material={materials.F02_IFFC_0200001}
        position={[17.816, 10.578, -15.533]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200147' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200148"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200148.geometry}
        material={materials.F02_IFFC_0200001}
        position={[17.62, 10.578, -14.146]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200148' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200149"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200149.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-15.375, 10.634, -18.399]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200149' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200150"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200150.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.662, 10.578, -15.533]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200150' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200151"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200151.geometry}
        material={materials.F02_IFFC_0200001}
        position={[23.944, 10.578, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200151' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200152"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200152.geometry}
        material={materials.F02_IFFC_0200001}
        position={[26.595, 10.578, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200152' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200153"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200153.geometry}
        material={materials.F02_IFFC_0200001}
        position={[27.888, 10.578, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200153' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200154"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200154.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-21.599, 10.578, 20.703]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200154' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200155"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200155.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.023, 10.578, 17.414]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200155' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200156"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200156.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-6.74, 10.616, 18.577]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200156' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200157"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200157.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.13, 10.578, 19.031]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200157' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200158"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200158.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-21.57, 10.578, 8.167]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200158' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200159"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200159.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.13, 10.578, 12.504]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200159' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200160"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200160.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.13, 10.578, 16.191]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200160' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200161"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200161.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.526, 10.623, 18.577]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200161' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200162"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200162.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.62, 10.578, 12.864]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200162' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200163"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200163.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.62, 10.578, 16.07]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200163' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200164"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200164.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.62, 10.578, 17.765]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200164' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200165"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200165.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.62, 10.578, 10.874]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200165' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200166"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200166.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.023, 10.578, 10.732]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200166' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200167"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200167.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-5.71, 10.461, 9.387]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200167' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200168"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200168.geometry}
        material={materials.F02_IFFC_0200001}
        position={[4.558, 10.578, 9.75]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200168' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200169"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200169.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.306, 10.005, -32.403]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200169' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200170"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200170.geometry}
        material={materials.F02_IFFC_0200001}
        position={[40.328, 10.647, 43.235]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200170' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200171"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200171.geometry}
        material={materials.F02_IFFC_0200001}
        position={[31.303, 10.649, 43.235]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200171' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200172"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200172.geometry}
        material={materials.F02_IFFC_0200001}
        position={[16.167, 10.647, 43.235]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200172' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200173"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200173.geometry}
        material={materials.F02_IFFC_0200001}
        position={[53.092, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200173' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200174"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200174.geometry}
        material={materials.F02_IFFC_0200001}
        position={[43.861, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200174' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200175"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200175.geometry}
        material={materials.F02_IFFC_0200001}
        position={[47.081, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200175' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200176"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200176.geometry}
        material={materials.F02_IFFC_0200001}
        position={[48.528, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200176' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200177"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200177.geometry}
        material={materials.F02_IFFC_0200001}
        position={[24.573, 10.15, 31.362]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200177' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200178"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200178.geometry}
        material={materials.F02_IFFC_0200001}
        position={[40.124, 9.725, 17.862]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200178' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200179"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200179.geometry}
        material={materials.F02_IFFC_0200001}
        position={[41.13, 10.101, 18.003]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200179' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200180"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200180.geometry}
        material={materials.F02_IFFC_0200001}
        position={[45.327, 10.145, 20.547]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200180' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200181"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200181.geometry}
        material={materials.F02_IFFC_0200001}
        position={[42.118, 9.725, 17.862]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200181' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200182"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200182.geometry}
        material={materials.F02_IFFC_0200001}
        position={[26.897, 10.187, 31.447]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200182' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200183"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200183.geometry}
        material={materials.F02_IFFC_0200001}
        position={[27.048, 9.872, 35.528]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200183' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200184"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200184.geometry}
        material={materials.F02_IFFC_0200001}
        position={[32.597, 10.194, 15.326]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200184' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200185"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200185.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-26.242, 10.578, 42.981]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200185' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200186"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200186.geometry}
        material={materials.F02_IFFC_0200001}
        position={[-23.121, 10.578, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200186' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200187"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200187.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.046, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200187' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200188"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200188.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.476, 9.67, 36.611]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200188' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200189"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200189.geometry}
        material={materials.F02_IFFC_0200001}
        position={[4.344, 9.67, 45.051]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200189' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200190"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200190.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.476, 9.67, 43.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200190' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200191"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200191.geometry}
        material={materials.F02_IFFC_0200001}
        position={[2.476, 9.67, 39.735]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200191' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200192"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200192.geometry}
        material={materials.F02_IFFC_0200001}
        position={[18.65, 10.578, 39.715]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200192' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200193"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200193.geometry}
        material={materials.F02_IFFC_0200001}
        position={[29.107, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200193' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200194"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200194.geometry}
        material={materials.F02_IFFC_0200001}
        position={[33.555, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200194' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200195"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200195.geometry}
        material={materials.F02_IFFC_0200001}
        position={[38.106, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200195' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200196"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200196.geometry}
        material={materials.F02_IFFC_0200001}
        position={[25.782, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200196' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200197"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200197.geometry}
        material={materials.F02_IFFC_0200001}
        position={[18.819, 10.326, 35.701]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200197' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200198"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200198.geometry}
        material={materials.F02_IFFC_0200001}
        position={[21.567, 10.578, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200198' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200199"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200199.geometry}
        material={materials.F02_IFFC_0200001}
        position={[26.049, 10.6, 41.369]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200199' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200200"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200200.geometry}
        material={materials.F02_IFFC_0200001}
        position={[46.917, 10.145, 20.547]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200200' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200201"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200201.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.202, 10.15, -27.878]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200201' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200202"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200202.geometry}
        material={materials.F02_IFFC_0200001}
        position={[30.003, 10.15, -39.945]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200202' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200203"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200203.geometry}
        material={materials.F02_IFFC_0200001}
        position={[30.003, 10.15, -36.706]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200203' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200204"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200204.geometry}
        material={materials.F02_IFFC_0200001}
        position={[36.003, 10.15, -28.348]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200204' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200205"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200205.geometry}
        material={materials.F02_IFFC_0200001}
        position={[50.902, 9.813, -33.378]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200205' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200206"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200206.geometry}
        material={materials.F02_IFFC_0200001}
        position={[45.917, 9.813, -33.319]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200206' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200207"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200207.geometry}
        material={materials.F02_IFFC_0200001}
        position={[42.68, 10.489, -34.593]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200207' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200208"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200208.geometry}
        material={materials.F02_IFFC_0200001}
        position={[30.003, 10.15, -35.198]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200208' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200209"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200209.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.105, 10.578, -29.134]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200209' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200210"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200210.geometry}
        material={materials.F02_IFFC_0200001}
        position={[36.1, 10.578, -26.611]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200210' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200211"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200211.geometry}
        material={materials.F02_IFFC_0200001}
        position={[20.306, 10.005, -27.892]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200211' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200212"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200212.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.105, 10.578, -34.683]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200212' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200213"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200213.geometry}
        material={materials.F02_IFFC_0200001}
        position={[30.003, 10.15, -33.866]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200213' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200214"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200214.geometry}
        material={materials.F02_IFFC_0200001}
        position={[28.202, 10.15, -33.408]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200214' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200215"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200215.geometry}
        material={materials.F02_IFFC_0200001}
        position={[30.1, 10.578, -40.186]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200215' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200216"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200216.geometry}
        material={materials.F02_IFFC_0200001}
        position={[50.111, 10.145, 7.306]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200216' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200217"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200217.geometry}
        material={materials.F02_IFFC_0200001}
        position={[48.849, 10.145, 1.708]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200217' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200218"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200218.geometry}
        material={materials.F02_IFFC_0200001}
        position={[48.72, 10.071, -6.194]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200218' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200219"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200219.geometry}
        material={materials.F02_IFFC_0200001}
        position={[47.959, 10.145, 12.851]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200219' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200220"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200220.geometry}
        material={materials.F02_IFFC_0200001}
        position={[47.959, 10.145, 19.199]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200220' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200221"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200221.geometry}
        material={materials.F02_IFFC_0200001}
        position={[45.681, 10.145, 17.097]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200221' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200222"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200222.geometry}
        material={materials.F02_IFFC_0200001}
        position={[45.681, 10.145, 14.779]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200222' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200223"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200223.geometry}
        material={materials.F02_IFFC_0200001}
        position={[50, 9.725, -3.62]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200223' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200224"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200224.geometry}
        material={materials.F02_IFFC_0200001}
        position={[49.889, 10.578, -30.051]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200224' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200225"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200225.geometry}
        material={materials.F02_IFFC_0200001}
        position={[49.98, 10.522, -35.333]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200225' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200226"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200226.geometry}
        material={materials.F02_IFFC_0200001}
        position={[46.14, 10.578, -35.335]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200226' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200227"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200227.geometry}
        material={materials.F02_IFFC_0200001}
        position={[49.889, 10.578, -26.781]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200227' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200228"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200228.geometry}
        material={materials.F02_IFFC_0200001}
        position={[49.463, 9.931, -0.573]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200228' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200229"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200229.geometry}
        material={materials.F02_IFFC_0200001}
        position={[41.453, 10.745, -21.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200229' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200230"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200230.geometry}
        material={materials.F02_IFFC_0200001}
        position={[49.889, 10.578, -23.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200230' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300001.geometry}
        material={materials.F02_IFFC_0300001}
        position={[13.012, 9.619, 20.025]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300002.geometry}
        material={materials.F02_IFFC_0300001}
        position={[45.449, 9.495, -13.449]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300003.geometry}
        material={materials.F02_IFFC_0300001}
        position={[-21.384, 9.276, -20.541]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300004.geometry}
        material={materials.F02_IFFC_0300001}
        position={[48.576, 9.398, -6.053]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300005.geometry}
        material={materials.F02_IFFC_0300001}
        position={[30.564, 9.768, 35.378]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300006.geometry}
        material={materials.F02_IFFC_0300001}
        position={[32.27, 9.918, -13.271]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300007.geometry}
        material={materials.F02_IFFC_0300001}
        position={[32.213, 9.508, -5.263]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300008.geometry}
        material={materials.F02_IFFC_0300001}
        position={[-15.738, 9.339, 30.989]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500001.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-23.13, 9.935, 16.191]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500002.geometry}
        material={materials.F02_IFFC_0500001}
        position={[36.1, 9.935, -26.611]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500003.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-23.13, 9.935, 12.504]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500004.geometry}
        material={materials.F02_IFFC_0500001}
        position={[20.4, 9.935, -33.58]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500005.geometry}
        material={materials.F02_IFFC_0500001}
        position={[20.4, 9.935, -38.108]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500006.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-5.023, 9.935, 17.414]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500007.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-20.134, 9.935, 7.668]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500008.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-9.398, 9.935, -36.535]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500009.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-23.13, 9.935, 19.031]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500010.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-21.599, 9.935, 20.703]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500011.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-19.319, 9.935, -34.03]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500012.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-20.097, 9.935, -36.791]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500013.geometry}
        material={materials.F02_IFFC_0500001}
        position={[30.1, 9.935, -40.186]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500014.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-22.715, 9.935, -36.791]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500015.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-24.463, 9.935, -35.668]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500016.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-24.463, 9.935, -33.991]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500017.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-6.45, 10.015, -36.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500018.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-21.57, 9.935, 8.167]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500019.geometry}
        material={materials.F02_IFFC_0500001}
        position={[28.105, 9.935, -29.135]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500020.geometry}
        material={materials.F02_IFFC_0500001}
        position={[28.105, 9.935, -34.684]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500021.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-23.13, 9.935, 9.721]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500022.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-12.281, 9.935, -35.134]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500023.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-6.74, 10.079, 18.577]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500024.geometry}
        material={materials.F02_IFFC_0500001}
        position={[23.944, 9.935, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500025.geometry}
        material={materials.F02_IFFC_0500001}
        position={[26.595, 9.935, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500026.geometry}
        material={materials.F02_IFFC_0500001}
        position={[27.888, 9.935, -3.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500027.geometry}
        material={materials.F02_IFFC_0500001}
        position={[21.208, 9.935, 10.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500028.geometry}
        material={materials.F02_IFFC_0500001}
        position={[10.9, 9.935, -32.519]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500029.geometry}
        material={materials.F02_IFFC_0500001}
        position={[15.87, 9.935, 10.091]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500030.geometry}
        material={materials.F02_IFFC_0500001}
        position={[5.857, 9.935, -27.003]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500031.geometry}
        material={materials.F02_IFFC_0500001}
        position={[3.96, 9.935, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500032.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-0.157, 9.935, -35.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500033.geometry}
        material={materials.F02_IFFC_0500001}
        position={[20.662, 9.935, -15.533]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500034.geometry}
        material={materials.F02_IFFC_0500001}
        position={[17.816, 9.935, -15.533]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500035.geometry}
        material={materials.F02_IFFC_0500001}
        position={[17.62, 9.935, -14.146]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500036.geometry}
        material={materials.F02_IFFC_0500001}
        position={[4.558, 9.935, 9.75]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500037.geometry}
        material={materials.F02_IFFC_0500001}
        position={[2.62, 9.935, 10.874]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500038.geometry}
        material={materials.F02_IFFC_0500001}
        position={[2.62, 9.935, 12.864]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500039.geometry}
        material={materials.F02_IFFC_0500001}
        position={[2.12, 9.935, -29.902]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500040.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-5.526, 10.086, 18.577]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500041.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-5.023, 9.935, 10.732]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500042.geometry}
        material={materials.F02_IFFC_0500001}
        position={[3.8, 9.935, 19.247]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500043.geometry}
        material={materials.F02_IFFC_0500001}
        position={[6.698, 9.935, 19.247]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500044.geometry}
        material={materials.F02_IFFC_0500001}
        position={[22.57, 9.935, 10.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500045.geometry}
        material={materials.F02_IFFC_0500001}
        position={[20.4, 9.935, -41.823]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500046.geometry}
        material={materials.F02_IFFC_0500001}
        position={[2.62, 9.935, 16.07]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500047.geometry}
        material={materials.F02_IFFC_0500001}
        position={[2.62, 9.935, 17.765]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500048.geometry}
        material={materials.F02_IFFC_0500001}
        position={[18.651, 9.935, 39.715]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500049.geometry}
        material={materials.F02_IFFC_0500001}
        position={[20.046, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500050.geometry}
        material={materials.F02_IFFC_0500001}
        position={[25.782, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500051.geometry}
        material={materials.F02_IFFC_0500001}
        position={[21.567, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500052.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-23.119, 9.935, 42.98]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500053.geometry}
        material={materials.F02_IFFC_0500001}
        position={[49.889, 9.935, -23.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500053' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500054.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-8.249, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500054' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500055.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-26.242, 9.935, 42.981]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500055' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500056.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-2.238, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500056' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500057.geometry}
        material={materials.F02_IFFC_0500001}
        position={[29.107, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500058.geometry}
        material={materials.F02_IFFC_0500001}
        position={[49.889, 9.935, -30.051]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500058' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500059.geometry}
        material={materials.F02_IFFC_0500001}
        position={[46.141, 9.935, -35.335]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500060.geometry}
        material={materials.F02_IFFC_0500001}
        position={[49.889, 9.935, -26.781]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500060' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500061.geometry}
        material={materials.F02_IFFC_0500001}
        position={[53.092, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500061' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500062.geometry}
        material={materials.F02_IFFC_0500001}
        position={[48.528, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500062' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500063.geometry}
        material={materials.F02_IFFC_0500001}
        position={[38.106, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500063' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500064.geometry}
        material={materials.F02_IFFC_0500001}
        position={[33.555, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500064' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500065.geometry}
        material={materials.F02_IFFC_0500001}
        position={[47.081, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500065' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500066.geometry}
        material={materials.F02_IFFC_0500001}
        position={[43.861, 9.935, 43.237]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500066' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500067.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-11.119, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500067' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500068.geometry}
        material={materials.F02_IFFC_0500001}
        position={[10.598, 9.935, 36.4]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500068' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500069.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-5.13, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500069' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500070.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-15.372, 9.935, 33.041]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500070' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500071.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-10.907, 9.935, -36.535]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500071' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500072.geometry}
        material={materials.F02_IFFC_0500001}
        position={[10.9, 9.935, -34.989]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500072' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500073.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-20.227, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500073' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500074.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-14.251, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500074' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500075.geometry}
        material={materials.F02_IFFC_0500001}
        position={[12.096, 9.935, 36.399]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500075' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0500076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0500076.geometry}
        material={materials.F02_IFFC_0500001}
        position={[-17.11, 9.935, 42.982]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0500076' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISCL_0000001.geometry}
        material={materials.F02_ISCL_0000001}
        position={[13.96, 10.95, 27.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISCL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISCL_0000002.geometry}
        material={materials.F02_ISCL_0000001}
        position={[13.332, 10.95, 1.937]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISCL_0000002' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISCL_0000003.geometry}
        material={materials.F02_ISCL_0000002}
        position={[-12.698, 12.25, 26.409]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000001.geometry}
        material={materials.F02_ISDR_0000001}
        position={[30.185, 9.25, -36.168]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000002.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -22.712]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000003.geometry}
        material={materials.F02_ISDR_0000001}
        position={[30.185, 9.25, -39.418]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000004.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.111, 9.55, -4.565]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000005.geometry}
        material={materials.F02_ISDR_0000001}
        position={[30.185, 9.25, -33.318]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000006.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.985, 9.25, -36.168]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000007.geometry}
        material={materials.F02_ISDR_0000001}
        position={[30.185, 9.25, -34.743]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000008.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.98, 9.25, -35.418]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000009.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.785, 9.25, -39.443]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000010.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.785, 9.25, -37.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000011.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.985, 9.25, -40.418]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000012.geometry}
        material={materials.F02_ISDR_0000001}
        position={[21.084, 9.25, 19.532]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000013.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.085, 9.25, -15.267]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000014.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.115, 9.25, -2.018]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000015.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.609, 9.25, -14.818]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000016.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.96, 9.55, -29.268]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000017.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.985, 9.25, -32.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000018.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.01, 9.25, -9.668]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000019.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.634, 9.25, -5.943]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000020.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.835, 9.55, -34.744]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000021.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.695, 9.25, -3.575]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000022.geometry}
        material={materials.F02_ISDR_0000001}
        position={[47.229, 9.55, -21.912]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000023.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.935, 9.25, -12.243]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000024.geometry}
        material={materials.F02_ISDR_0000001}
        position={[42.01, 9.4, -10.493]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000025.geometry}
        material={materials.F02_ISDR_0000001}
        position={[44.635, 9.55, -21.911]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000026.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.959, 9.55, -19.722]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000027.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.935, 9.25, -17.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000028.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.96, 9.55, -26.022]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000029.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.935, 9.25, -14.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000030.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.959, 9.55, -22.647]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000031.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.835, 9.25, -33.318]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000032.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.47, 9.25, 16.573]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000033.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.185, 9.25, -34.743]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000034.geometry}
        material={materials.F02_ISDR_0000001}
        position={[40.76, 9.25, 1.309]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000035.geometry}
        material={materials.F02_ISDR_0000001}
        position={[35.909, 9.25, 2.464]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000036.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.47, 9.25, 15.292]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000037.geometry}
        material={materials.F02_ISDR_0000001}
        position={[38.36, 9.25, -33.843]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000038.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.21, 9.25, 13.382]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000039.geometry}
        material={materials.F02_ISDR_0000001}
        position={[32.335, 9.25, 6.079]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000040.geometry}
        material={materials.F02_ISDR_0000001}
        position={[53.211, 9.25, -8.763]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000041.geometry}
        material={materials.F02_ISDR_0000001}
        position={[40.435, 9.25, -33.018]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000042.geometry}
        material={materials.F02_ISDR_0000001}
        position={[53.335, 9.25, 7.557]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000043.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.26, 9.25, -33.843]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000044.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.695, 9.25, -0.488]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000045.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.51, 9.25, -24.899]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000046.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.47, 9.25, 1.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000047.geometry}
        material={materials.F02_ISDR_0000001}
        position={[47.635, 9.25, 1.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000048.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.435, 9.25, 7.557]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000049.geometry}
        material={materials.F02_ISDR_0000001}
        position={[42.75, 9.25, -34.593]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000050.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.14, 9.25, -30.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000051.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.14, 9.25, -25.443]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000052.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-7.418, 9.55, -35.045]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000053.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-12.39, 9.55, -32.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000054.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-12.39, 9.55, -30.543]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000055.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-8.74, 9.25, -25.443]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000056.geometry}
        material={materials.F02_ISDR_0000001}
        position={[3.085, 9.25, -35.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000057.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-0.815, 9.25, -35.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000058.geometry}
        material={materials.F02_ISDR_0000001}
        position={[4.61, 9.25, -35.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000059.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-12.157, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000060.geometry}
        material={materials.F02_ISDR_0000001}
        position={[7.36, 9.25, -23.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000061.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-24.532, 9.55, -36.26]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000062.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-24.532, 9.55, -34.652]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000063.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-20.709, 9.55, -36.861]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000064.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-19.25, 9.55, -35.874]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000065.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-22.085, 9.55, -36.861]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000066.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-25.487, 9.25, -25.637]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000067.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-10.24, 9.55, -36.645]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000068.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-12.39, 9.55, -35.795]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000068' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000069.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-8.74, 9.55, -36.645]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000069' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000070.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-18.79, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000071.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-6.34, 9.55, -35.795]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000072.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.535, 9.25, -32.918]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000073.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.724, 9.25, -28.475]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000074.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.733, 9.25, -37.378]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000074' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000075.geometry}
        material={materials.F02_ISDR_0000001}
        position={[18.21, 9.25, -35.444]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000075' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000076.geometry}
        material={materials.F02_ISDR_0000001}
        position={[18.042, 9.25, -39.558]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000076' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000077.geometry}
        material={materials.F02_ISDR_0000001}
        position={[21.285, 9.25, -27.343]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000077' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000078.geometry}
        material={materials.F02_ISDR_0000001}
        position={[14.26, 9.25, -28.583]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000078' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000079.geometry}
        material={materials.F02_ISDR_0000001}
        position={[16.835, 9.25, -18.918]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000079' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000080.geometry}
        material={materials.F02_ISDR_0000001}
        position={[17.51, 9.25, -26.421]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000080' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000081.geometry}
        material={materials.F02_ISDR_0000001}
        position={[21.285, 9.25, -25.768]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000081' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000082.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.67, 9.25, -24.682]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000082' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000083.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.01, 9.25, -29.075]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000083' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000084.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.01, 9.25, -30.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000084' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000085.geometry}
        material={materials.F02_ISDR_0000001}
        position={[5.185, 9.25, -26.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000085' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000086.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-1.94, 9.25, -34.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000086' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000087.geometry}
        material={materials.F02_ISDR_0000001}
        position={[7.485, 9.25, -26.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000087' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000088.geometry}
        material={materials.F02_ISDR_0000001}
        position={[8.81, 9.25, -28.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000088' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000089.geometry}
        material={materials.F02_ISDR_0000001}
        position={[11.684, 9.4, -36.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000089' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000090.geometry}
        material={materials.F02_ISDR_0000001}
        position={[15.06, 9.4, -37.143]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000090' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000091.geometry}
        material={materials.F02_ISDR_0000001}
        position={[13.438, 9.25, -36.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000091' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000092.geometry}
        material={materials.F02_ISDR_0000001}
        position={[10.617, 9.25, -33.176]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000092' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000093.geometry}
        material={materials.F02_ISDR_0000001}
        position={[10.617, 9.25, -34.33]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000093' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000094.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.285, 9.25, -14.741]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000094' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000095.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.285, 9.25, -17.144]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000095' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000096.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.285, 9.25, -12.343]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000096' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000097.geometry}
        material={materials.F02_ISDR_0000001}
        position={[32.11, 9.25, -14.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000097' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000098.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.21, 9.4, -10.493]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000098' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000099.geometry}
        material={materials.F02_ISDR_0000001}
        position={[15.036, 9.55, -5.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000099' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000100.geometry}
        material={materials.F02_ISDR_0000001}
        position={[17.51, 9.55, -14.88]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000100' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000101.geometry}
        material={materials.F02_ISDR_0000001}
        position={[21.392, 9.55, -15.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000101' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000102.geometry}
        material={materials.F02_ISDR_0000001}
        position={[17.51, 9.55, -13.405]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000102' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000103.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.81, 9.55, -13.155]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000103' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000104.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.81, 9.55, -14.63]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000104' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000105.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -28.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000105' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000106.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -26.88]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000106' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000107.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.17, 9.25, -27.368]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000107' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000108.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -33.941]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000108' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000109.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -32.442]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000109' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000110.geometry}
        material={materials.F02_ISDR_0000001}
        position={[36.17, 9.25, -28.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000110' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000111.geometry}
        material={materials.F02_ISDR_0000001}
        position={[29.385, 9.25, -11.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000111' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000112.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.855, 9.25, -11.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000112' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000113.geometry}
        material={materials.F02_ISDR_0000001}
        position={[31.26, 9.4, -14.968]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000113' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000114.geometry}
        material={materials.F02_ISDR_0000001}
        position={[37.79, 9.55, -24.131]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000114' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000115.geometry}
        material={materials.F02_ISDR_0000001}
        position={[34.115, 9.55, -21.911]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000115' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000116.geometry}
        material={materials.F02_ISDR_0000001}
        position={[17.185, 9.25, 10.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000116' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000117"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000117.geometry}
        material={materials.F02_ISDR_0000001}
        position={[15.76, 9.25, 8.812]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000117' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000118"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000118.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.535, 9.25, 10.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000118' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000119"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000119.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.91, 9.25, 9.339]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000119' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000120"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000120.geometry}
        material={materials.F02_ISDR_0000001}
        position={[21.885, 9.25, 10.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000120' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000121"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000121.geometry}
        material={materials.F02_ISDR_0000001}
        position={[16.71, 9.25, 8.157]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000121' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000122"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000122.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-18.74, 9.25, -28.993]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000122' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000123"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000123.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-19.25, 9.55, -34.652]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000123' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000124"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000124.geometry}
        material={materials.F02_ISDR_0000001}
        position={[13.71, 9.55, 26.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000124' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000125"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000125.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.11, 9.55, 4.507]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000125' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000126"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000126.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.805, 9.25, 4.507]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000126' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000127"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000127.geometry}
        material={materials.F02_ISDR_0000001}
        position={[29.61, 9.4, -3.813]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000127' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000128"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000128.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.268, 9.4, -3.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000128' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000129"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000129.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.284, 9.4, -3.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000129' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000130"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000130.geometry}
        material={materials.F02_ISDR_0000001}
        position={[19.92, 9.55, -15.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000130' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000131"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000131.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.41, 9.55, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000131' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000132"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000132.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.505, 9.4, -3.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000132' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000133"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000133.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.944, 9.25, 10.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000133' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000134"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000134.geometry}
        material={materials.F02_ISDR_0000001}
        position={[24.935, 9.25, 10.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000134' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000135"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000135.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.805, 9.25, 8.157]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000135' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000136"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000136.geometry}
        material={materials.F02_ISDR_0000001}
        position={[25.507, 9.4, -5.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000136' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000137"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000137.geometry}
        material={materials.F02_ISDR_0000001}
        position={[25.41, 9.25, 8.157]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000137' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000138"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000138.geometry}
        material={materials.F02_ISDR_0000001}
        position={[32.335, 9.25, 8.119]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000138' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000139"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000139.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-24.4, 9.25, -14.217]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000139' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000140"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000140.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-22.536, 9.25, -15.322]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000140' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000141"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000141.geometry}
        material={materials.F02_ISDR_0000001}
        position={[4.448, 9.55, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000141' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000142"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000142.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-15.44, 9.55, 9.714]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000142' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000143"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000143.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.89, 9.25, -15.322]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000143' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000144"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000144.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-22.697, 9.4, -20.448]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000144' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000145"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000145.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.913, 9.25, -20.038]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000145' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000146"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000146.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-24.494, 9.25, 29.75]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000146' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000147"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000147.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-6.74, 9.25, -27.595]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000147' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000148"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000148.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-18.469, 9.55, -1.737]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000148' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000149"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000149.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-4.95, 9.55, 11.421]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000149' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000150"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000150.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-20.788, 9.25, -8.093]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000150' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000151"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000151.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-4.95, 9.55, 16.8]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000151' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000152"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000152.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-4.95, 9.55, 9.926]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000152' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000153"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000153.geometry}
        material={materials.F02_ISDR_0000001}
        position={[18.58, 9.25, 40.512]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000153' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000154"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000154.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-21.49, 9.25, -4.243]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000154' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000155"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000155.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.24, 9.55, 18.363]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000155' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000156"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000156.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.24, 9.55, 16.852]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000156' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000157"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000157.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.24, 9.55, 10.352]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000157' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000158"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000158.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.24, 9.55, 11.863]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000158' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000159"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000159.geometry}
        material={materials.F02_ISDR_0000001}
        position={[51.435, 9.25, -13.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000159' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000160"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000160.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.65, 9.25, 37.007]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000160' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000161"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000161.geometry}
        material={materials.F02_ISDR_0000001}
        position={[43.485, 9.25, 37.007]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000161' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000162"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000162.geometry}
        material={materials.F02_ISDR_0000001}
        position={[38.65, 9.25, 37.007]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000162' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000163"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000163.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.182, 9.4, -12.418]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000163' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000164"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000164.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.935, 9.55, 29.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000164' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000165"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000165.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-13.431, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000165' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000166"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000166.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-11.931, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000166' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000167"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000167.geometry}
        material={materials.F02_ISDR_0000001}
        position={[31.42, 9.25, 35.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000167' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000168"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000168.geometry}
        material={materials.F02_ISDR_0000001}
        position={[46.96, 9.25, 36.097]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000168' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000169"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000169.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.81, 9.25, 37.007]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000169' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000170"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000170.geometry}
        material={materials.F02_ISDR_0000001}
        position={[26.572, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000170' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000171"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000171.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-25.431, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000171' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000172"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000172.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-9.99, 9.55, 12.939]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000172' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000173"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000173.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.207, 9.25, 44.339]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000173' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000174"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000174.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.875, 9.25, -18.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000174' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000175"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000175.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-2.929, 9.25, 31.556]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000175' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000176"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000176.geometry}
        material={materials.F02_ISDR_0000001}
        position={[45.609, 9.4, -17.16]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000176' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000177"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000177.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-17.931, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000177' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000178"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000178.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.931, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000178' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000179"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000179.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-19.431, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000179' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000180"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000180.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-21.49, 9.25, -10.993]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000180' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000181"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000181.geometry}
        material={materials.F02_ISDR_0000001}
        position={[12.885, 9.4, 22.757]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000181' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000182"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000182.geometry}
        material={materials.F02_ISDR_0000001}
        position={[8.81, 9.25, 6.549]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000182' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000183"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000183.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-19.463, 9.55, 7.558]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000183' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000184"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000184.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.55, 9.55, 15.452]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000184' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000185"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000185.geometry}
        material={materials.F02_ISDR_0000001}
        position={[6.046, 9.55, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000185' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000186"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000186.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.212, 9.25, 35.716]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000186' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000187"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000187.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.806, 9.25, 31.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000187' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000188"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000188.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.212, 9.25, 38.829]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000188' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000189"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000189.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-15.44, 9.55, 19.157]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000189' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000190"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000190.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-16.931, 9.25, 31.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000190' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000191"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000191.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.55, 9.55, 10.294]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000191' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000192"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000192.geometry}
        material={materials.F02_ISDR_0000001}
        position={[5.342, 9.55, 9.68]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000192' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000193"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000193.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-2.815, 9.25, 8.017]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000193' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000194"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000194.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-3.7, 9.25, 5.16]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000194' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000195"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000195.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-18.99, 9.25, -10.993]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000195' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000196"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000196.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-4.95, 9.55, 18.046]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000196' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000197"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000197.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.55, 9.55, 18.41]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000197' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000198"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000198.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-6.139, 9.55, 18.648]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000198' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000199"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000199.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.55, 9.55, 13.459]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000199' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000200"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000200.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-7.366, 9.55, 18.648]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000200' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000201"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000201.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-21.281, 9.25, 31.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000201' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000202"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000202.geometry}
        material={materials.F02_ISDR_0000001}
        position={[11.253, 9.55, 31.564]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000202' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000203"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000203.geometry}
        material={materials.F02_ISDR_0000001}
        position={[8.641, 9.25, 36.472]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000203' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000204"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000204.geometry}
        material={materials.F02_ISDR_0000001}
        position={[7.019, 9.25, 41.617]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000204' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000205"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000205.geometry}
        material={materials.F02_ISDR_0000001}
        position={[3.679, 9.55, 31.564]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000205' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000206"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000206.geometry}
        material={materials.F02_ISDR_0000001}
        position={[2.212, 9.25, 41.714]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000206' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000207"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000207.geometry}
        material={materials.F02_ISDR_0000001}
        position={[18.58, 9.25, 36.332]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000207' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000208"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000208.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.71, 9.55, 9.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000208' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000209"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000209.geometry}
        material={materials.F02_ISDR_0000001}
        position={[16.294, 9.25, 31.564]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000209' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000210"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000210.geometry}
        material={materials.F02_ISDR_0000001}
        position={[9.928, 9.25, 36.472]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000210' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000211"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000211.geometry}
        material={materials.F02_ISDR_0000001}
        position={[12.761, 9.25, 36.472]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000211' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000212"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000212.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-18.681, 9.25, 36.342]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000212' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000213"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000213.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-23.931, 9.25, 39.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000213' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000214"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000214.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.931, 9.25, 31.556]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000214' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000215"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000215.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-15.431, 9.25, 33.837]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000215' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000216"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000216.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-9.181, 9.25, 31.556]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000216' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000217"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000217.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-7.406, 9.25, 40.232]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000217' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000218"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000218.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.906, 9.25, 40.232]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000218' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000219"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000219.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-10.015, 9.25, 5.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000219' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000220"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000220.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-25.431, 9.25, 39.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000220' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000221"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000221.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-20.807, 9.55, 7.558]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000221' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000222"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000222.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-7.431, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000222' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000223"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000223.geometry}
        material={materials.F02_ISDR_0000001}
        position={[11.895, 9.7, -41.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000223' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000224"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000224.geometry}
        material={materials.F02_ISDR_0000001}
        position={[11.235, 9.7, -42.118]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000224' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000225"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000225.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.733, 9.25, -42.636]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000225' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000226"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000226.geometry}
        material={materials.F02_ISDR_0000001}
        position={[13.96, 9.25, -43.493]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000226' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000227"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000227.geometry}
        material={materials.F02_ISDR_0000001}
        position={[12.21, 9.25, -43.518]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000227' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000228"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000228.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-17.65, 9.2, -15.292]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000228' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000229"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000229.geometry}
        material={materials.F02_ISDR_0000001}
        position={[11.235, 9.7, -43.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000229' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000230"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000230.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-5.931, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000230' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000231"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000231.geometry}
        material={materials.F02_ISDR_0000001}
        position={[32.335, 9.25, 16.137]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000231' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000232"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000232.geometry}
        material={materials.F02_ISDR_0000001}
        position={[49.31, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000232' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000233"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000233.geometry}
        material={materials.F02_ISDR_0000001}
        position={[52.31, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000233' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000234"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000234.geometry}
        material={materials.F02_ISDR_0000001}
        position={[44.61, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000234' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000235"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000235.geometry}
        material={materials.F02_ISDR_0000001}
        position={[46.31, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000235' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000236"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000236.geometry}
        material={materials.F02_ISDR_0000001}
        position={[30.185, 9.25, -42.721]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000236' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000237"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000237.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.035, 9.25, -40.642]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000237' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000238"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000238.geometry}
        material={materials.F02_ISDR_0000001}
        position={[50.985, 9.25, -41.943]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000238' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000239"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000239.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.785, 9.25, -42.845]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000239' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000240"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000240.geometry}
        material={materials.F02_ISDR_0000001}
        position={[40.04, 9.25, 17.752]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000240' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000241"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000241.geometry}
        material={materials.F02_ISDR_0000001}
        position={[41.99, 9.25, 17.752]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000241' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000242"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000242.geometry}
        material={materials.F02_ISDR_0000001}
        position={[34.93, 9.25, 13.402]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000242' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000243"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000243.geometry}
        material={materials.F02_ISDR_0000001}
        position={[34.93, 9.25, 6.876]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000243' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000244"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000244.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.775, 9.25, 18.432]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000244' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000245"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000245.geometry}
        material={materials.F02_ISDR_0000001}
        position={[27.135, 9.25, 18.432]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000245' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000246"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000246.geometry}
        material={materials.F02_ISDR_0000001}
        position={[17.859, 9.25, 18.432]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000246' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000247"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000247.geometry}
        material={materials.F02_ISDR_0000001}
        position={[20.112, 9.25, 18.432]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000247' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000248"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000248.geometry}
        material={materials.F02_ISDR_0000001}
        position={[34.93, 9.25, 16.311]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000248' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000249"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000249.geometry}
        material={materials.F02_ISDR_0000001}
        position={[33.14, 9.25, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000249' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000250"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000250.geometry}
        material={materials.F02_ISDR_0000001}
        position={[37.385, 9.25, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000250' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000251"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000251.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.51, 9.25, 35.062]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000251' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000252"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000252.geometry}
        material={materials.F02_ISDR_0000001}
        position={[23.075, 9.25, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000252' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000253"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000253.geometry}
        material={materials.F02_ISDR_0000001}
        position={[46.135, 9.25, 20.814]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000253' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000254"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000254.geometry}
        material={materials.F02_ISDR_0000001}
        position={[48.358, 9.25, 19.857]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000254' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000255"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000255.geometry}
        material={materials.F02_ISDR_0000001}
        position={[38.02, 9.25, 18.327]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000255' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000256"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000256.geometry}
        material={materials.F02_ISDR_0000001}
        position={[42.16, 9.25, 19.287]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000256' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000257"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000257.geometry}
        material={materials.F02_ISDR_0000001}
        position={[40.3, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000257' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000258"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000258.geometry}
        material={materials.F02_ISDR_0000001}
        position={[16.19, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000258' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000259"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000259.geometry}
        material={materials.F02_ISDR_0000001}
        position={[19.31, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000259' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000260"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000260.geometry}
        material={materials.F02_ISDR_0000001}
        position={[6.244, 9.25, 45.311]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000260' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000261"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000261.geometry}
        material={materials.F02_ISDR_0000001}
        position={[6.895, 9.25, 44.619]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000261' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000262"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000262.geometry}
        material={materials.F02_ISDR_0000001}
        position={[31.3, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000262' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000263"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000263.geometry}
        material={materials.F02_ISDR_0000001}
        position={[34.3, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000263' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000264"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000264.geometry}
        material={materials.F02_ISDR_0000001}
        position={[22.31, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000264' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000265"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000265.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.3, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000265' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000266"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000266.geometry}
        material={materials.F02_ISDR_0000001}
        position={[3.474, 9.25, 45.311]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000266' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000267"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000267.geometry}
        material={materials.F02_ISDR_0000001}
        position={[32.92, 9.25, 35.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000267' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000268"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000268.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-22.25, 9.55, 20.813]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000268' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000269"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000269.geometry}
        material={materials.F02_ISDR_0000001}
        position={[37.3, 9.25, 43.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000269' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000270"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000270.geometry}
        material={materials.F02_ISDR_0000001}
        position={[-1.431, 9.25, 43.042]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000270' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000271"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000271.geometry}
        material={materials.F02_ISDR_0000001}
        position={[28.66, 9.25, 31.507]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000271' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000272"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000272.geometry}
        material={materials.F02_ISDR_0000001}
        position={[26.11, 9.25, 30.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000272' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000273"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000273.geometry}
        material={materials.F02_ISDR_0000001}
        position={[24.385, 9.25, 30.782]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000273' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000274"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000274.geometry}
        material={materials.F02_ISDR_0000001}
        position={[29.66, 9.25, 35.317]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000274' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000001.geometry}
        material={materials.F02_ISFL_0000007}
        position={[45.626, 8.15, -2.243]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000002.geometry}
        material={materials.F02_ISFL_0000007}
        position={[39.177, 8.15, -2.243]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000003.geometry}
        material={materials.F02_ISFL_0000009}
        position={[52.135, 8.15, -2.194]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000004.geometry}
        material={materials.F02_ISFL_0000008}
        position={[50.02, 8.15, -3.303]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000005.geometry}
        material={materials.F02_ISFL_0000008}
        position={[49.81, 8.15, -12.343]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000005' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISFL_0000006"
        position={[23.16, 8.15, -2.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000006' }}
      >
        <mesh
          name="Mesh407"
          castShadow
          receiveShadow
          geometry={nodes.Mesh407.geometry}
          material={materials.F02_ISFL_0000002}
        />
        <mesh
          name="Mesh407_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh407_1.geometry}
          material={materials.F02_ISFL_0000008}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000007.geometry}
        material={materials.F02_ISFL_0000007}
        position={[25.76, 8.15, 29.815]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000008.geometry}
        material={materials.F02_ISFL_0000006}
        position={[-21.456, 8.15, 33.392]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000009.geometry}
        material={materials.F02_ISFL_0000003}
        position={[-21.494, 8.15, 4.297]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000010.geometry}
        material={materials.F02_ISFL_0000004}
        position={[37.636, 8.15, 17.732]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000011.geometry}
        material={materials.F02_ISFL_0000003}
        position={[-0.59, 8.15, 14.147]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000012.geometry}
        material={materials.F02_ISFL_0000002}
        position={[23.29, 8.15, 11.482]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000013.geometry}
        material={materials.F02_ISFL_0000004}
        position={[40.2, 8.15, 11.129]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000014.geometry}
        material={materials.F02_ISFL_0000002}
        position={[23.21, 8.15, -14.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000015.geometry}
        material={materials.F02_ISFL_0000002}
        position={[-21.744, 8.15, -31.482]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000016.geometry}
        material={materials.F02_ISFL_0000004}
        position={[34.135, 8.15, -31.705]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000017.geometry}
        material={materials.F02_ISFL_0000001}
        position={[14.935, 8.15, -8.143]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000018.geometry}
        material={materials.F02_ISFL_0000002}
        position={[-4.714, 8.15, 36.415]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000019.geometry}
        material={materials.F02_ISFL_0000005}
        position={[37.633, 8.15, 9.997]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000020.geometry}
        material={materials.F02_ISFL_0000004}
        position={[-2.5, 8.15, -31.482]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000021.geometry}
        material={materials.F02_ISFL_0000004}
        position={[26.714, 8.15, 37.825]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000022.geometry}
        material={materials.F02_ISFL_0000001}
        position={[13.96, 8.15, 27.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000023.geometry}
        material={materials.F02_ISFL_0000006}
        position={[-24.494, 8.15, -18.572]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000023' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000001"
        position={[-21.79, 9.55, 14.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000001' }}
      >
        <mesh
          name="Mesh692"
          castShadow
          receiveShadow
          geometry={nodes.Mesh692.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh692_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh692_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000002"
        position={[14.319, 9.55, 34.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000002' }}
      >
        <mesh
          name="Mesh689"
          castShadow
          receiveShadow
          geometry={nodes.Mesh689.geometry}
          material={materials.F02_ISPL_0000001}
        />
        <mesh
          name="Mesh689_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh689_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000003"
        position={[48.46, 9.55, 34.807]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000003' }}
      >
        <mesh
          name="Mesh688"
          castShadow
          receiveShadow
          geometry={nodes.Mesh688.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh688_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh688_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000004"
        position={[-9.74, 9.55, 1.207]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000004' }}
      >
        <mesh
          name="Mesh697"
          castShadow
          receiveShadow
          geometry={nodes.Mesh697.geometry}
          material={materials.F02_ISPL_0000003}
        />
        <mesh
          name="Mesh697_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh697_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000005"
        position={[8.46, 9.55, -31.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000005' }}
      >
        <mesh
          name="Mesh699"
          castShadow
          receiveShadow
          geometry={nodes.Mesh699.geometry}
          material={materials.F02_ISPL_0000002}
        />
        <mesh
          name="Mesh699_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh699_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000006"
        position={[8.459, 9.55, 14.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000006' }}
      >
        <mesh
          name="Mesh700"
          castShadow
          receiveShadow
          geometry={nodes.Mesh700.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh700_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh700_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000007"
        position={[-21.74, 9.55, 1.207]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000007' }}
      >
        <mesh
          name="Mesh691"
          castShadow
          receiveShadow
          geometry={nodes.Mesh691.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh691_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh691_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000008"
        position={[-9.736, 9.55, -18.593]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000008' }}
      >
        <mesh
          name="Mesh698"
          castShadow
          receiveShadow
          geometry={nodes.Mesh698.geometry}
          material={materials.F02_ISPL_0000003}
        />
        <mesh
          name="Mesh698_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh698_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000009"
        position={[-15.74, 9.55, -5.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000009' }}
      >
        <mesh
          name="Mesh690"
          castShadow
          receiveShadow
          geometry={nodes.Mesh690.geometry}
          material={materials.F02_ISPL_0000004}
        />
        <mesh
          name="Mesh690_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh690_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000010"
        position={[48.46, 9.55, -25.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000010' }}
      >
        <mesh
          name="Mesh696"
          castShadow
          receiveShadow
          geometry={nodes.Mesh696.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh696_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh696_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000011"
        position={[30.464, 9.55, -25.191]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000011' }}
      >
        <mesh
          name="Mesh695"
          castShadow
          receiveShadow
          geometry={nodes.Mesh695.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh695_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh695_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000012"
        position={[-21.79, 9.55, -31.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000012' }}
      >
        <mesh
          name="Mesh694"
          castShadow
          receiveShadow
          geometry={nodes.Mesh694.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh694_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh694_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000013"
        position={[-21.74, 9.55, -25.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000013' }}
      >
        <mesh
          name="Mesh693"
          castShadow
          receiveShadow
          geometry={nodes.Mesh693.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh693_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh693_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000014"
        position={[48.46, 9.55, -31.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000014' }}
      >
        <mesh
          name="Mesh685"
          castShadow
          receiveShadow
          geometry={nodes.Mesh685.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh685_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh685_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000015"
        position={[8.318, 9.55, 34.852]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000015' }}
      >
        <mesh
          name="Mesh687"
          castShadow
          receiveShadow
          geometry={nodes.Mesh687.geometry}
          material={materials.F02_ISPL_0000001}
        />
        <mesh
          name="Mesh687_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh687_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISPL_0000016"
        position={[17.86, 9.55, 21.007]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000016' }}
      >
        <mesh
          name="Mesh686"
          castShadow
          receiveShadow
          geometry={nodes.Mesh686.geometry}
          material={materials.F02_ISPL_0000005}
        />
        <mesh
          name="Mesh686_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh686_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-20.242, 10, -41.458]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-17.239, 10, -41.459]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.237, 10, -41.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-23.243, 10, -41.459]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, -36.742]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-11.233, 10, -41.462]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-2.239, 10, -41.458]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-14.242, 10, -41.455]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000009.geometry}
        material={materials.F00_ISWD_0000001}
        position={[0.766, 10, -41.458]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000010.geometry}
        material={materials.F00_ISWD_0000001}
        position={[3.756, 10, -41.453]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000011.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.508, 10, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000012.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.242, 10, -41.459]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000013.geometry}
        material={materials.F02_ISWD_0000002}
        position={[28.76, 10, 32.87]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000014.geometry}
        material={materials.F00_ISWD_0000001}
        position={[49.96, 10, 27.725]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000015.geometry}
        material={materials.F00_ISWD_0000001}
        position={[49.96, 10, 31.301]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000016.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.24, 10, 24.072]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000017.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.848, 10, 3.122]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000018.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.735, 10, 30.342]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000019.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.717, 10, 38.257]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000020.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.239, 10, 24.072]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000021.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-23.24, 10, 24.047]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000022.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-20.239, 10, 24.046]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000023.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-17.241, 10, 24.045]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000024.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.761, 10, 24.074]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000025.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-2.24, 10, 24.071]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000026.geometry}
        material={materials.F00_ISWD_0000001}
        position={[0.761, 10, 24.072]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000027.geometry}
        material={materials.F00_ISWD_0000001}
        position={[3.76, 10, 24.071]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000028.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.847, 10, -0.843]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000029.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.787, 10, -13.642]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000030.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, -10.343]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000031.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.787, 10, -7.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000032.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.708, 10, -23.542]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000033.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.787, 10, -33.443]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000034.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, -30.142]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000035.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000036.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.787, 10, -3.742]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000037.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.785, 10, 19.358]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000038.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.848, 10, -20.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000039.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.848, 10, -16.543]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000040.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, 16.057]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000041.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, 6.124]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000042.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, 9.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000043.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.786, 10, 12.757]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000044.geometry}
        material={materials.F02_ISWD_0000002}
        position={[45.47, 9.85, 6.28]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000045.geometry}
        material={materials.F02_ISWD_0000002}
        position={[42.595, 9.85, 5.577]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000046.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.331, 10, -20.244]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000047.geometry}
        material={materials.F02_ISWD_0000002}
        position={[45.47, 10, 11.744]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000048.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.436, 10, -7.743]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000049.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.434, 10, -0.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000050.geometry}
        material={materials.F02_ISWD_0000002}
        position={[47.26, 9.7, -5.943]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000051.geometry}
        material={materials.F02_ISWD_0000002}
        position={[43.66, 9.7, -5.943]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000052.geometry}
        material={materials.F02_ISWD_0000001}
        position={[34.93, 9.85, 10.327]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000053.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.333, 10, -36.743]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000054.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.332, 10, -33.443]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000055.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.333, 10, 33.207]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000056.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.336, 10, -40.043]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000057.geometry}
        material={materials.F02_ISWD_0000002}
        position={[32.335, 9.85, 13.355]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000058.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.334, 10, -23.541]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000059.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.332, 10, -30.143]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000060.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.334, 10, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000061.geometry}
        material={materials.F02_ISWD_0000002}
        position={[51.02, 10, -21.209]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000062.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-15.798, 10.15, 26.429]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000063.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.437, 10, -4.143]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000064.geometry}
        material={materials.F02_ISWD_0000002}
        position={[52.029, 10, -24.245]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000065.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.764, 10, -41.456]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000066.geometry}
        material={materials.F02_ISWD_0000001}
        position={[-9.681, 10, 48.61]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000067.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-9.473, 10.15, 26.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000068.geometry}
        material={materials.F02_ISWD_0000001}
        position={[-27.751, 10.15, 40.814]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000068' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000069.geometry}
        material={materials.F02_ISWD_0000002}
        position={[52.03, 10, -27.57]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000069' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000070.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.438, 10, 16.057]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000071.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.435, 10, 12.756]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000072.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.435, 10, 22.658]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000073.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.435, 10, 19.358]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000074.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.437, 10, 2.858]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000074' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000075.geometry}
        material={materials.F02_ISWD_0000002}
        position={[50.405, 10, -30.84]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000075' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000076.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.433, 10, 9.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000076' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000077.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.436, 10, 6.155]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000077' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000078.geometry}
        material={materials.F00_ISWD_0000001}
        position={[8.407, 10, 41.394]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000078' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000079.geometry}
        material={materials.F00_ISWD_0000001}
        position={[15.369, 10, 45.209]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000079' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000080.geometry}
        material={materials.F00_ISWD_0000001}
        position={[46.907, 10, -45.022]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000080' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000081.geometry}
        material={materials.F00_ISWD_0000001}
        position={[49.91, 10, -44.948]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000081' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000082.geometry}
        material={materials.F00_ISWD_0000001}
        position={[19.954, 10, 48.434]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000082' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000083.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.957, 10, 48.436]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000083' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000084.geometry}
        material={materials.F00_ISWD_0000001}
        position={[15.369, 10, 42.208]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000084' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000085.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.972, 10, 48.493]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000085' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000086.geometry}
        material={materials.F00_ISWD_0000001}
        position={[43.908, 10, -45.02]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000086' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000087.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.912, 10, -45.016]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000087' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000088.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.911, 10, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000088' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000089.geometry}
        material={materials.F00_ISWD_0000001}
        position={[19.609, 10, -45.017]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000089' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000090.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.611, 10, -45.017]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000090' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000091.geometry}
        material={materials.F00_ISWD_0000001}
        position={[37.914, 10, -45.024]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000091' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000092.geometry}
        material={materials.F00_ISWD_0000001}
        position={[40.912, 10, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000092' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000093.geometry}
        material={materials.F00_ISWD_0000001}
        position={[31.909, 10, -45.017]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000093' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000094.geometry}
        material={materials.F00_ISWD_0000001}
        position={[34.91, 10, -45.018]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000094' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000095.geometry}
        material={materials.F02_ISWD_0000002}
        position={[25.96, 9.85, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000095' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000096.geometry}
        material={materials.F02_ISWD_0000002}
        position={[30.794, 9.85, 18.432]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000096' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000097.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.96, 10, 48.436]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000097' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000098.geometry}
        material={materials.F02_ISWD_0000002}
        position={[29.06, 9.85, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000098' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000099.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.336, 10, 39.407]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000099' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000100.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.331, 10, 36.207]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000100' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000101.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.337, 10, 45.207]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000101' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000102.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.336, 10, 42.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000102' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000103.geometry}
        material={materials.F00_ISWD_0000001}
        position={[49.956, 10, 48.434]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000103' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000104.geometry}
        material={materials.F00_ISWD_0000001}
        position={[31.957, 10, 48.437]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000104' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000105.geometry}
        material={materials.F00_ISWD_0000001}
        position={[34.956, 10, 48.435]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000105' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000106.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.957, 10, 48.433]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000106' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000107.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.96, 10, 48.435]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000107' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000108.geometry}
        material={materials.F00_ISWD_0000001}
        position={[43.954, 10, 48.435]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000108' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000109.geometry}
        material={materials.F00_ISWD_0000001}
        position={[46.957, 10, 48.436]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000109' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000110.geometry}
        material={materials.F00_ISWD_0000001}
        position={[37.959, 10, 48.434]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000110' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000111.geometry}
        material={materials.F00_ISWD_0000001}
        position={[40.955, 10, 48.435]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000111' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000112.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-15.99, 10, -23.228]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000112' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000113.geometry}
        material={materials.F02_ISWD_0000002}
        position={[22.077, 9.85, -3.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000113' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000114.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.563, 10, 27.365]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000114' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000115.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-19.802, 10, -36.861]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000115' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000116.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-23.486, 10, -36.861]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000116' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000117"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000117.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-24.532, 10, -33.215]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000117' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000118"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000118.geometry}
        material={materials.F00_ISWD_0000001}
        position={[46.885, 10, 27.7]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000118' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000119"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000119.geometry}
        material={materials.F00_ISWD_0000001}
        position={[34.96, 10, 27.702]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000119' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000120"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000120.geometry}
        material={materials.F00_ISWD_0000001}
        position={[31.961, 10, 27.701]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000120' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000121"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000121.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.662, 10, 27.752]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000121' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000122"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000122.geometry}
        material={materials.F02_ISWD_0000002}
        position={[3.693, 10, 9.68]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000122' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000123"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000123.geometry}
        material={materials.F00_ISWD_0000001}
        position={[40.961, 10, 27.7]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000123' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000124"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000124.geometry}
        material={materials.F00_ISWD_0000001}
        position={[37.962, 10, 27.7]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000124' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000125"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000125.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-19.25, 10, -33.215]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000125' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000126"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000126.geometry}
        material={materials.F02_ISWD_0000002}
        position={[2.55, 10, 16.785]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000126' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000127"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000127.geometry}
        material={materials.F02_ISWD_0000002}
        position={[3.304, 10, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000127' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000128"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000128.geometry}
        material={materials.F02_ISWD_0000002}
        position={[7.303, 10, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000128' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000129"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000129.geometry}
        material={materials.F02_ISWD_0000001}
        position={[3.685, 10, 4.507]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000129' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000130"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000130.geometry}
        material={materials.F02_ISWD_0000002}
        position={[2.55, 10, 12.018]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000130' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000131"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000131.geometry}
        material={materials.F02_ISWD_0000002}
        position={[25.653, 9.85, -3.253]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000131' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000132"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000132.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-4.95, 10, 13.055]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000132' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000133"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000133.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-23.24, 10, 13.029]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000133' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000134"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000134.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-23.24, 10, 15.43]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000134' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000135"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000135.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-23.24, 10, 19.613]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000135' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000136"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000136.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-4.95, 10, 15.6]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000136' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000137"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000137.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-8.866, 10, 18.647]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000137' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000138"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000138.geometry}
        material={materials.F02_ISWD_0000002}
        position={[-23.24, 10, 9.029]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000138' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000139"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000139.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.96, 10, 27.75]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000139' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000140"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000140.geometry}
        material={materials.F02_ISWD_0000002}
        position={[37.264, 10, -24.898]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000140' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000141"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000141.geometry}
        material={materials.F00_ISWD_0000001}
        position={[43.959, 10, 27.699]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000141' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000142"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000142.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-17.184, 10.15, 28.707]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000142' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000143"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000143.geometry}
        material={materials.F00_ISWD_0000001}
        position={[12.809, 10, 40.134]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000143' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000144"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000144.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-23.184, 10.15, 28.706]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000144' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000145"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000145.geometry}
        material={materials.F00_ISWD_0000001}
        position={[9.809, 10, 40.134]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000145' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000146"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000146.geometry}
        material={materials.F00_ISWD_0000001}
        position={[0.815, 10.15, 28.65]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000146' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000147"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000147.geometry}
        material={materials.F00_ISWD_0000001}
        position={[3.815, 10.15, 28.651]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000147' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000148"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000148.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-20.185, 10.15, 28.705]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000148' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000149"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000149.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-2.184, 10.15, 28.654]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000149' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000150"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000150.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.184, 10.15, 28.653]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000150' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000151"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000151.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.186, 10.15, 28.653]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000151' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000001.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-9.99, 9.55, 10.721]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000002.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-15.44, 9.55, 12.323]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000003.geometry}
        material={materials.F02_ISWL_0000028}
        position={[53.009, 9.25, -9.125]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000003' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000004"
        position={[13.331, 10.15, 1.937]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000004' }}
      >
        <mesh
          name="Mesh617"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617.geometry}
          material={materials.F02_ISWL_0000001}
        />
        <mesh
          name="Mesh617_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_1.geometry}
          material={materials.F02_ISWL_0000002}
        />
        <mesh
          name="Mesh617_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_2.geometry}
          material={materials.F02_ISWL_0000005}
        />
        <mesh
          name="Mesh617_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_3.geometry}
          material={materials.F02_ISWL_0000003}
        />
        <mesh
          name="Mesh617_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_4.geometry}
          material={materials.F02_ISWL_0000031}
        />
        <mesh
          name="Mesh617_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_5.geometry}
          material={materials.F02_ISWL_0000008}
        />
        <mesh
          name="Mesh617_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_6.geometry}
          material={materials.F02_ISWL_0000007}
        />
        <mesh
          name="Mesh617_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_7.geometry}
          material={materials.F02_ISWL_0000006}
        />
        <mesh
          name="Mesh617_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_8.geometry}
          material={materials.F02_ISWL_0000009}
        />
        <mesh
          name="Mesh617_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_9.geometry}
          material={materials.F02_ISWL_0000010}
        />
        <mesh
          name="Mesh617_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_10.geometry}
          material={materials.F02_ISWL_0000011}
        />
        <mesh
          name="Mesh617_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_11.geometry}
          material={materials.F02_ISWL_0000012}
        />
        <mesh
          name="Mesh617_12"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_12.geometry}
          material={materials.F02_ISWL_0000013}
        />
        <mesh
          name="Mesh617_13"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_13.geometry}
          material={materials.F02_ISWL_0000014}
        />
        <mesh
          name="Mesh617_14"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_14.geometry}
          material={materials.F02_ISWL_0000032}
        />
        <mesh
          name="Mesh617_15"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_15.geometry}
          material={materials.F02_ISWL_0000015}
        />
        <mesh
          name="Mesh617_16"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_16.geometry}
          material={materials.F02_ISWL_0000016}
        />
        <mesh
          name="Mesh617_17"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_17.geometry}
          material={materials.F02_ISWL_0000029}
        />
        <mesh
          name="Mesh617_18"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_18.geometry}
          material={materials.F02_ISWL_0000019}
        />
        <mesh
          name="Mesh617_19"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_19.geometry}
          material={materials.F02_ISWL_0000020}
        />
        <mesh
          name="Mesh617_20"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_20.geometry}
          material={materials.F02_ISWL_0000021}
        />
        <mesh
          name="Mesh617_21"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_21.geometry}
          material={materials.F02_ISWL_0000017}
        />
        <mesh
          name="Mesh617_22"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_22.geometry}
          material={materials.F02_ISWL_0000004}
        />
        <mesh
          name="Mesh617_23"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_23.geometry}
          material={materials.F02_ISWL_0000026}
        />
        <mesh
          name="Mesh617_24"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_24.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh617_25"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_25.geometry}
          material={materials.F02_ISWL_0000024}
        />
        <mesh
          name="Mesh617_26"
          castShadow
          receiveShadow
          geometry={nodes.Mesh617_26.geometry}
          material={materials.F02_ISWL_0000025}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000005"
        position={[13.31, 10.15, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000005' }}
      >
        <mesh
          name="Mesh615"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615.geometry}
          material={materials.F02_ISWL_0000009}
        />
        <mesh
          name="Mesh615_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_1.geometry}
          material={materials.F02_ISWL_0000003}
        />
        <mesh
          name="Mesh615_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_2.geometry}
          material={materials.F02_ISWL_0000022}
        />
        <mesh
          name="Mesh615_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_3.geometry}
          material={materials.F02_ISWL_0000023}
        />
        <mesh
          name="Mesh615_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_4.geometry}
          material={materials.F02_ISWL_0000006}
        />
        <mesh
          name="Mesh615_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_5.geometry}
          material={materials.F02_ISWL_0000001}
        />
        <mesh
          name="Mesh615_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_6.geometry}
          material={materials.F02_ISWL_0000026}
        />
        <mesh
          name="Mesh615_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_7.geometry}
          material={materials.F02_ISWL_0000030}
        />
        <mesh
          name="Mesh615_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_8.geometry}
          material={materials.F02_ISWL_0000014}
        />
        <mesh
          name="Mesh615_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_9.geometry}
          material={materials.F02_ISWL_0000011}
        />
        <mesh
          name="Mesh615_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh615_10.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000006.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-9.99, 9.55, 16.699]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000007.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-14.957, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000008.geometry}
        material={materials.F02_ISWL_0000028}
        position={[20.897, 9.55, -21.943]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000009.geometry}
        material={materials.F02_ISWL_0000028}
        position={[37.927, 9.55, -23.347]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000010.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-15.44, 9.55, 22.34]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000011.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-11.49, 9.55, -36.645]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000012.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-10.757, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000013.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-17.969, 9.55, -0.476]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000014.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-20.557, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000015.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-16.873, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000016.geometry}
        material={materials.F02_ISWL_0000033}
        position={[10.614, 9.678, 19.247]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000017.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-12.39, 9.55, -33.32]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000018.geometry}
        material={materials.F02_ISWL_0000033}
        position={[23.8, 9.678, 6.068]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000019.geometry}
        material={materials.F02_ISWL_0000033}
        position={[23.7, 9.678, -11.163]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000020.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-7.365, 9.55, -36.645]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000021.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-17.19, 9.25, -28.993]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000022.geometry}
        material={materials.F02_ISWL_0000018}
        position={[-0.69, 8.9, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000023.geometry}
        material={materials.F02_ISWL_0000028}
        position={[44.336, 9.55, -21.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000024.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-19.25, 9.25, -30.034]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000025.geometry}
        material={materials.F02_ISWL_0000033}
        position={[-24.662, 9.703, -23.958]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000026.geometry}
        material={materials.F02_ISWL_0000033}
        position={[-14.256, 9.984, -28.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000027.geometry}
        material={materials.F02_ISWL_0000032}
        position={[-27.594, 10.593, -8.688]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000028.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-13.557, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000029.geometry}
        material={materials.F02_ISWL_0000028}
        position={[18.76, 9.55, 4.506]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000030.geometry}
        material={materials.F02_ISWL_0000028}
        position={[22.985, 9.55, 33.345]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000031.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-15.44, 9.55, 15.974]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000032.geometry}
        material={materials.F02_ISWL_0000022}
        position={[42.46, 8.65, 29.517]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000033.geometry}
        material={materials.F02_ISWL_0000022}
        position={[-3.676, 8.65, 26.465]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000033' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000034"
        position={[-18.769, 10.15, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000034' }}
      >
        <mesh
          name="Mesh420"
          castShadow
          receiveShadow
          geometry={nodes.Mesh420.geometry}
          material={materials.F02_ISWL_0000027}
        />
        <mesh
          name="Mesh420_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh420_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000035"
        position={[38.71, 10.15, 28.842]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000035' }}
      >
        <mesh
          name="Mesh400"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400.geometry}
          material={materials.F02_ISWL_0000009}
        />
        <mesh
          name="Mesh400_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400_1.geometry}
          material={materials.F02_ISWL_0000003}
        />
        <mesh
          name="Mesh400_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400_2.geometry}
          material={materials.F02_ISWL_0000024}
        />
        <mesh
          name="Mesh400_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400_3.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000036.geometry}
        material={materials.F02_ISWL_0000022}
        position={[2.314, 8.65, 26.465]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000037.geometry}
        material={materials.F02_ISWL_0000028}
        position={[8.039, 9.55, 31.564]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000038.geometry}
        material={materials.F02_ISWL_0000028}
        position={[-10.981, 9.55, 31.556]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000038' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000039"
        position={[13.414, 10.15, 8.337]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000039' }}
      >
        <mesh
          name="Mesh008"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008.geometry}
          material={materials.F02_ISWL_0000001}
        />
        <mesh
          name="Mesh008_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_1.geometry}
          material={materials.F02_ISWL_0000006}
        />
        <mesh
          name="Mesh008_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_2.geometry}
          material={materials.F02_ISWL_0000007}
        />
        <mesh
          name="Mesh008_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_3.geometry}
          material={materials.F02_ISWL_0000011}
        />
        <mesh
          name="Mesh008_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_4.geometry}
          material={materials.F02_ISWL_0000010}
        />
        <mesh
          name="Mesh008_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_5.geometry}
          material={materials.F02_ISWL_0000017}
        />
        <mesh
          name="Mesh008_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_6.geometry}
          material={materials.F02_ISWL_0000003}
        />
        <mesh
          name="Mesh008_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_7.geometry}
          material={materials.F02_ISWL_0000009}
        />
        <mesh
          name="Mesh008_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_8.geometry}
          material={materials.F02_ISWL_0000024}
        />
        <mesh
          name="Mesh008_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_9.geometry}
          material={materials.F02_ISWL_0000026}
        />
        <mesh
          name="Mesh008_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_10.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh008_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh008_11.geometry}
          material={materials.F02_ISWL_0000032}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000040.geometry}
        material={materials.F02_ISWL_0000028}
        position={[22.768, 9.55, -15.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000041.geometry}
        material={materials.F02_ISWL_0000028}
        position={[18.547, 9.55, -15.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000041' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000042"
        position={[-0.716, 11.55, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000042' }}
      >
        <mesh
          name="Mesh198"
          castShadow
          receiveShadow
          geometry={nodes.Mesh198.geometry}
          material={materials.F02_ISWL_0000003}
        />
        <mesh
          name="Mesh198_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh198_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000043.geometry}
        material={materials.F02_ISWL_0000028}
        position={[18.835, 9.55, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000044.geometry}
        material={materials.F02_ISWL_0000028}
        position={[27.749, 9.4, -5.893]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000045.geometry}
        material={materials.F02_ISWL_0000028}
        position={[21.985, 9.55, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000046.geometry}
        material={materials.F02_ISWL_0000028}
        position={[30.825, 9.55, -21.912]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000047.geometry}
        material={materials.F02_ISWL_0000028}
        position={[22.41, 9.55, 4.506]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000048.geometry}
        material={materials.F02_ISWL_0000028}
        position={[35.909, 9.55, 2.464]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000049.geometry}
        material={materials.F02_ISWL_0000022}
        position={[36.46, 8.65, 29.517]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100001.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.709, 10.112, 8.196]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100002.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.695, 9.175, 6.665]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100003.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.695, 9.175, 5.931]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100004.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.69, 9.1, 8.196]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100005.geometry}
        material={materials.F00_MDFC_1100001}
        position={[30.831, 9.1, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100006.geometry}
        material={materials.F00_MDFC_1100001}
        position={[20.81, 9.1, -6.387]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100007.geometry}
        material={materials.F00_MDFC_1100001}
        position={[18.745, 10.112, 4.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100008.geometry}
        material={materials.F00_MDFC_1100001}
        position={[20.828, 10.112, -6.386]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100009.geometry}
        material={materials.F00_MDFC_1100001}
        position={[17.865, 10.112, -9.171]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100010.geometry}
        material={materials.F00_MDFC_1100001}
        position={[17.848, 9.1, -9.171]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100011.geometry}
        material={materials.F00_MDFC_1100001}
        position={[18.727, 9.1, 4.082]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100012.geometry}
        material={materials.F00_MDFC_1100001}
        position={[31.519, 10.112, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100013.geometry}
        material={materials.F00_MDFC_1100001}
        position={[17.037, 9.175, 20.987]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100014.geometry}
        material={materials.F00_MDFC_1100001}
        position={[16.498, 9.1, 1.985]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100015.geometry}
        material={materials.F00_MDFC_1100001}
        position={[31.501, 9.1, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100016.geometry}
        material={materials.F00_MDFC_1100001}
        position={[16.516, 10.112, 1.985]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100017.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.709, 10.112, 7.494]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100018.geometry}
        material={materials.F00_MDFC_1100001}
        position={[16.507, 9.1, -27.658]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100019.geometry}
        material={materials.F00_MDFC_1100001}
        position={[16.525, 10.112, -27.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100020.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-9.59, 10.112, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100021.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-9.608, 9.1, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100022.geometry}
        material={materials.F00_MDFC_1100001}
        position={[15.314, 9.1, -27.658]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100023.geometry}
        material={materials.F00_MDFC_1100001}
        position={[15.332, 10.112, -27.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100024.geometry}
        material={materials.F00_MDFC_1100001}
        position={[9.252, 9.1, -26.548]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100025.geometry}
        material={materials.F00_MDFC_1100001}
        position={[9.269, 10.112, -26.548]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100026.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-10.249, 9.1, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100027.geometry}
        material={materials.F00_MDFC_1100001}
        position={[30.849, 10.112, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100028.geometry}
        material={materials.F00_MDFC_1100001}
        position={[32.632, 9.175, -18.049]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100029.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.695, 9.175, 5.191]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100030.geometry}
        material={materials.F00_MDFC_1100001}
        position={[13.69, 9.1, 7.494]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100031.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.019, 9.175, -18.96]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100032.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-10.231, 10.112, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100033.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-17.538, 10.112, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100034.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-17.556, 9.1, -21.46]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100035.geometry}
        material={materials.F00_MDFC_1100001}
        position={[19.012, 9.1, 37.329]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100036.geometry}
        material={materials.F00_MDFC_1100001}
        position={[14.899, 10.112, 29.428]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100037.geometry}
        material={materials.F00_MDFC_1100001}
        position={[19.012, 9.1, 38.059]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100038.geometry}
        material={materials.F00_MDFC_1100001}
        position={[19.03, 10.112, 37.329]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100039.geometry}
        material={materials.F00_MDFC_1100001}
        position={[14.881, 9.1, 29.428]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100040.geometry}
        material={materials.F00_MDFC_1100001}
        position={[51.925, 10.112, 37.522]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100041.geometry}
        material={materials.F00_MDFC_1100001}
        position={[35.029, 9.175, 35.217]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100042.geometry}
        material={materials.F00_MDFC_1100001}
        position={[19.03, 10.112, 38.059]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100043.geometry}
        material={materials.F00_MDFC_1100001}
        position={[51.907, 9.1, 37.522]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100044.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.901, 9.1, -5.816]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100045.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.022, 10.112, 15.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100046.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.039, 9.1, 15.783]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100047.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-14.866, 9.175, 4.827]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100048.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-14.866, 9.175, 3.655]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100049.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.022, 10.112, 16.55]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100050.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-10.466, 10.112, 11.673]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100051.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-10.484, 9.1, 11.673]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100052.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.039, 9.1, 16.55]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100053.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-14.866, 9.175, 2.483]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100053' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100054.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.901, 9.1, -5.183]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100054' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100055.geometry}
        material={materials.F00_MDFC_1100001}
        position={[43.198, 9.1, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100055' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100056.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-14.866, 9.175, 1.311]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100056' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100057.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-15.019, 9.175, -18.248]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100058.geometry}
        material={materials.F00_MDFC_1100001}
        position={[43.215, 10.112, -21.501]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100058' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100059.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.883, 10.112, -3.21]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100060.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.901, 9.1, -3.211]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100060' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100061.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.883, 10.112, -5.816]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100061' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100062.geometry}
        material={materials.F00_MDFC_1100001}
        position={[-20.883, 10.112, -5.183]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100062' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100063.geometry}
        material={materials.F00_MDFC_1100001}
        position={[34.256, 9.1, 35.026]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100063' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1100064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1100064.geometry}
        material={materials.F00_MDFC_1100001}
        position={[34.274, 10.112, 35.026]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1100064' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200001.geometry}
        material={materials.F00_MDFC_1200001}
        position={[13.887, 8.943, 12.216]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200002.geometry}
        material={materials.F00_MDFC_1200001}
        position={[16.407, 8.943, 28.162]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200003.geometry}
        material={materials.F00_MDFC_1200001}
        position={[18.363, 8.943, 34.849]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200004.geometry}
        material={materials.F00_MDFC_1200001}
        position={[17.379, 8.943, 28.161]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200005.geometry}
        material={materials.F00_MDFC_1200001}
        position={[13.887, 8.943, 13.333]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200006.geometry}
        material={materials.F00_MDFC_1200001}
        position={[13.887, 8.943, 9.983]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200007.geometry}
        material={materials.F00_MDFC_1200001}
        position={[2.356, 8.609, -27.287]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200008.geometry}
        material={materials.F00_MDFC_1200001}
        position={[17.833, 8.943, -11.211]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200009.geometry}
        material={materials.F00_MDFC_1200001}
        position={[-21.944, 8.943, 15.03]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200010.geometry}
        material={materials.F00_MDFC_1200001}
        position={[-19.592, 8.609, 39.688]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200011.geometry}
        material={materials.F00_MDFC_1200001}
        position={[13.887, 8.943, 11.1]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200012.geometry}
        material={materials.F00_MDFC_1200001}
        position={[-5.237, 8.943, 14.583]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200001.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-11.306, 10.847, -22.294]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200002.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-16.616, 10.847, -22.294]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200003.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-11.356, 10.847, -30.639]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200004.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-12.26, 10.847, -21.057]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200005.geometry}
        material={materials.F00_SFFC_0200001}
        position={[13.81, 10.847, -28.561]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200006.geometry}
        material={materials.F00_SFFC_0200001}
        position={[20.864, 10.847, -25.216]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200007.geometry}
        material={materials.F00_SFFC_0200001}
        position={[12.126, 10.847, -33.454]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200008.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-5.319, 10.847, 18.367]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200009.geometry}
        material={materials.F00_SFFC_0200001}
        position={[8.697, 10.847, 2.99]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200010.geometry}
        material={materials.F00_SFFC_0200001}
        position={[36.946, 10.847, -22.587]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200011.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-22.61, 10.847, 20.081]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200012.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-24.114, 10.847, -36.369]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200013.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-27.218, 10.847, -30.869]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200014.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-22.61, 10.847, 8.404]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200015.geometry}
        material={materials.F00_SFFC_0200001}
        position={[46.815, 10.847, 7.656]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200016.geometry}
        material={materials.F00_SFFC_0200001}
        position={[36.201, 10.847, 1.751]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200017.geometry}
        material={materials.F00_SFFC_0200001}
        position={[35.34, 10.847, 3.702]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200018.geometry}
        material={materials.F00_SFFC_0200001}
        position={[32.578, 10.847, -7.808]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200019.geometry}
        material={materials.F00_SFFC_0200001}
        position={[49.423, 10.847, -30.488]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200020.geometry}
        material={materials.F00_SFFC_0200001}
        position={[45.961, 10.847, -20.086]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200021.geometry}
        material={materials.F00_SFFC_0200001}
        position={[44.345, 10.847, -7.808]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200022.geometry}
        material={materials.F00_SFFC_0200001}
        position={[6.776, 10.847, 31.892]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200023.geometry}
        material={materials.F00_SFFC_0200001}
        position={[14.761, 10.847, -20.266]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200024.geometry}
        material={materials.F00_SFFC_0200001}
        position={[11.634, 10.847, -20.266]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200025.geometry}
        material={materials.F00_SFFC_0200001}
        position={[22.269, 10.847, 39.59]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200026.geometry}
        material={materials.F00_SFFC_0200001}
        position={[15.187, 10.847, 20.165]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200027.geometry}
        material={materials.F00_SFFC_0200001}
        position={[19.577, 10.847, 26.665]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200028.geometry}
        material={materials.F00_SFFC_0200001}
        position={[38.507, 10.847, 39.929]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200029.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-12.555, 10.847, 21.028]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200030.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-12.555, 10.847, 4.917]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200030' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200031.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-11.912, 10.847, 0.874]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200031' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200032.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-12.253, 10.847, 41.112]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200033.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-8.908, 10.847, 30.307]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200033' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200034.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-23.573, 10.847, 29.76]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200034' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200035.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-1.078, 10.847, 41.781]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200035' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200036.geometry}
        material={materials.F00_SFFC_0200001}
        position={[14.915, 10.847, -7.808]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200036' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200037.geometry}
        material={materials.F00_SFFC_0200001}
        position={[11.397, 10.847, 4.287]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200037' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200038.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-11.912, 10.847, -9.802]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200039.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-11.912, 10.847, -10.557]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200039' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200040.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-21.915, 10.847, -6.138]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200040' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200041.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-26.904, 10.847, 41.436]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200041' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200042.geometry}
        material={materials.F00_SFFC_0200001}
        position={[20.209, 10.847, 10.058]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200043.geometry}
        material={materials.F00_SFFC_0200001}
        position={[13.922, 10.847, 36.137]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200043' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200044.geometry}
        material={materials.F00_SFFC_0200001}
        position={[23.455, 10.847, 4.862]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200044' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200045.geometry}
        material={materials.F00_SFFC_0200001}
        position={[13.916, 10.847, 9.046]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200045' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200046.geometry}
        material={materials.F00_SFFC_0200001}
        position={[10.097, 10.847, 13.349]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200046' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200047.geometry}
        material={materials.F00_SFFC_0200001}
        position={[6.79, 10.847, 36.137]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200048.geometry}
        material={materials.F00_SFFC_0200001}
        position={[5.776, 10.847, 44.811]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200048' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200049.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-0.445, 10.847, 29.48]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200050.geometry}
        material={materials.F00_SFFC_0200001}
        position={[5.696, 10.847, 31.951]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200050' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200051.geometry}
        material={materials.F00_SFFC_0200001}
        position={[6.782, 10.847, 29.593]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200051' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_SFFC_0200052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_SFFC_0200052.geometry}
        material={materials.F00_SFFC_0200001}
        position={[2.77, 10.847, 44.811]}
        userData={{ name: 'M_SUNGSIM0001F02F02_SFFC_0200052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800001.geometry}
        material={materials.F03_MVFC_0800001}
        position={[33.331, 10.15, 32.99]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800002.geometry}
        material={materials.F03_MVFC_0800001}
        position={[52.96, 10.15, -15.543]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800003.geometry}
        material={materials.F03_MVFC_0800001}
        position={[-18.73, 10.15, -15.31]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800004.geometry}
        material={materials.F03_MVFC_0800001}
        position={[9.96, 10.15, -44.893]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800004' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800005.geometry}
        material={materials.F03_MVFC_0800001}
        position={[9.981, 10.15, 27.407]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800005' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F03_MVFC_0800006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F03_MVFC_0800006.geometry}
        material={materials.F03_MVFC_0800001}
        position={[-26.122, 10.15, 32.17]}
        userData={{ name: 'M_SUNGSIM0001F02F03_MVFC_0800006' }}
      />
    </group>
  )
}

useGLTF.preload(url)
