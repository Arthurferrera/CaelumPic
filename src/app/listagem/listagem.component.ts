import { Component, OnInit } from '@angular/core';
import { FotoService } from "../services/foto.service";
import { Foto } from '../foto/foto';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listaFotos: Foto[];

  constructor(private servico:FotoService){

  }

  ngOnInit() {
        //fazendo a conexao com a api de fotos
    //suscribe éonde fica obody da api
    //criar a function arrow representada pela =>
    this.servico.listar()
    .subscribe(
      (fotosApi)=>{
      this.listaFotos = fotosApi;
    })
  }

  deletar(fotoApagada: Foto){
    this.servico.deletar(fotoApagada._id).subscribe(
      () => {
        this.listaFotos = Array.from((this.listaFotos)
        .filter((fotoLoop) => {if(fotoLoop != fotoApagada){
            return fotoLoop;
          }})
        )
    }
    )}
}