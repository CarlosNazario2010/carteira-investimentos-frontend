import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignUpComponent } from './pages/signup/signup.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AuthGuard } from './services/auth-guard.service';
import { GerenciarCarteiraComponent } from './pages/gerenciar-carteira/gerenciar-carteira.component';

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
        path: 'gerenciarCarteira',
        component: GerenciarCarteiraComponent,
        canActivate: [AuthGuard] // Adiciona o AuthGuard à rota
    },
];
