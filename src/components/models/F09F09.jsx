import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F09F09.json'
import kind from '../../assets/F09F09_KIND.json'

const url = './models/F09F09.glb'
export function F09F09(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'9F'} height={38} />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.149, 40.15, -8.679]}
        visible={false}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.149, 36.25, -8.679]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.817, 38, -18.69]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.17, 38, -18.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.469, 38, -18.693]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 38, -8.719]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.444, 38, -5.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.669, 38, -8.68]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.469, 38, -5.328]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.469, 38, -5.328]}
      />
      <group position={[30.139, 38.2, -8.68]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011.geometry}
          material={materials.F00_ISWL_0000001}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Mesh011_1.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F09F09_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.663, 38.2, -8.679]}
      />
    </group>
  )
}

useGLTF.preload(url)
