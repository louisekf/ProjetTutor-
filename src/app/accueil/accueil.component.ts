import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Typewriter from 't-writer.js'

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {


  constructor(private router: Router,private route: ActivatedRoute,) {}
  ngOnInit() :void {
    const target = document.querySelector('.tw');
    const writer = new Typewriter(target, {
      loop: true, 
      typeColor: 'black' 
    })
    
    writer
      .strings(
        400,
        "Bienvenue à Urgence Cardio ",
        "Votre bien être", 
        "Notre priorité!"
      )
      .start()
          
  }
  Authentifier() {
    this.router.navigate(['/login']);
  }
}
