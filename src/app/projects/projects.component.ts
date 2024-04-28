import { Component } from '@angular/core';

import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    MatDividerModule,
    MatListModule,
    MatExpansionModule,
    MatButtonModule,
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
  public openExamCenterUrl(): void {
    const examCenterUrl = 'https://examcenter.hig.se';
    window.open(examCenterUrl, '_blank');
  }

  public openThesisWorkUrl(): void {
    const thesisWorkUrl = 'http://www.diva-portal.org/smash/record.jsf?dswid=-7175&pid=diva2%3A1438472&c=8&searchType=SIMPLE&language=sv&query=optimering+av+sk%C3%A4rande+bearbetning&af=%5B%5D&aq=%5B%5B%5D%5D&aq2=%5B%5B%5D%5D&aqe=%5B%5D&noOfRows=50&sortOrder=author_sort_asc&sortOrder2=title_sort_asc&onlyFullText=false&sf=all';
    window.open(thesisWorkUrl, '_blank');
  }
}
