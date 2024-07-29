// const AppUser = new Object()
const AppUser = {}

AppUser.id = "123abc"
AppUser.name = "Sammy"
AppUser.isLoggedIn = false

console.log(AppUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Pani",
            lastname: "Aalu"
        }
    }
}
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "b"}

// const obj4 = { obj1, obj2 }
// const obj4 = Object.assign({}, obj1, obj2, obj3)

const obj4 = {...obj1, ...obj2}
console.log(obj4);


const users = [
    {
        id: 1,
        email: "aalu@gmail.com"
    },
    {
        id: 2,
        email: "p@gmail.com"
    },
    {
        id: 3,
        email: "qr@gmail.com"
    },
]

users[1].email
console.log(AppUser);

console.log(Object.keys(AppUser));
console.log(Object.values(AppUser));
console.log(Object.entries(AppUser));

console.log(AppUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Aalu"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// Json API Structure

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

// API Structure in Array format

// [
//     {},
//     {},
//     {}
// ]
