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
    // Lista de ativos que serão exibidos na tabela
    ativos: Ativo[] = [];

    // Construtor para injetar o serviço CarteiraService
    constructor(private carteiraService: CarteiraService) {}

    // Método executado após o componente ser inicializado

    ngOnInit() {
        // Busca a carteira do usuário e atribui os ativos à propriedade 'ativos' do componente
        // A subscrição garante que a tabela será atualizada quando os dados forem carregados
        this.carteiraService.buscarCarteira().subscribe((carteira) => {
            this.ativos = carteira.ativo;
        });
    }
}
