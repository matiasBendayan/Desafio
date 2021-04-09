import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-modal-comentarios',
  templateUrl: './modal-comentarios.component.html',
  styleUrls: ['./modal-comentarios.component.css']
})
export class ModalComentariosComponent implements OnInit {
  public title: string;
  public comentarios: any;
  private urlComentarios = 'https://jsonplaceholder.typicode.com/posts/';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get(this.urlComentarios + this.title + '/comments').subscribe(values => {
      this.comentarios = values;
    });
  }
}
