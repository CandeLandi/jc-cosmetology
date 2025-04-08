import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeroComponent } from './components/hero/hero.component';
import { ServicesComponent } from './components/services/services.component';
import { ProfessionalProfileComponent } from './components/professional-profile/professional-profile.component';
import { SkinAnalysisComponent } from './components/skin-analysis/skin-analysis.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    ServicesComponent,
    ProfessionalProfileComponent,
    SkinAnalysisComponent,
    ContactComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jc-cosmetology';
  showBackToTop = signal(false);

  @HostListener('window:scroll')
  onWindowScroll() {
    this.showBackToTop.set(window.scrollY > 500);
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
