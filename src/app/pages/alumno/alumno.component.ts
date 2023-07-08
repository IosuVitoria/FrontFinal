import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../../../services/alumnoService.component';
import { Alumno } from '../../models/alumno.model';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {
  alumno: Alumno | undefined;
  alumnoId!: string | null;

  constructor(
    private route: ActivatedRoute,
    private alumnoService: AlumnoService
  ) { }

  ngOnInit(): void {
    this.alumnoId = this.route.snapshot.paramMap.get('id');
    console.log(this.alumnoId);

    if (this.alumnoId) {
      this.alumnoService.getAlumnoById(this.alumnoId).subscribe(
        (alumno: Alumno) => {
          this.alumno = alumno;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
