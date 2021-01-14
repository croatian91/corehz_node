import { WorkoutStyle } from "./workout-style";
import { ObjectType, Field, ID } from "type-graphql";
import { Round } from "./round";

@ObjectType({ description: "The Workout model" })
export class Workout {
  @Field((type) => ID)
  id: string;

  @Field({ description: "The title of the Workout" })
  title: string;

  @Field({ description: "The description of the Workout", nullable: true })
  description?: string;

  @Field({ description: "The image of the Workout", nullable: true })
  image?: string;

  @Field({ description: "Is the workout public" })
  isPublic: boolean;

  @Field({ description: "Is the workout premium or free" })
  isPremium: boolean;

  @Field((type) => WorkoutStyle, {
    description: "The workout style",
  })
  workoutStyle: WorkoutStyle;

  @Field((type) => [Round], { description: "List of the exercices" })
  exercices: Round[];

  @Field({ description: "Date and time of creation" })
  createdAt: Date;

  @Field({ description: "Date and time of last update", nullable: true })
  updatedAt?: Date;
}
