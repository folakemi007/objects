// * ANSWER 1 constructor function
function InstagramPost(handleOfAuthor, content, imagealinkOfTheAuthor, numbersOfViews, numbersOfLikes){
    this.handleOfAuthor= handleOfAuthor;
    this.content= content;
    this.imagealinkOfTheAuthor= imagealinkOfTheAuthor;
    this.numbersOfViews= numbersOfViews;
    this.numbersOfLikes = numbersOfLikes;
}

// * ANSWER 2; instagram post 1
const Adekola = new InstagramPost("Adekola", "GodblessNigeria","https://pngtree.com/free-png-vectors/nigeria-flag",250, 180 )
console.log(Adekola);

// * instagram post 2

const Seyi = new InstagramPost("Seyi", "BetterdaysAhead", "https://pixabay.com/photos/mountains-village-trees-hills-615428/", 320, 250)
 console.log(Seyi);

//  ANSWER 3a

function createPerson(Name, Age, Location){
    return{
        name: Name,
        age: Age,
        location: Location,        
};
}

const Person = createPerson("Musa dawodu", "19 years", "Lekki lagos State")
console.log(Person)

// ANSWER 3b

const Person2 = {
    name: "Musa dawodu",
    age: "19 years", 
    location: "Lekki lagos State",  
    jambScore:{
        ENG: 70,
        GOVT: 85,
        LIT: 82,
        CRK: 94,
    },
};

console.log(Person2)

// ANSWER 4

// *** Object.assign()

// * example 

const firstgraduatingstudents = {
   institutionName: "oou",
   year: 2002,
   numbers: 600,
   department: "social management",
};

const secondgraduatingstundents = Object.assign({}, firstgraduatingstudents);
console.log(firstgraduatingstudents);
console.log(secondgraduatingstundents);

// including faculty to second graduating students update
secondgraduatingstundents.faculty = "Accounting";
console.log("after adding faculty to second graduating students update");
console.log(firstgraduatingstudents)
console.log(secondgraduatingstundents)


// spread syntax i.e ...

// example

const thirdgraduatingstundents = {...firstgraduatingstudents};
thirdgraduatingstundents.state = "ogun";
console.log(firstgraduatingstudents);
console.log(thirdgraduatingstundents);

// JSON.PARSE(JSON.stringlify())

// example

const fourgraduatingstundents = JSON.parse;
fourgraduatingstundents.CV = "Prof.Kayode George";
console.log({firstgraduatingstudents});
console.log({fourgraduatingstundents});