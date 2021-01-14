import "reflect-metadata";
import { ApolloServer } from "apollo-server";
import { buildSchema } from "type-graphql";
import { MuscleGroupResolver } from "./resolvers/muscle-group-resolver";
import { WorkoutStyleResolver } from "./resolvers/workout-style-resolver";
import { EquipmentResolver } from "./resolvers/equipment-resolver";
import { ExerciceResolver } from "./resolvers/exercice-resolver";
import { WorkoutResolver } from "./resolvers/workout-resolver";

const bootstrap = async () => {
  const schema = await buildSchema({
    resolvers: [
      MuscleGroupResolver,
      WorkoutStyleResolver,
      EquipmentResolver,
      ExerciceResolver,
      WorkoutResolver,
    ],
  });

  const server = new ApolloServer({ schema });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

bootstrap();
