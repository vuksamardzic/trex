import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardRootComponent } from './board-root.component';
import { BoardContentComponent } from '../board-content/board-content.component';
import { FormsModule } from '@angular/forms';
import { BoardCrudService } from '../../../../core/services/board-crud.service';
import { ConfigService } from '../../../../core/services/config.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BoardRootComponent', () => {
  let component: BoardRootComponent;
  let fixture: ComponentFixture<BoardRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [BoardCrudService, ConfigService],
      declarations: [BoardRootComponent, BoardContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
