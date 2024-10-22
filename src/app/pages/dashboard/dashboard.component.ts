import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarteiraComponent } from "../../components/carteira/carteira.component";

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, CarteiraComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    clienteNome = sessionStorage.getItem('user-name');
    clienteId = sessionStorage.getItem('user-id');
    carteiraId = sessionStorage.getItem('carteira-id')
}
