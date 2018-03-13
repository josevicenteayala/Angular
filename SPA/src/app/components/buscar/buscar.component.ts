import { Component, OnInit } from '@angular/core';
import {HeroesService,Heroe, HeroeDetalle} from '../../services/heroes.service';
import {ActivatedRoute} from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html'
})
export class BuscarComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor(private activatedRoute:ActivatedRoute,
              private _heroesService:HeroesService,
              private _router:Router) {
    this.activatedRoute.params.subscribe(
      params=>{
          this.heroes = this._heroesService.buscarHeroes(params['nombre']);
      }
    );
  }

  ngOnInit() {

  }

  verHeroe(nombre:string){
    let heroeDetalle : HeroeDetalle = this._heroesService.buscarHeroePorNombre(nombre);
    this._router.navigate(['/heroe',heroeDetalle.id]);
  }

}
