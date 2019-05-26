import {
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
} from 'three';

let scene, camera, renderer, cube;

const init = () => {
  scene = new Scene();
  camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  renderer = new WebGLRenderer({ antialias: true });

  renderer.setSize(window.innerWidth / window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Cube sample

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshBasicMaterial({ color: 0x00ff00 });
  cube = new Mesh(geometry, material);

  scene.add(cube);
  camera.position.z = 5;
};

const animate = () => {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  renderer.render(scene, camera);
};

const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatric();
  renderer.setSize(window.innerWidth / window.innerHeight);
};

window.addEventListener('resize', onWindowResize, true);

init();

animate();
