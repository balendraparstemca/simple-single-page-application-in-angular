import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  canActivate():boolean{
    return confirm("do you want to enter into page one ??");
  };
  canDeactivate():boolean{
    return confirm("do you want to leave page two ??");
  };
  canActivateChild():boolean{
    return confirm("do you want to enter into child three ??");
  };
};
