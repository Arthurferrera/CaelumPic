import { NgModule } from "@angular/core";
import { FotoComponent } from "./foto.component";

//definindo a classe como module
@NgModule({
    //declarations declara classes que pertence ao component
    declarations: [FotoComponent],
    //exports passa o component para a aplicação usa-lo
    exports: [FotoComponent]
})
//classe do module
//'export' deixa a classe como publico
export class FotoModule{

}