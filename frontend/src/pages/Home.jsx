import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import arButton from '../imgs/augmented-reality.png';
import malePath from '../models/Male.glb';
import api from '../api';

import greyHoodie from '../imgs/grey hoodie.jpg';
import redShirt from '../imgs/red shirt.jpg';
import whiteShirt from '../imgs/white shirt.jpg';
import whiteShirt1 from '../imgs/white shirt(1).jpg';
import orangeTshirt from '../imgs/orange Tshirt.jpg';
import greyPants from '../imgs/grey pants.jpg';


// const ModelContent = () => {

//     const groupedClothes = [];
//     groupedClothes = groupIntoRows(clothings);

//     const male = useLoader(GLTFLoader, malePath);

//     const topPath = '../models/new-top.glb';
//     const top = useLoader(GLTFLoader, topPath);

//     const bottomPath = '../models/new-bottom.glb'
//     const bottom = useLoader(GLTFLoader, bottomPath);

//     let maleScene, topScene, bottomScene;

//     if (male) {
//         maleScene = male.scene;
//         maleScene.traverse((child) => {
//             if (child.isMesh) {
//                 child.material.color.set("#8D5524");
//             }
//         });

//         maleScene.scale.set(0.3, 0.3, 0.3);
//         maleScene.position.set(0, -3.3, 0);
//     }

//     if (top) {
//         topScene = top.scene;
//         topScene.scale.set(1.78, 1.8, 1.95);
//         topScene.position.set(-3.2, -4.33, 0.259);
//     }

//     if (bottom) {
//         bottomScene = bottom.scene;
//         bottomScene.scale.set(1.35, 1.21, 1.24);
//         bottomScene.position.set(-0, -3.33, 0.0075);
//     }

//     return (
//         <>
//             <primitive object={male && maleScene} />
//             <primitive object={top && topScene} />
//             <primitive object={bottom && bottomScene} />
//         </>
//     );
// };

const Home = () => {
    const [clothings, setClothings] = useState([]);
    const [malePathS, setMalePathS] = useState("");
    const [topPathS, setTopPathS] = useState("");
    const [bottomPathS, setBottomPathS] = useState("");
    // const malePath = '/models/Male.glb';
    // const malePath = '../models/Male.glb';

    useEffect(() => {
        fetchAllClothes();
    }, []);

    const fetchAllClothes = async () => {
        try {
            const response = await api.get("/clothings/fetchAll");
            console.log(response.data.clothing);
            if (!response) {
                console.error("Error fetching Clothes")
                return;
            }
            setClothings(response.data.clothing);
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    const groupIntoRows = (clothes) => {
        let groups = [];
        for (let i = 0; i < clothes.length; i += 3) {
            groups.push(clothes.slice(i, i + 3));
        }
        return groups;
    };

    const handleClothesClick = (cloth, path) => {
        if (cloth.type === "top") {
            setTopPathS(path);
        }
        else if (cloth.type === "bottom") {
            setBottomPathS(path)
        }
    };

    const groupedClothes = groupIntoRows(clothings);

    const male = useLoader(GLTFLoader, malePath);

    const topPath = '../models/new-top.glb';
    const top = useLoader(GLTFLoader, topPath);

    const bottomPath = '../models/new-bottom.glb'
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
            <div className='home-container'>
                <div className="Home">
                    <button className='ar-button'><img src={arButton} alt="" /></button>
                    <Canvas className='Home-Avatar' style={{ height: "550px" }}>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[0, 0, 25]} intensity={500} />
                        <pointLight position={[0, 0, -25]} intensity={500} />
                        <pointLight position={[25, 10, 0]} intensity={500} />
                        <pointLight position={[-25, 10, 0]} intensity={500} />
                        <OrbitControls />
                        <Suspense fallback={null}>
                            <primitive object={male && maleScene} />
                            <primitive object={top && topScene} />
                            <primitive object={bottom && bottomScene} />
                        </Suspense>
                    </Canvas>
                    <div className="Home-Cloths">
                        {groupedClothes.map((group, index) => (
                            <div className="row" key={index}>
                                {group.map((item, itemIndex) => (
                                    <div className="Home-Cloths-box-row" key={item._id} onClick={() => handleClothesClick(item, item.path)}>
                                        <img src={item.thumbnailPath} alt="" />
                                        <p><b>{item.name}</b><br />
                                            {item.price}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div >
        </>

    );
};

export default Home;