import React from 'react';
import { Canvas } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Suspense } from 'react';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import { XRCanvas, XRHandPrimitive, XRHandModel, XRController } from '@react-three/xr';
import { useState, useRef, useEffect } from 'react';
import arButton from '../imgs/augmented-reality.png';
import { ARButton } from "three/examples/jsm/webxr/ARButton";
import * as THREE from "three";
import deleteButton from '../imgs/delete icon.png';
import Auth from "../Auth";
import api from '../api';


const Home = () => {
    const [clothings, setClothings] = useState([]);
    const [filteredClothings, setFilteredClothings] = useState([]);
    const [mannequins, setMannequins] = useState([]);
    const [mannequinPath, setMannequinPath] = useState("/models/Blender-Material/Male-Medium/bodyTypes/Male-Medium-bodyType.glb");
    const [mannequin, setMannequin] = useState(null);
    const [topPath, setTopPath] = useState("");
    const [top, setTop] = useState(null);
    const [bottomPath, setBottomPath] = useState("");
    const [bottom, setBottom] = useState(null);

    const [mannequinScaleX, setMannequinScaleX] = useState(1.91);
    const [mannequinScaleY, setMannequinScaleY] = useState(1.86);
    const [mannequinScaleZ, setMannequinScaleZ] = useState(1.85);

    const [topScaleX, setTopScaleX] = useState(0);
    const [topScaleY, setTopScaleY] = useState(0);
    const [topScaleZ, setTopScaleZ] = useState(0);
    const [topPositionX, setTopPositionX] = useState(0);
    const [topPositionY, setTopPositionY] = useState(0);
    const [topPositionZ, setTopPositionZ] = useState(0);

    const [bottomScaleX, setBottomScaleX] = useState(0);
    const [bottomScaleY, setBottomScaleY] = useState(0);
    const [bottomScaleZ, setBottomScaleZ] = useState(0);
    const [bottomPositionX, setBottomPositionX] = useState(0);
    const [bottomPositionY, setBottomPositionY] = useState(0);
    const [bottomPositionZ, setBottomPositionZ] = useState(0);

    const [skinColor, setSkinColor] = useState("");
    const [bodyShape, setBodyShape] = useState("M");

    const [isActive1, setIsActive1] = useState(false);
    const [isActive2, setIsActive2] = useState(false);

    const [arVisible, setArVisible] = useState(false);
    const email = localStorage.getItem("email");

    useEffect(() => {
        fetchAllMannequins();
        // console.log(mannequins);
        fetchAllClothes();
        filterByBodyShape();
        // if (Auth.isAuth) {
        if (localStorage.getItem("topPath")) {
            setTopPath(localStorage.getItem("topPath"));
        }
        if (localStorage.getItem("bottomPath")) {
            setBottomPath(localStorage.getItem("bottomPath"));
        }
        if (localStorage.getItem("mannequinPath")) {
            setMannequinPath(localStorage.getItem("mannequinPath"));
        }
        if (localStorage.getItem("skinColor")) {
            setSkinColor(localStorage.getItem("skinColor"));
        }
        if (localStorage.getItem("bodyShape") !== "M") {
            setBodyShape(localStorage.getItem("bodyShape"));
        }
        if (localStorage.getItem("mannequinScaleX")) {
            setMannequinScaleX(parseFloat(localStorage.getItem("mannequinScaleX")));
        }
        if (localStorage.getItem("mannequinScaleY")) {
            setMannequinScaleY(parseFloat(localStorage.getItem("mannequinScaleY")));
        }
        if (localStorage.getItem("mannequinScaleZ")) {
            setMannequinScaleZ(parseFloat(localStorage.getItem("mannequinScaleZ")));
        }
        if (localStorage.getItem("topScaleX")) {
            setTopScaleX(parseFloat(localStorage.getItem("topScaleX")));
        }
        if (localStorage.getItem("topScaleY")) {
            setTopScaleY(parseFloat(localStorage.getItem("topScaleY")));
        }
        if (localStorage.getItem("topScaleZ")) {
            setTopScaleZ(parseFloat(localStorage.getItem("topScaleZ")));
        }
        if (localStorage.getItem("topPositionX")) {
            setTopPositionX(parseFloat(localStorage.getItem("topPositionX")));
        }
        if (localStorage.getItem("topPositionY")) {
            setTopPositionY(parseFloat(localStorage.getItem("topPositionY")));
        }
        if (localStorage.getItem("topPositionZ")) {
            setTopPositionZ(parseFloat(localStorage.getItem("topPositionZ")));
        }
        if (localStorage.getItem("bottomScaleX")) {
            setBottomScaleX(parseFloat(localStorage.getItem("bottomScaleX")));
        }
        if (localStorage.getItem("bottomScaleY")) {
            setBottomScaleY(parseFloat(localStorage.getItem("bottomScaleY")));
        }
        if (localStorage.getItem("bottomScaleZ")) {
            setBottomScaleZ(parseFloat(localStorage.getItem("bottomScaleZ")));
        }
        if (localStorage.getItem("bottomPositionX")) {
            setBottomPositionX(parseFloat(localStorage.getItem("bottomPositionX")));
        }
        if (localStorage.getItem("bottomPositionY")) {
            setBottomPositionY(parseFloat(localStorage.getItem("bottomPositionY")));
        }
        if (localStorage.getItem("bottomPositionZ")) {
            setBottomPositionZ(parseFloat(localStorage.getItem("bottomPositionZ")));
        }

        // }
    }, []);

    const toggleMenu1 = () => {
        setIsActive1(!isActive1);
    };
    const toggleMenu2 = () => {
        setIsActive2(!isActive2);
    };

    const toggleAR = () => {
        setArVisible(!arVisible);
    };

    const fetchAllClothes = async () => {
        try {
            const response = await api.get("/clothings/fetchAll");
            // console.log(response.data.clothing);
            if (!response) {
                console.error("Error fetching Clothes")
                return;
            }
            setClothings(response.data.clothing);
        } catch (error) {
            console.error(error.response.data.message);
        }
    };

    const fetchAllMannequins = async () => {
        try {
            const response = await api.get("/mannequins/fetchAll");
            console.log(response.data.mannequins);
            if (!response) {
                console.error("Error fetching Mannequins")
                return;
            }
            setMannequins(response.data.mannequins);

        } catch (error) {
            console.error(error.response.data.message);
        }
    }

    const groupIntoRows = (clothes) => {
        let groups = [];
        for (let i = 0; i < clothes.length; i += 3) {
            groups.push(clothes.slice(i, i + 3));
        }
        return groups;
    };

    const filterByBodyShape = () => {
        setFilteredClothings(clothings.filter(item => item.size === bodyShape));
    };

    const setUserPreferences = async () => {
        if (email) {
            try {
                const response = await api.post(`/users/setPreferences/${email}`, {
                    mannequinPath,
                    topPath,
                    bottomPath,
                    skinColor,
                    bodyShape,
                    mannequinScaleX,
                    mannequinScaleY,
                    mannequinScaleZ,
                    topScaleX,
                    topScaleY,
                    topScaleZ,
                    topPositionX,
                    topPositionY,
                    topPositionZ,
                    bottomScaleX,
                    bottomScaleY,
                    bottomScaleZ,
                    bottomPositionX,
                    bottomPositionY,
                    bottomPositionZ
                });

                if (response.data.success) {
                    console.log("Preferences successfully changed!")
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

    const handleClothesClick = (cloth) => {
        if (cloth.type === "top") {
            if (localStorage.getItem("topPath") !== cloth.path) {
                setTopPath(cloth.path);
                localStorage.setItem("topPath", cloth.path);
                setTopScaleX(cloth.scaleX);
                setTopScaleY(cloth.scaleY);
                setTopScaleZ(cloth.scaleZ);

                setTopPositionX(cloth.positionX);
                setTopPositionY(cloth.positionY);
                setTopPositionZ(cloth.positionZ);

                localStorage.setItem("topScaleX", cloth.scaleX.toString());
                localStorage.setItem("topScaleY", cloth.scaleY.toString());
                localStorage.setItem("topScaleZ", cloth.scaleZ.toString());
                localStorage.setItem("topPositionX", cloth.positionX.toString());
                localStorage.setItem("topPositionY", cloth.positionY.toString());
                localStorage.setItem("topPositionZ", cloth.positionZ.toString());
            }
            else {
                setTopPath("");
                localStorage.setItem("topPath", "");
            }

        }
        else if (cloth.type === "bottom") {
            if (localStorage.getItem("bottomPath") !== cloth.path) {
                setBottomPath(cloth.path);
                localStorage.setItem("bottomPath", cloth.path);
                setBottomScaleX(cloth.scaleX);
                setBottomScaleY(cloth.scaleY);
                setBottomScaleZ(cloth.scaleZ);

                setBottomPositionX(cloth.positionX);
                setBottomPositionY(cloth.positionY);
                setBottomPositionZ(cloth.positionZ);

                localStorage.setItem("bottomScaleX", cloth.scaleX.toString());
                localStorage.setItem("bottomScaleY", cloth.scaleY.toString());
                localStorage.setItem("bottomScaleZ", cloth.scaleZ.toString());
                localStorage.setItem("bottomPositionX", cloth.positionX.toString());
                localStorage.setItem("bottomPositionY", cloth.positionY.toString());
                localStorage.setItem("bottomPositionZ", cloth.positionZ.toString());
            }
            else {
                setBottomPath("");
                localStorage.setItem("bottomPath", "");
            }
        }
    };

    const handleMannequinClick = (mannequin) => {
        setMannequinPath(mannequin.path);
        localStorage.setItem("mannequinPath", mannequin.path);
        setMannequinScaleX(mannequin.scaleX);
        localStorage.setItem("mannequinScaleX", mannequin.scaleX);
        setMannequinScaleY(mannequin.scaleY);
        localStorage.setItem("mannequinScaleY", mannequin.scaleY);
        setMannequinScaleZ(mannequin.scaleZ);
        localStorage.setItem("mannequinScaleZ", mannequin.scaleZ);



        setBodyShape(mannequin.bodyShape);
    }


    useEffect(() => {
        localStorage.setItem("skinColor", skinColor);
        localStorage.setItem("bodyShape", bodyShape);

        if (mannequinPath !== "") {
            const loader = new GLTFLoader();
            loader.load(mannequinPath, (gltf) => {
                setMannequin(gltf.scene);
            })
            setUserPreferences();
        } else {
            setMannequin(null);
        }
        if (topPath !== "") {
            const loader = new GLTFLoader();
            loader.load(topPath, (gltf) => {
                setTop(gltf.scene);

            })
            setUserPreferences();
        } else {
            setTop(null);
        }

        if (bottomPath !== "") {
            const loader = new GLTFLoader();
            loader.load(bottomPath, (gltf) => {
                setBottom(gltf.scene);
            })
            setUserPreferences();
        } else {
            setBottom(null);
        }
        // setUserPreferences();
        filterByBodyShape();
    }, [mannequinPath,
        topPath,
        bottomPath,
        skinColor,
        bodyShape
    ])

    useEffect(() => {
        localStorage.setItem("bodyShape", bodyShape);
        filterByBodyShape();
    }, [bodyShape])

    useEffect(() => {
        filterByBodyShape();
    }, [clothings])


    useEffect(() => {
        if (mannequin) {
            mannequin.traverse((child) => {
                if (child.isMesh) {
                    child.material.color.set(skinColor);
                }
            });
            mannequin.scale.set(mannequinScaleX, mannequinScaleY, mannequinScaleZ);
            mannequin.position.set(0, -3.33, 0);
        }
    }, [mannequin, skinColor])

    useEffect(() => {
        if (top) {
            top.scale.set(topScaleX, topScaleY, topScaleZ);
            // top.scale.set(1.91, 1.87, 2.043);
            top.position.set(topPositionX, topPositionY, topPositionZ);
            // top.position.set(-0.021, -3.554, 0.079);

            if (topPath === "/models/Blender-Material/Male-Small/Tops/Male-Small-Tshirt.glb"
                || topPath === "/models/Blender-Material/Male-Medium/Tops/Male-Medium-Tshirt.glb"
                || topPath === "/models/Blender-Material/Male-Large/Tops/Male-Large-Tshirt.glb"
                || topPath === "/models/Blender-Material/Male-X-Large/Tops/Male-X-Large-Tshirt.glb"
                || topPath === "/models/Blender-Material/Male-XX-Large/Tops/Male-XX-Large-Tshirt.glb"
                || topPath === "/models/Blender-Material/Male-XXX-Large/Tops/Male-XXX-Large-Tshirt.glb"
            ) {
                top.traverse((child) => {
                    if (child.isMesh) {
                        child.material.color.set("grey");
                    }
                });
                top.rotation.x = -0.04;
            }


            top.traverse((child) => {
                if (child.isMesh) {
                    child.material.metalness = 0;
                    child.material.roughness = 1;
                }
            });
        }
    }, [top])

    useEffect(() => {
        if (bottom) {

            bottom.scale.set(bottomScaleX, bottomScaleY, bottomScaleZ);
            // bottom.scale.set(1.915, 1.7, 2.02);
            bottom.position.set(bottomPositionX, bottomPositionY, bottomPositionZ);
            // bottom.position.set(0.01, -3.07, -0.03);

            bottom.traverse((child) => {
                if (child.isMesh) {
                    child.material.metalness = 0;
                    child.material.roughness = 1;
                }
            });
        }
    }, [bottom])

    const groupedClothes = groupIntoRows(filteredClothings);

    function AR() {
        const [isDragging, setIsDragging] = useState(false);
        const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
        const mannequinRef = useRef(null);
        const topRef = useRef(null);
        const bottomRef = useRef(null);
        const cameraRef = useRef(null);

        useEffect(() => {
            let camera, scene, renderer;

            function init() {
                const container = document.createElement("div");
                document.body.appendChild(container);

                scene = new THREE.Scene();

                camera = new THREE.PerspectiveCamera(
                    70,
                    window.innerWidth / window.innerHeight,
                    0.01,
                    40
                );
                cameraRef.current = camera;

                renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
                renderer.setPixelRatio(window.devicePixelRatio);
                renderer.setSize(window.innerWidth, window.innerHeight);
                renderer.xr.enabled = true;
                container.appendChild(renderer.domElement);

                var light = new THREE.HemisphereLight(0xffffff, 0xbbbbff, 1);
                light.position.set(0.5, 1, 0.25);
                scene.add(light);

                // Assuming you have the original and new scales and positions
                const newMannequinScale = new THREE.Vector3(mannequinScaleX / 3, mannequinScaleY / 3, mannequinScaleZ / 3);
                const newTopScale = new THREE.Vector3(topScaleX / 3, topScaleY / 3, topScaleZ / 3);
                const newTopPosition = new THREE.Vector3(topPositionX / 3, topPositionY / 3, topPositionZ / 3);
                const newBottomScale = new THREE.Vector3(bottomScaleX / 3, bottomScaleY / 3, bottomScaleZ / 3);
                const newBottomPosition = new THREE.Vector3(bottomPositionX / 3, bottomPositionY / 3, bottomPositionZ / 3);

                // Set the new scale and position for the mannequin, top, and bottom models
                mannequin.scale.copy(newMannequinScale);
                top.scale.copy(newTopScale);
                top.position.copy(newTopPosition);
                bottom.scale.copy(newBottomScale);
                bottom.position.copy(newBottomPosition);


                // mannequin.scale.set(mannequinScaleX / 3, mannequinScaleY / 3, mannequinScaleZ / 3);
                mannequin.position.set(0, -3.33, 0);

                scene.add(mannequin);
                mannequinRef.current = mannequin;

                // top.scale.set(topScaleX / 3, topScaleY / 3, topScaleZ / 3);
                // top.position.set(topPositionX, topPositionY, topPositionZ);

                scene.add(top);
                topRef.current = top;

                // bottom.scale.set(bottomScaleX / 3, bottomScaleY / 3, bottomScaleZ / 3);
                // bottom.position.set(bottomPositionX, bottomPositionY, bottomPositionZ);

                scene.add(bottom);
                bottomRef.current = bottom;

                document.body.appendChild(ARButton.createButton(renderer));
                // document.body.appendChild(btn);
                // btn.onclick(toggleAR);
                window.addEventListener("resize", onWindowResize, false);


            }

            function onWindowResize() {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();

                renderer.setSize(window.innerWidth, window.innerHeight);
            }

            function animate() {
                renderer.setAnimationLoop(render);
            }

            function render() {
                if (mannequinRef.current) {
                    if (isDragging) {
                        const { x, y } = dragOffset;
                        mannequinRef.current.rotation.y += x * 0.01;
                        mannequinRef.current.rotation.x += y * 0.01;
                        mannequinRef.current.updateMatrix();
                    }

                    // Update the mannequin's position to follow the camera
                    if (cameraRef.current) {
                        const offset = new THREE.Vector3(0, -1, -2); // Adjust this offset to control the distance
                        const mannequinPosition = cameraRef.current.position
                            .clone()
                            .add(offset);
                        mannequinRef.current.position.copy(mannequinPosition);
                        mannequinRef.current.updateMatrix();
                    }
                }
                if (topRef.current) {
                    if (isDragging) {
                        const { x, y } = dragOffset;
                        topRef.current.rotation.y += x * 0.01;
                        topRef.current.rotation.x += y * 0.01;
                        topRef.current.updateMatrix();
                    }

                    // Update the mannequin's position to follow the camera
                    if (cameraRef.current) {
                        const offset = new THREE.Vector3(0, -1, -2); // Adjust this offset to control the distance
                        const topPosition = cameraRef.current.position
                            .clone()
                            .add(offset);
                        topRef.current.position.copy(topPosition);
                        topRef.current.updateMatrix();
                    }
                }

                if (bottomRef.current) {
                    if (isDragging) {
                        const { x, y } = dragOffset;
                        bottomRef.current.rotation.y += x * 0.01;
                        bottomRef.current.rotation.x += y * 0.01;
                        bottomRef.current.updateMatrix();
                    }

                    // Update the mannequin's position to follow the camera
                    if (cameraRef.current) {
                        const offset = new THREE.Vector3(0, -1, -2); // Adjust this offset to control the distance
                        const bottomPosition = cameraRef.current.position
                            .clone()
                            .add(offset);
                        bottomRef.current.position.copy(bottomPosition);
                        bottomRef.current.updateMatrix();
                    }
                }

                renderer.render(scene, camera);
            }

            init();
            animate();

            return () => {
                window.removeEventListener("resize", onWindowResize, false);

                if (renderer) {
                    const domElement = renderer.domElement;
                }
            };
        }, []);

        return null;
    }

    return (
        <>
            <div className='home-container'>
                <div className="Home">
                    <button className='ar-button'><img src={arButton} alt="" onClick={toggleAR} /></button>
                    {arVisible && (
                        <AR />
                    )}
                    <button className='delete-button' onClick={handleClear}><img src={deleteButton} alt="" /></button>
                    <div
                        className={`navigation ${isActive2 ? 'active' : ''} color`}
                        style={{ 'background': `${!isActive2 ? "url('/imgs/Skin_Color.png') center/cover, #98a1bec9" : "#98a1bec9"}` }}
                        onClick={() => { !isActive2 && toggleMenu2(); setIsActive1(false) }}
                    >
                        <span style={{ '--i': 0, '--x': -1, '--y': 0, 'backgroundColor': '#FFCD94' }}
                            onClick={() => setSkinColor('#FFCD94')}
                        >
                        </span>

                        <span style={{ '--i': 1, '--x': 1, '--y': 0, 'backgroundColor': '#C68642' }}
                            onClick={() => setSkinColor('#C68642')}
                        >
                        </span>

                        <span style={{ '--i': 2, '--x': 0, '--y': -1, 'backgroundColor': '#321B0F' }}
                            onClick={() => setSkinColor('#3a2317')}
                        >
                        </span>

                        <span style={{ '--i': 3, '--x': 0, '--y': 1, 'backgroundColor': '#FFCDA5' }}
                            onClick={() => setSkinColor('#FFCDA5')}
                        >
                        </span>

                        <span style={{ '--i': 7, '--x': -1, '--y': 1, 'backgroundColor': '#E0AC69' }}
                            onClick={() => setSkinColor('#E0AC69')}
                        >
                        </span>

                        <span style={{ '--i': 8, '--x': 1, '--y': -1, 'backgroundColor': '#492816' }}
                            onClick={() => setSkinColor('#492816')}
                        >
                        </span>
                        <span style={{ '--i': 6, '--x': 0, '--y': 0, 'backgroundColor': 'red', 'fontSize': '40px' }} onClick={() => { isActive2 && toggleMenu2(); }}>
                            ×
                        </span>
                    </div>
                    <div
                        className={`navigation ${isActive1 ? 'active' : ''} size`}
                        style={{ 'background': `${!isActive1 ? "url('/imgs/Body_Shape.png') center/cover, #98a1bec9" : "#98a1bec9"}` }}
                        onClick={() => { !isActive1 && toggleMenu1(); setIsActive2(false) }}
                    >
                        {mannequins
                            .filter(item => item.bodyShape === 'S')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 0, '--x': -1, '--y': 0 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}

                        {mannequins
                            .filter(item => item.bodyShape === 'XXXL')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 1, '--x': 1, '--y': 0 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}

                        {mannequins
                            .filter(item => item.bodyShape === 'L')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 2, '--x': 0, '--y': -1 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}

                        {mannequins
                            .filter(item => item.bodyShape === 'XL')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 3, '--x': 0, '--y': 1 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}

                        {mannequins
                            .filter(item => item.bodyShape === 'XXL')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 4, '--x': 1, '--y': 1 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}
                        {mannequins
                            .filter(item => item.bodyShape === 'M')
                            .map((item) => (<span
                                key={item._id}
                                style={{ '--i': 5, '--x': -1, '--y': -1 }}
                                onClick={() => handleMannequinClick(item)}
                            >
                                {item.bodyShape}
                            </span>))}

                        <span style={{ '--i': 6, '--x': 0, '--y': 0, 'backgroundColor': 'red', 'fontSize': '40px' }}
                            onClick={() => { isActive1 && toggleMenu1(); }}
                        >
                            ×
                        </span>
                    </div>
                    <Canvas className='Home-Avatar' style={{ height: "550px" }} onClick={() => { isActive1 && toggleMenu1(); isActive2 && toggleMenu2(); }}>
                        {/* <ambientLight intensity={0.5} /> */}
                        <pointLight position={[0, 0, 25]} intensity={650} />
                        <pointLight position={[0, 0, -25]} intensity={650} />
                        <pointLight position={[25, 10, 0]} intensity={650} />
                        <pointLight position={[-25, 10, 0]} intensity={650} />
                        <OrbitControls />
                        <Suspense fallback={null}>
                            {mannequin && (<primitive object={mannequin} />)}
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
                                        onClick={() => handleClothesClick(item)}
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