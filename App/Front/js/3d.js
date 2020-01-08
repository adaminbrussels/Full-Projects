$(document).ready(function() {

/* Setup */
const scene = new THREE.Scene(),
    camera = new THREE.PerspectiveCamera(
    75,
    $('body').width() / $('body').height(),
    0.1, 1000
),
    renderer = new THREE.WebGLRenderer({alpha:true});

$('body').append(renderer.domElement);



/* Main */

// Define the texture
const texture = new THREE.TextureLoader().load("././img/test.jpg",
    function(texture) {
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
    }
);

// Define the geometry
const geometry = new THREE.BoxGeometry(1,1,1),
    material = new THREE.MeshBasicMaterial({map:texture});
    material.side = THREE.BackSide;
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    cube.rotation.x = 0.5;
    
    camera.position.z = 1.5;
    
// Render
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    cube.rotation.y += 0.005;

    // Make responsive
    renderer.setSize(
        window.innerWidth,
        window.innerHeight
    );
    camera.aspect = $('body').width() / $('body').height();
    camera.updateProjectionMatrix();
}

animate();

})