import React from 'react'
import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F04F04.json'
import kind from '../../assets/F04F04_KIND.json'

const url = './models/F04F04.glb'
export function F04F04(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'4F'} height={20.15} />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.688, 20.15, -8.718]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000002.geometry}
        material={materials.F00_ISCL_0000001}
        position={[-3.915, 20.15, -15.26]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000003.geometry}
        material={materials.F00_ISCL_0000001}
        position={[-0.794, 17.45, -8.697]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000004.geometry}
        material={materials.F00_ISCL_0000001}
        position={[31.628, 20.15, 38.383]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000005.geometry}
        material={materials.F00_ISCL_0000001}
        position={[42.906, 20.15, -31.405]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000006.geometry}
        material={materials.F00_ISCL_0000001}
        position={[33.856, 20.15, -20.355]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000007.geometry}
        material={materials.F00_ISCL_9900001}
        position={[51.706, 20.15, -11.918]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000007' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000008.geometry}
        material={materials.F00_ISCL_0000001}
        position={[5.11, 20.15, -22.385]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000009.geometry}
        material={materials.F00_ISCL_9900001}
        position={[46.853, 20.15, -11.593]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000009' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000010.geometry}
        material={materials.F00_ISCL_9900001}
        position={[51.706, 20.15, -11.218]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000010' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000011.geometry}
        material={materials.F00_ISCL_9900001}
        position={[52.931, 20.15, -11.068]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000011' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000012.geometry}
        material={materials.F00_ISCL_0000001}
        position={[-6.784, 20.783, -28.965]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000013.geometry}
        material={materials.F00_ISCL_9900001}
        position={[46.852, 20.15, -17.405]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000013' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000014.geometry}
        material={materials.F00_ISCL_9900001}
        position={[-6.784, 20.15, -28.731]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000015.geometry}
        material={materials.F00_ISCL_0000001}
        position={[-20.012, 20.15, -18.473]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISCL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISCL_0000016.geometry}
        material={materials.F00_ISCL_0000001}
        position={[44.505, 20.15, 10.718]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISCL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISDR_0000001.geometry}
        material={materials.F00_ISDR_0000001}
        position={[20.836, 17.4, 40.553]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISDR_0000002.geometry}
        material={materials.F00_ISDR_0000001}
        position={[29.133, 17.4, 38.409]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISDR_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISDR_0000003.geometry}
        material={materials.F00_ISDR_0000001}
        position={[-13.824, 18.2, -15.193]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISDR_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISDR_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISDR_0000004.geometry}
        material={materials.F00_ISDR_0000001}
        position={[22.506, 17.4, 37.068]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISDR_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISDR_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISDR_0000005.geometry}
        material={materials.F00_ISDR_0000001}
        position={[19.58, 18.25, 28.8]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISDR_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000001.geometry}
        material={materials.F00_ISFL_0000003}
        position={[-12.466, 16.25, -30.069]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000002.geometry}
        material={materials.F00_ISFL_0000003}
        position={[39.994, 16.25, -33.805]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000003.geometry}
        material={materials.F00_ISFL_9900001}
        position={[14.831, 16.25, -8.518]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000004.geometry}
        material={materials.F00_ISFL_9900001}
        position={[52.931, 16.25, -11.068]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000005.geometry}
        material={materials.F00_ISFL_0000003}
        position={[4.884, 16.25, -33.849]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000006.geometry}
        material={materials.F00_ISFL_9900001}
        position={[31.543, 16.25, 38.428]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000007.geometry}
        material={materials.F00_ISFL_9900001}
        position={[46.852, 16.25, -17.405]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000008.geometry}
        material={materials.F00_ISFL_9900001}
        position={[44.505, 16.25, 10.718]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000009.geometry}
        material={materials.F00_ISFL_0000003}
        position={[40.03, 16.25, 11.7]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000010.geometry}
        material={materials.F00_ISFL_9900001}
        position={[46.852, 16.25, -11.593]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000011.geometry}
        material={materials.F00_ISFL_9900001}
        position={[51.706, 16.25, -11.918]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000012.geometry}
        material={materials.F00_ISFL_9900001}
        position={[51.706, 16.25, -11.218]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000013.geometry}
        material={materials.F00_ISFL_0000003}
        position={[34.998, 16.25, 37.904]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000014.geometry}
        material={materials.F00_ISFL_0000003}
        position={[3.854, 16.25, 34.422]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000015.geometry}
        material={materials.F00_ISFL_0000003}
        position={[1.417, 16.25, 26.429]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISFL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISFL_0000016.geometry}
        material={materials.F00_ISFL_0000003}
        position={[-10.305, 16.25, 2.66]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISFL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[41.339, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[37.473, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[34.481, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.295, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.538, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.988, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.533, 17.85, 45.483]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000001}
        position={[42.466, 17.85, 43.67]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000009.geometry}
        material={materials.F00_ISWD_0000001}
        position={[31.206, 17.85, 31.398]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000010.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.836, 17.85, 34.798]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000011.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.702, 18.25, 11.7]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000012.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.963, 18.25, -9.678]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000013.geometry}
        material={materials.F00_ISWD_0000001}
        position={[39.605, 17.85, 31.35]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000014.geometry}
        material={materials.F00_ISWD_0000001}
        position={[42.466, 17.85, 38.65]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000015.geometry}
        material={materials.F00_ISWD_0000001}
        position={[42.466, 17.85, 41.526]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000016.geometry}
        material={materials.F00_ISWD_0000001}
        position={[42.466, 17.85, 33.148]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000017.geometry}
        material={materials.F00_ISWD_0000001}
        position={[42.466, 17.85, 36.148]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000018.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.605, 17.85, 4.976]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000019.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.576, 17.85, 8.276]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000020.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.62, 17.85, -3.199]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000021.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.621, 17.85, 1.676]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000022.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.605, 17.85, 11.576]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000023.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.605, 17.85, 21.476]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000024.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.605, 17.85, 24.776]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000025.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.605, 17.85, 14.876]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000026.geometry}
        material={materials.F00_ISWD_0000001}
        position={[52.592, 17.85, 18.176]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000027.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.404, 17.85, -3.523]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000028.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.403, 17.85, 21.477]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000029.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.404, 17.85, 18.177]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000030.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.405, 17.85, -1.903]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000031.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.404, 17.85, 24.777]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000032.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.403, 17.85, 14.876]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000033.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.404, 17.85, 4.977]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000034.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.404, 17.85, 1.677]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000035.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.403, 17.85, 11.577]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000036.geometry}
        material={materials.F00_ISWD_0000001}
        position={[36.403, 17.85, 8.276]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWD_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWD_0000037.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.681, 18.25, -33.855]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWD_0000037' }}
      />
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000001"
        position={[54.182, 19.55, -12.018]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000001' }}
      >
        <mesh
          name="Mesh082"
          castShadow
          receiveShadow
          geometry={nodes.Mesh082.geometry}
          material={materials.F00_ISWL_0000001}
        />
        <mesh
          name="Mesh082_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh082_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000002"
        position={[31.628, 18.15, 38.383]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000002' }}
      >
        <mesh
          name="Mesh075"
          castShadow
          receiveShadow
          geometry={nodes.Mesh075.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh075_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh075_1.geometry}
          material={materials.F00_ISWL_0000003}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F04F04_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWL_0000003.geometry}
        material={materials.F00_ISWL_0000003}
        position={[-0.794, 16.8, -8.697]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F04F04_ISWL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWL_0000004.geometry}
        material={materials.F00_ISWL_0000003}
        position={[-6.769, 17.55, -28.965]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000004' }}
      />
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000005"
        position={[2.515, 17.016, 34.454]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000005' }}
      >
        <mesh
          name="Mesh076"
          castShadow
          receiveShadow
          geometry={nodes.Mesh076.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh076_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh076_1.geometry}
          material={materials.F00_ISWL_0000004}
        />
      </group>
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000006"
        position={[30.74, 18.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000006' }}
      >
        <mesh
          name="Mesh079"
          castShadow
          receiveShadow
          geometry={nodes.Mesh079.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh079_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh079_1.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh079_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh079_2.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh079_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh079_3.geometry}
          material={materials.F00_ISWL_0000001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000007"
        position={[34.883, 17.73, 38.303]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000007' }}
      >
        <mesh
          name="Mesh077"
          castShadow
          receiveShadow
          geometry={nodes.Mesh077.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh077_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh077_1.geometry}
          material={materials.F00_ISWL_0000004}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F04F04_ISWL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWL_0000008.geometry}
        material={materials.F00_ISWL_0000003}
        position={[-6.769, 20.28, -28.965]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000008' }}
      />
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000009"
        position={[23.204, 18.2, 28.82]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000009' }}
      >
        <mesh
          name="Mesh083"
          castShadow
          receiveShadow
          geometry={nodes.Mesh083.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh083_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh083_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh083_2.geometry}
          material={materials.F00_ISWL_0000001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000010"
        position={[16.283, 18.2, -44.505]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000010' }}
      >
        <mesh
          name="Mesh084"
          castShadow
          receiveShadow
          geometry={nodes.Mesh084.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh084_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh084_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh084_2.geometry}
          material={materials.F00_ISWL_0000001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000011"
        position={[19.331, 18.25, 0.052]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000011' }}
      >
        <mesh
          name="Mesh072"
          castShadow
          receiveShadow
          geometry={nodes.Mesh072.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh072_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
        <mesh
          name="Mesh072_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_2.geometry}
          material={materials.F00_ISWL_0000003}
        />
        <mesh
          name="Mesh072_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh072_3.geometry}
          material={materials.F00_ISWL_0000001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F04F04_ISWL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F04F04_ISWL_0000012.geometry}
        material={materials.F00_ISWL_0000003}
        position={[-20.162, 18.2, -18.473]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000012' }}
      />
      <group
        name="M_SUNGSIM0001F04F04_ISWL_0000013"
        position={[-10.467, 16.95, -9.496]}
        userData={{ name: 'M_SUNGSIM0001F04F04_ISWL_0000013' }}
      >
        <mesh
          name="Mesh073"
          castShadow
          receiveShadow
          geometry={nodes.Mesh073.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh073_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh073_1.geometry}
          material={materials.F00_ISWL_0000001}
        />
      </group>
    </group>
  )
}

useGLTF.preload(url)
