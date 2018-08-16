import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnInit {

  public coracaoCheioImg: string = '/assets/coracao_cheio.png'
  public coracaoVazioImg: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = 'Este Coração esta Cheio'
  public coracaoVazio: string = 'Este Coração esta Vazio'

  constructor() { }

  ngOnInit() {
  }

}
