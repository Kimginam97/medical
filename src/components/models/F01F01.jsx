import React, { useMemo } from 'react'
import { useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import TransAnnotation from '../three/TransAnnotation'
import Label from '../../assets/F01F01.json'
import kind from '../../assets/F01F01_KIND.json'

const url = './models/F01F01.glb'

const rmData = [
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100001',
    position: [37.908, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100002',
    position: [25.907, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100003',
    position: [19.46, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100004',
    position: [40.782, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100005',
    position: [10.36, 5.6, -33.843],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100006',
    position: [19.635, 5.6, -33.143],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100006' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100007',
    position: [49.382, 5.6, 6.557],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100007' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100008',
    position: [28.907, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100008' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100009',
    position: [52.538, 5.6, 6.557],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100009' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100010',
    position: [22.76, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100010' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100011',
    position: [34.907, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100011' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100012',
    position: [31.908, 5.6, -42.718],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100012' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100013',
    position: [16.61, 5.6, -33.893],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100013' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100014',
    position: [31.61, 5.6, -33.343],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100014' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100015',
    position: [43.91, 5.6, -41.543],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100015' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0100016',
    position: [34.61, 5.6, -33.343],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0100016' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0200001',
    position: [51.085, 5.6, -41.743],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0200002',
    position: [8.066, 5.6, 16.956],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0200003',
    position: [51.06, 5.6, -32.945],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0200003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0200004',
    position: [-2.227, 5.6, 13.165],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0200004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0200005',
    position: [51.06, 5.6, -36.195],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0200005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0300001',
    position: [50.061, 5.6, -28.293],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0300001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500001',
    position: [16.652, 5.6, 12.98],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500002',
    position: [17.555, 5.6, 5.61],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500003',
    position: [16.477, 5.6, 20.507],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500004',
    position: [16.327, 5.6, -3.068],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500005',
    position: [19.647, 5.6, 7.029],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500006',
    position: [21.352, 5.6, 12.98],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500006' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500007',
    position: [21.352, 5.6, 9.155],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500007' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500008',
    position: [22.214, 5.6, 4.562],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500008' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500009',
    position: [18.077, 5.6, -0.743],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500009' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500010',
    position: [51.236, 5.6, 21.009],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500010' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500011',
    position: [28.752, 5.6, 7.357],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500011' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500012',
    position: [39.524, 5.6, 6.163],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500012' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500013',
    position: [41.752, 5.6, 13.252],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500013' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500014',
    position: [34.202, 5.6, 11.562],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500014' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500015',
    position: [21.652, 5.6, 22.908],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500015' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500016',
    position: [19.802, 5.6, 18.391],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500016' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500017',
    position: [19.802, 5.6, 24.299],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500017' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500018',
    position: [31.327, 5.6, -2.243],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500018' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500019',
    position: [33.457, 5.6, 6.513],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500019' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500020',
    position: [35.254, 5.6, 17.852],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500020' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500021',
    position: [39.431, 5.6, 17.852],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500021' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500022',
    position: [44.152, 5.6, 8.057],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500022' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500023',
    position: [35.952, 5.6, -2.243],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500023' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500024',
    position: [43.503, 5.6, -2.243],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500024' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500025',
    position: [30.479, 5.6, 17.852],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500025' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500026',
    position: [51.311, 5.6, 3.255],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500026' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0500027',
    position: [39.579, 5.6, 9.407],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0500027' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0600001',
    position: [10.044, 5.6, 13.193],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0600001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0800001',
    position: [-8.395, 5.6, 33.578],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0800001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0800002',
    position: [-1.056, 5.6, 15.704],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0800002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_0800003',
    position: [-13.743, 5.6, 17.308],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_0800003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000001',
    position: [38.536, 5.6, 29.432],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000002',
    position: [39.407, 5.6, 25.483],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000003',
    position: [51.311, 5.6, 9.316],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000004',
    position: [39.192, 5.6, 32.132],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000005',
    position: [51.533, 5.6, 32.132],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000006',
    position: [52.496, 5.6, 12.459],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000006' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000007',
    position: [47.22, 5.6, 32.132],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000007' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000008',
    position: [42.182, 5.6, 25.483],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000008' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000009',
    position: [43.358, 5.6, 32.132],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000009' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1000010',
    position: [52.208, 5.6, 29.407],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1000010' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1200001',
    position: [6.193, 5.6, 13.175],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1200001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1200002',
    position: [-8.151, 5.6, 31.868],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1200002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1200003',
    position: [3.391, 5.6, 13.175],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1200003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1500001',
    position: [23.285, 5.6, -22.168],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1500001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1500002',
    position: [44.431, 5.6, 25.483],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1500002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1500003',
    position: [-25.334, 5.6, 6.099],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1500003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1500004',
    position: [-8.151, 5.6, 30.056],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1500004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1500005',
    position: [32.152, 5.6, 25.482],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1500005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1600001',
    position: [8.528, 5.6, 2.893],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1600001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1700001',
    position: [51.311, 5.6, 15.979],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1700001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1700002',
    position: [-9.916, 5.6, 13.31],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1700002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_BSRM_1800001',
    position: [53.661, 5.6, -26.458],
    useData: { name: 'M_SUNGSIM0001F01F01_BSRM_1800001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200001',
    position: [-22.51, 5.6, -21.084],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200002',
    position: [-25.55, 5.6, -20.243],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200003',
    position: [-24.955, 5.6, -16.989],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200004',
    position: [-8.151, 5.6, 26.488],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200005',
    position: [-8.151, 5.6, 24.849],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200006',
    position: [-23.955, 5.6, -18.743],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200006' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200007',
    position: [-26.1, 5.6, -21.543],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200007' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200008',
    position: [10.78, 5.6, 15.856],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200008' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200009',
    position: [10.685, 5.6, 18.055],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200009' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200010',
    position: [51.526, 5.6, -0.343],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200010' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0200011',
    position: [52.226, 5.6, -4.013],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0200011' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400001',
    position: [52.135, 5.6, -25.774],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400001' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400002',
    position: [43.965, 5.6, 17.908],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400002' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400003',
    position: [52.135, 5.6, -27.141],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400003' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400004',
    position: [49.445, 5.6, 13.484],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400004' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400005',
    position: [35.977, 5.6, 25.483],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400005' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400006',
    position: [43.81, 5.6, 5.341],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400006' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400007',
    position: [28.86, 5.6, -33.343],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400007' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400008',
    position: [22.875, 5.6, 0.347],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400008' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400009',
    position: [43.91, 5.6, -34.694],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400009' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_CVRM_0400010',
    position: [43.96, 5.6, -31.033],
    useData: { name: 'M_SUNGSIM0001F01F01_CVRM_0400010' },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900001',
    position: [-25.781, 5.6, 12.583],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900002',
    position: [31.26, 6.05, -10.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900003',
    position: [51.311, 5.6, 26.059],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900004',
    position: [10.36, 6.05, -38.693],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900005',
    position: [31.21, 6.05, -15.843],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900006',
    position: [-24.021, 5.6, -30.12],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900007',
    position: [-21.982, 5.6, -36.624],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900008',
    position: [-18.628, 5.6, -22.772],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900009',
    position: [-23.131, 5.6, 30.632],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900010',
    position: [9.71, 6.05, -43.018],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900011',
    position: [31.035, 5.6, -12.143],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900011',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900012',
    position: [-13.109, 5.6, -39.76],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900012',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900013',
    position: [31.21, 6.05, -17.768],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900013',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900014',
    position: [52.935, 6.05, -11.043],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900014',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900015',
    position: [52.01, 6.075, -12.068],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900015',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900016',
    position: [39.081, 6.05, -10.293],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900016',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900017',
    position: [46.86, 6.05, -11.568],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900017',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900018',
    position: [50.61, 5.6, -5.393],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900018',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900019',
    position: [-24.743, 5.6, -25.228],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900019',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900020',
    position: [29.66, 6.05, -16.918],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900020',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900021',
    position: [16.01, 6.05, -17.543],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900021',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900022',
    position: [46.86, 6.05, -17.38],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900022',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900023',
    position: [10.464, 6.05, 22.665],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900023',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900024',
    position: [-25.781, 5.6, 23.213],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900024',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900025',
    position: [-20.164, 5.6, 28.904],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900025',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900026',
    position: [10.459, 6.05, -41.468],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900026',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900027',
    position: [9.71, 6.05, -41.868],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900027',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900028',
    position: [-18.226, 5.6, -30.12],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900028',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900029',
    position: [-2.714, 5.439, 34.61],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900029',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900030',
    position: [16.585, 5.6, -37.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900030',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900031',
    position: [16.327, 6.05, -4.842],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900031',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_ETRM_9900032',
    position: [-22.516, 5.6, 38.07],
    useData: {
      name: 'M_SUNGSIM0001F01F01_ETRM_9900032',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100001',
    position: [-26.095, 5.6, -1.227],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100002',
    position: [-4.097, 5.6, 4.832],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100003',
    position: [-26.096, 5.6, -7.891],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100004',
    position: [-21.783, 5.6, -6.885],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100005',
    position: [-26.096, 5.6, -3.883],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100006',
    position: [-26.308, 5.6, -10.312],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100007',
    position: [-12.704, 5.6, 22.51],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100008',
    position: [-26.096, 5.6, -6.211],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100009',
    position: [1.949, 5.6, 19.287],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100010',
    position: [-19.941, 5.6, -0.345],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100011',
    position: [-26.308, 5.6, -13.617],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100011',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0100012',
    position: [10.292, 5.6, 6.222],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0100012',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0200001',
    position: [30.16, 5.6, -35.865],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0200001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0200002',
    position: [27.327, 5.6, 25.382],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0200002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0200003',
    position: [-2.127, 5.6, 26.734],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0200003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0200004',
    position: [-13.894, 5.6, -5.138],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0200004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300001',
    position: [-3.79, 5.6, -25.193],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300002',
    position: [26.11, 5.6, -33.393],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300003',
    position: [18.925, 5.6, -37.577],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300004',
    position: [12.906, 5.6, -17.593],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300005',
    position: [22.502, 5.6, -4.018],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300006',
    position: [-19.941, 5.6, -4.955],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300007',
    position: [-12.184, 5.6, 33.216],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300008',
    position: [15.985, 5.6, -12.918],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300009',
    position: [20.946, 5.6, -14.268],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300010',
    position: [-21.038, 5.6, 6.099],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300011',
    position: [37.96, 5.6, -33.393],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300011',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300012',
    position: [5.285, 5.6, -39.893],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300012',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300013',
    position: [39.104, 5.6, -6.66],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300013',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300014',
    position: [28.21, 5.6, -14.268],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300014',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0300015',
    position: [-12.26, 5.6, 31.235],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0300015',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600001',
    position: [-20.164, 5.6, 25.916],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600002',
    position: [-19.572, 5.6, 38.07],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600003',
    position: [-17.543, 5.6, 28.333],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600004',
    position: [-15.153, 5.6, 28.333],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600005',
    position: [-14.04, 5.6, 38.07],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600006',
    position: [-20.002, 5.6, 32.192],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600007',
    position: [-5.283, 5.6, 38.07],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600008',
    position: [-26.723, 5.6, 17.827],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600009',
    position: [-18.028, 5.6, 20.466],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600010',
    position: [-8.685, 5.6, 38.07],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600011',
    position: [-17.268, 5.6, 14.519],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600011',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600012',
    position: [-14.67, 5.6, 2.683],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600012',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600013',
    position: [-25.781, 5.6, 15.236],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600013',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600014',
    position: [-16.539, 5.6, 32.192],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600014',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600015',
    position: [-24.833, 5.6, 17.827],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600015',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600016',
    position: [-25.781, 5.6, 20.46],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600016',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0600017',
    position: [-25.613, 5.6, 37.518],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0600017',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700001',
    position: [11.562, 5.6, 13.193],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700002',
    position: [44.131, 5.6, 13.308],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700003',
    position: [43.805, 5.6, -36.979],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700004',
    position: [43.96, 5.6, -28.523],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700005',
    position: [-4.18, 5.6, 31.554],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700006',
    position: [-26.096, 5.6, 0.758],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700007',
    position: [43.96, 5.6, -26.168],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700008',
    position: [8.416, 5.6, 13.175],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700009',
    position: [-8.151, 5.6, 28.127],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0700010',
    position: [53.062, 5.6, -9.232],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0700010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0800001',
    position: [16.61, 5.6, -41.843],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0800001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MDRM_0800002',
    position: [0.806, 5.6, 13.165],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MDRM_0800002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100001',
    position: [33.452, 6.075, 32.882],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100002',
    position: [-26.147, 6.1, 32.033],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100003',
    position: [9.91, 6.05, -44.843],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100004',
    position: [13.952, 5.6, 27.457],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100005',
    position: [52.935, 6.05, -15.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100006',
    position: [-18.68, 6.05, -15.261],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0100007',
    position: [9.977, 6.05, 27.457],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0100007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0200001',
    position: [-5.823, 6.05, -8.693],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0200001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300001',
    position: [37.852, 6.05, -14.743],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300002',
    position: [13.91, 6.05, -44.843],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300003',
    position: [46.86, 6.05, -14.805],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300004',
    position: [40.681, 6.05, -14.743],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300005',
    position: [19.302, 6.05, -4.143],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300006',
    position: [-18.769, 6.05, -15.293],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300007',
    position: [49.76, 6.05, -16.943],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0300008',
    position: [28.81, 6.05, -10.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0300008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500001',
    position: [52.873, 5.6, -21.793],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500002',
    position: [-4.115, 5.6, -43.309],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500003',
    position: [-6.153, 5.6, -40.005],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500004',
    position: [-0.79, 5.6, -39.743],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500005',
    position: [-26.229, 5.6, 9.927],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500006',
    position: [-26.308, 5.6, 2.806],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0500007',
    position: [1.578, 5.6, -40.005],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0500007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600001',
    position: [52.873, 5.6, -21.793],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600002',
    position: [-0.79, 5.6, -39.743],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600003',
    position: [-4.115, 5.6, -43.309],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600004',
    position: [1.578, 5.6, -40.005],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600005',
    position: [-26.308, 5.6, 2.806],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600006',
    position: [-6.153, 5.6, -40.005],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0600007',
    position: [-26.229, 5.6, 9.927],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0600007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700001',
    position: [46.96, 5.6, -25.243],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700001',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700002',
    position: [-20.552, 5.6, 2.807],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700002',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700003',
    position: [43.91, 5.6, -32.843],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700003',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700004',
    position: [-5.993, 5.6, 16.087],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700004',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700005',
    position: [46.96, 5.6, -35.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700005',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700006',
    position: [46.96, 5.6, -42.268],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700006',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700007',
    position: [-22.638, 5.6, 17.918],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700007',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700008',
    position: [45.413, 5.6, 28.832],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700008',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700009',
    position: [13.085, 5.6, -42.293],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700009',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700010',
    position: [-14.069, 5.6, 30.354],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700010',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700011',
    position: [-22.761, 5.6, 26.512],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700011',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700012',
    position: [15.491, 5.6, -6.767],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700012',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700013',
    position: [49.445, 5.6, 11.419],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700013',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0700014',
    position: [-17.755, 5.6, 6.192],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0700014',
    },
  },
  {
    name: 'M_SUNGSIM0001F01F01_MVRM_0800001',
    position: [49.76, 5.6, -12.493],
    useData: {
      name: 'M_SUNGSIM0001F01F01_MVRM_0800001',
    },
  },
]

export function F01F01(props) {
  const { nodes, materials, scene } = useGLTF(url)
  const colors = ['#ff0000', '#ffa500', '#00ff00', '#ffff00'] // 빨간색, 주황색, 녹색, 노란색

  const getRandomColor = () => {
    return colors[Math.floor(Math.random() * colors.length)]
  }

  const material = useMemo(() => {
    return rmData.reduce((acc, mesh) => {
      acc[mesh.name] = new THREE.MeshStandardMaterial({
        color: getRandomColor(),
        transparent: true,
        opacity: 0.5,
      })
      return acc
    }, {})
  }, [])
  return (
    <group {...props} dispose={null}>
      <TransAnnotation label={Label} kind={kind} floor={'1F'} height={4.5} />
      <group visible={props.rmVisible}>
        {rmData.map(({ name, position, useData }) => (
          <mesh
            key={name}
            name={name}
            castShadow
            receiveShadow
            geometry={nodes[name].geometry}
            material={material[name]}
            position={position}
            userData={{ useData }}
          />
        ))}
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_CVFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_CVFC_0500001.geometry}
        material={materials.F00_CVFC_0500001}
        position={[7.184, 5, 0.366]}
        userData={{ name: 'M_SUNGSIM0001F01F01_CVFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_CVFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_CVFC_0500002.geometry}
        material={materials.F00_CVFC_0500001}
        position={[10.012, 5.075, 0.29]}
        userData={{ name: 'M_SUNGSIM0001F01F01_CVFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_CVFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_CVFC_0500003.geometry}
        material={materials.F00_CVFC_0500001}
        position={[6.471, 5, 0.366]}
        userData={{ name: 'M_SUNGSIM0001F01F01_CVFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_CVFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_CVFC_0500004.geometry}
        material={materials.F00_CVFC_0500001}
        position={[9.295, 5.075, 0.29]}
        userData={{ name: 'M_SUNGSIM0001F01F01_CVFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ETFC_9900001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ETFC_9900001.geometry}
        material={materials.F01_ETFC_9900001}
        position={[41.96, 5.6, -28.284]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ETFC_9900001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ETFC_9900002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ETFC_9900002.geometry}
        material={materials.F01_ETFC_9900002}
        position={[-15.44, 5.6, -22.934]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ETFC_9900002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0100001.geometry}
        material={materials.F00_FFFC_0100001}
        position={[14.938, 5.951, 6.623]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0100002.geometry}
        material={materials.F00_FFFC_0100001}
        position={[-17.417, 6.647, -18.907]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0100003.geometry}
        material={materials.F00_FFFC_0100001}
        position={[45.816, 5.951, 7.942]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200001.geometry}
        material={materials.F00_FFFC_0200001}
        position={[12.573, 4.464, 11.362]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200002.geometry}
        material={materials.F00_FFFC_0200001}
        position={[47.931, 4.464, 10.355]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200003.geometry}
        material={materials.F00_FFFC_0200001}
        position={[4.226, 4.464, 3.997]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200004.geometry}
        material={materials.F00_FFFC_0200001}
        position={[7.798, 4.464, 19.525]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200005.geometry}
        material={materials.F00_FFFC_0200001}
        position={[47.931, 4.464, 1.718]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200006.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-13.747, 4.464, 29.968]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200007.geometry}
        material={materials.F00_FFFC_0200001}
        position={[36.462, 4.464, 3.92]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200008.geometry}
        material={materials.F00_FFFC_0200001}
        position={[46.169, 4.464, -9.465]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200009.geometry}
        material={materials.F00_FFFC_0200001}
        position={[14.536, 4.464, -40.864]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200010.geometry}
        material={materials.F00_FFFC_0200001}
        position={[33.401, 4.464, -40.263]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200011.geometry}
        material={materials.F00_FFFC_0200001}
        position={[29.139, 4.464, -31.164]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200012.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-3.762, 4.464, 24.304]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200013.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-15.979, 4.464, 4.376]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200014.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-24.377, 4.464, 32.886]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200015.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-15.269, 4.464, 34.295]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200016.geometry}
        material={materials.F00_FFFC_0200001}
        position={[14.823, 4.464, -2.651]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200017.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-18.285, 4.464, -11.498]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200018.geometry}
        material={materials.F00_FFFC_0200001}
        position={[7.78, 4.464, -38.264]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200019.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-16.34, 4.464, 8.057]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200020.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-16.068, 4.464, 0.696]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200021.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-21.261, 4.464, -20.433]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200022.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-19.063, 4.464, -1.444]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200023.geometry}
        material={materials.F00_FFFC_0200001}
        position={[13.104, 4.464, 25.878]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200024.geometry}
        material={materials.F00_FFFC_0200001}
        position={[47.918, 4.464, 27.33]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200025.geometry}
        material={materials.F00_FFFC_0200001}
        position={[45.889, 4.464, 19.915]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200026.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-24.506, 4.464, 11.583]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200027.geometry}
        material={materials.F00_FFFC_0200001}
        position={[24.831, 4.464, 22.538]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200028.geometry}
        material={materials.F00_FFFC_0200001}
        position={[-15.063, 4.464, 11.583]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0200029.geometry}
        material={materials.F00_FFFC_0200001}
        position={[27.375, 4.464, 4.578]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500001.geometry}
        material={materials.F00_FFFC_0500001}
        position={[32.145, 6.95, -28.489]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500002.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-27.336, 6.95, 10.004]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500003.geometry}
        material={materials.F00_FFFC_0500001}
        position={[41.025, 6.95, -32.387]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500004.geometry}
        material={materials.F00_FFFC_0500001}
        position={[14.59, 6.95, -28.489]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500005.geometry}
        material={materials.F00_FFFC_0500001}
        position={[22.558, 6.95, -32.387]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500006.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-5.202, 6.95, 24.404]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500007.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-22.704, 6.935, 35.329]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500008.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-5.321, 6.935, 11.838]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500009.geometry}
        material={materials.F00_FFFC_0500001}
        position={[12.596, 6.95, 9.006]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500010.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-17.638, 6.95, 8.13]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500011.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-24.403, 6.95, 29.563]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500012.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-5.293, 6.935, 35.329]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500013.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-17.638, 6.95, 4.227]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500014.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-10.835, 6.935, -17.858]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500015.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-10.835, 6.935, -14.77]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500016.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-8.796, 6.935, -17.858]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500017.geometry}
        material={materials.F00_FFFC_0500001}
        position={[13.936, 6.95, 11.196]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500018.geometry}
        material={materials.F00_FFFC_0500001}
        position={[-27.336, 6.95, 2.752]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500019.geometry}
        material={materials.F00_FFFC_0500001}
        position={[24.723, 4.536, 3.037]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500020.geometry}
        material={materials.F00_FFFC_0500001}
        position={[45.029, 4.536, 1.578]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500021.geometry}
        material={materials.F00_FFFC_0500001}
        position={[24.723, 4.536, 19.827]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500022.geometry}
        material={materials.F00_FFFC_0500001}
        position={[47.11, 6.935, 22.159]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500023.geometry}
        material={materials.F00_FFFC_0500001}
        position={[37.686, 4.536, 23.286]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500024.geometry}
        material={materials.F00_FFFC_0500001}
        position={[23.725, 6.95, -7.825]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500025.geometry}
        material={materials.F00_FFFC_0500001}
        position={[43.751, 6.935, -7.676]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500026.geometry}
        material={materials.F00_FFFC_0500001}
        position={[45.678, 6.935, 10.887]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500027.geometry}
        material={materials.F00_FFFC_0500001}
        position={[49.976, 6.95, -9.885]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500028.geometry}
        material={materials.F00_FFFC_0500001}
        position={[51.211, 6.95, -23.163]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500029.geometry}
        material={materials.F00_FFFC_0500001}
        position={[51.211, 6.95, -20.349]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500030.geometry}
        material={materials.F00_FFFC_0500001}
        position={[26.568, 6.95, -5.946]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500031.geometry}
        material={materials.F00_FFFC_0500001}
        position={[21.048, 6.95, -9.93]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500032.geometry}
        material={materials.F00_FFFC_0500001}
        position={[27.193, 6.935, 10.887]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500032' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0500033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0500033.geometry}
        material={materials.F00_FFFC_0500001}
        position={[27.193, 6.935, 22.355]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0500033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0600001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0600001.geometry}
        material={materials.F00_FFFC_0600001}
        position={[27.824, 4.557, 4.564]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0600001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700001.geometry}
        material={materials.F00_FFFC_0700001}
        position={[12.965, 5.112, 25.228]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700002.geometry}
        material={materials.F00_FFFC_0700001}
        position={[12.623, 5.112, -40.585]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700003.geometry}
        material={materials.F00_FFFC_0700001}
        position={[14.939, 5.112, -3.247]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700004.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-21.377, 5.112, -20.938]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700005.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-24.494, 5.112, 33.573]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700006.geometry}
        material={materials.F00_FFFC_0700001}
        position={[46.846, 5.112, -9.582]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700007.geometry}
        material={materials.F00_FFFC_0700001}
        position={[-14.409, 5.112, 11.7]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0700008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0700008.geometry}
        material={materials.F00_FFFC_0700001}
        position={[45.773, 5.112, 19.281]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0700008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800001.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.679, 7.06, -2.081]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800002.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.679, 7.06, -8.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800003.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-0.748, 7.06, -18.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800004.geometry}
        material={materials.F00_FFFC_0800001}
        position={[5.28, 7.06, -18.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800005.geometry}
        material={materials.F00_FFFC_0800001}
        position={[8.679, 7.06, -15.294]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800006.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-15.637, 7.06, -15.375]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800007.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.766, 7.06, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800008.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.766, 7.06, -2.081]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800009.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-9.766, 7.06, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800010.geometry}
        material={materials.F00_FFFC_0800001}
        position={[-6.748, 7.06, -18.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800011.geometry}
        material={materials.F00_FFFC_0800001}
        position={[41.035, 6.16, -32.249]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800012.geometry}
        material={materials.F00_FFFC_0800001}
        position={[43.81, 7.06, -18.503]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800013.geometry}
        material={materials.F00_FFFC_0800001}
        position={[30.427, 7.06, -28.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800014.geometry}
        material={materials.F00_FFFC_0800001}
        position={[22.485, 7.06, -31.425]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800015.geometry}
        material={materials.F00_FFFC_0800001}
        position={[34.131, 7.06, -18.503]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800016.geometry}
        material={materials.F00_FFFC_0800001}
        position={[26.502, 7.06, -6.025]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800017.geometry}
        material={materials.F00_FFFC_0800001}
        position={[24.107, 7.06, -7.793]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800018.geometry}
        material={materials.F00_FFFC_0800001}
        position={[34.131, 7.06, -9.677]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_FFFC_0800019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_FFFC_0800019.geometry}
        material={materials.F00_FFFC_0800001}
        position={[43.81, 7.06, -9.677]}
        userData={{ name: 'M_SUNGSIM0001F01F01_FFFC_0800019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200001.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.053, 6.114, 3.104]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200002.geometry}
        material={materials.F01_IFFC_0200001}
        position={[41.181, 6.705, 21.363]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200003.geometry}
        material={materials.F01_IFFC_0200001}
        position={[19.323, 6.511, -35.777]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200004.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.053, 6.124, 6.681]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200005.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.053, 6.858, 16.007]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200006.geometry}
        material={materials.F01_IFFC_0200001}
        position={[43.316, 5.964, 23.3]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200007.geometry}
        material={materials.F01_IFFC_0200001}
        position={[24.708, 6.832, 17.257]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200008.geometry}
        material={materials.F01_IFFC_0200001}
        position={[27.095, 6.408, 16.357]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200009.geometry}
        material={materials.F01_IFFC_0200001}
        position={[8.511, 6.591, -28.491]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200010.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-13.814, 6.955, -12.249]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200011.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.773, 6.66, 0.426]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200012.geometry}
        material={materials.F01_IFFC_0200001}
        position={[29.076, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200013.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.382, 5.682, -25.201]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200014.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.053, 6.33, 22.304]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200015.geometry}
        material={materials.F01_IFFC_0200001}
        position={[26.568, 6.699, -2.861]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200016.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-9.746, 5.982, -5.803]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200017.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-8.519, 6.45, -2.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200018.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-22.797, 5.453, 8.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200019.geometry}
        material={materials.F01_IFFC_0200001}
        position={[9.6, 6.457, 0.151]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200020.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-5.37, 6.812, 20.7]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200021.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.103, 6.5, 18.865]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200022.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.103, 6.5, 16.008]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200023.geometry}
        material={materials.F01_IFFC_0200001}
        position={[6.779, 6.457, -0.111]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200024.geometry}
        material={materials.F01_IFFC_0200001}
        position={[28.452, 6.65, 11.851]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200025.geometry}
        material={materials.F01_IFFC_0200001}
        position={[23.896, 6.437, -30.112]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200026.geometry}
        material={materials.F01_IFFC_0200001}
        position={[32.021, 5.957, -35.149]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200027.geometry}
        material={materials.F01_IFFC_0200001}
        position={[24.093, 5.799, -0.62]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200028.geometry}
        material={materials.F01_IFFC_0200001}
        position={[34.206, 5.957, -35.149]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200029.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.634, 26.752]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200030.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.634, 24.917]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200031.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-3.639, 5.833, 27.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200032.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-11.978, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200032' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200033.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-8.405, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200034.geometry}
        material={materials.F01_IFFC_0200001}
        position={[12.229, 5.634, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200034' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200035.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-4.174, 6.282, 11.791]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200035' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200036.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.679, 16.829]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200036' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200037.geometry}
        material={materials.F01_IFFC_0200001}
        position={[7.356, 5.634, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200037' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200038.geometry}
        material={materials.F01_IFFC_0200001}
        position={[10.65, 5.634, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200038' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200039.geometry}
        material={materials.F01_IFFC_0200001}
        position={[8.958, 5.634, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200039' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200040.geometry}
        material={materials.F01_IFFC_0200001}
        position={[19.75, 5.957, -34.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200040' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200041.geometry}
        material={materials.F01_IFFC_0200001}
        position={[50.523, 5.492, 11.308]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200041' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200042.geometry}
        material={materials.F01_IFFC_0200001}
        position={[39.502, 6.347, 1.564]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200042' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200043.geometry}
        material={materials.F01_IFFC_0200001}
        position={[44.323, 5.799, 4.501]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200043' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200044.geometry}
        material={materials.F01_IFFC_0200001}
        position={[35.702, 6.321, 4.042]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200044' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200045.geometry}
        material={materials.F01_IFFC_0200001}
        position={[43.292, 5.799, 4.501]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200045' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200046.geometry}
        material={materials.F01_IFFC_0200001}
        position={[34.465, 6.345, 1.564]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200046' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200047.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.056, 6.348, 2.307]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200047' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200048.geometry}
        material={materials.F01_IFFC_0200001}
        position={[42.053, 5.713, -39.402]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200048' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200049.geometry}
        material={materials.F01_IFFC_0200001}
        position={[24.708, 6.308, 6.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200049' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200050.geometry}
        material={materials.F01_IFFC_0200001}
        position={[32.402, 6.349, 1.564]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200050' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200051.geometry}
        material={materials.F01_IFFC_0200001}
        position={[46.284, 6.037, 1.561]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200051' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200052.geometry}
        material={materials.F01_IFFC_0200001}
        position={[23.089, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200052' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200053.geometry}
        material={materials.F01_IFFC_0200001}
        position={[25.732, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200053' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200054.geometry}
        material={materials.F01_IFFC_0200001}
        position={[19.529, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200054' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200055.geometry}
        material={materials.F01_IFFC_0200001}
        position={[18.266, 5.971, -36.066]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200055' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200056.geometry}
        material={materials.F01_IFFC_0200001}
        position={[26.032, 6.624, -34.708]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200056' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200057.geometry}
        material={materials.F01_IFFC_0200001}
        position={[48.053, 6.32, 5.885]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200057' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200058.geometry}
        material={materials.F01_IFFC_0200001}
        position={[40.754, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200058' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200059.geometry}
        material={materials.F01_IFFC_0200001}
        position={[38.26, 6.624, -34.708]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200059' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200060.geometry}
        material={materials.F01_IFFC_0200001}
        position={[37.774, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200060' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200061.geometry}
        material={materials.F01_IFFC_0200001}
        position={[31.762, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200061' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200062.geometry}
        material={materials.F01_IFFC_0200001}
        position={[35.065, 5.957, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200062' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200063.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.636, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200063' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200064.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.484, 5.747, -12.395]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200064' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200065.geometry}
        material={materials.F01_IFFC_0200001}
        position={[50.008, 5.862, -0.606]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200065' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200066.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.734, 6.367, -25.129]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200066' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200067.geometry}
        material={materials.F01_IFFC_0200001}
        position={[42.01, 6.147, -25.856]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200067' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200068.geometry}
        material={materials.F01_IFFC_0200001}
        position={[42.01, 5.584, -25.856]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200068' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200069.geometry}
        material={materials.F01_IFFC_0200001}
        position={[13.973, 6.593, 1.254]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200069' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200070.geometry}
        material={materials.F01_IFFC_0200001}
        position={[7.786, 6.632, -25.192]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200070' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200071.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-9.748, 6.546, -19.088]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200071' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200072.geometry}
        material={materials.F01_IFFC_0200001}
        position={[8.402, 6.632, -25.808]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200072' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200073.geometry}
        material={materials.F01_IFFC_0200001}
        position={[49.569, 6.481, -6.75]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200073' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200074.geometry}
        material={materials.F01_IFFC_0200001}
        position={[49.926, 5.762, -3.645]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200074' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200075.geometry}
        material={materials.F01_IFFC_0200001}
        position={[37.666, 6.055, 3.941]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200075' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200076.geometry}
        material={materials.F01_IFFC_0200001}
        position={[27.095, 5.483, 21.212]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200076' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200077.geometry}
        material={materials.F01_IFFC_0200001}
        position={[45.909, 6.386, 9.885]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200077' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200078.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.833, 29.872]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200078' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200079.geometry}
        material={materials.F01_IFFC_0200001}
        position={[28.986, 5.999, 10.116]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200079' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200080.geometry}
        material={materials.F01_IFFC_0200001}
        position={[27.246, 5.483, 21.363]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200080' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200081.geometry}
        material={materials.F01_IFFC_0200001}
        position={[38.925, 6.121, -31.286]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200081' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200082.geometry}
        material={materials.F01_IFFC_0200001}
        position={[49.486, 5.492, 10.526]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200082' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200083.geometry}
        material={materials.F01_IFFC_0200001}
        position={[34.135, 6.612, -25.186]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200083' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200084.geometry}
        material={materials.F01_IFFC_0200001}
        position={[39.766, 6.604, -30.711]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200084' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200085.geometry}
        material={materials.F01_IFFC_0200001}
        position={[40.36, 6.147, -6.099]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200085' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200086.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-10.244, 6.546, -18.593]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200086' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200087.geometry}
        material={materials.F01_IFFC_0200001}
        position={[22.868, 5.799, -0.62]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200087' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200088.geometry}
        material={materials.F01_IFFC_0200001}
        position={[21.656, 5.799, -0.62]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200088' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200089.geometry}
        material={materials.F01_IFFC_0200001}
        position={[24.599, 6.176, -6.308]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200089' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200090.geometry}
        material={materials.F01_IFFC_0200001}
        position={[12.538, 5.118, 18.358]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200090' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200091.geometry}
        material={materials.F01_IFFC_0200001}
        position={[18.154, 6.156, -9.341]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200091' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200092.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-3.639, 5.488, 36.383]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200092' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200093.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-22.128, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200093' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200094.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-19.407, 6.296, 36.543]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200094' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200095.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-22.516, 6.296, 36.535]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200095' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200096.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-17.149, 6.296, 34.168]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200096' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200097.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-19.491, 6.296, 34.168]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200097' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200098.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-8.557, 6.49, -14.387]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200098' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200099.geometry}
        material={materials.F01_IFFC_0200001}
        position={[15.01, 6.473, -7.852]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200099' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200100.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-24.425, 5.747, -19.663]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200100' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200101.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-15.48, 6.513, -19.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200101' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200102.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-22.661, 5.853, -17.298]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200102' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200103.geometry}
        material={materials.F01_IFFC_0200001}
        position={[12.455, 6.473, -5.96]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200103' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200104.geometry}
        material={materials.F01_IFFC_0200001}
        position={[12.723, 5.54, 19.116]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200104' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200105.geometry}
        material={materials.F01_IFFC_0200001}
        position={[12.538, 5.118, 16.132]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200105' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200106.geometry}
        material={materials.F01_IFFC_0200001}
        position={[14.945, 5.47, 4.16]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200106' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200107.geometry}
        material={materials.F01_IFFC_0200001}
        position={[14.945, 6.102, -5.213]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200107' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200108.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-5.006, 6.296, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200108' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200109.geometry}
        material={materials.F01_IFFC_0200001}
        position={[1.872, 5.977, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200109' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200110.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-17.106, 5.488, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200110' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200111.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-17.106, 5.686, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200111' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200112.geometry}
        material={materials.F01_IFFC_0200001}
        position={[1.872, 5.734, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200112' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200113.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-16.67, 5.488, 34.172]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200113' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200114.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-18.577, 5.488, 34.172]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200114' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200115.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-4.174, 5.679, 16.829]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200115' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200116.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-3.942, 6.282, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200116' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200117"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200117.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.665, 25.874]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200117' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200118"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200118.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-9.916, 6.761, 11.706]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200118' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200119"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200119.geometry}
        material={materials.F01_IFFC_0200001}
        position={[3.341, 5.634, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200119' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200120"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200120.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-4.345, 5.389, 8.209]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200120' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200121"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200121.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-21.651, 5.488, 36.535]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200121' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200122"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200122.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.931, 5.488, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200122' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200123"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200123.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-20.836, 5.488, 36.535]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200123' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200124"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200124.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-6.567, 5.833, 28.702]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200124' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200125"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200125.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-0.444, 5.735, 11.571]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200125' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200126"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200126.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-13.452, 5.692, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200126' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0200127"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0200127.geometry}
        material={materials.F01_IFFC_0200001}
        position={[-13.452, 5.488, 36.55]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0200127' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300001.geometry}
        material={materials.F01_IFFC_0300001}
        position={[38.405, 5.421, -31.286]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300002.geometry}
        material={materials.F01_IFFC_0300001}
        position={[36.045, 5.608, -15.929]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300003.geometry}
        material={materials.F01_IFFC_0300001}
        position={[46.219, 5.421, -6.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300004.geometry}
        material={materials.F01_IFFC_0300001}
        position={[45.504, 5.796, -13.381]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0300005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0300005.geometry}
        material={materials.F01_IFFC_0300001}
        position={[-5.948, 5.421, 1.224]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0300005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500001.geometry}
        material={materials.F01_IFFC_0500001}
        position={[19.529, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500002.geometry}
        material={materials.F01_IFFC_0500001}
        position={[18.266, 5.543, -36.066]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500003.geometry}
        material={materials.F01_IFFC_0500001}
        position={[19.75, 5.529, -34.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500004.geometry}
        material={materials.F01_IFFC_0500001}
        position={[23.089, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500005.geometry}
        material={materials.F01_IFFC_0500001}
        position={[40.754, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500006.geometry}
        material={materials.F01_IFFC_0500001}
        position={[25.732, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500007.geometry}
        material={materials.F01_IFFC_0500001}
        position={[34.206, 5.529, -35.149]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500008.geometry}
        material={materials.F01_IFFC_0500001}
        position={[32.021, 5.529, -35.149]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500009.geometry}
        material={materials.F01_IFFC_0500001}
        position={[35.065, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500010.geometry}
        material={materials.F01_IFFC_0500001}
        position={[31.762, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500011.geometry}
        material={materials.F01_IFFC_0500001}
        position={[29.076, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_IFFC_0500012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_IFFC_0500012.geometry}
        material={materials.F01_IFFC_0500001}
        position={[37.774, 5.529, -40.386]}
        userData={{ name: 'M_SUNGSIM0001F01F01_IFFC_0500012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000001.geometry}
        material={materials.F01_ISCL_0000001}
        position={[13.321, 7.15, -2.699]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000001' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000002.geometry}
        material={materials.F01_ISCL_0000002}
        position={[55.635, 7.55, -23.88]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000003.geometry}
        material={materials.F01_ISCL_0000002}
        position={[-10.406, 8.05, -39.94]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000004.geometry}
        material={materials.F01_ISCL_0000002}
        position={[-28.49, 8.05, 12.73]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000005.geometry}
        material={materials.F01_ISCL_0000002}
        position={[-28.49, 7.55, 12.73]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000006.geometry}
        material={materials.F01_ISCL_0000003}
        position={[-19.961, 8.15, 26.429]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000006' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000007.geometry}
        material={materials.F01_ISCL_0000002}
        position={[55.635, 8.05, -23.88]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000008.geometry}
        material={materials.F01_ISCL_0000003}
        position={[-0.665, 8.15, 26.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000008' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000009.geometry}
        material={materials.F01_ISCL_0000002}
        position={[13.246, 7.4, 36.441]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000009' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000010.geometry}
        material={materials.F01_ISCL_0000003}
        position={[39.46, 8.15, 29.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000010' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000011.geometry}
        material={materials.F01_ISCL_0000003}
        position={[51.41, 8.15, 29.507]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000011' }}
        visible={false}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISCL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISCL_0000012.geometry}
        material={materials.F01_ISCL_0000002}
        position={[-10.406, 7.263, -39.94]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISCL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000001.geometry}
        material={materials.F01_ISDR_0000004}
        position={[11.21, 5.3, -43.043]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000002.geometry}
        material={materials.F01_ISDR_0000004}
        position={[11.21, 5.3, -42.193]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000003.geometry}
        material={materials.F01_ISDR_0000001}
        position={[18.93, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000004.geometry}
        material={materials.F01_ISDR_0000001}
        position={[25.109, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000005.geometry}
        material={materials.F01_ISDR_0000001}
        position={[23.71, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000006.geometry}
        material={materials.F01_ISDR_0000001}
        position={[11.835, 5.15, -41.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000007.geometry}
        material={materials.F01_ISDR_0000004}
        position={[8.21, 5.15, -35.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000008.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.249, 5.6, -17.144]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000009.geometry}
        material={materials.F01_ISDR_0000001}
        position={[18.16, 5.15, -35.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000010.geometry}
        material={materials.F01_ISDR_0000001}
        position={[13.397, 5.15, -41.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000011.geometry}
        material={materials.F01_ISDR_0000004}
        position={[18.16, 5.15, -39.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000012.geometry}
        material={materials.F01_ISDR_0000001}
        position={[29.668, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000013.geometry}
        material={materials.F01_ISDR_0000001}
        position={[54.187, 5.15, -23.193]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000014.geometry}
        material={materials.F01_ISDR_0000001}
        position={[51.41, 5.15, -20.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000015.geometry}
        material={materials.F01_ISDR_0000001}
        position={[54.187, 5.15, -20.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000016.geometry}
        material={materials.F01_ISDR_0000004}
        position={[51.262, 5.15, -27.323]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000017.geometry}
        material={materials.F01_ISDR_0000003}
        position={[53.71, 5.15, -27.823]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000018.geometry}
        material={materials.F01_ISDR_0000001}
        position={[51.41, 5.15, -23.193]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000019.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.873, 5.6, -12.246]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000020.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.249, 5.6, -12.343]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000021.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.249, 5.6, -14.741]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000022.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.654, 5.6, -14.815]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000023.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.873, 5.6, -14.642]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000024.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.873, 5.6, -17.046]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000025.geometry}
        material={materials.F01_ISDR_0000004}
        position={[51.262, 5.15, -25.593]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000026.geometry}
        material={materials.F01_ISDR_0000001}
        position={[40.155, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000027.geometry}
        material={materials.F01_ISDR_0000004}
        position={[42.16, 5.15, -39.402]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000028.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.71, 5.15, -36.367]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000029.geometry}
        material={materials.F01_ISDR_0000001}
        position={[31.15, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000030.geometry}
        material={materials.F01_ISDR_0000001}
        position={[35.659, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000031.geometry}
        material={materials.F01_ISDR_0000001}
        position={[37.16, 5.15, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000032.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.185, 5.15, -36.483]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000033.geometry}
        material={materials.F01_ISDR_0000003}
        position={[46.96, 5.15, -39.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000034.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.21, 5.15, -40.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000035.geometry}
        material={materials.F01_ISDR_0000001}
        position={[43.527, 5.15, -33.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000036.geometry}
        material={materials.F01_ISDR_0000004}
        position={[42.16, 5.15, -32.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000037.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.71, 5.15, -32.768]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000038.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-23.38, 5.15, -17.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000039.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-23.38, 5.3, -18.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000039' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISDR_0000040"
        position={[-27.787, 5.6, 30.207]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000040' }}
      >
        <mesh
          name="Mesh096"
          castShadow
          receiveShadow
          geometry={nodes.Mesh096.geometry}
          material={materials.F01_ISDR_0000001}
        />
        <mesh
          name="Mesh096_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh096_1.geometry}
          material={materials.F01_ISDR_0000006}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000041.geometry}
        material={materials.F01_ISDR_0000004}
        position={[2.535, 5.15, -39.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000042.geometry}
        material={materials.F01_ISDR_0000004}
        position={[21.197, 5.15, 6.911]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000043.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-23.38, 5.15, -19.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000044.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-22.905, 5.25, -20.343]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000045.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-17.996, 5.15, -21.373]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000046.geometry}
        material={materials.F01_ISDR_0000004}
        position={[24.093, 5.15, -0.538]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000047.geometry}
        material={materials.F01_ISDR_0000004}
        position={[24.552, 5.15, 8.882]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000048.geometry}
        material={materials.F01_ISDR_0000005}
        position={[24.241, 5.15, 6.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000049.geometry}
        material={materials.F01_ISDR_0000001}
        position={[32.613, 5.15, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000050.geometry}
        material={materials.F01_ISDR_0000001}
        position={[29.606, 5.15, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000051.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-9.703, 5.15, 30.77]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000052.geometry}
        material={materials.F01_ISDR_0000001}
        position={[43.4, 5.15, -32.233]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000053.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.185, 5.15, -33.38]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000054.geometry}
        material={materials.F01_ISDR_0000004}
        position={[25.21, 5.15, -25.543]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000055.geometry}
        material={materials.F01_ISDR_0000004}
        position={[18.277, 5.15, 6.911]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000056.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-6.79, 5.6, -41.318]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000057.geometry}
        material={materials.F01_ISDR_0000004}
        position={[15.077, 5.15, 5.07]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000058.geometry}
        material={materials.F01_ISDR_0000004}
        position={[18.81, 5.15, -25.543]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000059.geometry}
        material={materials.F01_ISDR_0000004}
        position={[16.78, 5.15, -2.368]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000060.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.521, 5.6, -7.904]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000061.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.521, 5.6, -6.241]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000062.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.95, 5.6, -9.845]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000063.geometry}
        material={materials.F01_ISDR_0000001}
        position={[20.386, 5.15, -34.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000064.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.95, 5.6, -13.156]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000065.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.521, 5.6, -3.883]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000066.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-6.796, 5.6, -38.468]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000067.geometry}
        material={materials.F01_ISDR_0000002}
        position={[1.998, 5.15, -38.468]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000068.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-21.023, 5.15, -28.443]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000068' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISDR_0000069"
        position={[-27.671, 5.6, 2.806]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000069' }}
      >
        <mesh
          name="Mesh196"
          castShadow
          receiveShadow
          geometry={nodes.Mesh196.geometry}
          material={materials.F01_ISDR_0000001}
        />
        <mesh
          name="Mesh196_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh196_1.geometry}
          material={materials.F01_ISDR_0000006}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000070.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-24.944, 5.6, 2.806]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000071.geometry}
        material={materials.F01_ISDR_0000004}
        position={[21.052, 5.6, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000072.geometry}
        material={materials.F01_ISDR_0000004}
        position={[16.503, 5.15, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000073.geometry}
        material={materials.F01_ISDR_0000004}
        position={[20.818, 5.15, -1.283]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000074.geometry}
        material={materials.F01_ISDR_0000004}
        position={[22.875, 5.15, -0.538]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000074' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000075.geometry}
        material={materials.F01_ISDR_0000004}
        position={[21.656, 5.15, -0.538]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000075' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000076.geometry}
        material={materials.F01_ISDR_0000004}
        position={[26.335, 5.15, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000076' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000077.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.71, 5.15, -26.718]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000077' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000078.geometry}
        material={materials.F01_ISDR_0000003}
        position={[46.96, 5.6, -25.768]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000078' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000079.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.71, 5.15, -27.768]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000079' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000080.geometry}
        material={materials.F01_ISDR_0000004}
        position={[16.665, 5.15, 15.757]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000080' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000081.geometry}
        material={materials.F01_ISDR_0000004}
        position={[22.423, 5.15, 15.757]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000081' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000082.geometry}
        material={materials.F01_ISDR_0000004}
        position={[32.06, 5.15, -12.343]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000082' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000083.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-18.753, 5.15, 25.001]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000083' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000084.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-22.853, 5.6, 24.086]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000084' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000085.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.581, 5.15, 29.662]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000085' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000086.geometry}
        material={materials.F01_ISDR_0000004}
        position={[31.422, 5.15, 14.552]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000086' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000087.geometry}
        material={materials.F01_ISDR_0000004}
        position={[29.477, 5.15, 9.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000087' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000088.geometry}
        material={materials.F01_ISDR_0000004}
        position={[47.16, 5.15, 1.062]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000088' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000089.geometry}
        material={materials.F01_ISDR_0000005}
        position={[39.502, 5.15, 1.352]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000089' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000090.geometry}
        material={materials.F01_ISDR_0000005}
        position={[27.307, 5.15, 16.357]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000090' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000091.geometry}
        material={materials.F01_ISDR_0000004}
        position={[18.902, 5.15, 21.007]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000091' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000092.geometry}
        material={materials.F01_ISDR_0000004}
        position={[20.346, 5.15, 19.308]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000092' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000093.geometry}
        material={materials.F01_ISDR_0000005}
        position={[34.502, 5.15, 1.352]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000093' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000094.geometry}
        material={materials.F01_ISDR_0000005}
        position={[32.402, 5.15, 1.352]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000094' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000095.geometry}
        material={materials.F01_ISDR_0000004}
        position={[30.28, 5.15, 11.257]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000095' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000096.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.727, 5.15, 8.012]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000096' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000097.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-12.442, 5.3, 17.542]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000097' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000098.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-14.778, 5.15, 26.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000098' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000099.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-17.178, 5.15, 26.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000099' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000100.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-23.106, 5.15, 11.781]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000100' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000101.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-18.398, 5.15, 11.781]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000101' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000102.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-15.198, 5.3, 18.591]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000102' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000103.geometry}
        material={materials.F01_ISDR_0000004}
        position={[43.477, 5.15, 9.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000103' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000104.geometry}
        material={materials.F01_ISDR_0000005}
        position={[35.702, 5.15, 4.254]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000104' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000105.geometry}
        material={materials.F01_ISDR_0000005}
        position={[37.202, 5.15, 4.254]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000105' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000106.geometry}
        material={materials.F01_ISDR_0000004}
        position={[37.427, 5.15, 8.012]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000106' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000107.geometry}
        material={materials.F01_ISDR_0000004}
        position={[37.752, 5.15, 10.757]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000107' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000108.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.152, 5.15, 11.357]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000108' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000109.geometry}
        material={materials.F01_ISDR_0000004}
        position={[35.903, 5.15, 8.672]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000109' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000110.geometry}
        material={materials.F01_ISDR_0000005}
        position={[19.552, 5.15, 25.723]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000110' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000111.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-6.651, 5.15, 24.917]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000111' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000112.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-23.131, 5.6, 28.947]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000112' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000113.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-6.651, 5.15, 26.752]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000113' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000114.geometry}
        material={materials.F01_ISDR_0000004}
        position={[6.856, 5.15, 18.464]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000114' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000115.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-3.491, 5.15, 28.163]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000115' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000116.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-5.37, 5.6, 24.094]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000116' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000117"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000117.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-6.651, 5.15, 28.077]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000117' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000118"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000118.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-4.366, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000118' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000119"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000119.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.581, 4.788, 34.716]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000119' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000120"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000120.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-8.923, 5.15, 32.501]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000120' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000121"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000121.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-6.651, 5.15, 30.517]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000121' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000122"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000122.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-4.18, 5.15, 28.877]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000122' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000123"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000123.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-23.131, 5.6, 32.317]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000123' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000124"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000124.geometry}
        material={materials.F01_ISDR_0000004}
        position={[0.892, 5.15, 16.671]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000124' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000125"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000125.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.382, 5.15, 15.364]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000125' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000126"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000126.geometry}
        material={materials.F01_ISDR_0000003}
        position={[12.825, 5.4, 9.842]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000126' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000127"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000127.geometry}
        material={materials.F01_ISDR_0000005}
        position={[11.523, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000127' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000128"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000128.geometry}
        material={materials.F01_ISDR_0000001}
        position={[14.352, 5.15, 26.107]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000128' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000129"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000129.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.852, 5.25, 23.466]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000129' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000130"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000130.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.382, 5.15, 17.618]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000130' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000131"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000131.geometry}
        material={materials.F01_ISDR_0000005}
        position={[9.938, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000131' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000132"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000132.geometry}
        material={materials.F01_ISDR_0000005}
        position={[1.215, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000132' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000133"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000133.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-1.132, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000133' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000134"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000134.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-4.098, 5.15, 15.971]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000134' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000135"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000135.geometry}
        material={materials.F01_ISDR_0000005}
        position={[8.248, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000135' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000136"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000136.geometry}
        material={materials.F01_ISDR_0000005}
        position={[6.653, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000136' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000137"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000137.geometry}
        material={materials.F01_ISDR_0000005}
        position={[2.65, 5.15, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000137' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000138"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000138.geometry}
        material={materials.F01_ISDR_0000004}
        position={[49.533, 5.15, 17.509]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000138' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000139"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000139.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.041, 5.15, 14.524]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000139' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000140"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000140.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.21, 5.15, 26.401]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000140' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000141"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000141.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.21, 5.15, 2.307]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000141' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000142"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000142.geometry}
        material={materials.F01_ISDR_0000005}
        position={[48.21, 5.15, 5.907]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000142' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000143"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000143.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.21, 5.4, 16.007]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000143' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000144"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000144.geometry}
        material={materials.F01_ISDR_0000005}
        position={[50.606, 5.15, 28.465]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000144' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000145"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000145.geometry}
        material={materials.F01_ISDR_0000004}
        position={[40.892, 5.15, 29.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000145' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000146"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000146.geometry}
        material={materials.F01_ISDR_0000004}
        position={[40.22, 5.15, 28.655]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000146' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000147"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000147.geometry}
        material={materials.F01_ISDR_0000004}
        position={[43.914, 5.15, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000147' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000148"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000148.geometry}
        material={materials.F01_ISDR_0000004}
        position={[49.894, 5.15, 29.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000148' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000149"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000149.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.52, 5.15, 29.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000149' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000150"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000150.geometry}
        material={materials.F01_ISDR_0000004}
        position={[42.245, 5.15, 29.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000150' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000151"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000151.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.63, 5.15, 11.308]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000151' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000152"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000152.geometry}
        material={materials.F01_ISDR_0000004}
        position={[51.41, 5.15, -13.218]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000152' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000153"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000153.geometry}
        material={materials.F01_ISDR_0000004}
        position={[53.106, 5.15, -12.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000153' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000154"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000154.geometry}
        material={materials.F01_ISDR_0000004}
        position={[49.96, 5.15, -9.694]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000154' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000155"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000155.geometry}
        material={materials.F01_ISDR_0000004}
        position={[29.202, 5.45, -7.793]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000155' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000156"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000156.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.201, 5.3, -10.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000156' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000157"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000157.geometry}
        material={materials.F01_ISDR_0000004}
        position={[41.96, 5.3, -10.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000157' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000158"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000158.geometry}
        material={materials.F01_ISDR_0000004}
        position={[53.213, 5.15, -8.815]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000158' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000159"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000159.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.56, 5.15, -0.428]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000159' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000160"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000160.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.61, 5.15, 5.837]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000160' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000161"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000161.geometry}
        material={materials.F01_ISDR_0000004}
        position={[49.486, 5.15, 10.419]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000161' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000162"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000162.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.035, 5.15, -15.292]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000162' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000163"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000163.geometry}
        material={materials.F01_ISDR_0000004}
        position={[48.11, 5.3, -12.353]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000163' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000164"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000164.geometry}
        material={materials.F01_ISDR_0000004}
        position={[50.06, 5.15, -4.193]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000164' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000165"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000165.geometry}
        material={materials.F01_ISDR_0000004}
        position={[42.502, 5.15, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000165' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000166"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000166.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-16.16, 5.6, 6.004]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000166' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000167"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000167.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-14.738, 5.6, 3.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000167' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000168"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000168.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-17.612, 5.6, 4.122]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000168' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000169"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000169.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-20.611, 5.15, -1.645]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000169' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000170"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000170.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-21.269, 5.6, -0.646]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000170' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000171"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000171.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-6.237, 5.6, 8.133]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000171' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000172"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000172.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-23.574, 5.15, 8.085]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000172' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000173"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000173.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-27.11, 5.15, 17.07]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000173' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000174"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000174.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-24.98, 5.15, 13.384]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000174' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000175"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000175.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-23.861, 5.15, 14.072]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000175' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000176"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000176.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-25.918, 5.15, 22.364]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000176' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000177"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000177.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-23.861, 5.15, 21.798]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000177' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000178"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000178.geometry}
        material={materials.F01_ISDR_0000005}
        position={[-24.44, 5.15, 18.585]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000178' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000179"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000179.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-18.539, 5.15, -0.337]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000179' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000180"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000180.geometry}
        material={materials.F01_ISDR_0000004}
        position={[33.652, 5.15, 20.321]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000180' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000181"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000181.geometry}
        material={materials.F01_ISDR_0000005}
        position={[41.181, 5.15, 21.151]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000181' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000182"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000182.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.61, 5.15, 15.284]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000182' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000183"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000183.geometry}
        material={materials.F01_ISDR_0000004}
        position={[39.394, 5.15, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000183' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000184"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000184.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.952, 5.15, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000184' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000185"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000185.geometry}
        material={materials.F01_ISDR_0000004}
        position={[33.452, 5.15, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000185' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000186"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000186.geometry}
        material={materials.F01_ISDR_0000004}
        position={[40.227, 5.15, 14.553]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000186' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000187"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000187.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.61, 5.15, 12.782]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000187' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000188"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000188.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.521, 5.15, 0.718]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000188' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000189"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000189.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-24.521, 5.6, -1.168]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000189' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000190"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000190.geometry}
        material={materials.F01_ISDR_0000004}
        position={[36.727, 5.15, 15.557]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000190' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000191"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000191.geometry}
        material={materials.F01_ISDR_0000004}
        position={[35.502, 5.15, 14.552]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000191' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000192"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000192.geometry}
        material={materials.F01_ISDR_0000004}
        position={[42.01, 5.15, 12.007]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000192' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000193"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000193.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.135, 5.45, -43.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000193' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000194"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000194.geometry}
        material={materials.F01_ISDR_0000004}
        position={[45.609, 5.3, -17.018]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000194' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000195"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000195.geometry}
        material={materials.F01_ISDR_0000003}
        position={[46.96, 5.15, -24.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000195' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000196"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000196.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-0.79, 5.395, -39.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000196' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000197"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000197.geometry}
        material={materials.F01_ISDR_0000005}
        position={[24.552, 5.4, 17.257]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000197' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000198"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000198.geometry}
        material={materials.F01_ISDR_0000005}
        position={[43.772, 5.15, 21.206]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000198' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000199"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000199.geometry}
        material={materials.F01_ISDR_0000004}
        position={[46.871, 5.3, 27.609]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000199' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000200"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000200.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-6.79, 5.6, -45.464]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000200' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000201"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000201.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-26.837, 5.354, -38.771]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000201' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000202"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000202.geometry}
        material={materials.F01_ISDR_0000001}
        position={[35.277, 5.813, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000202' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000203"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000203.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.773, 5.15, 2.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000203' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000204"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000204.geometry}
        material={materials.F01_ISDR_0000002}
        position={[-16.265, 5.6, -42.919]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000204' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000205"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000205.geometry}
        material={materials.F01_ISDR_0000002}
        position={[3.391, 5.6, -44.522]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000205' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000206"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000206.geometry}
        material={materials.F01_ISDR_0000002}
        position={[6.035, 5.15, -44.522]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000206' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISDR_0000207"
        position={[-27.718, 5.6, 9.927]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000207' }}
      >
        <mesh
          name="Mesh278"
          castShadow
          receiveShadow
          geometry={nodes.Mesh278.geometry}
          material={materials.F01_ISDR_0000001}
        />
        <mesh
          name="Mesh278_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh278_1.geometry}
          material={materials.F01_ISDR_0000006}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000208"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000208.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-17.548, 5.15, 8.244]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000208' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000209"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000209.geometry}
        material={materials.F01_ISDR_0000003}
        position={[7.949, 5.6, 5.77]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000209' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000210"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000210.geometry}
        material={materials.F01_ISDR_0000004}
        position={[12.773, 5.15, 5.069]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000210' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000211"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000211.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-23.611, 5.6, 38.713]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000211' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000212"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000212.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-24.763, 5.6, 9.927]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000212' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000213"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000213.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-7.768, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000213' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000214"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000214.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-22.129, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000214' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000215"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000215.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-19.125, 5.15, 33.954]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000215' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000216"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000216.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-17.515, 5.15, 33.954]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000216' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000217"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000217.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-12.615, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000217' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000218"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000218.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-16.273, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000218' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000219"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000219.geometry}
        material={materials.F01_ISDR_0000003}
        position={[-20.011, 5.15, 36.772]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000219' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000220"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000220.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-2.062, 5.15, 33.191]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000220' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000221"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000221.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-1.546, 5.15, 29.077]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000221' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000222"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000222.geometry}
        material={materials.F01_ISDR_0000004}
        position={[44.318, 5.15, 4.541]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000222' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000223"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000223.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-2.062, 5.15, 36.749]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000223' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000224"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000224.geometry}
        material={materials.F01_ISDR_0000004}
        position={[-15.198, 5.3, 15.478]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000224' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000225"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000225.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-17.65, 4.6, -15.292]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000225' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000226"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000226.geometry}
        material={materials.F01_ISDR_0000004}
        position={[4.424, 5.15, 3.177]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000226' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000227"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000227.geometry}
        material={materials.F01_ISDR_0000001}
        position={[-22.857, 5.15, 1.499]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000227' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000228"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000228.geometry}
        material={materials.F01_ISDR_0000004}
        position={[13.91, 5.45, -43.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000228' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000229"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000229.geometry}
        material={materials.F01_ISDR_0000003}
        position={[46.985, 5.6, -31.368]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000229' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000230"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000230.geometry}
        material={materials.F01_ISDR_0000004}
        position={[43.292, 5.15, 4.541]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000230' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISDR_0000231"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISDR_0000231.geometry}
        material={materials.F01_ISDR_0000001}
        position={[33.612, 5.15, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISDR_0000231' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000001.geometry}
        material={materials.F01_ISFL_0000006}
        position={[13.086, 4.05, -20.039]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000002.geometry}
        material={materials.F01_ISFL_0000003}
        position={[-15.993, 4.05, 35.735]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000003.geometry}
        material={materials.F01_ISFL_0000002}
        position={[52.91, 4.05, -21.793]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000004.geometry}
        material={materials.F01_ISFL_0000007}
        position={[23.26, 4.05, -17.593]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000005.geometry}
        material={materials.F01_ISFL_0000002}
        position={[3.391, 4.05, -45.93]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000006.geometry}
        material={materials.F01_ISFL_0000001}
        position={[-6.71, 4.05, -39.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000007.geometry}
        material={materials.F01_ISFL_0000002}
        position={[-26.315, 4.05, 9.927]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000008.geometry}
        material={materials.F01_ISFL_0000002}
        position={[-26.483, 4.05, 2.807]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000009.geometry}
        material={materials.F01_ISFL_0000009}
        position={[5.36, 4.05, -36.267]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000010.geometry}
        material={materials.F01_ISFL_0000010}
        position={[13.085, 4.05, -42.293]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000011.geometry}
        material={materials.F01_ISFL_0000002}
        position={[56.697, 4.05, -24.282]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000012.geometry}
        material={materials.F01_ISFL_0000002}
        position={[-31.965, 4.05, -42.953]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000013.geometry}
        material={materials.F01_ISFL_0000002}
        position={[14.56, 4.05, -8.542]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000014.geometry}
        material={materials.F01_ISFL_0000010}
        position={[34.785, 4.05, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000015.geometry}
        material={materials.F01_ISFL_0000001}
        position={[34.131, 4.05, -14.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000015' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISFL_0000016"
        position={[51.306, 4.05, -2.268]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000016' }}
      >
        <mesh
          name="Mesh339"
          castShadow
          receiveShadow
          geometry={nodes.Mesh339.geometry}
          material={materials.F01_ISFL_0000011}
        />
        <mesh
          name="Mesh339_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh339_1.geometry}
          material={materials.F01_ISFL_0000006}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000017.geometry}
        material={materials.F01_ISFL_0000002}
        position={[2.183, 4.05, 30.328]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000018.geometry}
        material={materials.F01_ISFL_0000001}
        position={[43.81, 4.05, -14.144]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000019.geometry}
        material={materials.F01_ISFL_0000002}
        position={[6.388, 4.125, 36.473]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000020.geometry}
        material={materials.F01_ISFL_0000004}
        position={[16.457, 4.05, 38.943]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000021.geometry}
        material={materials.F01_ISFL_0000007}
        position={[-26.297, 4.05, 31.77]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000022.geometry}
        material={materials.F01_ISFL_0000005}
        position={[19.687, 4.05, -45.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000023.geometry}
        material={materials.F01_ISFL_0000003}
        position={[42.76, 4.337, -4.211]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000024.geometry}
        material={materials.F01_ISFL_0000003}
        position={[-29.526, 4.544, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000025.geometry}
        material={materials.F01_ISFL_0000010}
        position={[49.76, 4.05, -12.394]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000026.geometry}
        material={materials.F01_ISFL_0000005}
        position={[-28.108, 4.544, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000027.geometry}
        material={materials.F01_ISFL_0000011}
        position={[-24.74, 4.05, -18.655]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000027' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISFL_0000028"
        position={[-6.569, 4.05, 20.522]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000028' }}
      >
        <mesh
          name="Mesh337"
          castShadow
          receiveShadow
          geometry={nodes.Mesh337.geometry}
          material={materials.F01_ISFL_0000007}
        />
        <mesh
          name="Mesh337_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh337_1.geometry}
          material={materials.F01_ISFL_0000011}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000029.geometry}
        material={materials.F01_ISFL_0000010}
        position={[34.831, 4.05, 14.282]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000030.geometry}
        material={materials.F01_ISFL_0000007}
        position={[-23.377, 4.05, -6.833]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISFL_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISFL_0000031.geometry}
        material={materials.F01_ISFL_0000008}
        position={[10.431, 4.05, 6.329]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISFL_0000031' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISPL_0000001"
        position={[13.26, 5.6, 1.557]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISPL_0000001' }}
      >
        <mesh
          name="Mesh254"
          castShadow
          receiveShadow
          geometry={nodes.Mesh254.geometry}
          material={materials.F01_ISPL_0000004}
        />
        <mesh
          name="Mesh254_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh254_1.geometry}
          material={materials.F01_ISPL_0000002}
        />
        <mesh
          name="Mesh254_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh254_2.geometry}
          material={materials.F01_ISPL_0000003}
        />
        <mesh
          name="Mesh254_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh254_3.geometry}
          material={materials.F01_ISPL_0000001}
        />
        <mesh
          name="Mesh254_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh254_4.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISPL_0000002"
        position={[-7.134, 5.6, -38.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISPL_0000002' }}
      >
        <mesh
          name="Mesh255"
          castShadow
          receiveShadow
          geometry={nodes.Mesh255.geometry}
          material={materials.F01_ISPL_0000005}
        />
        <mesh
          name="Mesh255_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh255_1.geometry}
          material={materials.F00_ISPL_9900001}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000001.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, 16.057]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000002.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, 12.757]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000003.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-9.916, 6.2, 11.781]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000004.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, 2.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000005.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -7.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000006.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, 9.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000007.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, 6.157]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000008.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[28.952, 5.9, 27.732]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000009.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[31.948, 5.9, 27.624]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000010.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[6.717, 5.9, 23.943]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000011.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[25.948, 5.9, 27.624]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000012.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[34.948, 5.9, 27.624]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000013.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.411, 5.9, 22.657]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000014.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.411, 5.9, 19.357]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000015.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[39.462, 5.9, 34.483]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000016.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[53.885, 5.9, 28.857]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000017.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[49.906, 5.9, -45.073]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000018.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-11.215, 6.2, 14.846]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000019.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -36.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000020.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -40.043]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000021.geometry}
        material={materials.F01_ISWD_0000002}
        position={[8.21, 5.45, -33.793]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000022.geometry}
        material={materials.F01_ISWD_0000002}
        position={[20.195, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000023.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[46.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000024.geometry}
        material={materials.F01_ISWD_0000002}
        position={[19.085, 5.6, -34.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000025.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000026.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -30.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000027.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.797, 5.9, -30.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000028.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -20.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000029.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-6.651, 6.2, 14.382]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000030.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-8.008, 6.2, 14.846]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000031.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-6.651, 6.2, 12.272]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000032.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.486, 5.9, -33.443]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000032' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000033.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-20.32, 6, 4.113]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000034.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-19.08, 5.9, 6.457]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000034' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000035.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.751, 7.728, 40.813]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000035' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000036.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-20.631, 6.2, -4.997]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000036' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000037.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.438, 5.9, -0.043]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000037' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000038.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-5.139, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000038' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000039.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-0.81, 5.9, 26.734]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000039' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000040.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[54.438, 5.9, -4.143]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000040' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000041.geometry}
        material={materials.F01_ISWD_0000002}
        position={[31.302, 5.6, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000041' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000042.geometry}
        material={materials.F01_ISWD_0000002}
        position={[34.916, 5.6, -35.093]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000042' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000043.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[28.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000043' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000044.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-20.332, 6, 1.499]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000044' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000045.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-21.269, 6.2, -3.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000045' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000046.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-20.631, 6.2, -6.807]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000047.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-20.611, 6.65, -1.645]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000048.geometry}
        material={materials.F01_ISWD_0000001}
        position={[-18.539, 5.6, -5.197]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000049.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.797, 5.9, -10.343]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000050.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -7.043]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000051.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-11.133, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000052.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-14.213, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000053.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[0.712, 5.9, 23.943]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000054.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[3.722, 5.9, 23.943]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000055.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.797, 5.9, -3.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000056.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, 6.123]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000057.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[16.871, 7.45, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000057' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000058"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000058.geometry}
        material={materials.F01_ISWD_0000002}
        position={[45.61, 5.75, 25.483]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000058' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000059"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000059.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[11.262, 7.45, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000059' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000060.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[15.242, 7.45, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000061"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000061.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -23.543]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000061' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000062"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000062.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -13.648]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000062' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000063"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000063.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-8.125, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000063' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000064"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000064.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.797, 5.9, -26.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000064' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000065"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000065.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[43.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000065' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000066"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000066.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-0.782, 6, 8.133]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000066' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000067"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000067.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-8.114, 5.75, 8.133]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000067' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000068"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000068.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-12.776, 6, 8.133]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000068' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000069"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000069.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[46.91, 5.9, 34.439]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000069' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000070"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000070.geometry}
        material={materials.F01_ISWD_0000002}
        position={[6.035, 6.2, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000070' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000071"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000071.geometry}
        material={materials.F01_ISWD_0000002}
        position={[5.274, 6, 8.133]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000071' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000072"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000072.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-17.126, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000072' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000073"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000073.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[52.654, 5.9, 34.439]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000073' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000074"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000074.geometry}
        material={materials.F01_ISWD_0000002}
        position={[35.952, 5.75, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000074' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000075"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000075.geometry}
        material={materials.F01_ISWD_0000002}
        position={[38.39, 5.75, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000075' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000076"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000076.geometry}
        material={materials.F01_ISWD_0000002}
        position={[32.452, 5.75, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000076' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000077"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000077.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-15.198, 6.8, 16.008]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000077' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000078"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000078.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[49.91, 5.9, 34.439]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000078' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000079"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000079.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-12.303, 6.8, 18.187]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000079' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000080"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000080.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[43.916, 5.9, 34.439]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000080' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000081"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000081.geometry}
        material={materials.F01_ISWD_0000002}
        position={[10.086, 6, 4.238]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000081' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000082"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000082.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-12.657, 5.75, 34.097]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000082' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000083"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000083.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-13.086, 5.9, 32.164]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000083' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000084"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000084.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, 21.368]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000084' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000085"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000085.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-26.251, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000085' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000086"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000086.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-23.149, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000086' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000087"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000087.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.72, 5.9, 38.257]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000087' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000088"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000088.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-20.146, 5.9, 39.58]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000088' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000089"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000089.geometry}
        material={materials.F01_ISWD_0000002}
        position={[0.78, 6.2, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000089' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000090"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000090.geometry}
        material={materials.F01_ISWD_0000002}
        position={[3.295, 6.2, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000090' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000091"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000091.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-2.25, 6.2, 11.629]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000091' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000092"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000092.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -0.849]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000092' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000093"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000093.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[-27.796, 5.9, -16.556]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000093' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000094"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000094.geometry}
        material={materials.F01_ISWD_0000002}
        position={[6.491, 6, 4.238]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000094' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000095"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000095.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[22.606, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000095' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000096"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000096.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[25.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000096' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000097"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000097.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-4.098, 6.2, 12.79]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000097' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000098"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000098.geometry}
        material={materials.F01_ISWD_0000002}
        position={[28.362, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000098' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000099"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000099.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-4.098, 6.2, 17.752]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000099' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000100"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000100.geometry}
        material={materials.F01_ISWD_0000002}
        position={[32.452, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000100' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000101"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000101.geometry}
        material={materials.F01_ISWD_0000002}
        position={[41.332, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000101' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000102"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000102.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[31.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000102' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000103"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000103.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[37.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000103' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000104"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000104.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[34.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000104' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000105"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000105.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[40.906, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000105' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000106"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000106.geometry}
        material={materials.F01_ISWD_0000002}
        position={[34.357, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000106' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000107"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000107.geometry}
        material={materials.F01_ISWD_0000002}
        position={[38.457, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000107' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000108"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000108.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-4.098, 6.2, 21.442]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000108' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000109"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000109.geometry}
        material={materials.F01_ISWD_0000002}
        position={[22.235, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000109' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000110"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000110.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[19.606, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000110' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000111"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000111.geometry}
        material={materials['F00_ISWD_0000001.001']}
        position={[16.506, 5.9, -45.019]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000111' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000112"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000112.geometry}
        material={materials.F01_ISWD_0000002}
        position={[26.432, 5.6, -40.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000112' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000113"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000113.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-6.651, 6.2, 17.752]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000113' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000114"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000114.geometry}
        material={materials.F01_ISWD_0000002}
        position={[-6.651, 6.2, 21.442]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000114' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000115"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000115.geometry}
        material={materials.F01_ISWD_0000002}
        position={[40.39, 5.75, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000115' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWD_0000116"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWD_0000116.geometry}
        material={materials.F01_ISWD_0000002}
        position={[44.914, 5.75, 23.407]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWD_0000116' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000001.geometry}
        material={materials.F01_ISWL_0000025}
        position={[3.2, 4.88, 28.834]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000001' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000002"
        position={[-18.674, 5.15, 36.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000002' }}
      >
        <mesh
          name="Mesh332"
          castShadow
          receiveShadow
          geometry={nodes.Mesh332.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh332_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh332_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000003.geometry}
        material={materials.F01_ISWL_0000006}
        position={[-28.145, 4.402, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000004.geometry}
        material={materials.F01_ISWL_0000006}
        position={[-29.626, 4.4, -18.698]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000004' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000005"
        position={[52.835, 6.05, -15.493]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000005' }}
      >
        <mesh
          name="Mesh371"
          castShadow
          receiveShadow
          geometry={nodes.Mesh371.geometry}
          material={materials.F01_ISWL_0000009}
        />
        <mesh
          name="Mesh371_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh371_1.geometry}
          material={materials.F01_ISWL_0000010}
        />
        <mesh
          name="Mesh371_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh371_2.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000006.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-22.246, 4.401, -37.136]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000006' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000007"
        position={[-9.64, 5.6, -28.837]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000007' }}
      >
        <mesh
          name="Mesh351"
          castShadow
          receiveShadow
          geometry={nodes.Mesh351.geometry}
          material={materials.F01_ISWL_0000020}
        />
        <mesh
          name="Mesh351_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh351_1.geometry}
          material={materials.F01_ISWL_0000002}
        />
        <mesh
          name="Mesh351_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh351_2.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000008"
        position={[-18.79, 6.05, -15.261]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000008' }}
      >
        <mesh
          name="Mesh370"
          castShadow
          receiveShadow
          geometry={nodes.Mesh370.geometry}
          material={materials.F01_ISWL_0000009}
        />
        <mesh
          name="Mesh370_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh370_1.geometry}
          material={materials.F01_ISWL_0000008}
        />
        <mesh
          name="Mesh370_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh370_2.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
        <mesh
          name="Mesh370_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh370_3.geometry}
          material={materials.F01_ISWL_0000016}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000009"
        position={[-23.536, 5.6, 36.742]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000009' }}
      >
        <mesh
          name="Mesh353"
          castShadow
          receiveShadow
          geometry={nodes.Mesh353.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh353_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh353_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000010"
        position={[13.31, 6.05, 1.1]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000010' }}
      >
        <mesh
          name="Mesh354"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354.geometry}
          material={materials.F01_ISWL_0000009}
        />
        <mesh
          name="Mesh354_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_1.geometry}
          material={materials.F01_ISWL_0000001}
        />
        <mesh
          name="Mesh354_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_2.geometry}
          material={materials.F01_ISWL_0000003}
        />
        <mesh
          name="Mesh354_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_3.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
        <mesh
          name="Mesh354_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_4.geometry}
          material={materials.F01_ISWL_0000005}
        />
        <mesh
          name="Mesh354_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_5.geometry}
          material={materials.F01_ISWL_0000004}
        />
        <mesh
          name="Mesh354_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_6.geometry}
          material={materials.F01_ISWL_0000010}
        />
        <mesh
          name="Mesh354_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh354_7.geometry}
          material={materials.F01_ISWL_0000013}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000011.geometry}
        material={materials.F01_ISWL_0000009}
        position={[-24.581, 6.1, 32.033]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000012.geometry}
        material={materials.F01_ISWL_0000031}
        position={[21.23, 5.876, -3.598]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000013.geometry}
        material={materials.F01_ISWL_0000006}
        position={[-30.97, 4.125, -5.19]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000014.geometry}
        material={materials.F01_ISWL_0000006}
        position={[4.041, 4.175, -45.93]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000015.geometry}
        material={materials.F01_ISWL_0000006}
        position={[2.741, 4.175, -45.929]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000015' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000016"
        position={[12.51, 5.6, -33.843]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000016' }}
      >
        <mesh
          name="Mesh374"
          castShadow
          receiveShadow
          geometry={nodes.Mesh374.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh374_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh374_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000017"
        position={[-5.739, 5.15, 36.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000017' }}
      >
        <mesh
          name="Mesh376"
          castShadow
          receiveShadow
          geometry={nodes.Mesh376.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh376_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh376_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000018.geometry}
        material={materials.F01_ISWL_0000026}
        position={[-30.226, 7.803, 18.926]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000018' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000019"
        position={[-9.138, 5.15, 36.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000019' }}
      >
        <mesh
          name="Mesh377"
          castShadow
          receiveShadow
          geometry={nodes.Mesh377.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh377_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh377_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000020"
        position={[-11.245, 5.15, 36.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000020' }}
      >
        <mesh
          name="Mesh379"
          castShadow
          receiveShadow
          geometry={nodes.Mesh379.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh379_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh379_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000021"
        position={[-12.83, 5.6, -11.903]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000021' }}
      >
        <mesh
          name="Mesh699"
          castShadow
          receiveShadow
          geometry={nodes.Mesh699.geometry}
          material={materials.F01_ISWL_0000020}
        />
        <mesh
          name="Mesh699_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh699_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000022"
        position={[-18.539, 5.6, -0.345]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000022' }}
      >
        <mesh
          name="Mesh383"
          castShadow
          receiveShadow
          geometry={nodes.Mesh383.geometry}
          material={materials.F01_ISWL_0000020}
        />
        <mesh
          name="Mesh383_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh383_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000023"
        position={[-14.903, 5.15, 36.626]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000023' }}
      >
        <mesh
          name="Mesh384"
          castShadow
          receiveShadow
          geometry={nodes.Mesh384.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh384_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh384_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000024.geometry}
        material={materials.F01_ISWL_0000006}
        position={[14.504, 4.125, -46.405]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000025.geometry}
        material={materials.F01_ISWL_0000021}
        position={[-4.23, 5.15, 31.544]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000026.geometry}
        material={materials.F01_ISWL_0000006}
        position={[42.86, 4.125, -37.893]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000027.geometry}
        material={materials.F01_ISWL_0000006}
        position={[19.687, 4.175, -45.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000028.geometry}
        material={materials.F01_ISWL_0000003}
        position={[3.261, 4.2, 28.834]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000029.geometry}
        material={materials.F01_ISWL_0000006}
        position={[15.773, 4.35, 26.891]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000029' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000030"
        position={[-18.353, 5.6, 11.781]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000030' }}
      >
        <mesh
          name="Mesh395"
          castShadow
          receiveShadow
          geometry={nodes.Mesh395.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh395_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh395_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000031"
        position={[-22.689, 5.6, 11.781]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000031' }}
      >
        <mesh
          name="Mesh399"
          castShadow
          receiveShadow
          geometry={nodes.Mesh399.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh399_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh399_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000032.geometry}
        material={materials.F01_ISWL_0000030}
        position={[-30.191, 7.811, 9.862]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000032' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000033"
        position={[-16.065, 5.6, -31.697]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000033' }}
      >
        <mesh
          name="Mesh400"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400.geometry}
          material={materials.F01_ISWL_0000007}
        />
        <mesh
          name="Mesh400_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh400_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000034"
        position={[52.798, 5.6, -21.793]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000034' }}
      >
        <mesh
          name="Mesh401"
          castShadow
          receiveShadow
          geometry={nodes.Mesh401.geometry}
          material={materials.F01_ISWL_0000023}
        />
        <mesh
          name="Mesh401_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh401_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000035"
        position={[-17.548, 5.6, 8.211]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000035' }}
      >
        <mesh
          name="Mesh403"
          castShadow
          receiveShadow
          geometry={nodes.Mesh403.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh403_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh403_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000036"
        position={[19.181, 5.6, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000036' }}
      >
        <mesh
          name="Mesh411"
          castShadow
          receiveShadow
          geometry={nodes.Mesh411.geometry}
          material={materials.F01_ISWL_0000023}
        />
        <mesh
          name="Mesh411_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh411_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000037.geometry}
        material={materials.F01_ISWL_0000020}
        position={[-9.431, 4.55, -7.293]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000037' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000038"
        position={[-18.769, 6.05, -15.293]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000038' }}
      >
        <mesh
          name="Mesh417"
          castShadow
          receiveShadow
          geometry={nodes.Mesh417.geometry}
          material={materials.F01_ISWL_0000008}
        />
        <mesh
          name="Mesh417_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh417_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000039"
        position={[22.831, 5.6, -9.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000039' }}
      >
        <mesh
          name="Mesh418"
          castShadow
          receiveShadow
          geometry={nodes.Mesh418.geometry}
          material={materials.F01_ISWL_0000023}
        />
        <mesh
          name="Mesh418_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh418_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000040"
        position={[33.452, 6.4, 34.532]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000040' }}
      >
        <mesh
          name="Mesh419"
          castShadow
          receiveShadow
          geometry={nodes.Mesh419.geometry}
          material={materials.F01_ISWL_0000022}
        />
        <mesh
          name="Mesh419_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh419_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000041"
        position={[46.96, 5.6, -24.768]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000041' }}
      >
        <mesh
          name="Mesh422"
          castShadow
          receiveShadow
          geometry={nodes.Mesh422.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh422_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh422_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000042"
        position={[-16.416, 5.15, 34.097]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000042' }}
      >
        <mesh
          name="Mesh423"
          castShadow
          receiveShadow
          geometry={nodes.Mesh423.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh423_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh423_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000043"
        position={[-20.224, 5.15, 34.097]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000043' }}
      >
        <mesh
          name="Mesh424"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh424_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh424_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000044"
        position={[13.321, 6.05, -2.701]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000044' }}
      >
        <mesh
          name="Mesh426"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426.geometry}
          material={materials.F01_ISWL_0000009}
        />
        <mesh
          name="Mesh426_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_1.geometry}
          material={materials.F01_ISWL_0000008}
        />
        <mesh
          name="Mesh426_2"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_2.geometry}
          material={materials.F01_ISWL_0000010}
        />
        <mesh
          name="Mesh426_3"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_3.geometry}
          material={materials.F01_ISWL_0000012}
        />
        <mesh
          name="Mesh426_4"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_4.geometry}
          material={materials.F01_ISWL_0000013}
        />
        <mesh
          name="Mesh426_5"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_5.geometry}
          material={materials.F01_ISWL_0000014}
        />
        <mesh
          name="Mesh426_6"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_6.geometry}
          material={materials.F01_ISWL_0000015}
        />
        <mesh
          name="Mesh426_7"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_7.geometry}
          material={materials.F01_ISWL_0000016}
        />
        <mesh
          name="Mesh426_8"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_8.geometry}
          material={materials.F01_ISWL_0000017}
        />
        <mesh
          name="Mesh426_9"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_9.geometry}
          material={materials.F01_ISWL_0000018}
        />
        <mesh
          name="Mesh426_10"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_10.geometry}
          material={materials.F01_ISWL_0000027}
        />
        <mesh
          name="Mesh426_11"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_11.geometry}
          material={materials.F01_ISWL_0000019}
        />
        <mesh
          name="Mesh426_12"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_12.geometry}
          material={materials.F01_ISWL_0000011}
        />
        <mesh
          name="Mesh426_13"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_13.geometry}
          material={materials.F01_ISWL_0000020}
        />
        <mesh
          name="Mesh426_14"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_14.geometry}
          material={materials.F01_ISWL_0000024}
        />
        <mesh
          name="Mesh426_15"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_15.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh426_16"
          castShadow
          receiveShadow
          geometry={nodes.Mesh426_16.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000045"
        position={[-0.79, 5.6, -39.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000045' }}
      >
        <mesh
          name="Mesh427"
          castShadow
          receiveShadow
          geometry={nodes.Mesh427.geometry}
          material={materials.F01_ISWL_0000020}
        />
        <mesh
          name="Mesh427_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh427_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000046.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-22.236, 5.901, -37.111]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000046' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000047.geometry}
        material={materials.F01_ISWL_0000009}
        position={[-26.872, 6.004, 32.286]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000047' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000048.geometry}
        material={materials.F01_ISWL_0000022}
        position={[-23.841, 5.45, 26.429]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000048' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000049.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-28.687, 7.3, 30.207]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000049' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000050.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-28.49, 7.8, 12.73]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000050' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000051.geometry}
        material={materials.F01_ISWL_0000002}
        position={[19.742, 4.85, -45.743]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000051' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000052.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-10.537, 7.6, -39.94]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000052' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000053"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000053.geometry}
        material={materials.F01_ISWL_0000020}
        position={[-7.6, 4.55, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000053' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000054"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000054.geometry}
        material={materials.F01_ISWL_0000002}
        position={[-26.837, 6.854, -38.771]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000054' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000055"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000055.geometry}
        material={materials.F01_ISWL_0000029}
        position={[-30.191, 7.811, 3.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000055' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000056"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000056.geometry}
        material={materials.F01_ISWL_0000020}
        position={[-4.048, 4.55, -8.693]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000056' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000057"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000057.geometry}
        material={materials.F01_ISWL_0000028}
        position={[56.79, 7.779, -22.098]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000057' }}
      />
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000058"
        position={[-0.609, 7.6, -8.747]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000058' }}
      >
        <mesh
          name="Mesh446"
          castShadow
          receiveShadow
          geometry={nodes.Mesh446.geometry}
          material={materials.F01_ISWL_0000003}
        />
        <mesh
          name="Mesh446_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh446_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <group
        name="M_SUNGSIM0001F01F01_ISWL_0000059"
        position={[-25.933, 5.6, -8.655]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000059' }}
      >
        <mesh
          name="Mesh447"
          castShadow
          receiveShadow
          geometry={nodes.Mesh447.geometry}
          material={materials.F01_ISWL_0000021}
        />
        <mesh
          name="Mesh447_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh447_1.geometry}
          material={materials['F00_ISWL_9900001.001']}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F01_ISWL_0000060"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_ISWL_0000060.geometry}
        material={materials.F01_ISWL_0000002}
        position={[55.735, 7.8, -23.88]}
        userData={{ name: 'M_SUNGSIM0001F01F01_ISWL_0000060' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100001.geometry}
        material={materials.F00_MDFC_1100001}
        position={[39.738, 5, -32.66]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100002.geometry}
        material={materials.F00_MDFC_1100001}
        position={[28.588, 5.075, -5.373]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100003.geometry}
        material={materials.F00_MDFC_1100001}
        position={[7.657, 5.075, -26.06]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100004.geometry}
        material={materials.F00_MDFC_1100001}
        position={[24.06, 5.994, -37.625]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100005.geometry}
        material={materials.F00_MDFC_1100001}
        position={[24.685, 5, -37.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100006.geometry}
        material={materials.F00_MDFC_1100001}
        position={[9.244, 5.075, -26.06]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100007.geometry}
        material={materials.F00_MDFC_1100001}
        position={[8.45, 5.075, -26.06]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100008.geometry}
        material={materials.F00_MDFC_1100001}
        position={[2.21, 5, -25.928]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100009.geometry}
        material={materials.F00_MDFC_1100001}
        position={[22.357, 5, -10.195]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100010.geometry}
        material={materials.F00_MDFC_1100001}
        position={[1.46, 5, -25.193]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100011.geometry}
        material={materials.F00_MDFC_1100001}
        position={[24.06, 5, -37.643]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100012.geometry}
        material={materials.F00_MDFC_1100001}
        position={[36.41, 5.075, -37.628]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100013.geometry}
        material={materials.F00_MDFC_1100001}
        position={[39.753, 5.994, -32.66]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100014.geometry}
        material={materials.F00_MDFC_1100001}
        position={[24.685, 5.994, -37.625]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1100015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1100015.geometry}
        material={materials.F00_MDFC_1100001}
        position={[22.343, 5.994, -10.195]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1100015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1200001.geometry}
        material={materials.F00_MDFC_1200001}
        position={[18.014, 4.509, -38.324]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MDFC_1200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MDFC_1200002.geometry}
        material={materials.F00_MDFC_1200001}
        position={[-13.696, 4.843, 1.008]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MDFC_1200002' }}
      />

      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000001.geometry}
        material={materials.F00_MVFC_1000001}
        position={[37.192, 5.6, -14.741]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000002.geometry}
        material={materials.F00_MVFC_1000001}
        position={[40.97, 5.6, -14.642]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000003.geometry}
        material={materials.F00_MVFC_1000001}
        position={[40.97, 5.6, -12.243]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000004.geometry}
        material={materials.F00_MVFC_1000001}
        position={[37.192, 5.6, -12.343]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000005.geometry}
        material={materials.F00_MVFC_1000001}
        position={[37.192, 5.6, -17.144]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000006.geometry}
        material={materials.F00_MVFC_1000001}
        position={[50.035, 5.15, -16.425]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000007.geometry}
        material={materials.F00_MVFC_1000001}
        position={[40.97, 5.6, -17.043]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000008.geometry}
        material={materials.F00_MVFC_1000001}
        position={[13.91, 5.45, -44.433]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000009.geometry}
        material={materials.F00_MVFC_1000001}
        position={[-18.283, 4.6, -15.32]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_MVFC_1000010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_MVFC_1000010.geometry}
        material={materials.F00_MVFC_1000001}
        position={[46.55, 5.6, -14.818]}
        userData={{ name: 'M_SUNGSIM0001F01F01_MVFC_1000010' }}
      />

      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100001.geometry}
        material={materials.F01_SFFC_0100001}
        position={[35.09, 4.559, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100002.geometry}
        material={materials.F01_SFFC_0100001}
        position={[35.65, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100003.geometry}
        material={materials.F01_SFFC_0100001}
        position={[35.303, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100004.geometry}
        material={materials.F01_SFFC_0100001}
        position={[42.729, 4.666, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100005.geometry}
        material={materials.F01_SFFC_0100001}
        position={[35.863, 4.559, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100006.geometry}
        material={materials.F01_SFFC_0100001}
        position={[33.024, 4.666, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100007.geometry}
        material={materials.F01_SFFC_0100001}
        position={[32.364, 4.543, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100008.geometry}
        material={materials.F01_SFFC_0100001}
        position={[34.79, 4.543, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100009.geometry}
        material={materials.F01_SFFC_0100001}
        position={[34.125, 4.666, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100010.geometry}
        material={materials.F01_SFFC_0100001}
        position={[43.498, 4.543, -18.72]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100011.geometry}
        material={materials.F01_SFFC_0100001}
        position={[45.136, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100012.geometry}
        material={materials.F01_SFFC_0100001}
        position={[45.349, 4.559, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100013.geometry}
        material={materials.F01_SFFC_0100001}
        position={[44.576, 4.559, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100014.geometry}
        material={materials.F01_SFFC_0100001}
        position={[44.789, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100015.geometry}
        material={materials.F01_SFFC_0100001}
        position={[44.017, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100016.geometry}
        material={materials.F01_SFFC_0100001}
        position={[43.804, 4.559, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0100017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0100017.geometry}
        material={materials.F01_SFFC_0100001}
        position={[44.363, 4.689, -18.566]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0100017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200001.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-15.034, 7.047, -28.724]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200002.geometry}
        material={materials.F00_SFFC_0200001}
        position={[14.145, 7.047, 0.883]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200003.geometry}
        material={materials.F00_SFFC_0200001}
        position={[34.551, 7.047, -6.593]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200003' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200004"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200004.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-2.564, 7.047, 4.209]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200004' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200005.geometry}
        material={materials.F00_SFFC_0200001}
        position={[32.83, 7.047, -7.891]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200006.geometry}
        material={materials.F00_SFFC_0200001}
        position={[3.4, 7.047, 4.346]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200007"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200007.geometry}
        material={materials.F00_SFFC_0200001}
        position={[53.094, 7.047, -7.712]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200007' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200008"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200008.geometry}
        material={materials.F00_SFFC_0200001}
        position={[48.936, 7.047, -10.036]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200008' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200009"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200009.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-3.971, 7.047, 5.393]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200009' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200010"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200010.geometry}
        material={materials.F00_SFFC_0200001}
        position={[44.168, 7.047, -7.682]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200010' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200011"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200011.geometry}
        material={materials.F00_SFFC_0200001}
        position={[47.709, 7.047, 5.438]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200011' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200012"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200012.geometry}
        material={materials.F00_SFFC_0200001}
        position={[25.166, 7.047, 13.207]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200012' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200013"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200013.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-5.283, 7.047, 28.327]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200013' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200014"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200014.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-13.736, 7.047, 32.394]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200014' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200015"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200015.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-5.637, 7.047, 35.369]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200015' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200016"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200016.geometry}
        material={materials.F00_SFFC_0200001}
        position={[47.709, 7.047, 22.319]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200016' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200017"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200017.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.707, 7.047, 4.346]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200017' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200018"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200018.geometry}
        material={materials.F00_SFFC_0200001}
        position={[26.313, 7.047, 21.132]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200018' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200019"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200019.geometry}
        material={materials.F00_SFFC_0200001}
        position={[45.62, 7.047, 22.319]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200019' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200020"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200020.geometry}
        material={materials.F00_SFFC_0200001}
        position={[49.097, 7.047, -21.971]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200020' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200021"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200021.geometry}
        material={materials.F00_SFFC_0200001}
        position={[56.181, 7.447, -29.228]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200021' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200022"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200022.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-25.064, 7.047, 8.355]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200022' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200023"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200023.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-16.344, 7.047, 8.035]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200023' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200024"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200024.geometry}
        material={materials.F00_SFFC_0200001}
        position={[41.645, 7.047, -39.964]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200024' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200025"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200025.geometry}
        material={materials.F00_SFFC_0200001}
        position={[38.212, 7.047, -36.65]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200025' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200026"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200026.geometry}
        material={materials.F00_SFFC_0200001}
        position={[14.604, 7.047, -28.07]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200026' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200027"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200027.geometry}
        material={materials.F00_SFFC_0200001}
        position={[22.211, 7.047, -37.195]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200027' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200028"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200028.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-28.298, 7.447, 9.481]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200028' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200029"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200029.geometry}
        material={materials.F00_SFFC_0200001}
        position={[1.369, 7.047, 19.995]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200029' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200030"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200030.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.437, 7.047, 23.841]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200030' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200031"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200031.geometry}
        material={materials.F00_SFFC_0200001}
        position={[12.4, 7.047, 10.036]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200031' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200032"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200032.geometry}
        material={materials.F00_SFFC_0200001}
        position={[34.42, 7.047, -21.971]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200032' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200033"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200033.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-5.408, 7.047, 24.909]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200033' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200034"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200034.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-5.408, 7.047, 9.481]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200034' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200035"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200035.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-17.938, 7.047, 24.615]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200035' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200036"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200036.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-7.199, 7.047, 17.924]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200036' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200037"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200037.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-22.766, 7.047, 31.97]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200037' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200038"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200038.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-22.036, 7.047, 29.28]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200038' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200039"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200039.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-15.75, 7.047, -10.88]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200039' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200040"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200040.geometry}
        material={materials.F00_SFFC_0200001}
        position={[15.372, 7.047, -7.83]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200040' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200041"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200041.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.325, 7.047, -19.496]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200041' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200042"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200042.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-25.333, 7.047, 1.91]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200042' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200043"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200043.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-19.062, 7.047, -19.177]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200043' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200044"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200044.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.325, 7.047, -15.891]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200044' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200045"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200045.geometry}
        material={materials.F00_SFFC_0200001}
        position={[13.437, 7.047, 1.577]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200045' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200046"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200046.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.511, 7.047, 0.633]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200046' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200047"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200047.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-9.29, 7.047, -0.074]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200047' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200048"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200048.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-10.999, 7.047, -19.491]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200048' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200049"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200049.geometry}
        material={materials.F00_SFFC_0200001}
        position={[27.007, 7.047, -1.437]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200049' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200050"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200050.geometry}
        material={materials.F00_SFFC_0200001}
        position={[25.861, 7.047, 6.672]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200050' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200051"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200051.geometry}
        material={materials.F00_SFFC_0200001}
        position={[28.456, 7.047, 3.113]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200051' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F01_SFFC_0200052"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F01_SFFC_0200052.geometry}
        material={materials.F00_SFFC_0200001}
        position={[-17.875, 7.047, 36.411]}
        userData={{ name: 'M_SUNGSIM0001F01F01_SFFC_0200052' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0800001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0800001.geometry}
        material={materials.F02_MVFC_0800001}
        position={[33.452, 6.338, 32.882]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0800002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0800002.geometry}
        material={materials.F02_MVFC_0800001}
        position={[9.91, 6.05, -44.843]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800002' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0800003"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0800003.geometry}
        material={materials.F02_MVFC_0800001}
        position={[52.935, 6.05, -15.493]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800003' }}
      />
      <group
        name="M_SUNGSIM0001F01F02_MVFC_0800004"
        position={[-18.78, 6.05, -15.26]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800004' }}
      >
        <mesh
          name="Mesh1061"
          castShadow
          receiveShadow
          geometry={nodes.Mesh1061.geometry}
          material={materials.F02_MVFC_0800001}
        />
        <mesh
          name="Mesh1061_1"
          castShadow
          receiveShadow
          geometry={nodes.Mesh1061_1.geometry}
          material={materials.F02_MVFC_0800002}
        />
      </group>
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0800005"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0800005.geometry}
        material={materials.F02_MVFC_0800001}
        position={[9.977, 6.05, 27.457]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800005' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0800006"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0800006.geometry}
        material={materials.F02_MVFC_0800001}
        position={[-26.147, 6.1, 33.058]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0800006' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0900001"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0900001.geometry}
        material={materials.F02_MVFC_0900001}
        position={[-6.657, 6.426, -8.368]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0900001' }}
      />
      <mesh
        name="M_SUNGSIM0001F01F02_MVFC_0900002"
        castShadow
        receiveShadow
        geometry={nodes.M_SUNGSIM0001F01F02_MVFC_0900002.geometry}
        material={materials.F02_MVFC_0900001}
        position={[-4.99, 6.426, -9.018]}
        userData={{ name: 'M_SUNGSIM0001F01F02_MVFC_0900002' }}
      />
    </group>
  )
}

useGLTF.preload(url)
