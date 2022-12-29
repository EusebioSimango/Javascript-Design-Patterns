const Developer = (name) => {
	const type = "Developer"
	return {
		name,
		type
	}
}

const Tester = (name) => {
	const type = "Tester"
	return {
		name,
		type
	}
}

function EmployeeFactory() {
	const create = (name, type) => {
		switch(type){
		case 1:
			return Developer(name)
			break
		case 2:
			return Tester(name)
			break
		}
	}

	return {
		create
	}
}

module.exports=EmployeeFactory