console.group("Group 1");
    console.log("Message One");
    console.log("Message Two");
        console.group("child Group");
            console.log("Message One");
            console.log("Message Two");
            console.group("Grand child Group");
                console.log("Message One");
                console.log("Message Two");
            console.groupEnd();
        console.groupEnd();
console.groupEnd();

console.group("Group 2");
    console.log("Message One");
    console.log("Message Two");
console.groupEnd("")
