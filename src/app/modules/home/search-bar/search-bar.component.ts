import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  EventEmitter,
  Output,
  ChangeDetectionStrategy
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { DashboardService } from '@app/service/dashboard.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchBarComponent implements OnInit {
  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  allPosts: any;
  autoCompleteList: any[];

  @ViewChild('autocompleteInput', { static: false })
  autocompleteInput: ElementRef;
  @Output() onSelectedOption = new EventEmitter();

  constructor(private dataService: DashboardService) {
    this.dataService.GetSecurities().subscribe(posts => {
      this.allPosts = posts;
    });
    this.myControl.valueChanges.subscribe(userInput => {
      this.autoCompleteExpenseList(userInput);
    });
  }

  ngOnInit() {}

  private autoCompleteExpenseList(input) {
    let categoryList = this.filterCategoryList(input);
    this.autoCompleteList = categoryList;
  }

  filterCategoryList(val) {
    var categoryList = [];
    if (typeof val != 'string') {
      return [];
    }
    if (val === '' || val === null) {
      return [];
    }
    return val
      ? this.allPosts.SecurityInfo.filter(
          s => s.SECURITY_NAME.toLowerCase().indexOf(val.toLowerCase()) != -1
        )
      : this.allPosts;
  }

  public displayFn(post) {
    let k = post ? post.SECURITY_NAME : post;
    return k;
  }

  public filterPostList(event) {
    var posts = event.source.value;
    if (!posts) {
      this.dataService.searchOption = [];
    } else {
      console.log('not');
      this.dataService.searchOption.push(posts);
      this.onSelectedOption.emit(this.dataService.searchOption);
    }
    this.focusOnPlaceInput();
  }

  public removeOption(option) {
    let index = this.dataService.searchOption.indexOf(option);
    if (index >= 0) this.dataService.searchOption.splice(index, 1);
    this.focusOnPlaceInput();
    this.onSelectedOption.emit(this.dataService.searchOption);
  }

  public focusOnPlaceInput() {
    this.autocompleteInput.nativeElement.focus();
    this.autocompleteInput.nativeElement.value = '';
  }
}
