import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
public string="Welcome";
public showData:boolean=false;
public buttontxt="show";
public currentDate=new Date();
public json_data:any;
public isDanger:boolean=false;

public data=[
   
  {
    'name':'Angular',
    'version':16
  },{
    'name':'Javascript',
    'version':"ES6"
  }
];
fname:any="10";
       logo:any="https://enenrinfo.com/vsecuretax/assets/images/logo-no-background.png";

       update(val:any){
         alert(val);
       }
    constructor(){
      this.json_data={
        name:'Angular',
        version:16
      },{
        name:'Javascript',
        version:"ES6"
      }
    }

    showtxt(){
      this.showData=true;
      this.buttontxt="Hide";
      console.log(this.showData);
    }
}
