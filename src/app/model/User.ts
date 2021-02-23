import { Postagem } from "./Postagem"

export class User{

    public id:number 
    public nome: string //não é objeto é tipo de dado
    public usuario: string 
    public senha: string
    public foto: string
    public tipo: string
    public postagem: Postagem[]

}