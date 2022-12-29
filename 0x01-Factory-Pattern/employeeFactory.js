function Developer(name) {
	this.name = name
	this.type = "Developer"
}

function Tester(name) {
	this.name = name
	this.type = "Tester"
}

function EmployeeFactory() {
	this.create = (name, type) => {
		switch(type){
		case 1:
			return new Developer(name)
			break
		case 2:
			return new Tester(name)
			break
		}
	}
}

function say() {
	console.log(`Hi, I am ${this.name} and I am a ${this.type}`)
}

const employeeFactory = new EmployeeFactory()
const employeesDatabse = []

employeesDatabse.push(employeeFactory.create("Eusebio Simango", 1))

employeesDatabse.forEach( emp => {
	say.call(emp)
})