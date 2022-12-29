const Developer = (name) => {
	this.name = name
	this.type = "Developer"
}

const Tester = (name) => {
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

	const say = () => {
		console.log(`Hi, I am ${this.name} and I am a ${this.type}`)
	}
}