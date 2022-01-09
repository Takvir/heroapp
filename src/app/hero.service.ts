import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


import { MessageService } from './message.service';
import { Observable } from 'rxjs/internal/Observable';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add(`HeroService: Fetched Heroes`);
    return of(HEROES);
  }

  getHero(id: any): Observable<any> {
    this.messageService.add(`HeroService: Fetched with id: ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }

}
