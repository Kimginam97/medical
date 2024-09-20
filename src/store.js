import { Vector3 } from 'three'
import { create } from 'zustand'

export const floorInfo = create((set) => ({
  floor: '1F',
  setFloor: (v) => set(v),
}))

export const labelInfo = create((set) => ({
  labelVisual: false,
  setLabelVisual: (v) => set({ labelVisual: v }),
}))

export const cameraInfo = create((set) => ({
  cameraMove: false,
  cameraPosition: new Vector3(0, 0, 0),
  cameraTarget: new Vector3(0, 0, 0),
  setCameraPosition: (v) => set({ cameraPosition: v }),
  setCameraTarget: (v) => set({ cameraTarget: v }),
  setCameraMove: (v) => set({ cameraMove: v }),
}))

export const menuInfo = create((set) => ({
  menuTitle: '운영지표',
  setMenuTitle: (v) => set({ menuTitle: v }),
}))

export const searchInfo = create((set) => ({
  showSearch: true,
  setShowSearch: (v) => set({ showSearch: v }),
}))
