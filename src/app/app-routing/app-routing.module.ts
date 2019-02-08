import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from '../contact/contact.component';
import { EducationComponent } from '../education/education.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { ProjectComponent } from '../project/project.component';
import { SkillsComponent } from '../skills/skills.component';
import { WorkComponent } from '../work/work.component';
import { SkillResolver } from '../skills/skill-resolver';
import { HomeComponent } from '../home/home.component';
import { EducationResolver } from '../education/education-resolver';
import { ProjectResolver } from '../project/project-resolver';
import { WorkResolver } from '../work/work-resolver';
import { ContactResolver } from '../contact/contact-resolver';



export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'education',
    component: EducationComponent,
    resolve: {
      education: EducationResolver
    }
  },
  {
    path: 'projects',
    component: ProjectComponent,
    resolve: {
      projects: ProjectResolver
    }
  },
  {
    path: 'skills',
    component: SkillsComponent,
    resolve: {
      skills: SkillResolver
    }
  },
  {
    path: 'work',
    component: WorkComponent,
    resolve: {
      work: WorkResolver
    }
  },
  {
    path: 'contact',
    component: ContactComponent,
    resolve: {
      contact: ContactResolver
    }
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  providers: [
    SkillResolver,
    EducationResolver,
    ProjectResolver,
    WorkResolver,
    ContactResolver
  ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
