// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("lib/Employee.js");

class Engineer extends Employee(github) {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }
};


module.exports = Engineer;