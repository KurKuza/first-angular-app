import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { Post } from './../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: Post | undefined;
  @Output() onRemove = new EventEmitter<number>();
  removePost() {
    this.onRemove.emit(this.post?.id);
  }

  ngOnInit(): void {}
  ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  constructor() {}
}
