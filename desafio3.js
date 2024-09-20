class Heroi {
    // O construtor define as propriedades do herói (nome, idade, tipo)
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
    // Método atacar que exibe a mensagem de ataque conforme o tipo do herói
    atacar() {
      let ataque;
  
      // Estrutura de decisão para determinar o tipo de ataque
      switch (this.tipo.toLowerCase()) {
        case 'mago':
          ataque = 'magia';
          break;
        case 'guerreiro':
          ataque = 'espada';
          break;
        case 'monge':
          ataque = 'artes marciais';
          break;
        case 'ninja':
          ataque = 'shuriken';
          break;
        default:
          ataque = 'ataque desconhecido';
      }
  
      // Exibir a mensagem com o tipo e ataque concatenados
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Criando alguns heróis de exemplo
  let heroi1 = new Heroi('Arthur', 30, 'guerreiro');
  let heroi2 = new Heroi('Merlin', 150, 'mago');
  let heroi3 = new Heroi('Bruce', 40, 'monge');
  let heroi4 = new Heroi('Ryu', 25, 'ninja');
  
  // Heróis atacando
  heroi1.atacar();  // "O guerreiro atacou usando espada"
  heroi2.atacar();  // "O mago atacou usando magia"
  heroi3.atacar();  // "O monge atacou usando artes marciais"
  heroi4.atacar();  // "O ninja atacou usando shuriken"