export interface Alumno {
  _id?: string;
  nombre: string;
  apellidos: string;
  Curso: string;
  tutor1: string;
  tutor2?: string;
  tutorCurso: string;
  asignaturas: string[];
  email: string;
}

export interface AlumnoCreate {

  nombre: string;
  apellidos: string;
  Curso: string;
  tutor1: string;
  tutor2?: string;
  tutorCurso: string;
  asignaturas: string[];
  email: string;
}