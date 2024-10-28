import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AtivoComprado } from '../types/ativo-comprado';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class AtivoCompradoService {
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
            .get<AtivoComprado[]>(
                'http://localhost:8080/carteiras/' +
                    this.carteiraId +
                    '/ativos-comprados',
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
