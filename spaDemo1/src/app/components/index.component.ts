import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'index',
  templateUrl: './index.component.html',
  styles: []
})
export class IndexComponent implements OnInit {
  constructor(private _router:Router) { }
  ngOnInit() {
  }
  clickMe(){
     this._router.navigate(["/page_three","{p_id:333,p_name:'p_three',p_cost:30000}"]);
  };
};
