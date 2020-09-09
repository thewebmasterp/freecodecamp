var Person = function(firstAndLast) {
    //init
    let names = firstAndLast.split(' ')
    let firstName = names[0], 
        lastName = names[1],
        fullName = firstName + ' ' + lastName;
  
    //get
    this.getFirstName = () => firstName;
    this.getLastName = () => lastName;
    this.getFullName = () => firstName + ' ' + lastName;
  
    //set
    this.setFirstName = name => firstName = name;
    this.setLastName = name => lastName = name; 
    this.setFullName = name => {
        fullName = name;
        let names = name.split(' ');
        this.setLastName(names[1]);
        this.setFirstName(names[0]);
    };
  
    return firstAndLast;
};

var bob = new Person('Bob Ross');
bob.getFullName();
  