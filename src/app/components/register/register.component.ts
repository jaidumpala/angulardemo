import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  fname:any="";
  lname:any="";
  email:any="";
  mobile:any="";
  state:any="";
  errorMessage:any;
  registerData:any;
  userData:any;
  constructor(private api:ApiserviceService){
     this.getUserlist();
  }

getUserlist(){
  this.api.getMethod("https://moroccantea.shop/api/getuserlist.php").subscribe({
    next:res=>{
      console.log(res[0].data);
      this.userData=res[0].data;
      console.log(res);
    },error :error=>{
      console.log(error);
    }
  });
}
  register(){
    //console.log(typeof(this.fname));
    if(this.fname != "" && this.lname != "" && this.email != "" && this.mobile != "" && this.state != ""){
      this.errorMessage="";
      // alert("Okay");
       var body={
          "fname":this.fname,
          "lname":this.lname,
          "email":this.email,
          "mobile":this.mobile,
          "state":this.state
       };
       console.log(body);
       this.api.postmethod(body).subscribe({
         next:res=>{
           this.registerData=res;
           if(this.registerData[0].status == 200){
            this.getUserlist();
             alert("Register Successfully!");
             this.fname="";
             this.lname="";
             this.email="";
             this.mobile="";
             this.state="";
           }
           console.log(res);
         },error :error=>{
           console.log(error);
         }
       });
      
    }else{
      alert("All fields are required");
      this.errorMessage="All fields are required *";
      //return false;
    }
  }
}
