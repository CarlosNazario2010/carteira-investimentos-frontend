import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { SignUpResponse } from '../types/signup-response.type';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class SignupService {
    // URL da API para realizar o cadastro
    apiUrl: string = 'http://localhost:8080/autenticacao';

    constructor(private httpClient: HttpClient) {}

    // Método para realizar o cadastro
    signup(nome: string, cpf: string, email: string, senha: string) {
        return this.httpClient
            .post<SignUpResponse>(this.apiUrl + '/registrar', {
                nome,
                cpf,
                email,
                senha,
            }) // Envia uma requisição POST para a API de cadastro
            .pipe(
                // Aplica o operador tap para executar uma ação após a resposta da requisição
                tap((value) => {
                    // Armazena o token de autenticação no armazenamento de sessão
                    sessionStorage.setItem('auth-token', value.token);
                })
            );
    }
}
