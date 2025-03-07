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
  ngOnInit() : void{
    this.title = "Hello from BridgeLabz.";
  }
}
