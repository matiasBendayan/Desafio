import {Component, Input, OnInit} from '@angular/core';
import {Posts} from '../main-component/Posts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-mostrar-post',
  templateUrl: './mostrar-post.component.html',
  styleUrls: ['./mostrar-post.component.css']
})
export class MostrarPostComponent implements OnInit {
  @Input() nuevoPost: Posts;
  constructor() { }

  ngOnInit(): void {

  }
}
