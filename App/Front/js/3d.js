$(document).ready(function() {

/* Setup */
const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1, 1000
),
    renderer = new THREE.WebGLRenderer();

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);
$('body').append(renderer.domElement);



/* Main */
// Define the scene
const geometry = new THREE.BoxGeometry(1,1,1),
    material = new THREE.MeshBasicMaterial({color:0xff0040});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.rotation.x = 0.5;
    
    camera.position.z = 2;
    
    // Render
    function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
        cube.rotation.y += 0.02;
}

animate();

})