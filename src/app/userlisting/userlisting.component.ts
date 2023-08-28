import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-userlisting',
  templateUrl: './userlisting.component.html',
  styleUrls: ['./userlisting.component.css']
})
export class UserlistingComponent {
  constructor(private service: AuthService, private dialog:MatDialog){
    this.Loaduser();
  }
  userlist:any;
  dataSource:any;
  @ViewChild(MatPaginator) paginator !:MatPaginator;
  @ViewChild(MatSort) sort !:MatSort;

  Loaduser(){
    this.service.GetAll().subscribe(res=>{
    this.userlist = res;
    this.dataSource=new MatTableDataSource(this.userlist);
    this.dataSource.paginator=this.paginator;
    this.dataSource.sort=this.sort;
    })
  }
  displayedColumns: string[] = ['id','name','email','role','status','action'];
  UpdateUser(code: any){
    this.dialog.open()
  }

  opendiealog(){

  }
}
