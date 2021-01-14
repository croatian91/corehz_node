import { Query, Resolver } from "type-graphql";
import { WorkoutStyle } from "../entities/workout-style";

@Resolver()
export class WorkoutStyleResolver {
  private workoutStylesCollection: WorkoutStyle[] = [
    {
      id: "1",
      title: "test",
    },
  ];

  @Query((returns) => [WorkoutStyle])
  async workoutStyles() {
    // fake async in this example
    return await this.workoutStylesCollection;
  }
}
