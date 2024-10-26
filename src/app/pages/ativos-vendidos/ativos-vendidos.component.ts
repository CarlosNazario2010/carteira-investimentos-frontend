import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-ativos-vendidos',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ativos-vendidos.component.html',
  styleUrl: './ativos-vendidos.component.scss'
})
export class AtivosVendidosComponent {

}
