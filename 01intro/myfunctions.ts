function addTwo(num: number):number {
    return num + 2
}

function getUpper(val: string):string {
    return val.toUpperCase()
}

function signUpUser(name: string, email: string, isPaid: boolean) {}


let loginUser = (name, email, isPaid) => {
    return `Welcome ${name}`
}


function getValue(myVal: number):boolean {
    if (myVal > 5) {
        return true
    }
    return false
}

const getHello = (s: string):string => {
    return ""
}

const heroes = ["Thor", "Spiderman", "Hulk", "Ironman"]

heroes.map(hero => {
    return 'hero is ${hero}'
})



function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): void{
    console.log(errmsg)
}


console.log(loginUser("Devin", "nostro37@gmail.com", false))
console.log(addTwo(5))
console.log(getUpper('4'))
