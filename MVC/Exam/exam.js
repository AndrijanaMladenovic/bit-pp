"use strict";
var massage = "";
class Exam {
  constructor(subject, student, grade) {
    this.subject = subject;
    this.student = student;
    this.grade = $(".grade").val();
  }

  getExamInfo() {
    return `${subject.getSubjectName()}${this.student.getStudentData()}`;
  }
  hasPassed() {
    if (this.grade > 5) {
      massage = "Passed";
    } else {
      massage = "Fail";
    }
  }
}

var exam = new Exam();
