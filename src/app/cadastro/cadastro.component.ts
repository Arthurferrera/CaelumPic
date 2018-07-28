import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  foto = new Foto();
  constructor(private servico: FotoService, 
    private rotaAtivada: ActivatedRoute,
    private roteador: Router){}

  ngOnInit() {
    //console.log(this.rotaAtivada);
    
    //mesma coisa com sanpshot
    const fotoId = this.rotaAtivada.snapshot.params.fotoId;

    if(fotoId){
      this.servico.buscar(fotoId)
      .subscribe(
        fotoApi => {
          this.foto = fotoApi;
        }
      )
    }

    //usando subscribe
    /*this.rotaAtivada.params.subscribe(
      parametros => {
        console.log(parametros.fotoId);
        
      }
    )*/
    
  }
  
  salvar(){

    if(this.foto._id){
      this.servico.atualizar(this.foto).subscribe(
        () => this.roteador.navigate([''])
      );
    } else {
      this.servico.cadastrar(this.foto).subscribe(
        () => {
          
        }
        ,
        (erro) => console.log(erro)
      );
    }

  }
}
