import { Component, OnInit } from '@angular/core';
import { Foto } from '../foto/foto';
import { FotoService } from '../services/foto.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'caelumpic-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})

export class CadastroComponent implements OnInit {

  foto = new Foto();
  mensagem = {
    conteudo: '',
    tipo: '',
  }

  formCadastro: FormGroup

  constructor(private servico: FotoService, 
    private rotaAtivada: ActivatedRoute,
    private roteador: Router,
    private formBuilder: FormBuilder){}

  ngOnInit() {
    this.formCadastro = this.formBuilder.group({
      titulo: ['', Validators.compose(
        [
          Validators.required,
          Validators.minLength(5)
        ]
    )],
      url: ['', Validators.required],
      descricao: ''
    })
    

    //console.log(this.rotaAtivada);
    
    //mesma coisa com sanpshot
    const fotoId = this.rotaAtivada.snapshot.params.fotoId;

    if(fotoId){
      this.servico.buscar(fotoId)
      .subscribe(
        fotoApi => {
          this.foto = fotoApi;
          //só add os valores nos campos que existirem no formulario
          this.formCadastro.patchValue(this.foto)
        }
      )
    }

    //usando subscribe
    /*this.rotaAtivada.params.subscribe(
      parametros => {
        console.log(parametros.fotoId);
        
      }
    )*/

    console.log(this.formCadastro.value);
    
  }
  
  salvar(){

    //mescla os 2 objetos e cria um novo a partir da mescla
    this.foto = {...this.foto, ...this.formCadastro.value}

    if(this.foto._id){
      this.servico.atualizar(this.foto).subscribe(
        () => this.roteador.navigate([''])
      );
    } else {
      this.servico.cadastrar(this.foto).subscribe(
        //primeiro calback
        () => {}
        ,
        //calbackde erro
        (erro) => console.log(erro)
        ,
        //callback complete(finalizou mesmo)
        () => {
          this.mensagem.conteudo = `${this.foto.titulo} cadastrado com sucesso`
          this.mensagem.tipo = "success"
          setTimeout(
            () => {
              this.formCadastro.reset()
              this.mensagem.conteudo = ''
              this.foto = new Foto()
            }
            , 2000          
          )
        }
        
      );
    }

  }
}
