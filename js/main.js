import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js'; 

const main = () => {
    const canvas = document.querySelector('#c');
    const renderer = new THREE.WebGLRenderer({canvas});
    
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 100;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    camera.position.z = 15;
    camera.position.y = 3;

    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 5, 0);
    controls.update();

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('red');

    const size = 10;
    const divisions =  10;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

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

    const resizeRendererToDisplaySize = (renderer) => {
        const canvas = renderer.domElement;
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;
        const needResize = canvas.width !== width || canvas.height !== height;

        if (needResize) {
          renderer.setSize(width, height, false);
        }

        return needResize;
    };

    const render = () => {
        if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.updateProjectionMatrix();
          }

        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};

main();