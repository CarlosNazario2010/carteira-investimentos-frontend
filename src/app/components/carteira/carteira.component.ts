import { Carteira } from '../../types/carteira';
import { CarteiraService } from './../../services/carteira.service';
import { Component } from '@angular/core';

@Component({
    selector: 'app-carteira',
    standalone: true,
    imports: [],
    providers: [CarteiraService],
    templateUrl: './carteira.component.html',
    styleUrl: './carteira.component.scss',
})
export class CarteiraComponent {
    clienteId = Number(sessionStorage.getItem('user-id'));
    carteira: Carteira | null = null;

    constructor(private carteiraService: CarteiraService) {}

    ngOnInit() {
        this.carregarCarteira();
      }

    criarCarteira() {
        this.carteiraService
            .criarCarteira(this.clienteId)
            .subscribe({
                next: () => {
                    console.log("carteira criada com sucesso!!!")

                },
                error: () => {
                    console.log("Erro ao criar a carteira")
                },
            });
    }

    carregarCarteira() {
        const carteiraString = sessionStorage.getItem('carteira');
        if (carteiraString) {
          this.carteira = JSON.parse(carteiraString);
        }
      }
}
