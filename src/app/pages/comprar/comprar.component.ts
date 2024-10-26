import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CarteiraInputComponent } from '../../components/carteira-input/carteira-input.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CarteiraService } from '../../services/carteira.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

interface CompraForm {
    ticker: FormControl;
    quantidade: FormControl;
    precoMedio: FormControl;
    tipo: FormControl;
}

@Component({
    selector: 'app-comprar',
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        CarteiraInputComponent,
        ReactiveFormsModule,
    ],
    providers: [CarteiraService],
    templateUrl: './comprar.component.html',
    styleUrl: './comprar.component.scss',
})
export class ComprarComponent {

    compraForm!: FormGroup<CompraForm>;

    constructor(
        private router: Router,
        private carteiraService: CarteiraService,
        private toastService: ToastrService
    ) {
        this.compraForm = new FormGroup({
            ticker: new FormControl('', [
                Validators.required,
                Validators.minLength(5),
            ]),
            quantidade: new FormControl('', [
                Validators.required,
            ]),
            precoMedio: new FormControl('', [
                Validators.required,
            ]),
            tipo: new FormControl('', [
                Validators.required,
                Validators.minLength(3),
            ]),
        });
    }

    submit() {
        // Chama o serviço de cadastro para enviar os dados do formulário
        this.carteiraService
            .comprar(
                this.compraForm.value.ticker,
                this.compraForm.value.quantidade,
                this.compraForm.value.precoMedio,
                this.compraForm.value.tipo
            )
            .subscribe({
                next: () => {
                    // Exibe uma mensagem de sucesso se o cadastro for bem-sucedido
                    this.toastService.success('Compra feita com sucesso!');
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
