import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IComment } from '../Shared-Classes-and-types/IComment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  comments: IComment[] = [];
  selectedId: any;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      this.selectedId = params.get('postId');

      // Fetch comments for the selected post
      this.http.get<IComment[]>(
          `https://jsonplaceholder.typicode.com/posts/${this.selectedId}/comments`
        )
        .subscribe((data) => {
          this.comments = data;
        });
    });
  }


  onSelect(product: any) {
    // navigate to department details component and pass the id to it
    this.router.navigate(['/posts', product.prodId]);
  }
}




