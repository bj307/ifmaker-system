export interface IUsuario {
  id: string;
  nome: string;
  email: string;
  nivel_acesso: string;
  num_projetos?: number;
  status?: string;
}
