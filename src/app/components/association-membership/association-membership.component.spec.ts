import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssociationMembershipComponent } from './association-membership.component';

describe('AssociationMembershipComponent', () => {
  let component: AssociationMembershipComponent;
  let fixture: ComponentFixture<AssociationMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssociationMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssociationMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
