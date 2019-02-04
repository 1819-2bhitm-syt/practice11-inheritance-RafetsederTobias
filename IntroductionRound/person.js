function Person(firstName,lastName,gender,hobbies) {
    this.name = {
        first: firstName,
        last: lastName
    };
    this.gender = gender;
    this.hobbies = hobbies;

    Person.prototype.tellHobbies = function() {

        if(hobbies =="") {
            console.log("I have no hobbies.");
        }
        if(hobbies.length > 1) {
            console.log("My hobbies are ")
            for (let i in hobbies) {
                console.log("-" + this.hobbies[i]);
            }
        }
        if(hobbies.length==1 && hobbies != "") {
            console.log("My hobbies are " + hobbies[0] +".");
        }
    };
}

Person.prototype.sayHello = function() {
    console.log("Hello. My name is " + this.name.first + " " + this.name.last + ".");
};
module.exports = Person;