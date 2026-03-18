import { Component, inject, OnInit, signal } from '@angular/core';
import { Recipe } from '../../services/recipe';

@Component({
  selector: 'app-recipes',
  imports: [],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes implements OnInit {
  rp = inject(Recipe);

  recipes = signal<any[]>([]);

  ngOnInit(): void {
    this.rp.getRecipes().subscribe(data =>
    {
      console.log(data);
      this.recipes.set(data);
    }
    )
  }
}
