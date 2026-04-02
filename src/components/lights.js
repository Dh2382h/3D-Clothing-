import { AmbientLight, DirectionalLight } from "three";

function createLights() {
  const ambientLight = new AmbientLight(0xffffff, 0.8);
  const directionalLight = new DirectionalLight(0xffffff, 3);

  directionalLight.position.set(5, 5, 5);

  return { ambientLight, directionalLight };
}

export { createLights };
