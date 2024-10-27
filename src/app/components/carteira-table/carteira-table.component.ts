import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CarteiraService } from '../../services/carteira.service';
import { Carteira } from '../../types/carteira';

/* A maioria dos comentarios feitos no ativo-table se aplicam aqui*/

@Component({
    selector: 'app-carteira-table',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './carteira-table.component.html',
    styleUrl: './carteira-table.component.scss',
})
export class CarteiraTableComponent {
    carteira!: Carteira;

    constructor(private carteiraService: CarteiraService) {}

    ngOnInit() {
        this.carteiraService.buscarCarteira().subscribe((carteira) => {
            this.carteira = carteira;
        });
    }
}
