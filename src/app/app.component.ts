import { Component } from '@angular/core';

export interface Post {
  title: string;
  text: string;
  id?: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts: Post[] = [
    { title: 'Хочу выучить Angular компоненты', text: 'Я учу', id: 1 },
    { title: 'Следующий', text: 'Я учу', id: 2 },
  ];

  updatePosts(post: Post) {
    this.posts.unshift(post);
    console.log('Post', post);
  }
  removePost(id: number) {
    console.log('id to remove', id);
    this.posts = this.posts.filter((p) => p.id !== id);
  }
  img =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png';
  frameWork = 'React';
  text = 'This is my first';
  titleColor = 'blue';

  constructor() {
    setTimeout(() => {
      this.titleColor = 'red';
      this.text = "Hehe no, it's an";
      this.frameWork = 'Angular';
      this.img =
        'https://cdn.icon-icons.com/icons2/2107/PNG/512/file_type_angular_icon_130754.png';
    }, 5000);
  }
}
