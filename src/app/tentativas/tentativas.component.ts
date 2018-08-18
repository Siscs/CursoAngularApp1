import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit, OnChanges {

  public tipoCoracaoImg: string;
  public coracaoCheioImg: string = '/assets/coracao_cheio.png';
  public coracaoVazioImg: string = '/assets/coracao_vazio.png';

  @Input() public tentativas: number;
  
  public coracoes: Coracao[];

  constructor() {}

  ngOnInit() {}
  
  ngOnChanges() {

    
    console.log('tentativas: ' + this.tentativas);
    
    this.coracoes = [new Coracao(false), new Coracao(false), new Coracao(false)];

    if(this.tentativas > 0) {
      for(let count=0; count < this.tentativas; count++) {
        this.coracoes[count].cheio = true;
      }
    }
    

    console.log(this.coracoes);
    
  }

}
