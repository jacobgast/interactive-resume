import { async, TestBed, fakeAsync } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ProjectComponent } from './project/project.component';
import { SkillsComponent } from './skills/skills.component';
import { WorkComponent } from './work/work.component';
import { routes } from './app-routing/app-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactResolver } from './contact/contact-resolver';
import { EducationResolver } from './education/education-resolver';
import { ProjectResolver } from './project/project-resolver';
import { SkillResolver } from './skills/skill-resolver';
import { WorkResolver } from './work/work-resolver';
import { NgZone } from '@angular/core';
import { isFunction } from 'lodash';

// wrapRouterInNgZone from piotrl at
// https://github.com/angular/angular/issues/25837#issuecomment-445796236

/**
 * Wrapper of Angular router (only for testing purpose)
 * Meant to run all router operations within Angular zone
 *  * Keep change detection enabled
 *  * Avoids flooded console with warnings
 *    https://github.com/angular/angular/issues/25837
 *
 * @see Router
*/
export function wrapRouterInNgZone(router: Router, ngZone: NgZone): Router {
  return new Proxy(router, {
    get(target: Router, p: PropertyKey): any {
      const invokedProperty = target[p];
      if (!isFunction(invokedProperty)) {
        return invokedProperty;
      }

      return function(...args: Array<any>): any {
        return ngZone.run(() => invokedProperty.apply(target, args));
      };
    },
  });
}

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes)
      ],
      declarations: [
        AppComponent,
        ContactComponent,
        EducationComponent,
        HomeComponent,
        PageNotFoundComponent,
        ProjectComponent,
        SkillsComponent,
        WorkComponent,
        NavbarComponent
      ],
      providers: [
        { provide: ContactResolver, useValue: (() => null) },
        { provide: EducationResolver, useValue: (() => null) },
        { provide: ProjectResolver, useValue: (() => null) },
        { provide: SkillResolver, useValue: (() => null) },
        { provide: WorkResolver, useValue: (() => null) }
      ]
    }).compileComponents();
  }));

  let fixture;
  let router: Router;

  beforeEach(() => {
    router = wrapRouterInNgZone(
      TestBed.get(Router),
      TestBed.get(NgZone)
    );
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('navigate to "skills" redirects you to /skills', fakeAsync(() => {
    router.navigate(['skills']).then(() => {
      expect(router.url).toBe('/skills');
    });
  }));

  it('navigate to "contact" redirects you to /contact', fakeAsync(() => {
    router.navigate(['contact']).then(() => {
      expect(router.url).toBe('/contact');
    });
  }));

  it('navigate to "education" redirects you to /education', fakeAsync(() => {
    router.navigate(['education']).then(() => {
      expect(router.url).toBe('/education');
    });
  }));

  it('navigate to "projects" redirects you to /projects', fakeAsync(() => {
    router.navigate(['projects']).then(() => {
      expect(router.url).toBe('/projects');
    });
  }));

  it('navigate to "work" redirects you to /work', fakeAsync(() => {
    router.navigate(['work']).then(() => {
      expect(router.url).toBe('/work');
    });
  }));
});
