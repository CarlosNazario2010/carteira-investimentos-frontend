import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarteiraButtonComponent } from '../../components/carteira-button/carteira-button.component';
import { CarteiraTableComponent } from '../../components/carteira-table/carteira-table.component';
import { AtivoTableComponent } from '../../components/ativo-table/ativo-table.component';

/* Este componente basicamente concentra todos os componentes que sao responsaveis
    por montar o dashboard da carteira */

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        CarteiraButtonComponent,
        CarteiraTableComponent,
        AtivoTableComponent,
    ],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    /* Atributos recuperam os dados armazenados no Session Storage do navegador */
    clienteNome = sessionStorage.getItem('user-name');
    clienteId = sessionStorage.getItem('user-id');
    carteiraId = sessionStorage.getItem('carteira-id');
}
