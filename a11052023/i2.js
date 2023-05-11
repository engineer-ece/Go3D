import * as THREE from "three";
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

function main(){
    const canvas = document.querySelector("#c2"),
    renderer = new THREE.WebGLRenderer({antialias:true,canvas}),
    scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(45,2,0.1,5),
    geo = new THREE.BoxGeometry(1,1,1),
    mat = new THREE.MeshBasicMaterial({color:0xff0000}),
    cube = new THREE.Mesh(geo,mat);
    camera.position.z=2;

    scene.add(cube);
    renderer.render(scene,camera);


}

main();