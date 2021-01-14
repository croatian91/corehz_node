import { Query, Resolver } from "type-graphql";
import { Exercice } from "../entities/exercice";

@Resolver()
export class ExerciceResolver {
  private exercicesCollection: Exercice[] = [
    {
      id: "1",
      title: "test",
      repsDuration: 45,
      isDuration: true,
      createdAt: new Date(),
    },
  ];

  @Query((returns) => [Exercice])
  async exercices() {
    // fake async in this example
    return await this.exercicesCollection;
  }
}
