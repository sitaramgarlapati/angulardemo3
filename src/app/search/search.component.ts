import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import {Person } from './person.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  query: string;
  searchResults: Array<Person>;

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  search(): void {
    this.searchService.getAll().subscribe(
      (data: any) => { this.searchResults = data; },
      error => console.log(error)
    );
  }

}
