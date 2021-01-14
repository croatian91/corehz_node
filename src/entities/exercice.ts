import { MuscleGroup } from "./muscle-group";
import { Equipment } from "./equipment";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType({ description: "The Exercice model" })
export class Exercice {
  @Field((type) => ID)
  id: string;

  @Field({ description: "The title of the exercice" })
  title: string;

  @Field({ description: "The description of the exercice", nullable: true })
  description?: string;

  @Field({ description: "The image of the exercice", nullable: true })
  image?: string;

  @Field({ description: "The video of the exercice", nullable: true })
  video?: string;

  @Field((type) => Int, {
    description: "The number of reps or duration in seconds of the exercice",
  })
  repsDuration: number;

  @Field({ description: "Is counted in reps or in duration" })
  isDuration: boolean;

  @Field((type) => [Equipment], {
    description: "List of equipments used in the the exercice",
    nullable: true,
  })
  equipments?: Equipment[];

  @Field((type) => [MuscleGroup], {
    description: "List of muscle groups involved",
  })
  muscleGroups?: MuscleGroup[];

  @Field({ description: "Date and time of creation" })
  createdAt: Date;

  @Field({ description: "Date and time of last update", nullable: true })
  updatedAt?: Date;
}
