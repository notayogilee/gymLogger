export default defineEventHandler((event) => {
  return {
    trainingData: [
      {
        day: 1,
        title: "Upper Push-Pull & Anti-Extension",
        focus: "Hypertrophy & Core Bracing",
        exercises: [
          {
            id: "p3-d1-a1",
            name: "Seated Cable Row (Wide Grip)",
            superset: "A1",
            target: { sets: 3, reps: "12-15", tempo: "3-1-1-2", rest: "60s" },
            instructions: "Wide grip bar. 3s release, 2s hold at the chest.",
          },
          {
            id: "p3-d1-a2",
            name: "Incline DB Flyes",
            superset: "A2",
            target: { sets: 3, reps: "12-15", tempo: "4-0-1-0", rest: "75s" },
            instructions:
              "30-degree incline. 4s slow lowering to feel the chest stretch.",
          },
          {
            id: "p3-d1-b1",
            name: "Lat Pulldown (Neutral V-Grip)",
            superset: "B1",
            target: { sets: 3, reps: "10-12", tempo: "3-0-1-2", rest: "60s" },
            instructions: "Pull to upper chest. 2s hard squeeze at the bottom.",
          },
          {
            id: "p3-d1-b2",
            name: "Seated DB Lateral Raise",
            superset: "B2",
            target: { sets: 3, reps: "15-20", tempo: "3-0-1-0", rest: "75s" },
            instructions: "Strict form. 3s lowering phase. No swinging.",
          },
          {
            id: "p3-d1-c1",
            name: "Stability Ball Stir the Pot",
            superset: "C1",
            target: {
              sets: 3,
              reps: "10 circles per dir",
              tempo: "Slow",
              rest: "45s",
            },
            instructions:
              "Plank on ball. Move elbows in circles while core remains frozen.",
          },
          {
            id: "p3-d1-c2",
            name: "Hollow Body Hold",
            superset: "C2",
            target: { sets: 3, reps: "45-60s", tempo: "Static", rest: "45s" },
            instructions:
              "Press lower back into floor. Arms and legs extended and hovering.",
          },
        ],
      },
      {
        day: 2,
        title: "Leg Density & Anti-Rotation",
        focus: "Metabolic Lower Body & Posterior Chain",
        exercises: [
          {
            id: "p3-d2-a1",
            name: "Leg Press (Feet High & Wide)",
            superset: "A1",
            target: { sets: 3, reps: "15-20", tempo: "4-0-1-0", rest: "60s" },
            instructions:
              "Feet at top of platform to protect spine. 4s descent.",
          },
          {
            id: "p3-d2-a2",
            name: "Seated Leg Curl",
            superset: "A2",
            target: { sets: 3, reps: "12-15", tempo: "4-0-1-1", rest: "75s" },
            instructions:
              "Squeeze at bottom. 4s return. Keep hips pinned to seat.",
          },
          {
            id: "p3-d2-b1",
            name: "Low Step-Ups (Knee Drive)",
            superset: "B1",
            target: {
              sets: 3,
              reps: "12 per leg",
              tempo: "3-0-X-0",
              rest: "60s",
            },
            instructions:
              "Mid-shin box. Explode up, drive opposite knee, 3s descent.",
          },
          {
            id: "p3-d2-b2",
            name: "45-Degree Hyperextensions",
            superset: "B2",
            target: { sets: 3, reps: "15", tempo: "2-0-1-2", rest: "75s" },
            instructions: "Neutral spine. Squeeze glutes hard at top for 2s.",
          },
          {
            id: "p3-d2-c",
            name: "Pallof Press + Overhead Reach",
            superset: null,
            target: {
              sets: 3,
              reps: "10 per side",
              tempo: "Slow",
              rest: "60s",
            },
            instructions:
              "Press out, reach up, bring back to chest. Resist rotation.",
          },
        ],
      },
      {
        day: 3,
        title: "Full Body Density & Bracing",
        focus: "Structural Balance & Conditioning",
        exercises: [
          {
            id: "p3-d3-a1",
            name: "Goblet Squat (to Box)",
            superset: "A1",
            target: { sets: 3, reps: "12-15", tempo: "4-1-1-0", rest: "60s" },
            instructions: "DB at chest. 4s down to box, 1s pause, drive up.",
          },
          {
            id: "p3-d3-a2",
            name: "DB Chest Supported Row",
            superset: "A2",
            target: { sets: 3, reps: "10-12", tempo: "3-1-1-1", rest: "75s" },
            instructions:
              "Lie face down on incline bench. Pause at top and bottom.",
          },
          {
            id: "p3-d3-b1",
            name: "Hammer Curls",
            superset: "B1",
            target: { sets: 3, reps: "12-15", tempo: "3-0-1-0", rest: "60s" },
            instructions: "Palms facing in. 3s slow descent.",
          },
          {
            id: "p3-d3-b2",
            name: "Dip Machine / Bench Dips",
            superset: "B2",
            target: { sets: 3, reps: "12-15", tempo: "3-0-1-0", rest: "60s" },
            instructions: "Upright torso. Focus on triceps. 3s eccentric.",
          },
          {
            id: "p3-d3-c1",
            name: "Reverse Crunches",
            superset: "C1",
            target: { sets: 3, reps: "15-20", tempo: "3-0-1-1", rest: "45s" },
            instructions: "Lift hips slightly at top. 3s lowering phase.",
          },
          {
            id: "p3-d3-c2",
            name: "Suitcase Carry (Heavy)",
            superset: "C2",
            target: {
              sets: 3,
              reps: "50 meters",
              tempo: "Braced",
              rest: "45s",
            },
            instructions:
              "Heavy load in one hand. Maintain level shoulders while walking.",
          },
        ],
      },
    ],
  };
});
