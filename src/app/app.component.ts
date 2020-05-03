import { Component,OnInit } from '@angular/core';
import { AppService } from './AppService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  libraries:any=[];
  books:any=[];
  constructor(private appService:AppService) {
  }
  
  ngOnInit() {
    this.displayLibraries();
  }

  displayLibraries(){
    this.appService.getLibraries()
    .subscribe(response => {
      this.libraries = response;
      console.log(this.libraries);
    });
  }
  
  displayBooks(divId:string){
  var flag = document.getElementById(divId);
  if (flag.style.display === 'none') {
    flag.style.display = 'block';
  } else {
    flag.style.display = 'none';
  }
  }

}
