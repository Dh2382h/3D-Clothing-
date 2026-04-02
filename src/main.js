// Components

import { createScene } from "./components/scene";
import { createCamera } from "./components/camera";
import { createLights } from "./components/lights";
import { createHotspots } from "./components/spots/hotspots";
import { addBgMusic } from "./components/music/audio";

// Data
import hotspots from "./components/spots/spotsData";

// System
import { Resizer } from "./systems/resizer";
import { createRenderer } from "./systems/renderer";
import { createControls } from "./systems/controls";
import { Model } from "./components/product/model";

// Scene Setup
const scene = createScene();

// camera
const camera = createCamera();

// Lights
const { directionalLight, ambientLight } = createLights();
scene.add(ambientLight, directionalLight);

//add 3d Model
Model(scene);

// Renderer
const renderer = createRenderer();

// orbitControls
const controls = createControls(camera, renderer);

// Hotspots
const updateHotspots = createHotspots(hotspots, camera, controls);

//Music
addBgMusic();

// Animation Loop
function animate() {
  controls.update();
  if (updateHotspots) {
    updateHotspots();
  }

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();

// Handle Resizing
Resizer(camera, renderer);
