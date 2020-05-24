import { NgModule } from '@angular/core';
import { MyModalComponent } from './modal/my-modal.component';
import { HomeComponent } from './page/home.component';
import { HomeRoutingModule } from './home.routing';
import { SharedModule } from '@shared/shared.module';
import { ProjectItemComponent } from './page/project-item/project-item.component';
import { ProjectDetailsComponent } from './page/project-details/project-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import {
  MatIconModule,
  MatInputModule,
  MatAutocompleteModule,
  MatChipsModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
    HomeComponent,
    MyModalComponent,
    ProjectItemComponent,
    ProjectDetailsComponent,
    SearchBarComponent
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    MatIconModule,
    MatInputModule,
    MatAutocompleteModule,
    MatChipsModule,
    MatFormFieldModule
  ],
  exports: [],
  providers: [],
  entryComponents: [MyModalComponent]
})
export class HomeModule {}
