function Student(name, gender, age) {
	this.name = name;
	this.gender = gender;
	this.age = age;
	this.marks = [];
}

Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

Student.prototype.addMarks = function(...marksToAdd) {
	if (!this.marks) {
		return 0;
	}
	this.marks = [...this.marks, ...marksToAdd];
}

Student.prototype.getAverage = function(getAverage) {
	if (!this.marks || this.marks.length === 0) {
		return 0;
	}

	let result = this.marks.reduce((acc, item, index, arr) => {
		acc += item;
		if (index === arr.length - 1) {
			return acc / arr.length;
		}
		return acc;
	}, 0);
	return result;
	this.getAverage = getAverage;
}

Student.prototype.exclude = function(reason) {
	delete this.marks;
	delete this.subject;
	this.excluded = reason;
}