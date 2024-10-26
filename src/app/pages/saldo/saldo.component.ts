import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-saldo',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './saldo.component.html',
  styleUrl: './saldo.component.scss'
})
export class SaldoComponent {

}
