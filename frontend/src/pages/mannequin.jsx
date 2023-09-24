import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import arButton from '../imgs/augmented-reality.png'
import api from '../api';

const ModelContent = () => {
    const malePath = '/models/Male.glb';
    const male = useLoader(GLTFLoader, malePath);

    const topPath = '/models/new-top.glb';
    const top = useLoader(GLTFLoader, topPath);

    const bottomPath = '/models/new-bottom.glb'
    const bottom = useLoader(GLTFLoader, bottomPath);

    let maleScene, topScene, bottomScene;

    if (male) {
        maleScene = male.scene;
        maleScene.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set("#8D5524");
            }
        });

        maleScene.scale.set(0.3, 0.3, 0.3);
        maleScene.position.set(0, -3.3, 0);
    }

    if (top) {
        topScene = top.scene;
        topScene.scale.set(1.78, 1.8, 1.95);
        topScene.position.set(-3.2, -4.33, 0.259);
    }

    if (bottom) {
        bottomScene = bottom.scene;
        bottomScene.scale.set(1.35, 1.21, 1.24);
        bottomScene.position.set(-0, -3.33, 0.0075);
    }

    return (
        <>
            <primitive object={male && maleScene} />
            <primitive object={top && topScene} />
            <primitive object={bottom && bottomScene} />
        </>
    );
};

const Model = () => {
    return (
        <>
            <button className='ar-button'><img src={arButton} /></button>
            <Canvas className='Home-Avatar' style={{ height: "550px" }}>
                <ambientLight intensity={0.3} />
                <pointLight position={[0, 0, 25]} intensity={500} />
                <pointLight position={[0, 0, -25]} intensity={500} />
                <pointLight position={[25, 10, 0]} intensity={500} />
                <pointLight position={[-25, 10, 0]} intensity={500} />
                <OrbitControls />
                <Suspense fallback={null}>
                    <ModelContent />
                </Suspense>
            </Canvas>
        </>

    );
};

export default Model;