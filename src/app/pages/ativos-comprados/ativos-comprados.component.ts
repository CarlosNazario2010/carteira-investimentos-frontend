import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-ativos-comprados',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './ativos-comprados.component.html',
  styleUrl: './ativos-comprados.component.scss'
})
export class AtivosCompradosComponent {

}
