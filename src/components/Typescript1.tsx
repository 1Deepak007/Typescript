import React from 'react'

const Typescript1 = () => {

    //=============================> VARIABLES <================================
    // there is only number datatype no float or int etc
    let num: number = 100;
    console.log(num);

    let numb: number = 20.2;
    console.log(numb);

    //    let greetings:string = 10;        // error
    let greetings: string = "Typescript";
    console.log(greetings);
    console.log(greetings.toLowerCase());

    let bool: boolean = true;
    console.log(bool);

    let array: number[] = [1, 2, 3, 4, 5];
    console.log(array);

    let tuple: [number, string, boolean] = [1, "Typescript", true];
    console.log(tuple);

    let obj: { name: string, age: number } = { name: "John", age: 30 };
    console.log(obj);

    let anyVar: any = 100;           // any should not be used 
    anyVar = "Typescript";
    console.log(anyVar);

    let hero: string;
    function getHero() {
        return "Hero";
    }
    console.log(getHero());

    //=============================> Functions <==================================
    function addTwo(num: number) {
        return num + 2;
    }

    function consoleError(errmsg: string):void{
        console.error(errmsg);
    }
    consoleError('You got error');

    function handleError(errmsg: string):never{
        throw new Error(errmsg);
    }
    // handleError('Handle the error');

    console.log(addTwo(10))
    // console.log(addTwo('two'))       //gives error

    function getUpper(val: string) {
        return val.toUpperCase();
    }
    console.log(getUpper('sonu'))
    console.log(getUpper('10'))
    // console.log(getUpper(10))

    function signUpUser(name: string, email: string, isPaid: boolean) {
        console.log(`${name} - ${email} - ${isPaid}`);
    }
    signUpUser('Simen', 'simen@example.com', true);

    // let loginUser = (name:string,email:string,isValid:boolean) => {
    //     console.log(`${name} is Logged In with email ${email}. Valid : ${isValid}`);
    // }
    // loginUser('deepak','ds095536@gmail.com',true);

    // default values
    var loginUser = (name: string, email: string, isValid: boolean = false) => {
        console.log(`${name} is Logged In with email ${email}. Valid : ${isValid}`);
    }
    loginUser('deepak', 'ds095536@gmail.com', true);
    loginUser('Sonu', 'sonu@gmail.com');

    //             (arg and type) : (return type)         -> we define return,input type of a function
    function getVal(myVal:number) : string{
        if(myVal > 5){ return `${myVal} is greater than 5` }
        else if(myVal < 5){ return `${myVal} is less 5` }
        else { return `${myVal} is equal to 5` }
    }
    console.log(getVal(-2));

    
    // arrow function
    //           (arg and type) : (return type) 
    const getHello = (s:string) : string => {
        return `Hello, ${s}!`;
    }
    console.log(getHello('John'));


    //===============>  Map function
    const heros = ['Thor','Wonderwomen','Ironman']
    // const heros = [1,2,3,4]
    heros.map((hero):string => {
        return `${hero} is hero`
    });

    const heromap = (hero:string[]) : string[] => { 
        return heros.map(hero => `${hero} is a hero.`) 
    }
    console.log(heromap(heros))



    //=============================> Objects <==================================
    const User = {
        name: 'John',
        email: 'john@gmail.com',
        isActive: true
    }
    function createUser({name, isPaid}:{name:string, isPaid:boolean}){
        return `User ${name} is ${isPaid ? 'paid' : 'free'} user`;
    }
    console.log(createUser({name:'Simon', isPaid:false}))
    console.log(createUser({name:'John', isPaid:true}))




    // optional chaining
    // const person = { name: 'John', age: 30, address: { city: 'New York' } };
    // console.log(person?.address?.city); // 'New York'



    // //=============================> Interfaces <==================================
    // interface Person {
    //     name: string;
    //     age: number;
    // }

    // let person: Person = { name: "John", age: 30 };
    // console.log(person);


    return (
        <div className='ms-20 me-20'>
            <h2 className='text-center underline font-bold text-2xl'>Typescript</h2>

            <ul style={{ listStyleType: "disc" }}>
                <li>Typescript provides type safety.</li>
                <li>TypeScript is a syntactic superset of JavaScript which adds static typing.</li>
                <li>This basically means that TypeScript adds syntax on top of JavaScript, allowing developers to add types.</li>
                <li>TypeScript is a statically typed language, which means that the type checking is done at compile time, not at runtime. This makes it easier to catch type-related errors early in the development process.</li>
            </ul>

            <h2 className='font-semibold mt-5'>DataTypes in Typescript</h2>
            <ul style={{ listStyleType: "circle" }}>
                <li>number : Double precision 64-bit floating point values. It can be used to represent both, integers and fractions.</li>
                <li>string : Represents a sequence of Unicode characters</li>
                <li>boolean : Represents logical values, true and false</li>
                <li>void : Used on function return types to represent non-returning functions</li>
                <li>null : Represents an intentional absence of an object value.</li>
                <li>undefined : Denotes value given to all uninitialized variables</li>
                <li>symbol : A unique and immutable primitive introduced in ES2015.</li>
                <li>object : Represents instances of user-defined classes, arrays, functions, etc.</li>
                <li>never : Represents values that never occur.</li>
            </ul>

        </div>
    )
}

export default Typescript1
