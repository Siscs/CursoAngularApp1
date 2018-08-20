import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { FRASES } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit, OnDestroy {

  public frases: Frase[] = FRASES;
  public instrucao: string = 'Traduza esta frase:'
  public resposta:string = '';
  public rodada: number = 0;
  public rodadaFrase: Frase;
  public progresso: number = 0;
  public tentativas: number = 3; 
  @Output() public encerrarJogo = new EventEmitter();

  constructor() { 
    this.montarFrase();
    this.tentativas = 3;
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('Componente painel destruído.');
  }

  montarFrase(): void {
      this.rodadaFrase = this.frases[this.rodada];
      this.progresso += ( 100 / this.frases.length)
  }

  atualizarResposta(evento: Event): void {
    this.resposta = (<HTMLInputElement>evento.target).value;
  }

  verificarResposta(): void {

    if(this.resposta.toLowerCase() === this.rodadaFrase.frasePtBr.toLowerCase()) {
      
      alert('A tradução esta certa!');

      this.rodada++;

      let maximoDeRodadas: number = this.frases.length;

      if ( maximoDeRodadas <= this.rodada ) {
        //alert('parabéns voce acertou tudo!!!');
        //this.iniciarNovamente();

        // executa o evento no componente pai (app)
        this.encerrarJogo.emit('vitoria');

      } else {
        // atualiza 
        this.resposta = '';
        this.montarFrase();
      }

    } else {

      this.tentativas--;

      alert('A tradução esta errada!');

      if( this.tentativas === 0 ) {
        //alert('Tentativas esgotadas. comece de novo!!!');
        //this.iniciarNovamente();

        // executa o evento no componente pai (app)
        this.encerrarJogo.emit('derrota');

      }
    }
  }

  iniciarNovamente(): void {
    this.rodada = 0;
    this.progresso = 0;
    this.tentativas = 3;
    this.resposta = '';
    this.montarFrase();
  }

}
