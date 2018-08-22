import { Exercise } from "./exercise";

export class Workout {
    name: string;
    title: string;
    restBetweenExercise: number;
    exercises: Exercise[];
    description?: string;

    constructor(
        name: string,
        title: string,
        restBetweenExercise: number,
        exercises: Exercise[],
        description?: string
    )
    {
        this.name = name;
        this.title = title;
        this.description = description;
        this.restBetweenExercise = restBetweenExercise;
        this.exercises = exercises;
    }

    totalWorkoutDuration(): number {
        if(!this.exercises) {
            return 0;
        }

        const totalDuration = this.exercises.map((e) => e.duration).reduce((previous, current) => previous + current)

        return (this.restBetweenExercise ? this.restBetweenExercise : 0) * (this.exercises.length - 1) * totalDuration;
    }
}