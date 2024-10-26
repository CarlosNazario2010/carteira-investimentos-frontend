import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { GerenciarCarteiraComponent } from './pages/gerenciar-carteira/gerenciar-carteira.component';
import { SaldoComponent } from './pages/saldo/saldo.component';
import { AtivosCompradosComponent } from './pages/ativos-comprados/ativos-comprados.component';
import { AtivosVendidosComponent } from './pages/ativos-vendidos/ativos-vendidos.component';
import { ComprarComponent } from './pages/comprar/comprar.component';
import { VenderComponent } from './pages/vender/vender.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'signup',
        component: SignUpComponent,
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard] // Adiciona o AuthGuard à rota
    },
    {
        path: 'saldo',
        component: SaldoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'ativos-comprados',
        component: AtivosCompradosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'ativos-vendidos',
        component: AtivosVendidosComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'comprar',
        component: ComprarComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'vender',
        component: VenderComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'gerenciarCarteira',
        component: GerenciarCarteiraComponent,
        canActivate: [AuthGuard]
    },
];
