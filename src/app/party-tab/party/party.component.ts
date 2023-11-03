import { Component, OnInit } from '@angular/core';
import { Pokemon } from 'src/lib/models/Types';

@Component({
  selector: 'app-party',
  templateUrl: './party.component.html',
  styleUrls: ['./party.component.css']
})
export class PartyComponent implements OnInit {
  party: Pokemon[]

  constructor() {
    this.party = []
  }

  ngOnInit(): void {  }
}
