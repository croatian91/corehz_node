import { Query, Resolver } from "type-graphql";
import { Equipment } from "../entities/equipment";

@Resolver()
export class EquipmentResolver {
  private equipmentsCollection: Equipment[] = [
    {
      id: "1",
      title: "test",
      parkRequired: false,
      gymRequired: false,
    },
  ];

  @Query((returns) => [Equipment])
  async equipments() {
    // fake async in this example
    return await this.equipmentsCollection;
  }
}
