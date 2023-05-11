import * as THREE from "three";
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function main(){

    const canvas = document.querySelector("#c1"),
    renderer = new THREE.WebGLRenderer({antialias:true,canvas}),
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45,1,0.1,5)
    
    ;

    renderer.render(scene,camera);
    



}

main();