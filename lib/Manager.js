// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("lib/Employee.js");

class Manager extends Employee(github) {
    constructor(name, id, email, office) {
        super(name, id, email);
        this.office = office;
    }
};

module.exports = Manager;