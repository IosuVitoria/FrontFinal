import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  nuevoMensaje: string= "" ;
  mensajes: any = [
    {
      emisor: "id",
      texto: "Hola, que tal?"
    },{
      emisor: "id",
      texto: "todo bien y tu?"
    },{
      emisor: "id",
      texto: "que bueno"
    },{
      emisor: "id",
      texto: "chao, me voy"
    },{
      emisor: "id",
      texto: "que te vaya bien"
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }
  enviarMensaje(){
    console.log(this.nuevoMensaje);
    this.nuevoMensaje = "";
  }

}
