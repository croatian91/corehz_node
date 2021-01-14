import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The Workout Style model" })
export class WorkoutStyle {
  @Field((type) => ID)
  id: string;

  @Field({ description: "The title of the workout style" })
  title: String;

  constructor(id: string, title: string) {
    this.id = id;
    this.title = title;
  }
}
