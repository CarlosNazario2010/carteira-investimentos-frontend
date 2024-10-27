import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ativo } from '../../types/ativo';
import { CarteiraService } from '../../services/carteira.service';

@Component({
    selector: 'app-ativo-table',
    standalone: true,
    imports: [CommonModule],
    providers: [CarteiraService],
    templateUrl: './ativo-table.component.html',
    styleUrl: './ativo-table.component.scss',
})
export class AtivoTableComponent {
    ativos: Ativo[] = [];

    constructor(private carteiraService: CarteiraService) {}

    ngOnInit() {
        this.carteiraService.buscarCarteira().subscribe((carteira) => {
            this.ativos = carteira.ativo;
        });
    }
}
