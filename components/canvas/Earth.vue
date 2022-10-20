<template>
    <div ref="canvas" class="container"></div>
</template>

<script setup lang="ts">
import * as THREE from 'three';//@ts-ignore
import vertexShader from '~/assets/shaders/vertex.glsl';//@ts-ignore
import fragmentShader from '~/assets/shaders/fragment.glsl';//@ts-ignore
import atmosphereFragmentShader from '~/assets/shaders/atmosphereFragment.glsl';//@ts-ignore
import atmosphereVertexShader from '~/assets/shaders/atmosphereVertex.glsl';
import {onMounted, Ref} from '@vue/runtime-core';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls';
// MAIN
const canvas: Ref<HTMLElement> = ref(null);
const texture = new THREE.TextureLoader().load('marble.jpg');
const loader = new GLTFLoader();
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({
  alpha: true,
  antialias: true
});

// INIT
camera.position.z = 2
renderer.setPixelRatio(window.devicePixelRatio)

// CONTROLS
const controls = new OrbitControls(camera, renderer.domElement);
controls.maxPolarAngle = 1.57
controls.minPolarAngle = 1
controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 4
controls.enableDamping = true
controls.dampingFactor = 0.01
controls.addEventListener('change', () => {
  requestAnimationFrame(() => {
    if (controls.autoRotateSpeed < 4) {
      controls.autoRotateSpeed += 0.1
    }
    if (controls.autoRotateSpeed > 4) {
      controls.autoRotateSpeed -= 0.1
    }
  })
})

function animate() {
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
  const width = canvas.value.clientWidth;
  const height = canvas.value.clientHeight;
  camera.aspect = width / height;
  camera.updateProjectionMatrix();
  renderer.setSize(width, height);
  setCanvasDimensions(renderer.domElement, width, height);
}
const resizeUpdateInterval = 10;
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

onMounted(() => {

  canvas.value.appendChild(renderer.domElement)
  resizeCanvas()

  canvas.value.addEventListener('pointerup', (event: PointerEvent) => {
    const offsetX = (canvas.value.clientWidth - (canvas.value.clientWidth / 2 + event.offsetX))
    let speed = -Math.round(offsetX / 120)
    if (speed === -0) {
      speed = 1
    }
    controls.autoRotateSpeed = speed
  })

  animate()
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
