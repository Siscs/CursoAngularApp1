export class Coracao {

    private msgCoracaoCheio: string = 'Este Coração esta Cheio';
    private msgCoracaoVazio: string = 'Este Coração esta Vazio';

    constructor(
        public cheio: boolean,
        public urlCoracaoCheio: string = '/src/assets/coracao_cheio.png',
        public urlCoracaoVazio: string = '/src/assets/coracao_vazio.png'
    ) {}

    public exibeCoracao(): string {
        if(this.cheio) {
            return this.urlCoracaoCheio;
        }
        else {
            return this.urlCoracaoVazio;
        }
    }

    public mensagemCoracao(): string {
        if(this.cheio) {
            return this.msgCoracaoCheio;
        }
        else {
            return this.msgCoracaoVazio;
        }
    }

}