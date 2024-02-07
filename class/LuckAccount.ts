import { DioAccount } from "./DioAccount"

export class LuckAccount extends DioAccount {

    constructor(name: string, accountNumber: number) {
        super(name, accountNumber)
    }

    deposit = (value: number) => {
        this.balance += value + 10
        return this.balance
      }
}