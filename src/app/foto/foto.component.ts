import { Component, Input } from "@angular/core";

//criando a anotação de component
@Component({
    //definindo o nome que será usado para chamar o component
    selector: 'foto',
    //código html do component
    //'[src]' permiteque a propriedade receba uma variavel
    template: `<img class="card-img-top" [src]="url" [alt]="titulo">`,
    //css do component
    styles: []
})
//classe do component
//'export' deixa a classe como publico
export class FotoComponent {
    //'@Input' permite entrada de valor
    @Input() url = '';
    @Input() titulo = '';


    
}