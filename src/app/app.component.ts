import { Component } from '@angular/core';
//Para la api
import { PostServiceService } from '../app/post-service.service';
import { Post } from '../app/modelos/Post';
// Para el formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts: Post[] = [];
  title = 'tienda-front';

  todoForm: FormGroup;

  constructor(private postService: PostServiceService, private formBuilder: FormBuilder) { 
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      done: false
    });
  }

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

  saveTodo() {
    console.log(this.todoForm.value);
  }
}
