import { Client } from "../Client/Client";
import { DioAccount } from "./Account";

export class SavingsAccount extends DioAccount {
  private taxaDeJuros: number = 0.5;

  constructor(client: Client, agency: number) {
    super(client, agency);
    setInterval(() => this.acrescentarJuros(), 60000);
  }

  private acrescentarJuros() {
    const juros = this.balance * (this.taxaDeJuros / 100);
    this.balance += juros;
  }
}
