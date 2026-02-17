export default defineEventHandler((event) => {
  return {
    training: [
      {
        day: 1,
        title: "Full Body & Core",
        focus: "Unilateral Stability",
        exercises: [
          {
            id: "d1-a1",
            name: "High Box Step-Up",
            superset: "A1",
            target: {
              sets: 4,
              reps: "10 per leg",
              tempo: "3-1-1-0",
              rest: "60s",
            },
            instructions: {
              setup: "Use a box where your thigh is parallel to the floor.",
              execution:
                "Drive through the heel to stand; do not bounce off the bottom foot. Lower slowly.",
            },
          },
          {
            id: "d1-a2",
            name: "Incline DB Bench Press",
            superset: "A2",
            target: { sets: 4, reps: "10-12", tempo: "3-1-1-0", rest: "75s" },
            instructions: {
              setup: "Bench at 45 degrees.",
              execution:
                "Lower DBs over 3s. Pause for 1s at the bottom before pressing.",
            },
          },
          {
            id: "d1-b1",
            name: "Chest-Supported DB Row",
            superset: "B1",
            target: { sets: 4, reps: "10-12", tempo: "3-0-1-1", rest: "60s" },
            instructions: {
              setup: "Incline bench at 30 degrees, lie chest-down.",
              execution:
                "Pull DBs toward hips, squeezing shoulder blades. 1s pause at the top.",
            },
          },
          {
            id: "d1-b2",
            name: "Stability Ball Hamstring Curls",
            superset: "B2",
            target: { sets: 4, reps: "12-15", tempo: "2-0-1-2", rest: "75s" },
            instructions: {
              setup: "Lie on back, heels on the ball.",
              execution:
                "Lift hips into a bridge; curl ball to glutes. Hold the squeeze for 2s.",
            },
          },
          {
            id: "d1-c1",
            name: "Pallof Press",
            superset: "C1",
            target: {
              sets: 3,
              reps: "12 per side",
              tempo: "2-2-2-0",
              rest: "45s",
            },
            instructions: {
              setup: "Stand sideways to a cable at chest height.",
              execution:
                "Press handle straight out and hold for 2s, resisting the rotation.",
            },
          },
          {
            id: "d1-c2",
            name: "Deadbugs",
            superset: "C2",
            target: {
              sets: 3,
              reps: "10 per side",
              tempo: "3-0-3-0",
              rest: "45s",
            },
            instructions: {
              setup: "Lie on back, arms up, knees at 90 degrees.",
              execution:
                "Slowly lower opposite arm/leg. Keep lower back pressed into the floor.",
            },
          },
        ],
      },
      {
        day: 2,
        title: "Lower Body, Core & Glutes",
        focus: "Posterior Chain & Anti-Rotation",
        exercises: [
          {
            id: "d2-a1",
            name: "Landmine Squat",
            superset: "A1",
            target: { sets: 4, reps: "12-15", tempo: "4-0-X-0", rest: "60s" },
            instructions: {
              setup: "Barbell in a corner; cup the end at chest height.",
              execution:
                "Lean slightly into the bar. Squat deep by pushing hips back.",
            },
          },
          {
            id: "d2-a2",
            name: "Weighted Glute Bridge",
            superset: "A2",
            target: { sets: 4, reps: "15", tempo: "2-0-1-2", rest: "60s" },
            instructions: {
              setup: "Lie on back, knees bent, DB across hips.",
              execution:
                "Drive through heels to lift hips. 2s pause at the top.",
            },
          },
          {
            id: "d2-b1",
            name: "Cable Pull-Throughs",
            superset: "B1",
            target: { sets: 4, reps: "12-15", tempo: "3-0-1-1", rest: "75s" },
            instructions: {
              setup:
                "Facing away from a low cable, reach through legs to grab rope.",
              execution:
                "Hinge at hips. Snap hips forward to stand, squeezing glutes.",
            },
          },
          {
            id: "d2-b2",
            name: "Alternating DB Lateral Lunges",
            superset: "B2",
            target: {
              sets: 4,
              reps: "10 per side",
              tempo: "2-0-1-0",
              rest: "75s",
            },
            instructions: {
              setup: "Stand with DBs at sides.",
              execution:
                "Step wide to the side, sitting hips back over that heel.",
            },
          },
          {
            id: "d2-c",
            name: "Bird-Dog",
            superset: null,
            target: {
              sets: 3,
              reps: "10 per side",
              tempo: "3-2-3-0",
              rest: "60s",
            },
            instructions: {
              setup: "On all fours.",
              execution:
                "Reach opposite arm/leg out slowly. 2s squeeze at full extension.",
            },
          },
        ],
      },
      {
        day: 3,
        title: "Upper Body, Core & Back",
        focus: "Vertical Pull & Mid-Section Stability",
        exercises: [
          {
            id: "d3-a1",
            name: "Neutral Grip Lat Pulldown",
            superset: "A1",
            target: { sets: 4, reps: "10-12", tempo: "4-0-1-1", rest: "60s" },
            instructions: {
              setup: "Use V-bar or parallel grip attachment.",
              execution:
                "Pull to upper chest, elbows down to ribs. Squeeze at bottom.",
            },
          },
          {
            id: "d3-a2",
            name: "Seated Arnold Press",
            superset: "A2",
            target: { sets: 4, reps: "10-12", tempo: "3-1-1-0", rest: "75s" },
            instructions: {
              setup: "Seated on bench with back support.",
              execution:
                "Rotate palms outward as you press up. 1s pause at bottom.",
            },
          },
          {
            id: "d3-b1",
            name: "Incline DB Curls",
            superset: "B1",
            target: { sets: 4, reps: "12", tempo: "3-0-1-0", rest: "60s" },
            instructions: {
              setup: "Sit on 45 degree incline bench, arms hanging.",
              execution:
                "Curl weights while keeping elbows pinned back for maximum stretch.",
            },
          },
          {
            id: "d3-b2",
            name: "Tricep Rope Pushdowns",
            superset: "B2",
            target: { sets: 4, reps: "12-15", tempo: "3-0-1-1", rest: "60s" },
            instructions: {
              setup: "Cable at top. Hold rope.",
              execution:
                "Push down; pull rope ends apart at the bottom for 1s squeeze.",
            },
          },
          {
            id: "d3-c1",
            name: "Captain’s Chair Knee Raises",
            superset: "C1",
            target: { sets: 3, reps: "15", tempo: "3-0-1-1", rest: "45s" },
            instructions: {
              setup: "Suspend on forearms in chair.",
              execution:
                "Lift knees using abs, no momentum. 3s lowering phase.",
            },
          },
          {
            id: "d3-c2",
            name: "Single-Arm Farmer’s Carry",
            superset: "C2",
            target: {
              sets: 3,
              reps: "40 meters",
              tempo: "Braced",
              rest: "45s",
            },
            instructions: {
              setup: "Hold heavy DB in one hand like a suitcase.",
              execution:
                "Walk tall. Do not let weight tilt your shoulders. Switch hands halfway.",
            },
          },
        ],
      },
    ],
  };
});
