import { Component } from '@angular/core';
//Para la api
import { PostServiceService } from '../app/post-service.service';
import { Post } from '../app/modelos/Post';

import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];
  title = 'tienda-front';

  constructor(private postService: PostServiceService, private router: Router) {}

  ngOnInit() {
    this.postService.getPost()
    .subscribe(
        (data: Post[]) => {
          this.posts = data;
          console.log(data);
        },
        error => {
          console.log(error);
        }
    );
  }

  irFormulario() {
    this.router.navigate(['/mostrarFormulario']);
  }
}
