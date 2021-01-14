import { ObjectType, Field, ID } from "type-graphql";

@ObjectType({ description: "The Equipment model" })
export class Equipment {
  @Field((type) => ID)
  id: string;

  @Field({ description: "The title of the equipment" })
  title: string;

  @Field({ description: "The description of the equipment", nullable: true })
  description?: string;

  @Field({ description: "The image of the equipment", nullable: true })
  image?: string;

  @Field({ description: "Is the equipment in a park" })
  parkRequired: boolean;

  @Field({ description: "Is the equipment in a gym" })
  gymRequired: boolean;
}
