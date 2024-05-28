export default function createIteratorObject(report) {
    const allEmployees = report.allEmployees;
    const departments = Object.keys(allEmployees);
    let currentIndex = 0;
    let currentDepartmentIndex = 0;
    let currentEmployees = allEmployees[departments[currentDepartmentIndex]];
    
    return {
        next() {
            if (currentIndex >= currentEmployees.length) {
                currentDepartmentIndex++;
                if (currentDepartmentIndex < departments.length) {
                    currentEmployees = allEmployees[departments[currentDepartmentIndex]];
                    currentIndex = 0;
                } else {
                    return { done: true };
                }
            }
            return { value: currentEmployees[currentIndex++], done: false };
        },
        [Symbol.iterator]() {
            return this;
        },
    };
}
