export interface Projeto {
  id: number;
  titulo: string;
  organizacao: string;
  descricaoBreve: string;
  descricaoCompleta: string;
  tecnologias: string[];
  status: 'em-desenvolvimento' | 'concluido' | 'estudo';
  statusTexto: string;
  linkGithub: string;
  categoria: 'principal' | 'didatico' | 'desafio';
  corDestaque: string;
  iconeTerminal: string;
}
