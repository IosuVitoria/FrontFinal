export interface Profesor {
  _id?: string;
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
}

export interface ProfesorCreate {
  nombre: string;
  apellidos: string;
  email: string;
  telefono: string;
}
