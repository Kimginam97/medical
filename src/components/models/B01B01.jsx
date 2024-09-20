import React from 'react'
import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/B01B01.json'
import kind from '../../assets/B01B01_KIND.json'

const url = './models/B01B01.glb'
export function B01B01(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'B1'} height={0.05} />
      <mesh
        name="M_SUNGSIM0001B01B01_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[0.308, 3.95, -8.349]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISCL_0000002.geometry}
        material={materials.F00_ISCL_0000002}
        position={[56.148, 4.171, -2.199]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISCL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISDR_0000001.geometry}
        material={materials.F00_ISDR_0000001}
        position={[54.56, 2.05, -7.924]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISDR_0000002.geometry}
        material={materials.F00_ISDR_0000001}
        position={[54.48, 1.25, 9.457]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[11.056, 0.05, 27.45]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000002.geometry}
        material={materials.F00_ISFL_9900001}
        position={[5.335, 0.05, 25.001]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000003.geometry}
        material={materials.F00_ISFL_9900001}
        position={[21.06, 0.05, 28.201]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000004.geometry}
        material={materials.F00_ISFL_9900001}
        position={[-18.69, 0.05, 25.001]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000005.geometry}
        material={materials.F00_ISFL_9900001}
        position={[16.56, 0.05, 28.201]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000006.geometry}
        material={materials.F00_ISFL_9900001}
        position={[-0.74, 0.05, 25.001]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000007.geometry}
        material={materials.F00_ISFL_9900001}
        position={[-6.765, 0.05, 25.001]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000008.geometry}
        material={materials.F00_ISFL_9900001}
        position={[9.936, 0.05, -44.922]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000009.geometry}
        material={materials.F00_ISFL_9900001}
        position={[-12.74, 0.05, 28.076]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000010.geometry}
        material={materials.F00_ISFL_9900001}
        position={[13.961, 0.05, -44.922]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000011.geometry}
        material={materials.F00_ISFL_9900001}
        position={[20.91, 0.05, -45.749]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000012.geometry}
        material={materials.F00_ISFL_9900001}
        position={[16.585, 0.05, -45.749]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000013.geometry}
        material={materials.F00_ISFL_9900001}
        position={[29.86, 0.05, 26.901]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000014.geometry}
        material={materials.F00_ISFL_9900001}
        position={[27.378, 0.05, 28.201]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000015.geometry}
        material={materials.F00_ISFL_9900001}
        position={[33.496, 0.05, 28.201]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000016.geometry}
        material={materials.F00_ISFL_9900001}
        position={[-7.294, 0.05, 26.38]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000017.geometry}
        material={materials.F00_ISFL_9900001}
        position={[39.7, 0.05, 28.201]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000018.geometry}
        material={materials.F00_ISFL_9900001}
        position={[0.357, 0.05, -8.301]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000018' }}
      />
      <group
        name="M_SUNGSIM0001B01B01_ISFL_0000019"
        position={[57.723, 0.05, 1.747]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000019' }}
      >
        <mesh
          name="Mesh"
          castShadow
          receiveShadow
          geometry={nodes.Mesh.geometry}
          material={materials.F00_ISFL_0000001}
        />
        <mesh
          name="Mesh_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh_1.geometry}
          material={materials.F00_ISFL_0000002}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[56.382, 1.9, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[59.34, 1.5, 13.822]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[56.13, 1.5, 13.821]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.48, 1.5, 12.757]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.48, 1.5, 6.157]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.48, 1.5, 2.857]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000001.geometry}
        material={materials.F00_ISWL_0000008}
        position={[56.382, 0.5, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[-2.761, 2.05, -8.285]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000003.geometry}
        material={materials.F00_ISWL_0000005}
        position={[-7.294, 2, 25.101]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000003' }}
      />
      <group
        name="M_SUNGSIM0001B01B01_ISWL_0000004"
        position={[-0.007, 2, -6.774]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000004' }}
      >
        <mesh
          name="Mesh029"
          castShadow
          receiveShadow
          geometry={nodes.Mesh029.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh029_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_1.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh029_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh029_2.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000005.geometry}
        material={materials.F00_ISWL_0000007}
        position={[56.382, 3.624, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000005' }}
      />
    </group>
  )
}

useGLTF.preload(url)
