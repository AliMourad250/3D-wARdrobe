import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useFBX } from '@react-three/drei';
import Model from 'mannequin';

const loader = new GLTFLoader();

const Home = () => {
    return (
        <div className="Home">
            {/* <div className="Home-Avatar"> */}
            <Model />
            {/* </div> */}

            <div className="Home-Cloths">
                <div className="row">
                    <div className="Home-Cloths-box-row-1">ed</div>
                    <div className="Home-Cloths-box-row-1">fefef</div>
                    <div className="Home-Cloths-box-row-1">feeefe</div>
                </div>
                <div className="row">
                    <div className="Home-Cloths-box-row-2">ed</div>
                    <div className="Home-Cloths-box-row-2">fefef</div>
                    <div className="Home-Cloths-box-row-2">feeefe</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
