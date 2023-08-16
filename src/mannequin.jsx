import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const Model = () => {
    return (
        <Canvas className='Home-Avatar' style={{ width: "20rem", height: "24rem" }}>
            <ambientLight intensity={0.3} />
            <pointLight position={[0, 0, 25]} intensity={1000} />
            <pointLight position={[0, 0, -25]} intensity={1000} />
            <pointLight position={[25, 10, 0]} intensity={1000} />
            <pointLight position={[-25, 10, 0]} intensity={1000} />
            <OrbitControls />
            <Suspense fallback={null}>
                <ModelContent />
            </Suspense>
        </Canvas>
    );
};

const ModelContent = () => {
    const gltfPath = '/models/Male.glb';

    const gltf = useLoader(GLTFLoader, gltfPath);

    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            // Change color of the material
            child.material.color.set("#FFDBAC"); // Set to red color
        }
    });

    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.position.set(0, -3.3, 0)
    return <primitive object={gltf.scene} />;
};

export default Model;
