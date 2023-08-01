export class Client {
  private _name: string;
  private _cpf: string;

  constructor(name: string, cpf: string) {
    this._name = name;
    this._cpf = cpf;
  }

  getName = (): string => {
    return this._name;
  };

  getCpf = (): string => {
    return this._cpf;
  };
}
