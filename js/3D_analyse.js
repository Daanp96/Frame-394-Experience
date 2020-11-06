import * as THREE from './three.js/three.module.js';
import { OrbitControls } from './three.js/OrbitControls.js'; 
import { DragControls } from './three.js/DragControls.js';
import { CSS2DRenderer, CSS2DObject } from "./three.js/CSS2DRenderer.js";

const main = () => {

    const objects = [];

    const toolObject = document.getElementsByClassName("tool_object");

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

    const addObject = (object) => {
        objects.push( object );
        scene.add( object );
    }

    const getClickedObject = () => {
        for(let i = 0; i < toolObject.length; i++){
            toolObject[i].addEventListener('click', (e) => {
                if(toolObject[i].dataset.object === "walter"){
                    const geometryWalter = new THREE.SphereGeometry( 0.5, 32, 32 );
                    const materialWalter = new THREE.MeshBasicMaterial( {color: 0xff0000} );
                    const walterObject = new THREE.Mesh( geometryWalter, materialWalter );
                    addObject(walterObject);
                } else if (toolObject[i].dataset.object === "michael") {
                    const geometryMichael = new THREE.SphereGeometry( 0.5, 32, 32 );
                    const materialMichael = new THREE.MeshBasicMaterial( {color: 0x0000ff} );
                    const michaelObject = new THREE.Mesh( geometryMichael, materialMichael );
                    addObject(michaelObject);
                } else if (toolObject[i].dataset.object === "taser"){
                    const geometryTaser = new THREE.CubeGeometry(0.5,0.25,1);
                    const materialTaser = new THREE.MeshBasicMaterial({color: 0xff00ff});
                    const taserObject = new THREE.Mesh(geometryTaser, materialTaser);
                    addObject(taserObject);
                } else if (toolObject[i].dataset.object === "fence") {
                    const geometry = new THREE.BoxGeometry( 0.25, 4, 10 );
                    const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
                    const fence = new THREE.Mesh( geometry, material );
                    addObject(fence);
                }
            });
        }
    }

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

    getClickedObject();

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