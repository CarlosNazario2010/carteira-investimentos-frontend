import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    selector: 'app-carteira-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carteira-table.component.html',
    styleUrl: './carteira-table.component.scss',
})
export class CarteiraTableComponent {
    carteiraData = {
        id: 8,
        cliente: {
            // ...
        },
        ativo: [],
        saldo: 0.0,
        valorInvestido: 1000.0,
        lucroPrejuizo: -50.0,
        totalDaCarteira: 950.0,
    };
}
