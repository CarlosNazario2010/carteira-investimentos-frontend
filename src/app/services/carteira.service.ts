import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carteira } from '../types/carteira';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CarteiraService {
    apiUrl: string = 'http://localhost:8080/carteiras';
    token = 'Bearer ' + sessionStorage.getItem('auth-token');
    clienteId = Number(sessionStorage.getItem('user-id'));
    carteiraId = Number(sessionStorage.getItem('carteira-id'));

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
                tap((value) => {
                    if (value) {
                        sessionStorage.setItem(
                            'carteira-id',
                            value.id.toString()
                        );
                    }
                })
            );
    }

    buscarCarteira() {
        const params = new HttpParams({
            fromObject: {
                clienteId: this.clienteId,
                carteiraId: this.carteiraId,
            },
        });

        return this.httpClient
            .get<Carteira>('http://localhost:8080/carteiras', {
                params,
                headers: this.header,
            })
            .pipe(
                catchError((error) => {
                    console.error('Erro ao buscar carteira:', error);
                    return throwError(error);
                })
            );
    }

    buscarCarteiraPorClienteId(clienteId: number): Observable<Carteira | null> {
        return this.httpClient.get<Carteira>(
            `${this.apiUrl}/cliente?clienteId=${clienteId}`,
            {
                headers: this.header,
            }
        );
    }

    adicionaSaldo(novoSaldo: number) {
        const data = {
            novoSaldo: parseInt(novoSaldo.toString()),
        };
        return this.httpClient.put<Carteira>(
            'http://localhost:8080/carteiras/' + this.carteiraId + '/adicionar',
            data,
            {
                headers: this.header,
            }
        );
    }

    removeSaldo(novoSaldo: number) {
        const data = {
            novoSaldo: parseInt(novoSaldo.toString()),
        };
        return this.httpClient.put<Carteira>(
            'http://localhost:8080/carteiras/' + this.carteiraId + '/remover',
            data,
            {
                headers: this.header,
            }
        );
    }

    comprar(
        ticker: string,
        quantidade: number,
        precoMedio: number,
        tipo: string
    ) {
        const data = {
            ticker: ticker,
            quantidade: parseInt(quantidade.toString()),
            precoMedio: parseInt(precoMedio.toString()),
            tipo: tipo,
        };
        return this.httpClient.post<Carteira>(
            'http://localhost:8080/carteiras/' + this.carteiraId + '/comprar',
            data,
            {
                headers: this.header,
            }
        );
    }

    vender(
        ticker: string,
        quantidade: number,
        precoVenda: number,
        tipo: string
    ) {
        const data = {
            ticker: ticker,
            quantidade: parseInt(quantidade.toString()),
            precoVenda: parseInt(precoVenda.toString()),
            tipo: tipo,
        };
        return this.httpClient.post<Carteira>(
            'http://localhost:8080/carteiras/' + this.carteiraId + '/vender',
            data,
            {
                headers: this.header,
            }
        );
    }
}
