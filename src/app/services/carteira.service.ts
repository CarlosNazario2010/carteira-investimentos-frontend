import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Carteira } from '../types/carteira';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { HttpParams } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class CarteiraService {
    // URL base da API utilizada para acessar os recursos de carteira
    private apiUrl: string = 'http://localhost:8080/carteiras';

    // dados recuperados do Session Storage do browser
    private token = 'Bearer ' + sessionStorage.getItem('auth-token');
    private clienteId = Number(sessionStorage.getItem('user-id'));
    private carteiraId = Number(sessionStorage.getItem('carteira-id'));

    // Armazena a carteira localmente, podendo ser nulo se ainda não foi carregada
    private carteira: Carteira | null = null;

    constructor(private httpClient: HttpClient) {}

    // Constrói o cabeçalho HTTP com o token de autenticação
    private header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
    });

    /**
     * Cria uma nova carteira para o cliente informado
     * @param clienteId O identificador do cliente
     * @returns Observable<Carteira> contendo a carteira criada
     */
    criarCarteira(clienteId: Number) {
        const data = {
            clienteId: parseInt(clienteId.toString()),
        };
        return this.httpClient
            .post<Carteira>(this.apiUrl, data, {
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

    /**
     * Busca a carteira do cliente a partir do clienteId e carteiraId armazenados no service
     * @returns Observable<Carteira> contendo a carteira recuperada
     */
    buscarCarteira() {
        const params = new HttpParams({
            fromObject: {
                clienteId: this.clienteId,
                carteiraId: this.carteiraId,
            },
        });

        return this.httpClient
            .get<Carteira>(this.apiUrl, {
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

    /**
     * Busca a carteira pelo identificador do cliente
     * @param clienteId O identificador do cliente
     * @returns Observable<Carteira | null> contendo a carteira encontrada ou null caso não seja encontrada
     */
    buscarCarteiraPorClienteId(clienteId: number): Observable<Carteira | null> {
        return this.httpClient.get<Carteira>(
            `${this.apiUrl}/cliente?clienteId=${clienteId}`,
            {
                headers: this.header,
            }
        );
    }

    /**
     * Adiciona saldo na carteira
     * @param novoSaldo O valor do novo saldo
     * @returns Observable<Carteira> contendo a carteira atualizada
     */
    adicionaSaldo(novoSaldo: number) {
        const data = {
            novoSaldo: parseInt(novoSaldo.toString()),
        };
        return this.httpClient.put<Carteira>(
            this.apiUrl + '/' + this.carteiraId + '/adicionar',
            data,
            {
                headers: this.header,
            }
        );
    }

    /**
     * Remove saldo da carteira
     * @param novoSaldo O valor do novo saldo
     * @returns Observable<Carteira> contendo a carteira atualizada
     */
    removeSaldo(novoSaldo: number) {
        const data = {
            novoSaldo: parseInt(novoSaldo.toString()),
        };
        return this.httpClient.put<Carteira>(
            this.apiUrl + '/' + this.carteiraId + '/remover',
            data,
            {
                headers: this.header,
            }
        );
    }

    /**
     * Realiza a compra de um ativo
     * @param ticker O código do ativo
     * @param quantidade A quantidade de ativos a serem comprados
     * @param precoMedio O preço médio pago por cada ativo
     * @param tipo O tipo de operação (compra ou venda)
     * @returns Observable<Carteira> contendo a carteira atualizada após a compra
     */
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
            this.apiUrl + '/' + this.carteiraId + '/comprar',
            data,
            {
                headers: this.header,
            }
        );
    }

    /**
     * Realiza a venda de um ativo
     * @param ticker O código do ativo
     * @param quantidade A quantidade de ativos a serem comprados
     * @param precoVenda O preço de venda de cada ativo
     * @param tipo O tipo de operação (compra ou venda)
     * @returns Observable<Carteira> contendo a carteira atualizada após a compra
     */
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
            this.apiUrl + '/' + this.carteiraId + '/vender',
            data,
            {
                headers: this.header,
            }
        );
    }
}
