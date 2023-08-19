import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-category-creation',
  templateUrl: './category-creation.component.html',
  styleUrls: ['./category-creation.component.scss']
})
export class CategoryCreationComponent implements OnInit {
  @Input() name: string

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

}
