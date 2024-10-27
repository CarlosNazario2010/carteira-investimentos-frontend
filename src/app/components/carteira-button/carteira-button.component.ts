import { Router } from '@angular/router';
import { Carteira } from '../../types/carteira';
import { CarteiraService } from '../../services/carteira.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-carteira-button',
    standalone: true,
    imports: [],
    providers: [CarteiraService],
    templateUrl: './carteira-button.component.html',
    styleUrl: './carteira-button.component.scss',
})
export class CarteiraButtonComponent {
    carteira: Carteira | null = null;

    constructor(
        private carteiraService: CarteiraService,
        private router: Router,
        private toastService: ToastrService
    ) {}

    /* Metodos da classe somente chamam os componentes responsaveis pela funcionalidade */

    adicionarRemoverSaldo() {
        this.router.navigate(['saldo']);
    }

    ativosComprados() {
        this.router.navigate(['ativos-comprados']);
    }

    ativosVendidos() {
        this.router.navigate(['ativos-vendidos']);
    }

    comprarAtivo() {
        this.router.navigate(['comprar']);
    }

    venderAtivo() {
        this.router.navigate(['vender']);
    }

    gerenciarCarteira() {
        this.router.navigate(['gerenciarCarteira']);
    }
}
