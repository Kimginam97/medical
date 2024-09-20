import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F06F06.json'
import kind from '../../assets/F06F06_KIND.json'

const url = './models/F06F06.glb'
export function F06F06(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'6F'} height={26} />
      <mesh
        name="M_SUNGSIM0001F06F06_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[30.145, 28.15, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISFL_0000001.geometry}
        material={materials.F00_ISFL_9900001}
        position={[30.145, 24.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000002}
        position={[43.818, 26, -18.689]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.319, 26, -8.717]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[27.48, 26, -18.639]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000002}
        position={[34.169, 26, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000002}
        position={[39.47, 26, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000002}
        position={[45.445, 26, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000001}
        position={[20.668, 26, -8.695]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000002}
        position={[33.47, 26, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F06F06_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F06F06_ISWL_0000001.geometry}
        material={materials.F00_ISWL_0000005}
        position={[30.659, 26.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F06F06_ISWL_0000002"
        position={[30.14, 26.2, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F06F06_ISWL_0000002' }}
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
