import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Posts} from '../main-component/Posts';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-post-component',
  templateUrl: './new-post-component.component.html',
  styleUrls: ['./new-post-component.component.css']
})
export class NewPostComponentComponent implements OnInit {
  title = '';
  body = '';
  newPostUrl = 'https://jsonplaceholder.typicode.com/posts';
  newPost: Posts = new Posts();

  constructor(private http: HttpClient,private router: Router) {
  }

  ngOnInit(): void {}

  AgregarPosts() {
    this.newPost.body = this.body;
    this.newPost.title = this.title;
    this.newPost.userId = Math.floor(Math.random() * ((100 + 1) - 10) + 10);
    this.http.post(this.newPostUrl, this.newPost).subscribe(values => {
      this.newPost = new Posts();
      Object.assign(this.newPost, values);
    });
  }
  volverPrincipal() {
    this.router.navigateByUrl('');
  }

}
