import React from 'react'
import { useGLTF } from '@react-three/drei'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F03F03.json'
import kind from '../../assets/F03F03_KIND.json'

const url = './models/F03F03.glb'
export function F03F03(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'3F'} height={16.15} />
      <mesh
        name="M_SUNGSIM0001F03F03_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISCL_0000001.geometry}
        material={materials.F00_ISCL_9900001}
        position={[34.69, 16.15, 38.682]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISCL_0000002.geometry}
        material={materials.F00_ISCL_9900001}
        position={[13.37, 16.15, -8.488]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISCL_0000002' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISCL_0000003.geometry}
        material={materials.F00_ISCL_0000001}
        position={[-24.78, 15.6, 34.343]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISCL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISCL_0000004.geometry}
        material={materials.F00_ISCL_9900001}
        position={[4.132, 16.15, 34.443]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISCL_0000004' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISDR_0000001.geometry}
        material={materials.F00_ISDR_0000001}
        position={[0.765, 13.6, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISDR_0000002.geometry}
        material={materials.F00_ISDR_0000001}
        position={[-24.43, 13.55, 29.668]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISFL_0000001.geometry}
        material={materials.F00_ISFL_0000003}
        position={[-9.98, 12.25, 38.327]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISFL_0000002.geometry}
        material={materials.F00_ISFL_9900001}
        position={[13.37, 12.25, 1.77]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000001.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.684, 13.2, 40.814]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000002.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000003.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-26.737, 14, 28.777]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000004.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -23.543]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000005.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -20.243]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000006.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-20.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000007.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000008.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.337, 14, -0.043]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000009.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.337, 14, 2.857]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000010.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.515, 14, -7.743]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000011.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.337, 14, -4.135]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000012.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -33.443]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000013.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000014.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000015.geometry}
        material={materials.F00_ISWD_0000001}
        position={[34.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000016.geometry}
        material={materials.F00_ISWD_0000001}
        position={[31.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000017.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000018.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -36.743]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000019.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.66, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000020.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -40.043]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000021.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.337, 14, 6.157]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000022.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.23, 14, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000023.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-23.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000024.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-2.23, 14, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000025.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.23, 14, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000026.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-14.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000027.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-17.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000028.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000029.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-11.24, 14, 24.144]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000030.geometry}
        material={materials.F00_ISWD_0000001}
        position={[3.76, 14, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000031.geometry}
        material={materials.F00_ISWD_0000001}
        position={[22.96, 14, 48.462]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000032.geometry}
        material={materials.F00_ISWD_0000001}
        position={[19.96, 14, 48.462]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000033.geometry}
        material={materials.F00_ISWD_0000001}
        position={[28.96, 14, 48.462]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000034.geometry}
        material={materials.F00_ISWD_0000001}
        position={[25.952, 14, 48.462]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000035.geometry}
        material={materials.F00_ISWD_0000001}
        position={[10.621, 14, 40.205]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000036.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.76, 14, 40.182]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000037.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.973, 14, 48.463]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000038.geometry}
        material={materials.F00_ISWD_0000001}
        position={[13.292, 14, 40.205]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000039.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 16.057]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000039' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000040.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-2.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000041.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-5.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000042.geometry}
        material={materials.F00_ISWD_0000001}
        position={[3.765, 14, -41.425]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000043.geometry}
        material={materials.F00_ISWD_0000001}
        position={[0.76, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000044.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-8.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000045.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-17.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000046.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-20.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000047.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-11.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000048.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-14.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000049.geometry}
        material={materials.F00_ISWD_0000001}
        position={[40.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000050.geometry}
        material={materials.F00_ISWD_0000001}
        position={[43.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000051.geometry}
        material={materials.F00_ISWD_0000001}
        position={[54.465, 14, -30.143]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000052.geometry}
        material={materials.F00_ISWD_0000001}
        position={[37.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000053.geometry}
        material={materials.F00_ISWD_0000001}
        position={[46.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000054.geometry}
        material={materials.F00_ISWD_0000001}
        position={[16.56, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000055.geometry}
        material={materials.F00_ISWD_0000001}
        position={[6.77, 14, -41.425]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000056.geometry}
        material={materials.F00_ISWD_0000001}
        position={[49.96, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000057.geometry}
        material={materials.F00_ISWD_0000001}
        position={[19.66, 14, -44.993]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000058.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-23.24, 14, -41.429]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000059.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -3.743]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000060.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -0.973]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000061.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -10.343]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000062.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -7.043]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000063.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 9.457]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000064.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 6.157]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000065.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 3.122]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000066.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, 12.757]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000067.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.814, 14, -30.143]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000068.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.814, 14, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000068' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000069.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.814, 14, -36.743]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000069' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000070.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.814, 14, -33.443]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000071.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -16.543]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000072.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -20.643]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000073.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.885, 14, -13.643]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWD_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWD_0000074.geometry}
        material={materials.F00_ISWD_0000001}
        position={[-27.736, 14, -23.543]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWD_0000074' }}
      />
      <group
        name="M_SUNGSIM0001F03F03_ISWL_0000001"
        position={[13.31, 14.2, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWL_0000001' }}
      >
        <mesh
          name="Mesh003"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003.geometry}
          material={materials.F00_ISWL_0000005}
        />
        <mesh
          name="Mesh003_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_1.geometry}
          material={materials.F00_ISWL_0000002}
        />
        <mesh
          name="Mesh003_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_2.geometry}
          material={materials.F00_ISWL_0000004}
        />
        <mesh
          name="Mesh003_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_3.geometry}
          material={materials.F00_ISWL_0000003}
        />
        <mesh
          name="Mesh003_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_4.geometry}
          material={materials.F00_ISWL_0000001}
        />
        <mesh
          name="Mesh003_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh003_5.geometry}
          material={materials.F00_ISWL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F03F03_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWL_0000002.geometry}
        material={materials.F00_ISWL_0000005}
        position={[13.27, 14.2, 1.77]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWL_0000002' }}
      />
    </group>
  )
}

useGLTF.preload(url)
