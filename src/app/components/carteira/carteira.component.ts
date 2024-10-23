import { Router } from '@angular/router';
import { Carteira } from '../../types/carteira';
import { CarteiraService } from './../../services/carteira.service';
import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-carteira',
    standalone: true,
    imports: [],
    providers: [CarteiraService],
    templateUrl: './carteira.component.html',
    styleUrl: './carteira.component.scss',
})
export class CarteiraComponent {
    carteira: Carteira | null = null;

    constructor(
        private carteiraService: CarteiraService,
        private router: Router,
        private toastService: ToastrService
    ) {}

    gerenciarCarteira() {
        this.router.navigate(['gerenciarCarteira']);
    }
}
