import { TestBed, fakeAsync } from '@angular/core/testing';

import { DataService, skillsArray, projectArray, workArray, educationArray, contactArray } from './data.service';

describe('DataService', () => {

  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(DataService);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should get skills', fakeAsync(() => {
    service.getSkills().then((result) => {
      expect(result).toEqual(skillsArray);
    });
  }));

  it('should get projects', fakeAsync(() => {
    service.getProjects().then((result) => {
      expect(result).toEqual(projectArray);
    });
  }));

  it('should get work', fakeAsync(() => {
    service.getWork().then((result) => {
      expect(result).toEqual(workArray);
    });
  }));

  it('should get education', fakeAsync(() => {
    service.getEducation().then((result) => {
      expect(result).toEqual(educationArray);
    });
  }));

  it('should get contacts', fakeAsync(() => {
    service.getContacts().then((result) => {
      expect(result).toEqual(contactArray);
    });
  }));
});
