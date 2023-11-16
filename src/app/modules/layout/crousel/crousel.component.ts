import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserServiceService } from '../../user/service/user-service.service';
@Component({
  selector: 'app-crousel',
  templateUrl: './crousel.component.html',
  styleUrls: ['./crousel.component.css']
})
export class CrouselComponent implements OnInit {
  public length:any;
  public image_data:any;
  public startIndex:any;
  public lastIndex:any;
  public first:any;
  public last:any;
  public count:any;
  public leftDiv:any = false;
  public rightDiv:any = false;
  constructor(private userService:UserServiceService,@Inject(MAT_DIALOG_DATA) public data: any, ){

  }
  ngOnInit(): void {
    this.userService.getImage(this.data.data.id).subscribe(Response=>{
      console.log(Response);
      
      this.count = Response.count;
      this.startIndex = Response.photo[0].id;
      this.lastIndex = Response.photo[this.count-1].id;
      this.first = this.startIndex;
      this.last = this.lastIndex;
      this.getImage(this.startIndex)
      
      

      
    })
  }
  getImage(startIndex:any){
    console.log(startIndex);
    
    this.userService.getOneImage(startIndex).subscribe(Response=>{
      console.log(Response);
      this.image_data = Response.photo.image;
      console.log(this.image_data);
      
      
    })
  }
  leftClick(){
    if(this.lastIndex===this.first+1){
      this.startIndex = this.first;
      this.leftDiv = true;
    }
    this.rightDiv = false;
    this.lastIndex--;
    // this.startIndex--;
    this.getImage(this.lastIndex);
    

  }
  rightClick(){
    if(this.startIndex===this.last-1){
      console.log("hii");
      
      this.lastIndex = this.last
      this.rightDiv = true
    }
    this.leftDiv = false
    this.startIndex++;
    // this.lastIndex--;
    this.getImage(this.startIndex);

  }


}
