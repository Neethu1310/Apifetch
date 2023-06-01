import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-desp',
  templateUrl: './product-desp.component.html',
  styleUrls: ['./product-desp.component.css']
})
export class ProductDespComponent {
  result:any

  constructor(private http:HttpClient){
    this.result=[];
  }

  ngOnInit():void{
    this.getAllProducts()
  }

  getAllProducts(){
    return this.http.get("https://dummyjson.com/products").subscribe((data:any)=>{
      console.log(data);
      this.result=data;
    })
  }
}
