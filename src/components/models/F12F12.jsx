import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F12F12.json'
import kind from '../../assets/F12F12_KIND.json'

const url = './models/F12F12.glb'
export function F12F12(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'12F'} height={50} />
      <mesh
        name="M_SUNGSIM0001F12F12_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.144, 52.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.144, 48.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 50, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 50, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 50, -8.719]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 50, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 50, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.669, 50, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 50, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F12F12_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 50, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWD_0000008' }}
      />
      <group
        name="M_SUNGSIM0001F12F12_ISWL_0000001"
        position={[30.139, 50.2, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWL_0000001' }}
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
        name="M_SUNGSIM0001F12F12_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F12F12_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.658, 50.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F12F12_ISWL_0000002' }}
      />
    </group>
  )
}
useGLTF.preload(url)
