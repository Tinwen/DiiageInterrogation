import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from '../models/post.interface';
import { PostsServiceService } from '../Service/posts-service.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit {
  post?: Post;
  isLoading: boolean = false;
  posts: Post[] | undefined;
  constructor(private route: ActivatedRoute, private postsService : PostsServiceService) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postsService.get().subscribe(post=>{
        this.posts = post as Post[];
        this.isLoading= false;
        this.post = this.posts.find(post=> post.slug == params['slug']);

        this.posts.filter(post=> post.slug != params['slug']);
      });
    });
  }
}
