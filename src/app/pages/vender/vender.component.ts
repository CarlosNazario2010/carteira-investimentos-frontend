import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-vender',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './vender.component.html',
  styleUrl: './vender.component.scss'
})
export class VenderComponent {

}
