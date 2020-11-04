import * as THREE from './three.module.js';
import { GLTFLoader } from './GLTFLoader.js';
import { OrbitControls } from './OrbitControls.js'; 
import { DragControls } from './DragControls.js';

const main = () => {

    const objects = [];

    // Hier pak ik de canvas waar ik de 3D objecten op wil gaan renderen.
    const canvas = document.querySelector('#c');

    // Hier roep ik de renderer aan, die ervooor zorgt dat je alle
    // 3D objecten op je webpagina kunt renderen.
    const renderer = new THREE.WebGLRenderer({antialias: true, canvas});
    
    // Hier geef ik alle specificaties mee aan de camera, zoals de "field of view",
    // en vanaf welke plekken er gerendered moet worden.
    const fov = 75;
    const aspect = window.innerWidth / window.innerHeight;
    const near = 0.1;
    const far = 50;
    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

    // Hier geef ik de positie aan voor de camera.
    camera.position.z = 15;
    camera.position.y = 5;

    // Hier maak ik de controls aan.
    // const controls = new OrbitControls(camera, canvas);
    // controls.target.set(0, 0, 0);
    // controls.update();

    // Hier maak ik de "Scene" aan, de plek waar alles samenkomt en wordt doorgegeven wat gerendered
    // moet worden door de WebGL API.
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('black');

    {
        // Hier maak ik het licht aan.
        const color = 0xFFFFFF;
        const intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        scene.add(light);
    }

    // Hier maak ik het grid aan.
    const size = 12;
    const divisions =  12;
    const gridHelper = new THREE.GridHelper(size, divisions);
    scene.add(gridHelper);

    // Hier roep ik de Loader aan, die ervoor zorgt dat ik zelfgemaakte objecten kan inladen.
    const loader = new GLTFLoader();
    loader.load( 'objects/dummy.glb', ( gltf ) => {
        const root = gltf.scene;
        objects.push( root );
        scene.add( root );
        render();
    }, (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    }, ( error ) => {
        console.log(error);
    } );

    // Een functie die ervoor zorgt dat het canvas responsive is.
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

    // Een aparte render functie die ervoor zorgt dat alles naar het canvas 
    // gerendered wordt.
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

    const dragControls = new DragControls(objects, camera, renderer.domElement);

    dragControls.addEventListener('drag', render);
};

main();