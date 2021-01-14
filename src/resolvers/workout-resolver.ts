import { WorkoutStyle } from "../entities/workout-style";
import { Query, Resolver } from "type-graphql";
import { Workout } from "../entities/workout";

@Resolver()
export class WorkoutResolver {
  private workoutsCollection: Workout[] = [
    {
      id: "1",
      title: "test",
      isPublic: true,
      isPremium: false,
      workoutStyle: new WorkoutStyle("1", "test"),
      exercices: [],
      createdAt: new Date(),
    },
  ];

  @Query((returns) => [Workout])
  async workouts() {
    // fake async in this example
    return await this.workoutsCollection;
  }
}
