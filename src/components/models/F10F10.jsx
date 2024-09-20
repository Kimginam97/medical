import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F10F10.json'
import kind from '../../assets/F10F10_KIND.json'

const url = './models/F10F10.glb'
export function F10F10(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'10F'} height={42} />
      <mesh
        name="M_SUNGSIM0001F10F10_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.144, 44.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.144, 40.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 42, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 42, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 42, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 42, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.669, 42, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 42, -8.719]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 42, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 42, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F10F10_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F10F10_ISWL_0000001.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.658, 42.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F10F10_ISWL_0000002"
        position={[30.139, 42.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F10F10_ISWL_0000002' }}
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
    </group>
  )
}

useGLTF.preload(url)
