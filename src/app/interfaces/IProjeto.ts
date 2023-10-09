export interface IProjeto {
  id: string;
  nome: string;
  tipo: string;
  descricao: string;
  usuarios: string[];
  atualizacao?: string[];
}
