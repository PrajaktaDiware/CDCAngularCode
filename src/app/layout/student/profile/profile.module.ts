import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent, HeaderComponent } from "app/shared";
import { LayoutComponent } from "app/layout/layout.component";
import { ProfileRoutingModule } from "app/layout/student/profile/profile-routing.module";
import { ProfileComponent } from "app/layout/student/profile/profile.component";
import { DataTableModule } from "angular2-datatable";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DataFilterPipeStudent } from "app/layout/student/profile/data-filter.pipe";


@NgModule({
    imports: [
        CommonModule,
        ProfileRoutingModule,
        DataTableModule,
        FormsModule,
        HttpModule
    ],
    declarations: [
        ProfileComponent,DataFilterPipeStudent
    ]
})
export class ProfileModule { }
