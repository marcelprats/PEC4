import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Article {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  selected: boolean;
}

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() select = new EventEmitter<Article>();

  incrementQuantity(): void {
    this.article.quantityInCart++;
  }

  decrementQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }

  onSelect(): void {
    this.select.emit(this.article);
  }
}
