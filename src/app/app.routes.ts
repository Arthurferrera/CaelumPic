import { Routes, RouterModule } from '@angular/router';
import { ListagemComponent } from "./listagem/listagem.component";
import { CadastroComponent } from './cadastro/cadastro.component';

//arquivo de rotas, aqui fica declarado
//todas as rotas da aplicação, tudo isso dentro de um array do tipo Routes

//criando o array de rotas
const rotasApp:Routes = [
    {path: '', component: ListagemComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: ''}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp)