import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F07F07.json'
import kind from '../../assets/F07F07_KIND.json'

const url = './models/F07F07.glb'
export function F07F07(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'7F'} height={30} />
      <mesh
        name="M_SUNGSIM0001F07F07_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.145, 32.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.145, 28.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.817, 30, -18.686]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.32, 30, -8.721]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.479, 30, -18.692]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.172, 30, -18.723]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 30, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.668, 30, -8.691]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 30, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 30, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F07F07_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F07F07_ISWL_0000001.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.659, 30.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F07F07_ISWL_0000002"
        position={[30.139, 30.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F07F07_ISWL_0000002' }}
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
