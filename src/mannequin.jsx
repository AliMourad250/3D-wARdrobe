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
            <pointLight position={[0, 0, 25]} intensity={500} />
            <pointLight position={[0, 0, -25]} intensity={500} />
            <pointLight position={[25, 10, 0]} intensity={500} />
            <pointLight position={[-25, 10, 0]} intensity={500} />
            <OrbitControls />
            <Suspense fallback={null}>
                <ModelContent />
            </Suspense>
        </Canvas>
    );
};

const ModelContent = () => {
    const gltfPath = '/models/Male.glb';
    const topPath = '/models/Top.glb';
    const gltf = useLoader(GLTFLoader, gltfPath);
    const top = useLoader(GLTFLoader, topPath)
    const targetMeshName = 'mesh'; // Name of the mesh you want to target
    const targetModelName = 'Plane_Plane.008'; // Name of the model you want to target

    const targetModelMesh = top.scene.getObjectByName(targetModelName);
    const vertices = '', targetModelScale = '', targetModelPosition = '';
    if (targetModelMesh) {
        const bufferGeometry = targetModelMesh.geometry;
        const attributes = bufferGeometry.attributes;

        // You can use the vertices from attributes.position.array to position your model
        const vertices = attributes.position.array;

        // Render your target model using the vertices or other attributes
        const targetModelPosition = [0, 1, 0]; // Modify this as needed
        const targetModelScale = [1, 1, 1]; // Modify this as needed
    }
    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            // Change color of the material
            child.material.color.set("#FFDBAC"); // Set to red color
        }
    });

    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.position.set(0, -3.3, 0);

    top.scene.scale.set(0.29, 0.3, 0.4);
    top.scene.position.set(0, -1.5, 0.7)


    return (
        <>
            <primitive object={gltf.scene} />
            <primitive object={top.scene} />
            <mesh position={targetModelPosition} scale={targetModelScale}>
                {/* Use vertices to render your target model */}
                <bufferGeometry attach="geometry">
                    <bufferAttribute attachObject={['attributes', 'position']} count={vertices.length / 3} array={vertices} itemSize={3} />
                </bufferGeometry>
                <meshStandardMaterial color="red" />
            </mesh>
        </>);
};

export default Model;
