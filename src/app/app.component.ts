import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwd-Helloworld-AngularApp';
  userName: string = '';
  imgUrl = "../assets/BL_logo_square_png.png"
  url="https://www.bridgelabz.com/";
  errorMessage: string = '';
  ngOnInit() : void{
    this.title = "Welcome to BridgeLabz.";
  }

  onClick(){
    console.log("Save Button is clicked!");
    window.open(this.url,"_blank");
  }

  validation(){
    if(!this.userName){
      this.errorMessage = "Name is Required!!";
    }
    else if(!/^[A-Z][a-z]{2,}[\sA-za-z]*$/.test(this.userName)){
      this.errorMessage = "Name must start with capital and contain minimun 3 characters!!";
    }
    else{
      this.errorMessage = "";
    }
  }
}