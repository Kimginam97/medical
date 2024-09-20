import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F11F11.json'
import kind from '../../assets/F11F11_KIND.json'

const url = './models/F11F11.glb'
export function F11F11(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'11F'} height={46} />
      <mesh
        name="M_SUNGSIM0001F11F11_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.144, 48.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.144, 44.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 46, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 46, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 46, -8.719]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 46, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.669, 46, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 46, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 46, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 46, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F11F11_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F11F11_ISWL_0000001.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.658, 46.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F11F11_ISWL_0000002"
        position={[30.139, 46.2, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F11F11_ISWL_0000002' }}
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
