import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carteira } from '../types/carteira';
import { tap } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class CarteiraService {
    apiUrl: string = 'http://localhost:8080/carteiras';
    token = 'Bearer ' + sessionStorage.getItem('auth-token');
    carteira: Carteira | null = null;

    constructor(private httpClient: HttpClient) {}

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
    });

    criarCarteira(clienteId: Number) {
        const data = {
            clienteId: parseInt(clienteId.toString()),
        };

        return this.httpClient
            .post<Carteira>('http://localhost:8080/carteiras', data, {
                headers: this.header,
            })
            .pipe(
                tap((carteira: Carteira) => {
                    sessionStorage.setItem(
                        'carteira',
                        JSON.stringify(carteira)
                    );
                })
            );
    }
}
