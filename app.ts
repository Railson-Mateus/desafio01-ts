import { CompanyAccount } from "./models/Account/CurrentAccount";
import { SavingsAccount } from "./models/Account/SavingsAccount";
import { DioBanck } from "./models/Bank/DioBank";
import { Client } from "./models/Client/Client";

const main = () => {
  // Create a DioBanck instance
  const dioBank = new DioBanck();

  // Create clients
  const client1 = new Client("John Doe", "123.456.789-01");
  const client2 = new Client("Jane Smith", "987.654.321-09");

  // Add clients to the DioBanck
  console.log(dioBank.addClient(client1));
  console.log(dioBank.addClient(client2));

  // Create accounts
  const companyAccount = new CompanyAccount(client1, dioBank.getAgency());
  const savingsAccount = new SavingsAccount(client2, dioBank.getAgency());

  console.log(
    `${client1.getName()}'s Balance: $${companyAccount.getBalance()}`
  );
  console.log(
    `${client2.getName()}'s Balance: $${savingsAccount.getBalance()}`
  );

  companyAccount.deposit(1000);
  console.log(
    `${client1.getName()}'s Balance: $${companyAccount.getBalance()}`
  );
  companyAccount.withdraw(200);
  console.log(
    `${client1.getName()}'s Balance: $${companyAccount.getBalance()}`
  );
  companyAccount.transfer(300, savingsAccount);
  console.log(
    `${client2.getName()}'s Balance: $${savingsAccount.getBalance()}`
  );
  companyAccount.requestLoan(5000, 12, 5);
  console.log(
    `${client1.getName()}'s Balance: $${companyAccount.getBalance()}`
  );

  console.log(
    `Account statement for ${client1.getName()}:`,
    companyAccount.accountStatement()
  );
  console.log(
    `Account statement for ${client2.getName()}:`,
    savingsAccount.accountStatement()
  );

  console.log(
    `${client1.getName()}'s Balance: $${companyAccount.getBalance()}`
  );
  console.log(
    `${client2.getName()}'s Balance: $${savingsAccount.getBalance()}`
  );
};

main();
