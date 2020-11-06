import * as THREE from './three.js/three.module.js';
import { OrbitControls } from './three.js/OrbitControls.js'; 
import { DragControls } from './three.js/DragControls.js';

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
    camera.position.z = 0;
    camera.position.y = 12;

    // Hier maak ik de controls aan.
    const controls = new OrbitControls(camera, canvas);
    controls.target.set(0, 0, 0);
    controls.update();

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

    const geometry = new THREE.SphereGeometry( 0.5, 32, 32 );
    const material = new THREE.MeshBasicMaterial( {color: 0xffff00} );
    const sphere = new THREE.Mesh( geometry, material );
    objects.push(sphere);
    // scene.add( sphere );

    const geometryCube = new THREE.CubeGeometry(0.5,0.25,1);
    const materialCube = new THREE.MeshBasicMaterial({color: 0xffff00});
    const cube = new THREE.Mesh(geometryCube, materialCube);
    objects.push( cube );
    // scene.add( cube );


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

        controls.dispose();
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);

    const dragControls = new DragControls(objects, camera, renderer.domElement);
    dragControls.addEventListener('drag', render);
};

export {
    main
};