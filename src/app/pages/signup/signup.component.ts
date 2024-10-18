import { SignupService } from './../../services/signup.service';
import { Component } from '@angular/core';
import { DefaultLoginLayoutComponent } from '../../components/default-login-layout/default-login-layout.component';
import {
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { PrimaryInputComponent } from '../../components/primary-input/primary-input.component';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

// Interface para definir a estrutura do formulário de cadastro
interface SignupForm {
    nome: FormControl;
    cpf: FormControl;
    email: FormControl;
    senha: FormControl;
    confirmeSuaSenha: FormControl;
}

@Component({
    selector: 'app-signup',
    standalone: true,
    imports: [
    DefaultLoginLayoutComponent, // Importa o componente de layout padrão
    ReactiveFormsModule, // Importa o módulo para utilizar formulários reativos
    PrimaryInputComponent,
    HeaderComponent,
    FooterComponent
],
    providers: [LoginService],
    templateUrl: './signup.component.html',
    styleUrl: './signup.component.scss',
})
export class SignUpComponent {
    // Cria um objeto FormGroup para representar o formulário de cadastro
    signupForm!: FormGroup<SignupForm>;

    constructor(
        private router: Router, // Injeta o serviço de roteamento
        private signupService: SignupService, // Injeta o serviço de cadastro
        private toastService: ToastrService // Injeta o serviço de toastr
    ) {
        // Inicializa o formulário de cadastro com os controles necessários
        this.signupForm = new FormGroup({
            nome: new FormControl('', [
                Validators.required, // Valida se o nome é obrigatório
                Validators.minLength(3), // Valida se o nome tem pelo menos 3 caracteres
            ]),
            cpf: new FormControl('', [
                Validators.required, // Valida se o CPF é obrigatório
                Validators.minLength(11), // Valida se o CPF tem pelo menos 11 caracteres
            ]),
            email: new FormControl('', [Validators.required, Validators.email]), // Valida se o email é obrigatório e tem formato válido
            senha: new FormControl('', [
                Validators.required, // Valida se a senha é obrigatória
                Validators.minLength(6), // Valida se a senha tem pelo menos 6 caracteres
            ]),
            confirmeSuaSenha: new FormControl('', [
                Validators.required, // Valida se a confirmação de senha é obrigatória
                Validators.minLength(6), // Valida se a confirmação de senha tem pelo menos 6 caracteres
            ]),
        });
    }

    // Método para enviar o formulário de cadastro
    submit() {
        // Chama o serviço de cadastro para enviar os dados do formulário
        this.signupService
            .signup(
                this.signupForm.value.nome,
                this.signupForm.value.cpf,
                this.signupForm.value.email,
                this.signupForm.value.senha
            )
            .subscribe({
                next: () => {
                    // Exibe uma mensagem de sucesso se o cadastro for bem-sucedido
                    this.toastService.success('Cadastro feito com sucesso!');
                    this.router.navigate(['/login']); // Redireciona para a rota de login
                },
                error: () => {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    this.toastService.error(
                        'Erro inesperado! Tente novamente mais tarde'
                    );
                },
            });
    }

    // Método para navegar para a página de login
    navigate() {
        this.router.navigate(['login']);
    }
}
