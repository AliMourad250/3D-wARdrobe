import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import * as CANNON from 'cannon-es';





const Model = () => {
    return (
        <Canvas className='Home-Avatar' style={{height: "550px"}}>
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
    const top = useLoader(GLTFLoader, topPath);

    const [clothingPath, setClothingPath] = useState(''); // State to hold clothing path

    // Function to set the clothing path when an item is clicked
    const setMannequinClothingPath = (newClothingPath) => {
        setClothingPath(newClothingPath);
    };


    gltf.scene.traverse((child) => {
        if (child.isMesh) {
            // Change color of the material
            child.material.color.set("#FFDBAC"); // Set to red color
        }
    });



    // Frontend code to store a clothing item
    const addClothingItem = async () => {
        const newItem = { name: 'New Clothing', path: '/path/to/your/clothing.jpg' };

        try {
            await fetch('/api/clothing', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(newItem),
            });

            // Perform any necessary UI updates after saving
        } catch (error) {
            console.error('Error saving clothing item:', error);
        }
    };

    // Frontend code to retrieve clothing items
    const getClothingItems = async () => {
        try {
            const response = await fetch('/api/clothing');
            if (response.ok) {
                const clothingItems = await response.json();
                // Use the retrieved clothing items in your UI
            } else {
                console.error('Failed to fetch clothing items');
            }
        } catch (error) {
            console.error('Error fetching clothing items:', error);
        }
    };

    gltf.scene.scale.set(0.3, 0.3, 0.3);
    gltf.scene.position.set(0, -3.3, 0);

    top.scene.scale.set(0.304, 0.3, 0.35);
    top.scene.position.set(-0.028, -1.514, 0.585);
    top.scene.rotateX(-0.007);


    return (
        <>
            <primitive object={gltf.scene} />
            <primitive object={top.scene} clothingPath={clothingPath} />
        </>);
};

export default Model;
