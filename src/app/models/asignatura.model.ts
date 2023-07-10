export interface Asignatura {
    _id?: string;
    nombre: string;
    profesor:string;
}
  
export interface AsignaturaCreate {
    nombre: string;
    profesor:string;
}
  