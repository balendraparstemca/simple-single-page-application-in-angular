import { Component } from '@angular/core';
import { CountriesService } from './countries.service';
import { HttpErrorResponse } from '@angular/common/http';
@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styles: []
})
export class CountriesComponent  {
  private result:any;
  private subscription:any;
  constructor(private _service:CountriesService) { }
  ngOnInit() {
    this.subscription = 
            this._service.getCountries().subscribe((posRes)=>{
                this.result = posRes;
            },(err:HttpErrorResponse)=>{
                if(err.error instanceof Error){
                  console.log("client side error");
                }else{
                  console.log("server side error");
                }
    });
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  };
}
