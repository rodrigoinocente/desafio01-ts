import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number) {
    super(name, accountNumber)
  }

  getLoan = (value: number) => {
    if (this.validateStatus()) {
      this.balance += value
      return this.balance
    }
  }
}
