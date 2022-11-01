let names = ['June', "Jay", "Jane"];
//map method to add a 1 to every name
//name variable represents each item in the array
names.map ((name) => {
    //has the thing to replace with
    return name + "1";
});

//filter
names.filter((name) => {
    //has a condition
    return name != 'Jay';
}); //returns ['June', 'Jane']



