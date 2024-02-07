import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { LuckAccount } from './class/LuckAccount'

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
const companyAccount = new CompanyAccount("Company H", 30);
const luckAccount = new LuckAccount("Tigrinho [risos]", 20);

peopleAccount.setName('Marcela')
console.log(peopleAccount.getName())

peopleAccount.deposit(100)
console.log(peopleAccount.getBalance())

peopleAccount.withdraw(50)
console.log(peopleAccount.getBalance())

peopleAccount.withdraw(60)
console.log(peopleAccount.getBalance())

peopleAccount.setDoc_id(55)
console.log(peopleAccount.getDoc_id())

companyAccount.getLoan(10000)
console.log(companyAccount.getBalance());

console.log(luckAccount.getBalance());
luckAccount.deposit(500)
console.log(luckAccount.getBalance());