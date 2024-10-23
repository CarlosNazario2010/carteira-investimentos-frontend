import { Component, OnInit } from '@angular/core';
import { CarteiraService } from '../../services/carteira.service';
import { Carteira } from '../../types/carteira';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
    selector: 'app-gerenciar-carteira',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    providers: [CarteiraService],
    templateUrl: './gerenciar-carteira.component.html',
    styleUrl: './gerenciar-carteira.component.scss',
})
export class GerenciarCarteiraComponent implements OnInit {
    clienteId = Number(sessionStorage.getItem('user-id'));
    carteira: Carteira | null = null;
    existeCarteira = false;

    isCriarCarteiraDisabled = false;
    isRecarregarCarteiraDisabled = false;
    isIrParaDashboardDisabled = false;

    constructor(
        private router: Router,
        private carteiraService: CarteiraService,
        private toastService: ToastrService
    ) {}

    ngOnInit() {
        this.isCriarCarteiraDisabled = true;
        this.isRecarregarCarteiraDisabled = false;
        this.isIrParaDashboardDisabled = true;
    }

    criarCarteira() {
        this.carteiraService.criarCarteira(this.clienteId).subscribe({
            next: () => {
                this.toastService.success(
                    'Carteira criada com sucesso! Va para o Dashboard!'
                );
                this.isCriarCarteiraDisabled = true;
                this.isRecarregarCarteiraDisabled = true;
                this.isIrParaDashboardDisabled = false;
            },
            error: () => {
                this.toastService.error('Erro na criacao da carteira!');
            },
        });
    }

    recarregarCarteira() {
        this.carteiraService
            .buscarCarteiraPorClienteId(this.clienteId)
            .subscribe({
                next: (carteira) => {
                    if (carteira) {
                        sessionStorage.setItem(
                            'carteira-id',
                            carteira.id.toString()
                        );
                        this.carteira = carteira;
                        this.toastService.success('Carteira encontrada! Va para o Dashboard!');
                    } else {
                        this.isRecarregarCarteiraDisabled = true;
                        this.isIrParaDashboardDisabled = true;
                        this.isCriarCarteiraDisabled = false;
                        this.toastService.info(
                            'Você ainda não possui uma carteira. Clique em criar Carteira!'
                        );
                    }
                },
                error: (error: any) => {
                    console.error('Erro ao buscar carteira:', error);
                    this.toastService.error('Erro ao buscar carteira!');
                },
            });
        // Após buscar a carteira, atualiza os botões
        this.isRecarregarCarteiraDisabled = true;
        this.isIrParaDashboardDisabled = false;
        this.isCriarCarteiraDisabled = true;
    }

    irParaDashboard() {
        this.router.navigate(['/dashboard']);
    }
}
