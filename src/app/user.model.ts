export class UserModel {
  constructor(private name: string, private email:string){

  }

  getName():string{
    return this.name
  }

  getEmail():string{
    return this.email;
  }
}
