import {UserModel} from './user.model';

export class MylistService{
  private arr: UserModel[] = [];

  add(user: UserModel): void{
    this.arr.push(user);
  }

  get(index: number): UserModel{
    return this.arr[index];
  }

  remove(user: UserModel): boolean{
    let indx = this.arr.indexOf(user);
    if(indx >= 0){
      this.arr.splice(indx,1);
      return true;
    }else{
      return false;
    }
  }

  size(): number{
    return this.arr.length;
  }
}
