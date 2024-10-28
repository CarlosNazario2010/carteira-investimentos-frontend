import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtivoVendido } from '../types/ativo-vendido';
import { catchError, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AtivoVendidoService {
    private readonly apiUrl = 'http://localhost:8080/carteiras/';
    token = 'Bearer ' + sessionStorage.getItem('auth-token');
    carteiraId = Number(sessionStorage.getItem('carteira-id'));

    constructor(private httpClient: HttpClient) {}

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: this.token,
    });

    buscarAtivoComprado() {
        return this.httpClient
            .get<AtivoVendido[]>(
                'http://localhost:8080/carteiras/' +
                    this.carteiraId +
                    '/ativos-vendidos',
                {
                    headers: this.header,
                }
            )
            .pipe(
                catchError((error) => {
                    console.error('Erro ao buscar carteira:', error);
                    return throwError(error);
                })
            );
    }
}
