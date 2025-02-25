import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComingsoonComponent } from "./comingsoon/comingsoon.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ComingsoonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'majesticwadi';
}
