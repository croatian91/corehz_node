import { Exercice } from "./exercice";
import { ObjectType, Field, Int } from "type-graphql";

@ObjectType({ description: "The Round model" })
export class Round {
  @Field((type) => Int, { description: "Number of sets for each exercice" })
  sets: number;

  @Field((type) => Int, { description: "Rest duration beetween each exercice" })
  restDurationBeetween: number;

  @Field((type) => Int, {
    description: "Rest duration at the end of the round",
  })
  restDurationEnd: number;

  @Field({ description: "Is warmup" })
  isWarmup: boolean;

  @Field((type) => [Exercice], { description: "Is the Round in a gym" })
  exercices: Exercice[];
}
