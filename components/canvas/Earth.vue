<template>
  <div ref="canvas" class="container"></div>
</template>
<script setup lang="ts">
import * as THREE from 'three';
import {onMounted, Ref} from '@vue/runtime-core';
import {GLTF, GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {cameraPosition} from 'three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {TrackballControls} from 'three/examples/jsm/controls/TrackballControls';

const canvas: Ref<HTMLElement> = ref(null);

const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight);
camera.position.set(1, 0, 2)
let model: GLTF = null;
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableZoom = false
controls.minPolarAngle = 1.57
controls.maxPolarAngle = 1.57
controls.autoRotate = true
controls.autoRotateSpeed = 30
controls.enableDamping = true
controls.addEventListener('change', () => {
  requestAnimationFrame(() => {
    if (controls.autoRotateSpeed < 30) {
      controls.autoRotateSpeed += 0.6
    }
    if (controls.autoRotateSpeed > 30) {
      controls.autoRotateSpeed -= 0.6
    }
  })
})


loader.load('crystal.glb', (gltf) => {
  model = gltf;
  model.scene.position.x = 0
  scene.add(gltf.scene)
  controls.target = model.scene.position

  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    controls.update()
  }

  animate()
})


// const hemiLight = new THREE.HemisphereLight('#fdfcfc', '#101018', 1);
// scene.add(hemiLight);

const spotLight = new THREE.PointLight('#fcf128', 5)
spotLight.position.set(-6, 3, -3);

spotLight.castShadow = true;

spotLight.shadow.mapSize.width = 1024;
spotLight.shadow.mapSize.height = 1024;

spotLight.shadow.camera.near = 500;
spotLight.shadow.camera.far = 4000;
spotLight.shadow.camera.fov = 30;

camera.add(spotLight);
scene.add(camera)

const directionalLight = new THREE.DirectionalLight('#fcf128', 2);
directionalLight.position.set(0, -2, 10);
scene.add(directionalLight);


onMounted(() => {
  canvas.value.appendChild(renderer.domElement)
  renderer.setSize(canvas.value.clientWidth, canvas.value.clientHeight);

  canvas.value.addEventListener('pointerup', (event: PointerEvent) => {
    console.log("formula " + (canvas.value.clientWidth - (canvas.value.clientWidth / 2 + event.offsetX)))
    const offsetX = (canvas.value.clientWidth - (canvas.value.clientWidth / 2 + event.offsetX))
    let speed = -Math.round(offsetX / 30)
    if (speed === -0) {
      speed = 1
    }
    console.log(speed)
    controls.autoRotateSpeed = speed

  })
})

</script>
<style scoped lang="scss">
@use './assets/scss/util' as *;

.container {
  display: flex;
  justify-content: flex-start;
  width: max(30vw, rem(150));
  height: max(30vh, rem(200));
}

</style>
