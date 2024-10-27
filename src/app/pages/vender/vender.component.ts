import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { CarteiraInputComponent } from '../../components/carteira-input/carteira-input.component';
import { CarteiraService } from '../../services/carteira.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

/* Classe que realiza a venda de ativos
    Muitos dos comentarios do comprar component se aplicam aqui */

interface VendaForm {
    ticker: FormControl;
    quantidade: FormControl;
    precoVenda: FormControl;
    tipo: FormControl;
}

@Component({
    selector: 'app-vender',
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        CarteiraInputComponent,
        ReactiveFormsModule,
    ],
    providers: [CarteiraService],
    templateUrl: './vender.component.html',
    styleUrl: './vender.component.scss',
})
export class VenderComponent {
    vendaForm!: FormGroup<VendaForm>;

    constructor(
        private router: Router,
        private carteiraService: CarteiraService,
        private toastService: ToastrService
    ) {
        this.vendaForm = new FormGroup({
            ticker: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            quantidade: new FormControl('', [Validators.required]),
            precoVenda: new FormControl('', [Validators.required]),
            tipo: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
        });
    }

    submit() {
        // Chama o serviço de cadastro para enviar os dados do formulário
        this.carteiraService
            .vender(
                this.vendaForm.value.ticker,
                this.vendaForm.value.quantidade,
                this.vendaForm.value.precoVenda,
                this.vendaForm.value.tipo
            )
            .subscribe({
                next: () => {
                    // Exibe uma mensagem de sucesso se o cadastro for bem-sucedido
                    this.toastService.success('Venda feita com sucesso!');
                },
                error: () => {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    this.toastService.error(
                        'Erro inesperado! Tente novamente mais tarde'
                    );
                },
            });
    }

    voltarAoDashboard() {
        this.router.navigate(['/dashboard']);
    }
}
