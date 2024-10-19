import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [HeaderComponent, FooterComponent],
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {

    clienteNome = sessionStorage.getItem('user-name');
    clienteId = sessionStorage.getItem('user-id');
    token = "Bearer " + sessionStorage.getItem("auth-token");

    constructor(private http: HttpClient) {}

    header: HttpHeaders = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': this.token
    });

    criarCarteira() {
        const data = {
            clienteId: this.clienteId,
        };

        this.http
            .post('http://localhost:8080/carteiras', data, {
                headers: this.header
            })
            .subscribe(
                (response) => {
                    console.log('Carteira criada com sucesso:', response);
                    // Aqui você pode adicionar alguma lógica para mostrar uma mensagem de sucesso ao usuário
                },
                (error) => {
                    console.error('Erro ao criar carteira:', error);
                    // Aqui você pode adicionar alguma lógica para mostrar uma mensagem de erro ao usuário
                }
            );
    }
}
