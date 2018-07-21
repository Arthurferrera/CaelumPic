import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'caelumpic-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  listaFotos;

  constructor(private conexaoApi:HttpClient){
    //fazendo a conexao com a api de fotos
    conexaoApi.get('http://localhost:3000/v1/fotos')
    //suscribe éonde fica obody da api
    //criar a function arrow representada pela =>
    .subscribe((fotosApi)=>{
      this.listaFotos = fotosApi;
    })
  }

  ngOnInit() {
  }

  deletar(fotoApagada){
    this.conexaoApi.delete('http://localhost:3000/v1/fotos/'+fotoApagada._id).subscribe(
      () => {
        this.listaFotos = Array.from((this.listaFotos).filter((fotoLoop) => {
          if(fotoLoop != fotoApagada){
            return fotoLoop;
          }
        })      
    )
  }

}
