
const Manager = require('../lib/Manager');


test('creates an Manager object', () => {
    const manager = new Manager('Chris', 25, 'chrisramirez15@yahoo.com', 5);
    expect(manager.officeNumber).toEqual(expect.any(Number));
});


test('gets role of employee', () => {
    const manager = new Manager('Chris', 25, 'chrisramirez15@yahoo.com');
    expect(manager.getRole()).toEqual("Manager");
});