import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoContentComponent } from './video-content.component';

describe('VideoContentComponent', () => {
  let component: VideoContentComponent;
  let fixture: ComponentFixture<VideoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VideoContentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
