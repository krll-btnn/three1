import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

// Сцена
const scene = new THREE.Scene();

// Отрисовщик
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Куб
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Рёбра
const edges = new THREE.EdgesGeometry(geometry);
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });
const wireframe = new THREE.LineSegments(edges, lineMaterial);
scene.add(wireframe);

// Анимация
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  wireframe.rotation.x = cube.rotation.x;
  wireframe.rotation.y = cube.rotation.y;

  renderer.render(scene, camera);
}

animate();
