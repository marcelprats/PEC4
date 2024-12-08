import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Article {
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
  selected?: boolean;
}

@Component({
  selector: 'app-article-item',
  standalone: true,
  imports: [CommonModule], // <-- Importem CommonModule aquí
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css']
})
export class ArticleItemComponent {
  @Input() article!: Article;
  @Output() select = new EventEmitter<void>();

  incrementQuantity(): void {
    if (this.article.isOnSale) {
      this.article.quantityInCart++;
    }
  }

  decrementQuantity(): void {
    if (this.article.quantityInCart > 0) {
      this.article.quantityInCart--;
    }
  }

  selectArticle(): void {
    this.select.emit();
  }
}
