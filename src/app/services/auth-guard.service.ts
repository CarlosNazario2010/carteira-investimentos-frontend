import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';

/* Classe que fornece uma validacao para que somente o usuario autenticado
    possa acessar rotas privadas na aplicacao */

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    // Método que é chamado antes de permitir o acesso a uma rota protegida
    canActivate(
        next: ActivatedRouteSnapshot, // Objeto que contém informações sobre a rota atual
        state: RouterStateSnapshot // Objeto que contém informações sobre o estado do roteador
    ):
        | Observable<boolean | UrlTree> // UrlTree: Representa uma URL com parâmetros de consulta e fragmentos.
        | Promise<boolean | UrlTree>
        | boolean
        | UrlTree {
        // Obtém o token de autenticação do armazenamento de sessão
        const authToken = sessionStorage.getItem('auth-token');

        // Verifica se o token de autenticação existe
        if (authToken) {
            // Se o token existir, permite o acesso à rota
            return true;
        } else {
            // Se não houver token, redireciona para a página de login
            this.router.navigate(['/login']);
            return false;
        }
    }
}
