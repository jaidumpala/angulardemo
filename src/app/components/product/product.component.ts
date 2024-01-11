import { Component } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  product_id:any;
  product_name:any;
  constructor(private route:ActivatedRoute,private router:Router) {
    console.log(this.route.snapshot.paramMap.get('id'));
    console.log(this.route.snapshot.paramMap.get('name'));
    this.product_id=this.route.snapshot.paramMap.get('id');
    this.product_name=this.route.snapshot.paramMap.get('name');
  }
  home(){
    this.router.navigate(["/"]);
  }
   
   
}
