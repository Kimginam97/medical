import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F08F08.json'
import kind from '../../assets/F08F08_KIND.json'

const url = './models/F08F08.glb'
export function F08F08(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'8F'} height={34} />
      <mesh
        name="M_SUNGSIM0001F08F08_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.145, 36.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.145, 32.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 34, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.819, 34, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 34, -8.715]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 34, -18.693]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 34, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.669, 34, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 34, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F08F08_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 34, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWD_0000008' }}
      />
      <group
        name="M_SUNGSIM0001F08F08_ISWL_0000001"
        position={[30.139, 34.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWL_0000001' }}
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
        name="M_SUNGSIM0001F08F08_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F08F08_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.659, 34.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F08F08_ISWL_0000002' }}
      />
    </group>
  )
}

useGLTF.preload(url)
