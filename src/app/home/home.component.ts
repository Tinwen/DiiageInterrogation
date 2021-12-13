import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post.interface';
import { PostsServiceService } from '../Service/posts-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'ng-best-dad-jokes';
  isLoading: boolean = false;
  posts: Post[] | undefined;
  constructor(private postsService : PostsServiceService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.postsService.get().subscribe(post=>{
      this.posts = post as Post[];
      this.isLoading= false;
    });
  }

}
