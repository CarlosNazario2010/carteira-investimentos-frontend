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

// Interface para definir a estrutura do formulário de login
interface LoginForm {
    cpf: FormControl;
    senha: FormControl;
}

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        DefaultLoginLayoutComponent, // Importa o componente de layout padrão
        ReactiveFormsModule, // Importa o módulo para utilizar formulários reativos
        PrimaryInputComponent, // Importa o componente de input primário
    ],
    providers: [LoginService], // Fornece o serviço de login
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    // Cria um objeto FormGroup para representar o formulário de login
    loginForm!: FormGroup<LoginForm>;

    constructor(
        private router: Router, // Injeta o serviço de roteamento
        private loginService: LoginService, // Injeta o serviço de login
        private toastService: ToastrService // Injeta o serviço de toastr
    ) {
        // Inicializa o formulário de login com os controles de CPF e senha
        this.loginForm = new FormGroup({
            cpf: new FormControl('', [
                Validators.required, // Valida se o CPF é obrigatório
                Validators.minLength(11), // Valida se o CPF tem pelo menos 11 caracteres
            ]),
            senha: new FormControl('', [
                Validators.required, // Valida se a senha é obrigatória
                Validators.minLength(6), // Valida se a senha tem pelo menos 6 caracteres
            ]),
        });
    }

    // Método para enviar o formulário de login
    submit() {
        // Chama o serviço de login para enviar os dados do formulário
        this.loginService
            .login(this.loginForm.value.cpf, this.loginForm.value.senha)
            .subscribe({
                next: () => {
                    // Exibe uma mensagem de sucesso se o login for bem-sucedido
                    this.toastService.success('Login feito com sucesso!');
                },
                error: () => {
                    // Exibe uma mensagem de erro caso ocorra algum problema
                    this.toastService.error(
                        'Erro inesperado! Tente novamente mais tarde'
                    );
                },
            });
    }

    // Método para navegar para a página de cadastro
    navigate() {
        this.router.navigate(['signup']);
    }
}
