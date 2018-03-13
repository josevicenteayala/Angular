import { Component } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService, HeroeDetalle, Heroe} from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent{

  heroe:HeroeDetalle = null;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
      this.activatedRoute.params.subscribe(params =>{
        let id:string = params['id'];
        let nombre:string = params['nombre'];
        if(this.check(id,'id')){
          this.heroe = this._heroesService.getHeroe(id);
        }else{
          this.heroe = this._heroesService.buscarHeroePorNombre(nombre);
        }
        if(this.heroe.casa=='Marvel'){
          this.heroe.imagenCasa = 'assets/img/marvel.jpg';
        }else{
          this.heroe.imagenCasa = 'assets/img/dc.png';
        }
        console.log(this.heroe);
    });
  }

  check(varToCheck:any, name:string):boolean {
      if (varToCheck == null) {
          console.log(name + ' == null');
          return false;
      }

      if (varToCheck === null) {
          console.log(name + ' === null');
          return false;
      }

      if (typeof varToCheck === 'undefined') {
          console.log(name + ' is undefined');
          return false;
      }
      return true;
  }

}
