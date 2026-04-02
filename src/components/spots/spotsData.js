const hotspots = [
  {
    position: [0, 1, 0],
    target: { x: 0, y: 2, z: 5 },
    title: "Full View",
    description: "Cloth looks like from full angle",
  },
  {
    position: [0, 0.5, 0.5],
    target: { x: 0, y: 1, z: 3 },
    title: "Front View",
    description: "Cloth look like from front side",
  },
  {
    position: [-0.5, 0.5, 0],
    target: { x: -3, y: 1, z: 0 },
    title: "Left View",
    description: "Cloth look like from left side",
  },
  {
    position: [0.5, 0.5, 0],
    target: { x: 3, y: 1, z: 0 },
    title: "Right View",
    description: "Cloth look like from right side ",
  },
];

export default hotspots;
