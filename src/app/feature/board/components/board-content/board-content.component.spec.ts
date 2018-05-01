import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardContentComponent } from './board-content.component';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { BoardCrudService } from '../../../../core/services/board-crud.service';
import { ConfigService } from '../../../../core/services/config.service';

describe('BoardContentComponent', () => {
  let component: BoardContentComponent;
  let fixture: ComponentFixture<BoardContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule],
      providers: [ConfigService, BoardCrudService],
      declarations: [BoardContentComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardContentComponent);
    component = fixture.componentInstance;
    component.board = {id: 1, name: 'test'};
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
