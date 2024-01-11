import { Component } from '@angular/core';
import { ApiserviceService } from 'src/app/apiservice.service';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  public apiData:any;
   constructor(private apiservice:ApiserviceService){}

   ngOnInit(){
      // this.apiservice.getMethod().subscribe((response)=>{
      //     console.log(response);
      // });

      this.apiservice.getMethod("https://restcountries.com/v3.1/all").subscribe({
        next:res=>{
          this.apiData=res;
          console.log(res);
        },error :error=>{
          console.log(error);
        }
      });

   }
}
