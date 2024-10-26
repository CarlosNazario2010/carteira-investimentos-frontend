import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { CarteiraService } from '../../services/carteira.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CarteiraInputComponent } from '../../components/carteira-input/carteira-input.component';

interface SaldoForm {
    novoSaldo: FormControl;
}

@Component({
    selector: 'app-saldo',
    standalone: true,
    imports: [
        HeaderComponent,
        FooterComponent,
        CarteiraInputComponent,
        ReactiveFormsModule,
    ],
    providers: [CarteiraService],
    templateUrl: './saldo.component.html',
    styleUrl: './saldo.component.scss',
})
export class SaldoComponent {
    saldoForm!: FormGroup<SaldoForm>;

    constructor(
        private router: Router,
        private carteiraService: CarteiraService,
        private toastService: ToastrService
    ) {
        this.saldoForm = new FormGroup({
            novoSaldo: new FormControl('', [
                Validators.required,
                Validators.minLength(11),
            ]),
        });
    }

    submitAdicionaSaldo() {
        this.carteiraService
            .adicionaSaldo(this.saldoForm.value.novoSaldo)
            .subscribe({
                next: () => {
                    this.toastService.success('Saldo adicionado com sucesso!');
                },
                error: () => {
                    this.toastService.error(
                        'Erro inesperado! Tente novamente mais tarde'
                    );
                },
            });
    }

    submitRemoveSaldo() {
        this.carteiraService
            .removeSaldo(this.saldoForm.value.novoSaldo)
            .subscribe({
                next: () => {
                    this.toastService.success('Saldo removido com sucesso!');
                },
                error: () => {
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
