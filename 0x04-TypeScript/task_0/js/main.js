interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const Student1: Student = {
	firstName: "Emmanuel";
	lastName: "Moses";
	age: 18;
	locatioin: "London";
};
const Student2: Student = {
	firstName: "Julien";
	lastName: "Barbie";
	age: 36;
	location: "San Francisco";
};
const studentsList: Student[] =[Student1, Student2];

const table = document.getElementById('studentTable') as HTMLTableElement;

// Create a new row for each student and append it to the table
studentsList.forEach((student) => {
	const row = table.insertRow();
	const firstNameCell = row.insertCell(0);
	const locationCell = row.insertCell(1);

	firstNameCell.innerHTML = student.firstName;
	locationCell.innerHTML = student.location;
})
