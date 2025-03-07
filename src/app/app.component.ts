import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cwd-Helloworld-AngularApp';
  imgUrl = "../assets/BL_logo_square_png.png"
  url="https://www.bridgelabz.com/";
  ngOnInit() : void{
    this.title = "Hello from BridgeLabz.";
  }

  onClick(){
    console.log("Save Button is clicked!");
    window.open(this.url,"_blank");
  }
}