export type Carteira = {
    id: number;
    cliente: {
        id: number;
        nome: string;
        email: string;
        cpf: string;
    };
    ativo: any[];
    saldo: number;
    valorInvestido: number;
    lucroPrejuizo: number;
    totalDaCarteira: number;
}
