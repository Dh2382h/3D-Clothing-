import { GLTFLoader } from "three/examples/jsm/Addons.js";

function loadModel(url) {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader();

    loader.load(
      url,
      (gltf) => {
        const scene = gltf.scene;

        if (scene.children.length === 1) {
          resolve(scene.children[0]);
        } else {
          resolve(scene);
        }
      },
      undefined,
      (error) => {
        reject(error);
      },
    );
  });
}

//Model
function Model(scene) {
  const model = loadModel("/shirt.glb") // change model here
    .then((model) => {
      // adjust based on model
      model.scale.set(40, 40, 40);
      scene.add(model);
    })
    .catch((error) => {
      console.error("An error occured while loading the model", error);
    });
  return Model;
}

export { Model };
