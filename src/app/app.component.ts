import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./pages/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet,HeaderComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductivityHub-FE';
}


