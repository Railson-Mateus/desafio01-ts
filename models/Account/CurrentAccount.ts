import { Client } from "../Client/Client";
import { DioAccount } from "./Account";

export class CompanyAccount extends DioAccount {
  constructor(client: Client, agency: number) {
    super(client, agency);
  }
}
