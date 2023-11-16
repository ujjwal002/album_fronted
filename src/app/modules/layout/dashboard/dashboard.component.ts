import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  public owner_id:any;
  public owner_name:any;

  constructor(private router:Router, private toastr: ToastrService,
    ){

  }
  ngOnInit(): void {
    this.owner_name = localStorage.getItem('owner_name')
      
  }
  setting(){
    this.owner_id= localStorage.getItem('owner_id')
    this.router.navigate([`/dashboard/setting/${this.owner_id}`])
  }
  gotoShared(){
    this.owner_id= localStorage.getItem('owner_id')
    this.router.navigate([`/dashboard/shared/${this.owner_id}`])
  }
  logout(){
    localStorage.clear();
    this.toastr.success("Logout succesfully")
    
    this.router.navigate(['/login'])
  }

}