import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js'; 

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const loader = new GLTFLoader();

loader.load( 'objects/dummy.glb', ( gltf ) => {
    const root = gltf.scene;
    scene.add( root );
    render();

}, (xhr) => {
    console.log((xhr.loaded / xhr.total * 100) + '% loaded');

}, ( error ) => {
    console.log(error);
    
} );

const canvas = document.querySelector('#c');
const renderer = new THREE.WebGLRenderer({
    canvas,
    alpha: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

camera.position.z = 5;

const render = () => {
    renderer.render(scene, camera);
};