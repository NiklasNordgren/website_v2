import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';

import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatMenuModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  isHandset$: Observable<boolean> = this.breakpointObserver
    .observe(Breakpoints.Handset)
    .pipe(map((result) => result.matches));

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  public openGitHubUrl(): void {
    const gitHubUrl = 'https://github.com/niklasnordgren';
    window.open(gitHubUrl, '_blank');
  }

  public openLinkedInUrl(): void {
    const linkedInUrl = 'https://www.linkedin.com/in/niklas-nordgren-3270a31a7';
    window.open(linkedInUrl, '_blank');
  }

  public navigate(route: string): void {
    this.router.navigateByUrl(route);
  }
}
