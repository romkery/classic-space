<template>
    <div ref="canvas" class="container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';//@ts-ignore
import vertexShader from '~/assets/shaders/vertex.glsl';//@ts-ignore
import fragmentShader from '~/assets/shaders/fragment.glsl';//@ts-ignore
import atmosphereFragmentShader from '~/assets/shaders/atmosphereFragment.glsl';//@ts-ignore
import atmosphereVertexShader from '~/assets/shaders/atmosphereVertex.glsl';
import {onBeforeMount, onBeforeUnmount, onBeforeUpdate, onMounted, onUpdated, Ref, watch} from '@vue/runtime-core';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
import {ref} from '@vue/reactivity';

// MAIN
const canvas: Ref<HTMLElement> = ref(null);
const texture = new THREE.TextureLoader().load('marble.jpg');
let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

// INIT
camera.position.z = 2
renderer.setPixelRatio(window.devicePixelRatio)

// CONTROLS
let controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = 1.57
controls.minPolarAngle = 1
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 4
controls.enableDamping = true
controls.dampingFactor = 0.015

const setSpinSpeed = () => {
  requestAnimationFrame(() => {
    if (controls.autoRotateSpeed < 4) {
      controls.autoRotateSpeed += 0.1
    }
    if (controls.autoRotateSpeed > 4) {
      controls.autoRotateSpeed -= 0.1
    }
  })
}
controls.addEventListener('change', setSpinSpeed)

const animate = () => {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

// 3D
const material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    globeTexture: {
      value: texture
    }
  }
})

const sphere = new THREE.Mesh(new THREE.SphereGeometry(1, 100, 100),
  material
)

const atmosphere = new THREE.Mesh(new THREE.SphereGeometry(1, 100, 100),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertexShader,
    fragmentShader: atmosphereFragmentShader,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  })
)

atmosphere.scale.set(1.1, 1.1, 1.1)

scene.add(camera, atmosphere, sphere)

const resizeCanvas = () => {
  if (canvas.value?.clientWidth == 0) {
    setTimeout(() => resizeCanvas(), 20)
  }
  const width = canvas.value?.clientWidth;
  const height = canvas.value?.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  setCanvasDimensions(renderer.domElement, width, height);
}
const resizeUpdateInterval = 200;
const throttle = require('lodash.throttle');

window.addEventListener(
  'resize',
  throttle(resizeCanvas,
    resizeUpdateInterval,
    {trailing: true}
  )
);

function setCanvasDimensions(
  canvas,
  width,
  height,
  set2dTransform = false
) {
  const ratio = window.devicePixelRatio;
  canvas.width = width * ratio;
  canvas.height = height * ratio;
  canvas.style.width = `rem(${width})`;
  canvas.style.height = `rem(${height})`;
  if (set2dTransform) {
    canvas.getContext('2d').setTransform(ratio, 0, 0, ratio, 0, 0);
  }
}

onMounted(async () => {
  renderer.render(scene, camera)
  canvas.value.clientWidth
  await canvas.value.appendChild(renderer.domElement);

  resizeCanvas();
  canvas.value.addEventListener('pointerup', setSpinSpeed)

  animate()

})

const getSpinSpeed = (event: PointerEvent): void => {
  const offsetX = (canvas.value.clientWidth - (canvas.value.clientWidth / 2 + event.offsetX))
  let speed = -Math.round(offsetX / 120)
  if (speed === -0) {
    speed = 1
  }
  controls.autoRotateSpeed = speed
}


onBeforeUnmount(() => {
  // renderer.forceContextLoss();
  controls.removeEventListener('pouinterup', getSpinSpeed);
  canvas.value.removeEventListener('change', setSpinSpeed);
  window.removeEventListener('resize', resizeCanvas);
})


</script>
<style scoped lang="scss">
@use './assets/scss/util' as *;

.container {
  display: flex;
  justify-content: flex-start;
  width: rem(250);
  height: rem(250);
  aspect-ratio: 1 /1;


  @include breakpoint(sm) {
    width: rem(400);
    height: rem(400);
  }

  @include breakpoint(md) {
    width: rem(500);
    height: rem(500);
  }

  @include breakpoint(lg) {
    width: rem(600);
    height: rem(600);
  }
}

</style>
