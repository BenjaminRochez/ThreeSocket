window.onload = () => {
  let previousValue;
  const socket = io();

  socket.on("mobile orientation", function(data) {
    if (previousValue !== data) {
      cube.position.x += data / 100;
    }
    previousValue = data;
  });
};

let scene, camera, renderer, geometry, material;

scene = new THREE.Scene();
camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

geometry = new THREE.BoxGeometry(1, 1, 1);
material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

var animate = function() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
};

animate();

//
window.addEventListener("resize", onWindowResize, false);

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}
