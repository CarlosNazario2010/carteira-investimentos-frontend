import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginResponse } from '../types/login-response.type';
import { tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root',
})
export class LoginService {
    // URL da API para realizar o login
    apiUrl: string = 'http://localhost:8080/autenticacao';

    constructor(private httpClient: HttpClient, private router: Router) {}

    // Método para realizar o login
    login(cpf: string, senha: string) {
        return this.httpClient
            .post<LoginResponse>(this.apiUrl + '/logar', { cpf, senha }) // Envia uma requisição POST para a API de login
            .pipe(
                // Aplica o operador tap para executar uma ação após a resposta da requisição
                tap((value) => {
                    // Armazena os dados retornados do backend no armazenamento de sessão
                    sessionStorage.setItem('auth-token', value.token);
                    sessionStorage.setItem('user-id', value.id.toString());
                    sessionStorage.setItem('user-name', value.nome);
                    this.router.navigate(['/gerenciarCarteira']); // Redireciona para a rota de dashboard
                })
            );
    }
}
