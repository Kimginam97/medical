import { useGLTF } from '@react-three/drei'

const url = './models/HanlimLight.glb'
export function HanlimLight(props) {
  const { nodes, materials } = useGLTF(url)
  return (
    <group {...props} dispose={null}>
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200108.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0200001_00}
        position={[-5.006, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200108' }}
      />
      <group
        name="M_SUNGSIM0001B01B01_ISFL_0000019"
        position={[57.723, 0.05, 1.747]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000019' }}
      >
        <mesh
          name="Mesh020"
          castShadow
          receiveShadow
          geometry={nodes.Mesh020.geometry}
          material={materials.T_SUNGSIM0001F00F00_ISFL_0000001_00}
        />
        <mesh
          name="Mesh020_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh020_1.geometry}
          material={materials.T_SUNGSIM0001F00F00_ISFL_0000002_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISCL_0000003.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISCL_0000002_00}
        position={[-12.698, 12.25, 26.409]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000003.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWL_0000005_00}
        position={[-7.294, 2, 25.101]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000001.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWL_0000008_00}
        position={[56.382, 0.5, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISFL_0000004.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISFL_9900001_00}
        position={[-18.69, 0.05, 25.001]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISDR_0000001.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISDR_0000001_00}
        position={[54.56, 2.05, -7.924]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWD_0000001.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
        position={[56.382, 1.9, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000009.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISCL_0000002_00}
        position={[13.246, 7.4, 36.441]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000009' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISPL_0000001"
        position={[13.26, 5.6, 1.557]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISPL_0000001' }}
      >
        <mesh
          name="Mesh047"
          castShadow
          receiveShadow
          geometry={nodes.Mesh047.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISPL_0000004_00}
        />
        <mesh
          name="Mesh047_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh047_1.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISPL_0000003_00}
        />
        <mesh
          name="Mesh047_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh047_2.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISPL_0000001_00}
        />
        <mesh
          name="Mesh047_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh047_3.geometry}
          material={materials.T_SUNGSIM0001F00F00_ISPL_9900001_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISPL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISPL_0000002.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000020_00}
        position={[-7.134, 5.6, -38.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISPL_0000002' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000010"
        position={[13.31, 6.05, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000010' }}
      >
        <mesh
          name="Mesh049"
          castShadow
          receiveShadow
          geometry={nodes.Mesh049.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000001_00}
        />
        <mesh
          name="Mesh049_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh049_1.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000009_00}
        />
        <mesh
          name="Mesh049_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh049_2.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000003_00}
        />
        <mesh
          name="Mesh049_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh049_3.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000010_00}
        />
        <mesh
          name="Mesh049_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh049_4.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000013_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000006.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000002_00}
        position={[-22.246, 4.401, -37.136]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000041.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISDR_0000004_00}
        position={[2.535, 5.15, -39.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000041' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000044"
        position={[13.321, 6.05, -2.701]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000044' }}
      >
        <mesh
          name="Mesh056"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000014_00}
        />
        <mesh
          name="Mesh056_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_1.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000015_00}
        />
        <mesh
          name="Mesh056_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_2.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000017_00}
        />
        <mesh
          name="Mesh056_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_3.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000018_00}
        />
        <mesh
          name="Mesh056_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_4.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000019_00}
        />
        <mesh
          name="Mesh056_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_5.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000024_00}
        />
        <mesh
          name="Mesh056_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_6.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000008_00}
        />
        <mesh
          name="Mesh056_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_7.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000016_00}
        />
        <mesh
          name="Mesh056_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_8.geometry}
          material={materials.T_SUNGSIM0001F00F00_ISFL_9900001_00}
        />
        <mesh
          name="Mesh056_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh056_9.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000021_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000033.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000007_00}
        position={[-16.065, 5.6, -31.697]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000029.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000006_00}
        position={[15.773, 4.35, 26.891]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000029' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISDR_0000040"
        position={[-27.787, 5.6, 30.207]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000040' }}
      >
        <mesh
          name="Mesh061"
          castShadow
          receiveShadow
          geometry={nodes.Mesh061.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISDR_0000001_00}
        />
        <mesh
          name="Mesh061_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh061_1.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISDR_0000006_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000142"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000142.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISDR_0000005_00}
        position={[48.21, 5.15, 5.907]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000142' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000044.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWD_0000002_00}
        position={[-20.332, 6, 1.499]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000036.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000023_00}
        position={[19.181, 5.6, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000040.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000022_00}
        position={[33.452, 6.4, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000001.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000025_00}
        position={[3.2, 4.88, 28.834]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F01F02_MVFC_0800004"
        position={[-18.78, 6.05, -15.26]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800004' }}
      >
        <mesh
          name="Mesh352"
          castShadow
          receiveShadow
          geometry={nodes.Mesh352.geometry}
          material={materials.T_SUNGSIM0001F01F02_MVFC_0800002_00}
        />
        <mesh
          name="Mesh352_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh352_1.geometry}
          material={materials.T_SUNGSIM0001F01F02_MVFC_0800001_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000027.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000011_00}
        position={[-24.74, 4.05, -18.655]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000030.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000007_00}
        position={[-23.377, 4.05, -6.833]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000031.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000008_00}
        position={[10.431, 4.05, 6.329]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000029.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000010_00}
        position={[34.831, 4.05, 14.282]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000016.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000006_00}
        position={[51.306, 4.05, -2.268]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000015.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000012_00}
        position={[34.131, 4.05, -14.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000008.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000002_00}
        position={[-26.483, 4.05, 2.807]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000009.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000009_00}
        position={[5.36, 4.05, -36.267]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000002.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000003_00}
        position={[-15.993, 4.05, 35.735]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000026.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000005_00}
        position={[-28.108, 4.544, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000020.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISFL_0000004_00}
        position={[16.457, 4.05, 38.943]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0900001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0900001.geometry}
        material={materials.T_SUNGSIM0001F01F02_MVFC_0900001_00}
        position={[-6.657, 6.426, -8.368]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0900001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000057.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000028_00}
        position={[56.79, 7.779, -22.098]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000159"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000159.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISDR_0000001_00}
        position={[51.435, 9.25, -13.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000159' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000039"
        position={[13.414, 10.15, 8.337]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000039' }}
      >
        <mesh
          name="Mesh424"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000009_00}
        />
        <mesh
          name="Mesh424_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_1.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000006_00}
        />
        <mesh
          name="Mesh424_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_2.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000007_00}
        />
        <mesh
          name="Mesh424_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_3.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000011_00}
        />
        <mesh
          name="Mesh424_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_4.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000010_00}
        />
        <mesh
          name="Mesh424_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_5.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000017_00}
        />
        <mesh
          name="Mesh424_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_6.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000003_00}
        />
        <mesh
          name="Mesh424_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_7.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000009_00}
        />
        <mesh
          name="Mesh424_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_8.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000024_00}
        />
        <mesh
          name="Mesh424_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_9.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISWL_0000024_00}
        />
        <mesh
          name="Mesh424_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_10.geometry}
          material={materials.T_SUNGSIM0001F00F00_ISPL_9900001_00}
        />
        <mesh
          name="Mesh424_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_11.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000032_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000038.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000028_00}
        position={[-10.981, 9.55, 31.556]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000013.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWD_0000002_00}
        position={[28.76, 10, 32.87]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000098.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWD_0000002_00}
        position={[29.06, 9.85, 20.657]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000098' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWD_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWD_0000052.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWD_0000001_00}
        position={[34.93, 9.85, 10.327]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWD_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000003.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000028_00}
        position={[53.009, 9.25, -9.125]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISDR_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISDR_0000059.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISDR_0000001_00}
        position={[-12.157, 9.55, -21.868]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISDR_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000022.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000020_00}
        position={[-0.69, 8.9, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000042.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000003_00}
        position={[-0.716, 11.55, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000049.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISCL_0000002_00}
        position={[36.46, 8.65, 29.517]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000023.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000006_00}
        position={[-24.494, 8.15, -18.572]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000007.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000024_00}
        position={[25.76, 8.15, 29.815]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000012.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000002_00}
        position={[23.29, 8.15, 11.482]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000006.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000008_00}
        position={[23.16, 8.15, -2.193]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000003.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000009_00}
        position={[52.135, 8.15, -2.194]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000022.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000001_00}
        position={[13.96, 8.15, 27.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISCL_0000001.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISCL_0000001_00}
        position={[13.96, 10.95, 27.457]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISCL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000005"
        position={[13.31, 10.15, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000005' }}
      >
        <mesh
          name="Mesh758"
          castShadow
          receiveShadow
          geometry={nodes.Mesh758.geometry}
          material={materials.T_SUNGSIM0001F01F01_ISPL_0000001_00}
        />
        <mesh
          name="Mesh758_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh758_1.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000030_00}
        />
        <mesh
          name="Mesh758_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh758_2.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000014_00}
        />
      </group>
      <group
        name="M_SUNGSIM0001F02F02_ISWL_0000004"
        position={[13.331, 10.15, 1.937]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000004' }}
      >
        <mesh
          name="Mesh760"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000005_00}
        />
        <mesh
          name="Mesh760_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_1.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000031_00}
        />
        <mesh
          name="Mesh760_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_2.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000008_00}
        />
        <mesh
          name="Mesh760_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_3.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000012_00}
        />
        <mesh
          name="Mesh760_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_4.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000013_00}
        />
        <mesh
          name="Mesh760_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_5.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000016_00}
        />
        <mesh
          name="Mesh760_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_6.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000029_00}
        />
        <mesh
          name="Mesh760_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_7.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000019_00}
        />
        <mesh
          name="Mesh760_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_8.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000020_00}
        />
        <mesh
          name="Mesh760_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_9.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000021_00}
        />
        <mesh
          name="Mesh760_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_10.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000004_00}
        />
        <mesh
          name="Mesh760_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_11.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000025_00}
        />
        <mesh
          name="Mesh760_12"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_12.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000002_00}
        />
        <mesh
          name="Mesh760_13"
          castShadow
          receiveShadow
          geometry={nodes.Mesh760_13.geometry}
          material={materials.T_SUNGSIM0001F02F02_ISWL_0000015_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000005.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000002_00}
        position={[39.47, 22, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWD_0000004.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
        position={[20.67, 22, -8.68]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISFL_0000001.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISFL_9900001_00}
        position={[30.145, 20.25, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F05F05_ISWL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F05F05_ISWL_0000002.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWL_0000005_00}
        position={[30.659, 22.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F05F05_ISWL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISWL_0000001.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000003_00}
        position={[13.31, 14.2, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISWL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F03F03_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F03F03_ISCL_0000003.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISCL_0000001_00}
        position={[-24.78, 15.6, 34.343]}
        userData={{ name: 'M_SUNGSIM0001F03F03_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000055.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000032_00}
        position={[-30.191, 7.811, 3.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000032.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000030_00}
        position={[-30.191, 7.811, 9.862]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISPL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISPL_0000014.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISPL_0000005_00}
        position={[48.46, 9.55, -31.793]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISPL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISPL_0000009.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISPL_0000004_00}
        position={[-15.74, 9.55, -5.393]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISPL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISFL_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISFL_0000019.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISFL_0000005_00}
        position={[37.633, 8.15, 9.997]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISFL_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000018.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000026_00}
        position={[-30.226, 7.803, 18.926]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0100002.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0100001_00}
        position={[-17.417, 6.647, -18.907]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200021.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0200001_00}
        position={[-21.261, 4.464, -20.433]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700004.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0700001_00}
        position={[-21.377, 5.112, -20.938]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500020.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0500001_00}
        position={[45.029, 4.536, 1.578]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0600001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0600001.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0600001_00}
        position={[27.824, 4.557, 4.564]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0600001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ETFC_9900002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ETFC_9900002.geometry}
        material={materials.T_SUNGSIM0001F01F01_ETFC_9900002_00}
        position={[-15.44, 5.6, -22.934]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ETFC_9900002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ETFC_9900001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ETFC_9900001.geometry}
        material={materials.T_SUNGSIM0001F01F01_ETFC_9900001_00}
        position={[41.96, 5.6, -28.284]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ETFC_9900001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300005.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0300001_00}
        position={[-5.948, 5.421, 1.224]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100007.geometry}
        material={materials.T_SUNGSIM0001F01F01_SFFC_0100001_00}
        position={[32.364, 4.543, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_CVFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_CVFC_0500002.geometry}
        material={materials.T_SUNGSIM0001F00F00_CVFC_0500001_00}
        position={[10.012, 5.075, 0.29]}
        userData={{ name: 'M_SUNGSIM0001F01F01_CVFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100006.geometry}
        material={materials.T_SUNGSIM0001F00F00_MDFC_1100001_00}
        position={[9.244, 5.075, -26.06]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500001.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
        position={[19.529, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000008.geometry}
        material={materials.T_SUNGSIM0001F00F00_MVFC_1000001_00}
        position={[13.91, 5.45, -44.433]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200047.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
        position={[-9.29, 7.047, -0.074]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200047' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0300007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0300007.geometry}
        material={materials.T_SUNGSIM0001F02F02_IFFC_0300001_00}
        position={[32.213, 9.508, -5.263]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0300007' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200070.geometry}
        material={materials.T_SUNGSIM0001F02F02_IFFC_0200001_00}
        position={[34.887, 10.453, 4.173]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200070' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_IFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_IFFC_0200018.geometry}
        material={materials.T_SUNGSIM0001F02F02_IFFC_0200002_00}
        position={[19.622, 10.6, 27.351]}
        userData={{ name: 'M_SUNGSIM0001F02F02_IFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000001.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISCL_0000001_00}
        position={[13.321, 7.15, -2.699]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000012.geometry}
        material={materials.T_SUNGSIM0001F01F01_ISWL_0000031_00}
        position={[21.23, 5.876, -3.598]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_ISWL_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_ISWL_0000026.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000033_00}
        position={[-14.256, 9.984, -28.883]}
        userData={{ name: 'M_SUNGSIM0001F02F02_ISWL_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F02F02_MDFC_1200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F02F02_MDFC_1200009.geometry}
        material={materials.T_SUNGSIM0001F00F00_MDFC_1200001_00}
        position={[-21.944, 8.943, 15.03]}
        userData={{ name: 'M_SUNGSIM0001F02F02_MDFC_1200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F14F14_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F14F14_ISWL_0000001.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWL_0000006_00}
        position={[6.508, 58.041, -8.653]}
        userData={{ name: 'M_SUNGSIM0001F14F14_ISWL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0400002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0400002.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0400001_00}
        position={[24.843, 53.652, -9.9]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0400002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200022.geometry}
        material={materials.T_SUNGSIM0001F13F13_IFFC_0200001_00}
        position={[32.274, 53.946, -13.235]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0200006.geometry}
        material={materials.T_SUNGSIM0001F13F13_IFFC_0200002_00}
        position={[15.224, 53.875, -7.923]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_IFFC_0300002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_IFFC_0300002.geometry}
        material={materials.T_SUNGSIM0001F13F13_IFFC_0300001_00}
        position={[25.359, 53.8, -9.561]}
        userData={{ name: 'M_SUNGSIM0001F13F13_IFFC_0300002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_MVFC_1100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_MVFC_1100001.geometry}
        material={materials.T_SUNGSIM0001F00F00_MVFC_1100001_00}
        position={[29.354, 52.9, -10.752]}
        userData={{ name: 'M_SUNGSIM0001F13F13_MVFC_1100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_SFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_SFFC_0200002.geometry}
        material={materials.T_SUNGSIM0001F13F13_IFFC_0500001_00}
        position={[19.437, 54.145, -5.924]}
        userData={{ name: 'M_SUNGSIM0001F13F13_SFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000011.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISDR_0000002_00}
        position={[8.217, 53.35, 25.121]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000006.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISDR_0000003_00}
        position={[16.369, 53.65, -31.619]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000019.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISDR_0000001_00}
        position={[25.894, 53.65, -7.554]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000038.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISDR_0000004_00}
        position={[15.104, 53.65, -9.396]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISDR_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISDR_0000037.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000010_00}
        position={[18.879, 53.245, 6.654]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISDR_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000014.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISFL_0000003_00}
        position={[49.819, 52.25, -12.368]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000008.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISFL_0000004_00}
        position={[35.083, 52.25, 7.122]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000009.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISFL_0000007_00}
        position={[39.444, 52.25, -5.729]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISFL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISFL_0000010.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISFL_0000002_00}
        position={[19.583, 52.25, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISFL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000009.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISWD_0000001_00}
        position={[15.998, 54.1, -8.718]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ISWD_0000007.geometry}
        material={materials.T_SUNGSIM0001F13F13_ISWD_0000001_00}
        position={[33.469, 54.1, -5.328]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWD_0000007' }}
      />
      <group
        name="M_SUNGSIM0001F13F13_ISWL_0000001"
        position={[30.658, 54.2, -8.668]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWL_0000001' }}
      >
        <mesh
          name="Mesh2253"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000001_00}
        />
        <mesh
          name="Mesh2253_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_1.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000003_00}
        />
        <mesh
          name="Mesh2253_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_2.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000012_00}
        />
        <mesh
          name="Mesh2253_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_3.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000009_00}
        />
        <mesh
          name="Mesh2253_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_4.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000010_00}
        />
        <mesh
          name="Mesh2253_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_5.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000011_00}
        />
        <mesh
          name="Mesh2253_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2253_6.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000002_00}
        />
      </group>
      <group
        name="M_SUNGSIM0001F13F13_ISWL_0000002"
        position={[30.139, 54.2, -8.681]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ISWL_0000002' }}
      >
        <mesh
          name="Mesh2254"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2254.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000005_00}
        />
        <mesh
          name="Mesh2254_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh2254_1.geometry}
          material={materials.T_SUNGSIM0001F13F13_ISWL_0000004_00}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F13F13_FFFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_FFFC_0800002.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0800001_00}
        position={[34.169, 54.96, -9.609]}
        userData={{ name: 'M_SUNGSIM0001F13F13_FFFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISWL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISWL_0000005.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWL_0000007_00}
        position={[56.382, 3.624, -2.2]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISWL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001B01B01_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001B01B01_ISCL_0000002.geometry}
        material={materials.T_SUNGSIM0001F02F02_ISWL_0000030_00}
        position={[56.148, 4.171, -2.199]}
        userData={{ name: 'M_SUNGSIM0001B01B01_ISCL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900010.geometry}
        material={materials.T_SUNGSIM0001F13F13_ETFC_9900002_00}
        position={[13.189, 53.034, 0.054]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900010' }}
      />
      <mesh
        name="M_SUNGSIM0001F13F13_ETFC_9900044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F13F13_ETFC_9900044.geometry}
        material={materials.T_SUNGSIM0001F13F13_ETFC_9900001_00}
        position={[19.029, 52.9, -9.699]}
        userData={{ name: 'M_SUNGSIM0001F13F13_ETFC_9900044' }}
      />
      <mesh
        name="Mesh838"
        castShadow
        receiveShadow
        geometry={nodes.Mesh838.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh868"
        castShadow
        receiveShadow
        geometry={nodes.Mesh868.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh873"
        castShadow
        receiveShadow
        geometry={nodes.Mesh873.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh921"
        castShadow
        receiveShadow
        geometry={nodes.Mesh921.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh934"
        castShadow
        receiveShadow
        geometry={nodes.Mesh934.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh942"
        castShadow
        receiveShadow
        geometry={nodes.Mesh942.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh949"
        castShadow
        receiveShadow
        geometry={nodes.Mesh949.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh958"
        castShadow
        receiveShadow
        geometry={nodes.Mesh958.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh964"
        castShadow
        receiveShadow
        geometry={nodes.Mesh964.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh973"
        castShadow
        receiveShadow
        geometry={nodes.Mesh973.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh1002"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1002.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh1142"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1142.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0500001_00}
      />
      <mesh
        name="Mesh1204"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1204.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000002_00}
      />
      <mesh
        name="Mesh1265"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1265.geometry}
        material={materials.T_SUNGSIM0001F00F00_ISWD_0000001_00}
      />
      <mesh
        name="Mesh1460"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1460.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1479"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1479.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
      />
      <mesh
        name="Mesh1480"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1480.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
      />
      <mesh
        name="Mesh1481"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1481.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
      />
      <mesh
        name="Mesh1485"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1485.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
      />
      <mesh
        name="Mesh1509"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1509.geometry}
        material={materials.T_SUNGSIM0001F00F00_SFFC_0200001_00}
      />
      <mesh
        name="Mesh1620"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1620.geometry}
        material={materials.T_SUNGSIM0001F00F00_MDFC_1100001_00}
      />
      <mesh
        name="Mesh1648"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1648.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1652"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1652.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1715"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1715.geometry}
        material={materials.T_SUNGSIM0001F00F00_MDFC_1100001_00}
      />
      <mesh
        name="Mesh1748"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1748.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1765"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1765.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1801"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1801.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1837"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1837.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1839"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1839.geometry}
        material={materials.T_SUNGSIM0001F01F01_IFFC_0500001_00}
      />
      <mesh
        name="Mesh1966"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1966.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0500001_00}
      />
      <mesh
        name="Mesh1969"
        castShadow
        receiveShadow
        geometry={nodes.Mesh1969.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0500001_00}
      />
      <mesh
        name="Mesh2097"
        castShadow
        receiveShadow
        geometry={nodes.Mesh2097.geometry}
        material={materials.T_SUNGSIM0001F13F13_ETFC_9900002_00}
      />
      <mesh
        name="Mesh2304"
        castShadow
        receiveShadow
        geometry={nodes.Mesh2304.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0100001_00}
      />
      <mesh
        name="Mesh2355"
        castShadow
        receiveShadow
        geometry={nodes.Mesh2355.geometry}
        material={materials.T_SUNGSIM0001F00F00_FFFC_0100001_00}
      />
      <mesh
        name="Mesh2372"
        castShadow
        receiveShadow
        geometry={nodes.Mesh2372.geometry}
        material={materials.T_SUNGSIM0001F13F13_ETFC_9900002_00}
      />
      <mesh
        name="Mesh2396"
        castShadow
        receiveShadow
        geometry={nodes.Mesh2396.geometry}
        material={materials.T_SUNGSIM0001F13F13_ETFC_9900002_00}
      />
    </group>
  )
}

useGLTF.preload(url)
