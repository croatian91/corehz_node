import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The Muscle Group model" })
export class MuscleGroup {
  @Field((type) => ID)
  id: string;

  @Field({ description: "The title of the muscle group" })
  title: String;
}
