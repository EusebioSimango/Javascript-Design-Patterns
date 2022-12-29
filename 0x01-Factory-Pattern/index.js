const EmployeeFactory = require('./employeeFactory')
const MyEmployeeFactory = require('./employeeFactory-myImplementation')

function say() {
	console.log(`Hi, I am ${this.name} and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const myEmployeeFactory = MyEmployeeFactory()
const employeesDatabse = []

employeesDatabse.push(employeeFactory.create("Eusebio Simango", 1))
employeesDatabse.push(myEmployeeFactory.create("Eusebio Simango", 1))
employeesDatabse.push(employeeFactory.create("Jeffer Marcelino", 2))
employeesDatabse.push(myEmployeeFactory.create("Jeffer Marcelino", 2))

employeesDatabse.forEach( emp => {
	console.log(typeof emp, ':', emp)
	say.call(emp)
})
