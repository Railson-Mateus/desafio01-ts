import { Client } from "../Client/Client";

export abstract class DioAccount {
  private static SEQUENTIAL: number = 1;
  private readonly accountNumber: string;

  protected client: Client;
  protected agency: number;
  protected transactions: string[];
  protected balance: number = 0;
  protected status: boolean = true;

  constructor(client: Client, agency: number) {
    this.client = client;
    this.transactions = [];
    this.agency = agency;
    this.accountNumber = `${this.agency}-${DioAccount.formatSequential()}`;
  }

  private static formatSequential(): string {
    return DioAccount.SEQUENTIAL.toString().padStart(3, "0");
  }

  deposit = (amount: number) => {
    if (amount > 0) {
      this.balance += amount;
      this.transactions.push(`Deposit: $${amount}`);
      console.log("Deposito realizado com sucesso");
    } else {
      console.log("Valor invalido");
    }
  };

  withdraw = (amount: number) => {
    if (amount > 0 && amount <= this.balance && this.status) {
      this.balance -= amount;
      this.transactions.push(`Withdraw: $${amount}`);
      console.log("Saque realizado com sucesso");
    } else {
      console.log("Saldo insuficiente");
    }
  };

  transfer = (amount: number, targetAccount: DioAccount) => {
    if (amount > 0 && this.balance >= amount && this.status) {
      // Removendo o valor da conta de origem
      this.balance -= amount;
      this.transactions.push(
        `Transfer to ${targetAccount.getName()}: $${amount}`
      );

      // Adicionando o valor na conta de destino
      targetAccount.balance += amount;
      targetAccount.transactions.push(
        `Transfer from ${this.getName()}: $${amount}`
      );

      console.log("Transferencia realizada com sucesso");
    } else {
      console.log("Transferencia não realizada");
    }
  };

  getBalance = (): number => {
    return this.balance;
  };

  getName = (): string => {
    return this.client.getName();
  };

  requestLoan = (
    amount: number,
    numberOfInstallments: number,
    interestRate: number
  ) => {
    if (amount > 0 && this.status) {
      this.balance += amount;
      this.transactions.push(
        `Loan request: $${amount} - ${numberOfInstallments} installments - Interest rate: ${interestRate}%`
      );

      console.log("Emprestimo realizado com sucesso!");
    } else {
      console.log("Não foi possivel realizar o emprestimo");
    }
  };

  accountStatement = (): string[] => {
    return this.transactions;
  };
}
