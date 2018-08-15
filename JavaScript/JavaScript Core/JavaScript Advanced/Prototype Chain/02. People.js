function solve() {

    class Employee {
        constructor(name,age){
            if(new.target === Employee){
                throw new Error('Cannot instantiate directly.')
            }
            this.name = name
            this.age = age
            this.salary = 0
            this.tasks = []

        }
        work() {
            let currentWork = this.tasks.shift()
            console.log(this.name + currentWork)
            this.tasks.push(currentWork)
        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary} this month.`)

        }
    }

    class Junior extends Employee {
        constructor(name,age){
            super(name,age)
            this.tasks.push(' is working on a simple task.')
        }

    }
    class Senior extends Employee {
        constructor(name,age){
            super(name,age)
            this.tasks.push(' is working on a complicated task.')
            this.tasks.push(' is taking time off work.')
            this.tasks.push(' is supervising junior workers.')

        }
    }
    class Manager extends Employee{
        constructor(name,age){
            super(name,age)
            this.dividend = 0
            this.tasks.push(' scheduled a meeting.')
            this.tasks.push(' is preparing a quarterly report.')

        }
        collectSalary(){
            console.log(`${this.name} received ${this.salary + this.dividend} this month.`)

        }
    }
    return {Employee, Junior, Senior, Manager}
}
let result = solve()
let Manager = result.Manager
let m = new Manager('Pesho',80)
console.log(m.hasOwnProperty('salary'))
m.work()
m.work()
m.work()
m.collectSalary()
console.log()
let Senior = result.Senior
let s = new Senior('Gosho',30)
s.work()
s.work()
s.salary = 1500
s.work()
s.work()
s.work()
s.work()
s.collectSalary()