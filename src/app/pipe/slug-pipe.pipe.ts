import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../models/post.interface';

@Pipe({
  name: 'slugPipe'
})
export class SlugPipePipe implements PipeTransform {

  transform(posts:Post[], id:Number) {
    return posts.filter(posts=>posts.id!=id);
  }
}
