import * as THREE from 'https://cdn.jsdelivr.net/npm/three/build/three.module.js';

// Сцена
const scene = new THREE.Scene();

// Камера
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Куб
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x000000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Рёбра
const edges = new THREE.EdgesGeometry(geometry); // Создаем ребра из геометрии куба
const lineMaterial = new THREE.LineBasicMaterial({ color: 0xffffff }); // Черный цвет для ребер
const wireframe = new THREE.LineSegments(edges, lineMaterial);
scene.add(wireframe); // Добавляем ребра в сцену

// Анимация
function animate() {
  requestAnimationFrame(animate);

  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  wireframe.rotation.x = cube.rotation.x; // Синхронизируем вращение
  wireframe.rotation.y = cube.rotation.y;

  renderer.render(scene, camera);
}

animate();
