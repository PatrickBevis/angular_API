import { Component, inject, OnInit, signal } from '@angular/core';
import { Ingredient } from '../../services/ingredient';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.html',
  styleUrl: './services.css',
})

export class Services implements OnInit {
   ing = inject(Ingredient);

  ingredients=signal<any[]>([]);

  ngOnInit(): void {
    // this.pr.getProduits().subscribe({
    //   next:(data)=>{

    //     this.produits.push(data)
    //   },
    //   error:(err)=>{
    //     console.log(err);
    //   },
    //   complete:() => {
    //     console.log(this.produits);
    //   },

    // })
    this.ing.getIngredients().subscribe(data => 
    {
      console.log(data);
      this.ingredients.set(data);

    }
    )

  }
}
