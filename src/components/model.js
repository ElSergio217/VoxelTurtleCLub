import React, { useRef } from 'react'

import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import pond from '../obj/pond.gltf';


export default function Model(props) {

    const gltf = useLoader(GLTFLoader, pond)

    return <primitive {...props} object={gltf.scene} />
}
