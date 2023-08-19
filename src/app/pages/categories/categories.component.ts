import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/services/mock.service';
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { CategoryCreationComponent } from 'src/app/components/forms/category-creation/category-creation.component';
import { CategoryEditComponent } from 'src/app/components/forms/category-edit/category-edit.component';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories: any[] = []

  constructor(private mockService : MockService, private modalService: NgbModal) { }

  ngOnInit(): void {
    this.categories= this.mockService.getItems()
  }

  open(){
    const modalRef = this.modalService.open(CategoryCreationComponent)
    modalRef.componentInstance.name = "Create Category"
  }

  openEdit(){
    const modalRef =this.modalService.open(CategoryEditComponent)
    modalRef.componentInstance.name = "Edit Category"
  }

}
