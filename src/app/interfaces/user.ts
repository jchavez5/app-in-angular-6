//datos opcionales se les coloca un ?
export interface User{
    nick:string;
    subnick?:string;
    age?:number;
    email:string;
    friend:boolean;
    uid:any;
    status?:string;
}