import { DioAccount } from "../Account/Account";
import { Client } from "../Client/Client";

export class DioBanck {
  private static readonly AGENCY_DEFAULT = 1;
  private clients: Client[];
  private accounts: DioAccount[];

  constructor() {
    this.clients = [];
    this.accounts = [];
  }

  getAgency(): number {
    return DioBanck.AGENCY_DEFAULT;
  }

  addClient = (client: Client): string => {
    this.clients.push(client);
    return `Client ${client.getName()} added to the bank.`;
  };

  getClients = (): Client[] => {
    return this.clients;
  };

  getAccounts = (): DioAccount[] => {
    return this.accounts;
  };

  findClientByName = (name: string): Client | undefined => {
    return this.clients.find((client) => client.getName() === name);
  };

  findClientByCpf = (cpf: string): Client | undefined => {
    return this.clients.find((client) => client.getCpf() === cpf);
  };
}
