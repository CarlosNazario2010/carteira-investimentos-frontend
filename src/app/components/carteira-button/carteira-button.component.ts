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

    gerenciarCarteira() {
        this.router.navigate(['gerenciarCarteira']);
    }
    ativosVendidos() {
        throw new Error('Method not implemented.');
    }
    ativosComprados() {
        throw new Error('Method not implemented.');
    }
    venderAtivo() {
        throw new Error('Method not implemented.');
    }
    comprarAtivo() {
        throw new Error('Method not implemented.');
    }
    removerSaldo() {
        throw new Error('Method not implemented.');
    }
    adicionarSaldo() {
        throw new Error('Method not implemented.');
    }
}
