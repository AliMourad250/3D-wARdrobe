import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useState, useEffect } from 'react';
import arButton from '../imgs/augmented-reality.png';
import deleteButton from '../imgs/delete icon.png';
import malePath from '../models/Male.glb';
import api from '../api';


const Home = () => {
    const [clothings, setClothings] = useState([]);
    const [malePath, setMalePath] = useState("/models/Male.glb");
    const [male, setMale] = useState(null);
    const [topPath, setTopPath] = useState("");
    const [top, setTop] = useState(null);
    const [bottomPath, setBottomPath] = useState("");
    const [bottom, setBottom] = useState(null);
    const email = localStorage.getItem("email");


    useEffect(() => {
        fetchAllClothes();
        if (localStorage.getItem("topPath")) {
            setTopPath(localStorage.getItem("topPath"));
        }
        if (localStorage.getItem("bottomPath")) {
            setBottomPath(localStorage.getItem("bottomPath"));
        }
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

    const setUserPaths = async () => {
        if (email) {
            try {
                const response = await api.post(`/users/setPaths/${email}`, {
                    malePath,
                    topPath,
                    bottomPath
                });

                if (response.data.success) {
                    console.log("Paths successfully changed!")
                }
            } catch (error) {
                console.error(error.response.data.message);
            }
        }
    }

    const handleClear = () => {
        setTopPath("");
        localStorage.setItem("topPath", "");

        setBottomPath("");
        localStorage.setItem("bottomPath", "");
    }

    const handleClothesClick = (cloth, path) => {
        if (cloth.type === "top") {
            if (localStorage.getItem("topPath") !== path) {
                setTopPath(path);
                localStorage.setItem("topPath", path);
            }
            else {
                setTopPath("");
                localStorage.setItem("topPath", "");
            }

        }
        else if (cloth.type === "bottom") {
            if (localStorage.getItem("bottomPath") !== path) {
                setBottomPath(path);
                localStorage.setItem("bottomPath", path);
            }
            else {
                setBottomPath("");
                localStorage.setItem("bottomPath", "");
            }
        }
    };

    useEffect(() => {
        const loader = new GLTFLoader();
        loader.load(malePath, (gltf) => {
            setMale(gltf.scene);
        })
    }, [malePath])

    useEffect(() => {
        if (topPath !== "") {
            const loader = new GLTFLoader();
            loader.load(topPath, (gltf) => {
                setTop(gltf.scene);
                setUserPaths();
            })
        } else {
            setTop(null);
        }

        if (bottomPath !== "") {
            const loader = new GLTFLoader();
            loader.load(bottomPath, (gltf) => {
                setBottom(gltf.scene);
            })
            setUserPaths();
        } else {
            setBottom(null);
        }
        setUserPaths();
    }, [topPath, bottomPath])

    if (male) {
        male.traverse((child) => {
            if (child.isMesh) {
                child.material.color.set("#8D5524");
            }
        });
        male.scale.set(0.3, 0.3, 0.3);
        male.position.set(0, -3.3, 0);
    }

    if (top) {
        top.scale.set(1.78, 1.8, 1.95);
        top.position.set(-3.2, -4.33, 0.259);
    }

    if (bottom) {
        bottom.scale.set(1.35, 1.21, 1.24);
        bottom.position.set(-0, -3.33, 0.0075);
    }

    const groupedClothes = groupIntoRows(clothings);
    return (
        <>
            <div className='home-container'>
                <div className="Home">
                    <button className='ar-button'><img src={arButton} alt="" /></button>
                    <button className='delete-button' onClick={handleClear}><img src={deleteButton} alt="" /></button>
                    <Canvas className='Home-Avatar' style={{ height: "550px" }}>
                        <ambientLight intensity={0.3} />
                        <pointLight position={[0, 0, 25]} intensity={500} />
                        <pointLight position={[0, 0, -25]} intensity={500} />
                        <pointLight position={[25, 10, 0]} intensity={500} />
                        <pointLight position={[-25, 10, 0]} intensity={500} />
                        <OrbitControls />
                        <Suspense fallback={null}>
                            {male && (<primitive object={male} />)}
                            {top && (<primitive object={top} />)}

                            {bottom && (<primitive object={bottom} />)}
                        </Suspense>
                    </Canvas>
                    <div className="Home-Cloths">
                        {groupedClothes.map((group, index) => (
                            <div className="row" key={index}>
                                {group.map((item) => (
                                    <div
                                        className="Home-Cloths-box-row"
                                        key={item._id}
                                        onClick={() => handleClothesClick(item, item.path)}
                                    >
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