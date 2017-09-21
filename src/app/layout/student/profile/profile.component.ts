import { Component, OnInit } from '@angular/core';
import { DataService } from "app/services/data.service";
import * as _ from "lodash";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  data: any;
  public filterQuery = "";
  public rowsOnPage = 10;
  public sortBy = "name";
  public sortOrder = "asc";
  constructor(private DataService: DataService) { }
  ngOnInit() {
    this.DataService.getDataStudent().subscribe((posts) => {
      console.log(posts);
      this.data = posts;
      console.log(this.data);
    });
  }
  public removeItem(item: any) {

    console.log("Remove: ", item.id);
    //GET BY ID from api Student
    this.DataService.deleteStudentById(item.id).subscribe((studentDeleteById) => {
      console.log(studentDeleteById);
      this.data = _.filter(this.data, (elem) => elem != item);
    });
    console.log("Remove: ", item.id);

  }


}
