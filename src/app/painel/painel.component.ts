import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza esta frase:'
  public resposta:string;
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;

  constructor() { 
    //console.log(this.frases);
    this.montarFrase();
  }

  ngOnInit() {
  }

  montarFrase(): void {
      this.rodadaFrase = this.frases[this.rodada];
  }

  atualizarResposta(evento: Event): void {
    
    this.resposta = (<HTMLInputElement>evento.target).value;
    this.progresso = ( 100 / this.frases.length)
    //    console.log(this.resposta);
  }

  verificarResposta(): void {
    console.log('resposta ' + this.resposta);

    if(this.resposta.toLowerCase() === this.rodadaFrase.frasePtBr.toLowerCase()) {
      
      alert('A tradução esta certa!');

      this.rodada++;

      let maximoDeRodadas: number = this.frases.length;

      if ( maximoDeRodadas <= this.rodada ) {
        this.rodada = 0;
      }

      this.montarFrase();

    } else {
      this.resposta = '';
      alert('A tradução esta errada!');
    }


  }


}
