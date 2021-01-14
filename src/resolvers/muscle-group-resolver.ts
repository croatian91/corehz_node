import { Query, Resolver } from "type-graphql";
import { MuscleGroup } from "../entities/muscle-group";

@Resolver()
export class MuscleGroupResolver {
  private muscleGroupsCollection: MuscleGroup[] = [
    {
      id: "1",
      title: "test",
    },
  ];

  @Query((returns) => [MuscleGroup])
  async muscleGroups() {
    // fake async in this example
    return await this.muscleGroupsCollection;
  }
}
