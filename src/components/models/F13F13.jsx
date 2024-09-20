import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useMemo } from 'react'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F13F13.json'
import kind from '../../assets/F13F13_KIND.json'

const url = './models/F13F13.glb'
const rmData = [
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1200001',
    position: [22.994, 53.65, -13.906],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1200001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1200002',
    position: [26.494, 53.65, -14.169],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1200002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1200003',
    position: [29.694, 53.65, -13.969],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1200003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1200004',
    position: [18.544, 53.65, -13.669],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1200004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1400001',
    position: [52.994, 53.65, -7.553],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1400001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1700001',
    position: [19.244, 53.65, -33.356],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1700001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1700002',
    position: [21.194, 53.65, -24.814],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1700002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1700003',
    position: [21.194, 53.65, -31.831],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1700003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_BSRM_1700004',
    position: [19.894, 53.65, -38.319],
    userData: { name: 'M_SUNGSIM0001F13F13_BSRM_1700004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200001',
    position: [19.344, 53.65, 20.107],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200002',
    position: [19.293, 53.65, 15.232],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200003',
    position: [22.439, 53.65, -20.139],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200004',
    position: [21.642, 53.65, 6.462],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200005',
    position: [21.642, 53.65, 3.982],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200005' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200006',
    position: [19.344, 53.65, 21.882],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200006' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200007',
    position: [18.591, 53.65, 4.287],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200007' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200008',
    position: [19.344, 53.65, 26.707],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200008' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200009',
    position: [19.444, 53.65, -20.539],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200009' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0200010',
    position: [18.591, 53.65, 5.617],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0200010' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_CVRM_0400001',
    position: [21.043, 53.65, 1.032],
    userData: { name: 'M_SUNGSIM0001F13F13_CVRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0300001',
    position: [19.569, 53.65, -10.856],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500001',
    position: [11.544, 53.65, 17.632],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500002',
    position: [21.387, 53.65, 25.92],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500003',
    position: [21.37, 53.65, 17.658],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500004',
    position: [11.544, 53.65, 4.432],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500005',
    position: [11.544, 53.65, 11.032],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500005' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500006',
    position: [21.193, 53.65, 11.057],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500006' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500007',
    position: [11.544, 53.65, -2.218],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500007' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500008',
    position: [21.387, 53.65, 22.62],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500008' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0500009',
    position: [11.233, 53.65, -8.718],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0500009' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0700001',
    position: [31.269, 53.65, -12.669],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0700001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0700002',
    position: [19.369, 54.2, -4.043],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0700002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0700003',
    position: [22.769, 53.65, -3.018],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0700003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0700004',
    position: [19.044, 53.65, -1.368],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0700004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0800001',
    position: [19.135, 53.65, 16.869],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0800001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0900001',
    position: [15.369, 53.65, 19.98],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0900001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0900002',
    position: [15.368, 53.65, 6.779],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0900002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0900003',
    position: [15.342, 53.65, 0.179],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0900003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MDRM_0900004',
    position: [15.369, 53.65, 13.13],
    userData: { name: 'M_SUNGSIM0001F13F13_MDRM_0900004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900001',
    position: [13.394, 53.65, 28.532],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900002',
    position: [14.419, 53.65, 28.532],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900003',
    position: [23.069, 53.65, -43.468],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900004',
    position: [11.669, 53.65, -42.318],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900005',
    position: [46.916, 54.2, -11.618],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900005' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900006',
    position: [18.019, 53.65, 26.707],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900006' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900007',
    position: [11.669, 53.65, -39.768],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900007' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900008',
    position: [11.544, 53.65, -36.581],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900008' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900009',
    position: [6.969, 53.55, -8.718],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900009' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900010',
    position: [11.544, 53.65, -23.319],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900010' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900011',
    position: [22.814, 53.65, -22.264],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900011' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900012',
    position: [11.544, 53.65, -16.719],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900012' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900013',
    position: [11.683, 53.65, 22.782],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900013' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900014',
    position: [11.544, 53.65, -29.881],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900014' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900015',
    position: [18.019, 53.65, 21.982],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900015' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900016',
    position: [53.019, 53.65, -11.093],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900016' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900017',
    position: [46.916, 54.2, -17.381],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900017' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900018',
    position: [20.469, 53.65, 11.782],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900018' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900019',
    position: [18.019, 53.65, 19.982],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900019' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900020',
    position: [49.819, 53.65, -12.518],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900020' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900021',
    position: [20.444, 53.65, -32.466],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900021' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900022',
    position: [39.119, 53.65, -10.318],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900022' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900023',
    position: [13.969, 53.65, 27.16],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900023' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900024',
    position: [17.994, 53.65, 15.382],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900024' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_ETRM_9900025',
    position: [20.719, 53.65, -1.368],
    userData: { name: 'M_SUNGSIM0001F13F13_ETRM_9900025' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0100001',
    position: [53.019, 54.2, -15.518],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0100001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0100002',
    position: [9.894, 54.2, -44.918],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0100002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0100003',
    position: [9.894, 54.2, 27.532],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0100003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0300001',
    position: [49.794, 54.2, -16.943],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0300002',
    position: [37.869, 54.2, -14.743],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0300002' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0300003',
    position: [40.719, 54.2, -14.743],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0300003' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0300004',
    position: [46.916, 54.2, -14.855],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0300004' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0300005',
    position: [13.97, 54.2, -44.918],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0300005' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0400001',
    position: [28.869, 54.2, -10.519],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0700001',
    position: [33.294, 53.65, -18.504],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0700001' },
  },
  {
    name: 'M_SUNGSIM0001F13F13_MVRM_0700002',
    position: [19.344, 53.65, 7.207],
    userData: { name: 'M_SUNGSIM0001F13F13_MVRM_0700002' },
  },
]

export function F13F13(props) {
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
      <TransAnnotation label={Label} kind={kind} floor={'13F'} height={53} />
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
        name="M_SUNGSIM0001F13F13_ETFC_9900001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900001.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, -10.689]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900002.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.538, 53.034, -10.689]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900003.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.45, 53.034, -10.689]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900004.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.45, 53.034, -6.746]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900005.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.538, 53.034, -6.746]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900006.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, -6.746]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900007.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, -4.491]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900008.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.423, 53.034, -4.491]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900009.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.189, 53.034, -4.491]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900010.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.189, 53.034, 0.054]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900011.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.423, 53.034, 0.054]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900012.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 0.054]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900012' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900013.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 2.211]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900013' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900014.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 2.211]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900014' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900015.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 2.211]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900015' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900016.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 6.654]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900016' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900017.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 6.654]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900017' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900018.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 6.654]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900018' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900019.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 8.811]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900019' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900020.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 8.811]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900020' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900021.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 8.811]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900021' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900022.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900022' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900023.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900023' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900024.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900024' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900025.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 15.411]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900025' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900026.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 15.411]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900026' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900027.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 15.411]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900027' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900028.geometry}
        material={materials.F13_ETFC_9900002}
        position={[13.218, 53.034, 19.854]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900028' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900029.geometry}
        material={materials.F13_ETFC_9900002}
        position={[11.426, 53.034, 19.854]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900029' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900030.geometry}
        material={materials.F13_ETFC_9900002}
        position={[9.627, 53.034, 19.854]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900030' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900031.geometry}
        material={materials.F13_ETFC_9900002}
        position={[19.502, 53.034, 8.86]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900031' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900032.geometry}
        material={materials.F13_ETFC_9900002}
        position={[21.302, 53.034, 8.86]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900032' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900033.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 8.86]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900033' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900034.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900034' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900035.geometry}
        material={materials.F13_ETFC_9900002}
        position={[21.302, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900035' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900036.geometry}
        material={materials.F13_ETFC_9900002}
        position={[19.502, 53.034, 13.254]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900036' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900037.geometry}
        material={materials.F13_ETFC_9900002}
        position={[21.302, 53.034, 15.411]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900037' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900038.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 15.411]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900038' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900039.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 19.904]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900039' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900040.geometry}
        material={materials.F13_ETFC_9900002}
        position={[21.302, 53.034, 19.904]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900040' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900041.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 22.011]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900041' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900042.geometry}
        material={materials.F13_ETFC_9900002}
        position={[23.094, 53.034, 26.504]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900042' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900043.geometry}
        material={materials.F13_ETFC_9900001}
        position={[19.029, 54.76, -9.699]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900043' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900044.geometry}
        material={materials.F13_ETFC_9900001}
        position={[19.029, 52.9, -9.699]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900044' }}
      />

      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100001.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.503, 54.366, 14.279]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100002.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.503, 54.366, 3.738]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100003.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.503, 54.366, 6.18]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100004.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.503, 54.366, 9.385]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100005.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.503, 54.366, 15.288]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100006.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.555, 54.366, 20.069]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100007.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.555, 54.366, 21.91]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100008.geometry}
        material={materials.F00_FFFC_0100001}
        position={[17.505, 54.366, 26.69]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100009.geometry}
        material={materials.F00_FFFC_0100001}
        position={[15.233, 54.366, 15.923]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100010.geometry}
        material={materials.F00_FFFC_0100001}
        position={[15.233, 54.366, 9.467]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100011.geometry}
        material={materials.F00_FFFC_0100001}
        position={[15.233, 54.366, 2.803]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100012.geometry}
        material={materials.F00_FFFC_0100001}
        position={[15.233, 54.366, -3.82]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100012' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0100013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0100013.geometry}
        material={materials.F00_FFFC_0100001}
        position={[15.233, 54.366, -11.04]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0100013' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200001.geometry}
        material={materials.F00_FFFC_0200001}
        position={[24.187, 52.664, 17.763]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200002.geometry}
        material={materials.F00_FFFC_0200001}
        position={[8.351, 52.664, 17.677]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200003.geometry}
        material={materials.F00_FFFC_0200001}
        position={[24.402, 52.664, 11.088]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200004.geometry}
        material={materials.F00_FFFC_0200001}
        position={[15.375, 52.664, 23.035]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200005.geometry}
        material={materials.F00_FFFC_0200001}
        position={[8.351, 52.664, 11.077]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200006.geometry}
        material={materials.F00_FFFC_0200001}
        position={[21.62, 52.664, -5.997]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200007.geometry}
        material={materials.F00_FFFC_0200001}
        position={[15.348, 52.664, 8.084]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200008.geometry}
        material={materials.F00_FFFC_0200001}
        position={[8.351, 52.664, 4.476]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0200009.geometry}
        material={materials.F00_FFFC_0200001}
        position={[8.548, 52.664, -2.123]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0400001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0400001.geometry}
        material={materials.F00_FFFC_0400001}
        position={[24.843, 53.652, -9.809]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0400001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0400002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0400002.geometry}
        material={materials.F00_FFFC_0400001}
        position={[24.843, 53.652, -9.9]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0400002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0500001.geometry}
        material={materials.F00_FFFC_0500001}
        position={[15.24, 52.682, 8.692]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0500002.geometry}
        material={materials.F00_FFFC_0500001}
        position={[18.301, 54.835, -8.377]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0500003.geometry}
        material={materials.F00_FFFC_0500001}
        position={[13.034, 54.696, 26.933]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0500004.geometry}
        material={materials.F00_FFFC_0500001}
        position={[14.394, 54.696, 25.917]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0700001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0700001.geometry}
        material={materials.F00_FFFC_0700001}
        position={[15.259, 53.369, 22.547]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0700001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0700002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0700002.geometry}
        material={materials.F00_FFFC_0700001}
        position={[22.181, 53.369, -5.88]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0700002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0800001.geometry}
        material={materials.F00_FFFC_0800001}
        position={[32.111, 54.96, -17.118]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0800002.geometry}
        material={materials.F00_FFFC_0800001}
        position={[34.169, 54.96, -9.609]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0800003.geometry}
        material={materials.F00_FFFC_0800001}
        position={[43.819, 54.96, -9.609]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0800003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200001.geometry}
        material={materials.F13_IFFC_0200002}
        position={[14.824, 53.875, 3.849]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200002.geometry}
        material={materials.F13_IFFC_0200002}
        position={[14.824, 53.875, 10.488]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200003.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.514, 53.946, -0.993]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200004.geometry}
        material={materials.F13_IFFC_0200002}
        position={[14.824, 53.875, 17.107]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200005.geometry}
        material={materials.F13_IFFC_0200002}
        position={[14.797, 53.875, -2.767]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200006.geometry}
        material={materials.F13_IFFC_0200002}
        position={[15.224, 53.875, -7.923]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200007.geometry}
        material={materials.F13_IFFC_0200001}
        position={[22.736, 54.33, -6.015]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200008.geometry}
        material={materials.F13_IFFC_0200001}
        position={[22.585, 53.805, -12.139]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200009.geometry}
        material={materials.F13_IFFC_0200001}
        position={[21.299, 53.805, -12.139]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200010.geometry}
        material={materials.F13_IFFC_0200002}
        position={[17.965, 53.875, 17.683]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200011.geometry}
        material={materials.F13_IFFC_0200002}
        position={[17.913, 53.875, 10.499]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200012.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.808, 53.801, 15.97]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200013.geometry}
        material={materials.F13_IFFC_0200002}
        position={[17.929, 53.897, 25.749]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200014.geometry}
        material={materials.F13_IFFC_0200002}
        position={[17.965, 53.897, 22.797]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200015.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.438, 54.347, 2.436]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200016.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.438, 54.347, -1.522]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200017.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.436, 54.347, 7.456]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200018.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.691, 53.68, 6.387]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200019.geometry}
        material={materials.F13_IFFC_0200001}
        position={[17.705, 53.68, 3.497]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200020.geometry}
        material={materials.F13_IFFC_0200001}
        position={[32.417, 54.347, -12.803]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200021.geometry}
        material={materials.F13_IFFC_0200001}
        position={[16.682, 53.964, -11.664]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200022.geometry}
        material={materials.F13_IFFC_0200001}
        position={[32.274, 53.946, -13.235]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0300001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0300001.geometry}
        material={materials.F13_IFFC_0300001}
        position={[32.277, 53.855, -14.182]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0300001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0300002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0300002.geometry}
        material={materials.F13_IFFC_0300001}
        position={[25.359, 53.8, -9.561]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0300002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0500002.geometry}
        material={materials.F13_IFFC_0500001}
        position={[19.437, 54.145, -5.924]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISCL_0000001.geometry}
        material={materials.F13_ISCL_0000001}
        position={[30.744, 55.05, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000001.geometry}
        material={materials.F13_ISDR_0000002}
        position={[19.724, 53.35, 19.281]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000002.geometry}
        material={materials.F13_ISDR_0000002}
        position={[25.069, 53.35, -12.769]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000003.geometry}
        material={materials.F13_ISDR_0000002}
        position={[12.869, 53.35, 26.882]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000004.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.087, 53.35, 23.482]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000005.geometry}
        material={materials.F13_ISDR_0000002}
        position={[19.724, 53.35, 22.706]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000006.geometry}
        material={materials.F13_ISDR_0000003}
        position={[16.369, 53.65, -31.619]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000007.geometry}
        material={materials.F13_ISDR_0000002}
        position={[15.069, 53.35, -23.497]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000008.geometry}
        material={materials.F13_ISDR_0000002}
        position={[13.78, 53.35, -24.968]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000009.geometry}
        material={materials.F13_ISDR_0000002}
        position={[19.724, 53.35, 25.857]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000010.geometry}
        material={materials.F13_ISDR_0000002}
        position={[14.394, 53.35, 26.081]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000011.geometry}
        material={materials.F13_ISDR_0000002}
        position={[8.217, 53.35, 25.121]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000012.geometry}
        material={materials.F13_ISDR_0000002}
        position={[15.121, 53.35, 21.632]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000013.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.072, 53.35, 25.081]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000014.geometry}
        material={materials.F13_ISDR_0000002}
        position={[16.369, 53.35, 27.282]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000015.geometry}
        material={materials.F13_ISDR_0000002}
        position={[17.669, 53.35, -23.5]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000016.geometry}
        material={materials.F13_ISDR_0000003}
        position={[29.354, 52.9, -11.344]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000017.geometry}
        material={materials.F13_ISDR_0000002}
        position={[15.919, 53.35, -11.769]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000018.geometry}
        material={materials.F13_ISDR_0000002}
        position={[21.294, 53.35, -12.244]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000019.geometry}
        material={materials.F13_ISDR_0000001}
        position={[25.894, 53.65, -7.554]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000020.geometry}
        material={materials.F13_ISDR_0000002}
        position={[25.219, 53.35, -5.403]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000021.geometry}
        material={materials.F13_ISDR_0000002}
        position={[22.619, 53.35, -12.244]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000022.geometry}
        material={materials.F13_ISDR_0000003}
        position={[14.419, 53.5, 28.16]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000023.geometry}
        material={materials.F13_ISDR_0000002}
        position={[25.119, 53.35, -18.616]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000024.geometry}
        material={materials.F13_ISDR_0000002}
        position={[15.069, 53.35, -17.019]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000025.geometry}
        material={materials.F13_ISDR_0000003}
        position={[27.869, 53.8, -11.348]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000026.geometry}
        material={materials.F13_ISDR_0000002}
        position={[22.989, 53.35, -18.419]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000027.geometry}
        material={materials.F13_ISDR_0000002}
        position={[19.754, 53.35, -18.414]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000028.geometry}
        material={materials.F13_ISDR_0000002}
        position={[13.792, 53.35, -34.795]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000029.geometry}
        material={materials.F13_ISDR_0000003}
        position={[21.094, 53.65, -3.712]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000030.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.292, 53.35, 3.612]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000031.geometry}
        material={materials.F13_ISDR_0000003}
        position={[41.944, 53.65, -12.269]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000032.geometry}
        material={materials.F13_ISDR_0000003}
        position={[45.617, 53.5, -17.189]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000033.geometry}
        material={materials.F13_ISDR_0000004}
        position={[15.151, 53.417, -8.763]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000034.geometry}
        material={materials.F13_ISDR_0000003}
        position={[42.019, 53.5, -10.519]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000035.geometry}
        material={materials.F13_ISDR_0000002}
        position={[17.644, 53.35, -0.993]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000036.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.292, 53.35, 6.282]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000037.geometry}
        material={materials.F13_ISDR_0000005}
        position={[18.879, 53.245, 6.654]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000038.geometry}
        material={materials.F13_ISDR_0000004}
        position={[15.104, 53.65, -9.396]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000039.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.069, 53.35, 18.521]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000039' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000040.geometry}
        material={materials.F13_ISDR_0000002}
        position={[17.644, 53.35, 0.332]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000041.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.867, 53.35, 3.017]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000042.geometry}
        material={materials.F13_ISDR_0000002}
        position={[18.07, 53.35, 16.841]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000043.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.733, 53.424, 17.952]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000044.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.677, 53.65, -1.22]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000045.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.704, 53.65, 5.38]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000046.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.733, 53.424, 11.352]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000047.geometry}
        material={materials.F13_ISDR_0000004}
        position={[17.968, 53.426, 11.354]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000048.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.706, 53.424, -1.848]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000049.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.733, 53.424, 4.752]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000050.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.704, 53.65, 11.98]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000051.geometry}
        material={materials.F13_ISDR_0000003}
        position={[36.294, 53.65, -12.368]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000052.geometry}
        material={materials.F13_ISDR_0000003}
        position={[41.944, 53.65, -14.669]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000053.geometry}
        material={materials.F13_ISDR_0000003}
        position={[41.944, 53.65, -17.069]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000054.geometry}
        material={materials.F13_ISDR_0000002}
        position={[28.969, 53.35, -14.619]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000055.geometry}
        material={materials.F13_ISDR_0000004}
        position={[14.704, 53.65, 18.58]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000056.geometry}
        material={materials.F13_ISDR_0000004}
        position={[18.032, 53.65, 11.98]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000057.geometry}
        material={materials.F13_ISDR_0000005}
        position={[18.879, 53.245, 7.109]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000058.geometry}
        material={materials.F13_ISDR_0000002}
        position={[8.219, 53.35, -42.42]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000059.geometry}
        material={materials.F13_ISDR_0000003}
        position={[45.694, 53.65, -14.843]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000060.geometry}
        material={materials.F13_ISDR_0000003}
        position={[13.969, 53.65, -43.518]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000061.geometry}
        material={materials.F13_ISDR_0000003}
        position={[19.269, 53.35, -35.118]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000062.geometry}
        material={materials.F13_ISDR_0000002}
        position={[12.169, 53.35, -43.519]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000063.geometry}
        material={materials.F13_ISDR_0000003}
        position={[32.119, 53.35, -13.231]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000064.geometry}
        material={materials.F13_ISDR_0000002}
        position={[15.094, 53.35, -41.918]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000065.geometry}
        material={materials.F13_ISDR_0000003}
        position={[36.219, 53.5, -10.518]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000066.geometry}
        material={materials.F13_ISDR_0000002}
        position={[20.869, 53.35, -33.169]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000067.geometry}
        material={materials.F13_ISDR_0000003}
        position={[36.294, 53.65, -17.169]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000068.geometry}
        material={materials.F13_ISDR_0000003}
        position={[36.294, 53.65, -14.767]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000068' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000069.geometry}
        material={materials.F13_ISDR_0000002}
        position={[22.219, 53.35, -41.969]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000069' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000070.geometry}
        material={materials.F13_ISDR_0000003}
        position={[50.094, 53.65, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000071.geometry}
        material={materials.F13_ISDR_0000002}
        position={[23.219, 53.35, -5.718]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000072.geometry}
        material={materials.F13_ISDR_0000002}
        position={[51.469, 53.35, -6.401]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000073.geometry}
        material={materials.F13_ISDR_0000003}
        position={[50.019, 53.35, -9.719]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000074.geometry}
        material={materials.F13_ISDR_0000002}
        position={[11.869, 53.5, -41.143]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000074' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000075.geometry}
        material={materials.F13_ISDR_0000002}
        position={[16.244, 53.35, -44.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000075' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000076.geometry}
        material={materials.F13_ISDR_0000002}
        position={[8.969, 53.5, -41.743]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000076' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000077.geometry}
        material={materials.F13_ISDR_0000002}
        position={[52.519, 53.35, -12.444]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000077' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000078.geometry}
        material={materials.F13_ISDR_0000002}
        position={[51.469, 53.35, -13.219]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000078' }}
      />
      <group
        name="M_SUNGSIM0001F13F13_ISFL_0000001"
        position={[22.944, 52.25, -3.168]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000001' }}
      >
        <mesh
          name="Mesh146"
          castShadow
          receiveShadow
          geometry={nodes.Mesh146.geometry}
          material={materials.F13_ISFL_0000004}
        />
        <mesh
          name="Mesh146_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh146_1.geometry}
          material={materials.F13_ISFL_0000003}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000002.geometry}
        material={materials.F13_ISFL_0000004}
        position={[43.817, 52.25, -13.834]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000003.geometry}
        material={materials.F13_ISFL_0000006}
        position={[20.444, 52.25, -32.318]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000004.geometry}
        material={materials.F13_ISFL_0000003}
        position={[32.169, 52.25, 8.582]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000005.geometry}
        material={materials.F13_ISFL_0000003}
        position={[43.819, 52.25, -14.018]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000006.geometry}
        material={materials.F13_ISFL_0000001}
        position={[19.219, 52.25, 16.09]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000007.geometry}
        material={materials.F13_ISFL_0000005}
        position={[18.994, 52.25, 15.488]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000008.geometry}
        material={materials.F13_ISFL_0000004}
        position={[35.083, 52.25, 7.122]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000009.geometry}
        material={materials.F13_ISFL_0000007}
        position={[39.444, 52.25, -5.729]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000009' }}
      />
      <group
        name="M_SUNGSIM0001F13F13_ISFL_0000010"
        position={[19.583, 52.25, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000010' }}
      >
        <mesh
          name="Mesh143"
          castShadow
          receiveShadow
          geometry={nodes.Mesh143.geometry}
          material={materials.F13_ISFL_0000002}
        />
        <mesh
          name="Mesh143_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh143_1.geometry}
          material={materials.F13_ISFL_0000005}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000011.geometry}
        material={materials.F13_ISFL_0000004}
        position={[34.169, 52.25, -13.834]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000012.geometry}
        material={materials.F13_ISFL_0000003}
        position={[34.169, 52.25, -14.018]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000013.geometry}
        material={materials.F13_ISFL_0000006}
        position={[20.469, 52.25, 11.647]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000014.geometry}
        material={materials.F13_ISFL_0000003}
        position={[49.819, 52.25, -12.368]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000015.geometry}
        material={materials.F13_ISFL_0000006}
        position={[6.969, 52.25, -8.718]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000016.geometry}
        material={materials.F13_ISFL_0000003}
        position={[11.658, 52.25, 25.322]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000001.geometry}
        material={materials.F13_ISWD_0000001}
        position={[39.469, 54.1, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 54, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 54, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000004.geometry}
        material={materials.F13_ISWD_0000001}
        position={[45.444, 54.1, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 54, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.339, 54, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000007.geometry}
        material={materials.F13_ISWD_0000001}
        position={[33.469, 54.1, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.909, 52.75, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000009.geometry}
        material={materials.F13_ISWD_0000001}
        position={[15.998, 54.1, -8.718]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000009' }}
      />
      <group
        name="M_SUNGSIM0001F13F13_ISWL_0000001"
        position={[30.658, 54.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWL_0000001' }}
      >
        <mesh
          name="Mesh156"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156.geometry}
          material={materials.F13_ISWL_0000002}
        />
        <mesh
          name="Mesh156_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_1.geometry}
          material={materials.F13_ISWL_0000001}
        />
        <mesh
          name="Mesh156_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_2.geometry}
          material={materials.F13_ISWL_0000003}
        />
        <mesh
          name="Mesh156_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_3.geometry}
          material={materials.F13_ISWL_0000007}
        />
        <mesh
          name="Mesh156_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_4.geometry}
          material={materials.F13_ISWL_0000012}
        />
        <mesh
          name="Mesh156_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_5.geometry}
          material={materials.F13_ISWL_0000008}
        />
        <mesh
          name="Mesh156_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_6.geometry}
          material={materials.F13_ISWL_0000009}
        />
        <mesh
          name="Mesh156_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_7.geometry}
          material={materials.F13_ISWL_0000010}
        />
        <mesh
          name="Mesh156_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_8.geometry}
          material={materials.F13_ISWL_0000006}
        />
        <mesh
          name="Mesh156_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_9.geometry}
          material={materials.F13_ISWL_0000011}
        />
        <mesh
          name="Mesh156_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh156_10.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F13F13_ISWL_0000002"
        position={[30.139, 54.2, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWL_0000002' }}
      >
        <mesh
          name="Mesh157"
          castShadow
          receiveShadow
          geometry={nodes.Mesh157.geometry}
          material={materials.F00_ISWL_0000001}
        />
        <mesh
          name="Mesh157_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh157_1.geometry}
          material={materials.F13_ISWL_0000005}
        />
        <mesh
          name="Mesh157_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh157_2.geometry}
          material={materials.F13_ISWL_0000004}
        />
        <mesh
          name="Mesh157_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh157_3.geometry}
          material={materials.F13_ISWL_0000002}
        />
        <mesh
          name="Mesh157_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh157_4.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>

      <mesh
        name="M_SUNGSIM0001F13F13_MVFC_1100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_MVFC_1100001.geometry}
        material={materials.F00_MVFC_1100001}
        position={[29.354, 52.9, -10.752]}
        userData={{ name: 'M_SUNGSIM0001F13F13_MVFC_1100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_MVFC_1100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_MVFC_1100002.geometry}
        material={materials.F00_MVFC_1100001}
        position={[27.869, 53.8, -10.752]}
        userData={{ name: 'M_SUNGSIM0001F13F13_MVFC_1100002' }}
      />

      <mesh
        name="M_SUNGSIM0001F13F13_SFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_SFFC_0200001.geometry}
        material={materials.F00_SFFC_0200001}
        position={[16.41, 54.947, -4.699]}
        userData={{ name: 'M_SUNGSIM0001F13F13_SFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_SFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_SFFC_0200002.geometry}
        material={materials.F00_SFFC_0200001}
        position={[15.765, 54.947, 25.943]}
        userData={{ name: 'M_SUNGSIM0001F13F13_SFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_SFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_SFFC_0200003.geometry}
        material={materials.F00_SFFC_0200001}
        position={[15.849, 54.947, -11.113]}
        userData={{ name: 'M_SUNGSIM0001F13F13_SFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_SFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_SFFC_0200004.geometry}
        material={materials.F00_SFFC_0200001}
        position={[34.121, 54.947, -7.554]}
        userData={{ name: 'M_SUNGSIM0001F13F13_SFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F14_MVFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F14_MVFC_0800001.geometry}
        material={materials.F14_MVFC_0800001}
        position={[9.894, 54.2, 27.532]}
        userData={{ name: 'M_SUNGSIM0001F13F14_MVFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F14_MVFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F14_MVFC_0800002.geometry}
        material={materials.F14_MVFC_0800001}
        position={[9.894, 54.2, -44.918]}
        userData={{ name: 'M_SUNGSIM0001F13F14_MVFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F14_MVFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F14_MVFC_0800003.geometry}
        material={materials.F14_MVFC_0800001}
        position={[53.019, 54.2, -15.519]}
        userData={{ name: 'M_SUNGSIM0001F13F14_MVFC_0800003' }}
      />
    </group>
  )
}

useGLTF.preload(url)
