// const User = {
//     name: 'Devin',
//     email: 'nostro37@gmail.com',
//     isActive: true,
// }
//
// function createUser({name: string, isPaid: boolean}): void {
//     console.log(name)
// }
//
// let newUser = {name: "hitesh", isPaid: true, email: "hh@hh.com"}
//
// createUser({name: 'Devin', isPaid: false})
//
// function createCourse():{name: string, price: number} {
//     return {name: 'Typescript', price: 100}
// }

type User = {
    name: string,
    email: string,
    isActive: boolean
}

function createUser(user: User): void {
    console.log(name)
}

createUser({name: 'Devin', email: 'notsro37@gmail.com', isActive: true})


export {}