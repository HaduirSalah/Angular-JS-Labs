import { Component } from '@angular/core';
import { IPost } from '../Shared-Classes-and-types/IPost';
import { PostService } from 'src/services/post.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent {
  Posts!: IPost[];
  //  Posts?:IPost[];
  errorMessage: any;

  constructor(private postService: PostService,private router:Router,private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.postService.GetAllPosts().subscribe({
      next: (data) => (this.Posts = data),
      error: (error) => (this.errorMessage = error),
    });
  }

  viewComments(postId: number) {
    this.router.navigate(['/comments', postId]);
  }

}
