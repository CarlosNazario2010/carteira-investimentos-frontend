import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../../services/carteira.service';
import { Carteira } from '../../types/carteira';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
    selector: 'app-criar-carteira',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    providers: [CarteiraService],
    templateUrl: './criar-carteira.component.html',
    styleUrl: './criar-carteira.component.scss',
})
export class CriarCarteiraComponent implements OnInit {
    clienteId = Number(sessionStorage.getItem('user-id'));
    carteira: Carteira | null = null;
    existeCarteira = false;

    constructor(
      private router: Router,
      private carteiraService: CarteiraService,
      private toastService: ToastrService
    ) {}

    ngOnInit() {
      // Verifica se o carteira-id existe no sessionStorage
      const carteiraId = sessionStorage.getItem('carteira-id');
      if (carteiraId) {
        this.existeCarteira = true;
        this.toastService.info('Você já possui uma carteira criada. Va para o Dashboard');
      }
    }

    criarCarteira() {
        this.carteiraService.criarCarteira(this.clienteId).subscribe({
            next: () => {
                this.toastService.success(
                    'Carteira criada com sucesso com sucesso!'
                );
                this.router.navigate(['/dashboard']);
            },
            error: () => {
                this.toastService.error('Erro na criacao da carteira!');
            },
        });
    }

    irParaDashboard() {
        this.router.navigate(['/dashboard']);
    }
}
