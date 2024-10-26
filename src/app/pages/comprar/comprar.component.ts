import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-comprar',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './comprar.component.html',
  styleUrl: './comprar.component.scss'
})
export class ComprarComponent {

}
