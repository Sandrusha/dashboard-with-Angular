import { Injectable } from '@angular/core';
import { RandText } from '../interfaces/randText';
import { RANDTEXT } from '../mocks/mock-randText';

@Injectable({
  providedIn: 'root'
})

export class RandTextService {

  constructor() { }

  getRandText(): RandText[] {
    return RANDTEXT;
  }
}