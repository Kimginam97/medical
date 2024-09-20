/* eslint-disable react/no-unknown-property */
import { useGLTF } from '@react-three/drei'

const url = './models/F14F14.glb'
export function F14F14(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <mesh
        name="M_SUNGSIM0001F14F14_ISCL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISCL_0000004.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISCL_0000001_00.001']}
        position={[15.819, 60.75, -39.018]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISCL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISCL_0000001.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISCL_0000001_00.001']}
        position={[24.819, 63.75, -11.968]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISCL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISCL_0000003.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISCL_0000001_00.001']}
        position={[15.819, 60.75, 21.682]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISCL_0000002.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISCL_0000001_00.001']}
        position={[43.269, 60.75, -12.493]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISCL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISFL_0000001.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISFL_0000003_00.001']}
        position={[30.744, 56.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000003.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISWL_0000001_00.001']}
        position={[30.709, 58.2, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000002.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISWL_0000003_00.002']}
        position={[15.819, 58.5, 21.682]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000005.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISWL_0000003_00.002']}
        position={[15.819, 58.5, -39.018]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000004.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISWL_0000003_00.002']}
        position={[35.969, 60, -11.968]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000001.geometry}
        material={materials['T_SUNGSIM0001F00F00_ISWL_0000006_00.001']}
        position={[6.508, 58.041, -8.653]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000001' }}
      />
    </group>
  )
}

useGLTF.preload(url)
