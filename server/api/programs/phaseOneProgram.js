export default defineEventHandler((event) => {
  return {
    trainingData: [
      {
        day: 1,
        title: "Full Body & Core",
        focus: "Foundational Strength",
        exercises: [
          {
            id: "p1-d1-a1",
            name: "Bulgarian Split Squat (Dumbbell)",
            superset: "A1",
            target: {
              sets: 3,
              reps: "8-10 per leg",
              tempo: "4-0-X-0",
              rest: "60s",
            },
            instructions: {
              setup: "Rear foot elevated on a bench or step.",
              execution:
                "Lower hips until front thigh is parallel to floor. Keep torso upright to engage core.",
            },
          },
          {
            id: "p1-d1-a2",
            name: "Dumbbell Bench Press",
            superset: "A2",
            target: { sets: 3, reps: "10-12", tempo: "3-0-1-0", rest: "90s" },
            instructions: {
              setup: "Lie flat on bench, feet planted.",
              execution:
                "Lower DBs to chest level over 3s, then press back up with control.",
            },
          },
          {
            id: "p1-d1-b1",
            name: "Seated Cable Row (or Chest Supported)",
            superset: "B1",
            target: { sets: 3, reps: "10-12", tempo: "3-0-1-0", rest: "60s" },
            instructions: {
              setup: "Feet on pads, slight bend in knees.",
              execution:
                "Pull handles to lower ribs. Do not lean back; use your back muscles, not momentum.",
            },
          },
          {
            id: "p1-d1-b2",
            name: "Single-Leg Glute Bridge",
            superset: "B2",
            target: {
              sets: 3,
              reps: "12-15 per leg",
              tempo: "2-1-1-0",
              rest: "90s",
            },
            instructions: {
              setup: "Lie on back, one knee bent, other leg extended.",
              execution:
                "Drive through the heel to lift hips. 1s pause at the top.",
            },
          },
          {
            id: "p1-d1-c1",
            name: "Stability Ball Plank",
            superset: "C1",
            target: {
              sets: 3,
              reps: "45-60s hold",
              tempo: "Static",
              rest: "60s",
            },
            instructions: {
              setup: "Forearms on a stability ball, feet on floor.",
              execution:
                "Keep hips level and spine neutral. The ball adds instability to tax the deep core.",
            },
          },
          {
            id: "p1-d1-c2",
            name: "Half-Kneeling Cable Woodchop",
            superset: "C2",
            target: {
              sets: 3,
              reps: "10-12 per side",
              tempo: "2-0-1-0",
              rest: "60s",
            },
            instructions: {
              setup: "One knee down, cable at high position.",
              execution:
                "Pull cable diagonally across body to opposite hip. Keep torso braced.",
            },
          },
        ],
      },
      {
        day: 2,
        title: "Lower Body, Core & Glutes",
        focus: "Hinge & Hip Stability",
        exercises: [
          {
            id: "p1-d2-a1",
            name: "Kettlebell/Dumbbell Swing",
            superset: "A1",
            target: { sets: 3, reps: "12-15", tempo: "X-0-X-0", rest: "60s" },
            instructions: {
              setup: "Feet shoulder-width apart.",
              execution:
                "Hinge at hips, snap forward to swing weight to chest height. This is a hinge, not a squat.",
            },
          },
          {
            id: "p1-d2-a2",
            name: "Decline Bench Leg Raise",
            superset: "A2",
            target: { sets: 3, reps: "10-12", tempo: "3-0-1-0", rest: "90s" },
            instructions: {
              setup: "Lie on decline bench, head at the top.",
              execution:
                "Lift legs to 90 degrees, lower them slowly over 3s without touching the floor.",
            },
          },
          {
            id: "p1-d2-b1",
            name: "Barbell/Dumbbell Hip Thrust",
            superset: "B1",
            target: { sets: 3, reps: "12-15", tempo: "2-1-1-0", rest: "60s" },
            instructions: {
              setup: "Upper back against bench, weight across hips.",
              execution:
                "Drive hips up, pause for 1s at top with a hard glute squeeze.",
            },
          },
          {
            id: "p1-d2-b2",
            name: "Dumbbell Step-Up",
            superset: "B2",
            target: {
              sets: 3,
              reps: "8-10 per leg",
              tempo: "3-0-1-0",
              rest: "90s",
            },
            instructions: {
              setup: "Step onto a box/bench.",
              execution:
                "Focus on the lead leg doing the work. Lower the trailing leg slowly over 3s.",
            },
          },
          {
            id: "p1-d2-c",
            name: "Side Plank with Cable Pull",
            superset: null,
            target: {
              sets: 3,
              reps: "10-12 per side",
              tempo: "2-0-1-0",
              rest: "60s",
            },
            instructions: {
              setup: "Side plank position facing a cable machine.",
              execution:
                "Hold plank while performing a one-arm row with the top hand.",
            },
          },
        ],
      },
      {
        day: 3,
        title: "Upper Body, Core & Back",
        focus: "Vertical Pulling & Shoulder Health",
        exercises: [
          {
            id: "p1-d3-a1",
            name: "Chin-Ups (or Lat Pulldown)",
            superset: "A1",
            target: { sets: 3, reps: "8-10", tempo: "4-0-1-0", rest: "60s" },
            instructions: {
              setup: "Underhand grip on bar.",
              execution:
                "Pull chest to bar, lower slowly over 4s to maximize time under tension.",
            },
          },
          {
            id: "p1-d3-a2",
            name: "Seated Dumbbell Shoulder Press",
            superset: "A2",
            target: { sets: 3, reps: "10-12", tempo: "3-0-1-0", rest: "90s" },
            instructions: {
              setup: "Seated on bench with back support.",
              execution:
                "Press DBs overhead. Seated position removes spinal compression risk.",
            },
          },
          {
            id: "p1-d3-b1",
            name: "Cable Straight-Arm Pulldown",
            superset: "B1",
            target: { sets: 3, reps: "12-15", tempo: "3-0-1-0", rest: "60s" },
            instructions: {
              setup: "Stand facing cable machine, arms straight.",
              execution: "Pull bar to thighs using lats only. Keep core tight.",
            },
          },
          {
            id: "p1-d3-b2",
            name: "Dumbbell Lateral Raise",
            superset: "B2",
            target: { sets: 3, reps: "15-20", tempo: "3-0-1-0", rest: "90s" },
            instructions: {
              setup: "Standing or seated, DBs at sides.",
              execution: "Raise to shoulder height, lower slowly over 3s.",
            },
          },
          {
            id: "p1-d3-c1",
            name: "Hanging Leg Raise (or Captain's Chair)",
            superset: "C1",
            target: { sets: 3, reps: "8-10", tempo: "2-0-1-0", rest: "60s" },
            instructions: {
              setup: "Hanging from bar or supported on elbows.",
              execution:
                "Lift knees or straight legs to chest height using abs, not swinging.",
            },
          },
          {
            id: "p1-d3-c2",
            name: "Face Pulls",
            superset: "C2",
            target: { sets: 3, reps: "15-20", tempo: "2-0-1-0", rest: "60s" },
            instructions: {
              setup: "Rope attachment at eye level.",
              execution:
                "Pull rope toward forehead, pulling ends apart at the finish.",
            },
          },
        ],
      },
    ],
  };
});
