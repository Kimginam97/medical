import React from 'react'
import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F05F05.json'
import kind from '../../assets/F05F05_KIND.json'

const url = './models/F05F05.glb'
export function F05F05(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'5F'} height={22} />
      <mesh
        name="M_SUNGSIM0001F05F05_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.145, 24.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.145, 20.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.47, 22, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.32, 22, -8.718]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 22, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.67, 22, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.47, 22, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.47, 22, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.445, 22, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 22, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000008' }}
      />
      <group
        name="M_SUNGSIM0001F05F05_ISWL_0000001"
        position={[30.14, 22.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWL_0000001' }}
      >
        <mesh
          name="Mesh011"
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials.F00_ISWL_0000001}
        />
        <mesh
          name="Mesh011_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F05F05_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.659, 22.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWL_0000002' }}
      />
    </group>
  )
}

useGLTF.preload(url)
