import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-yt-player',
  templateUrl: './yt-player.component.html',
  styleUrls: ['./yt-player.component.css']
})
export class YtPlayerComponent implements OnInit, OnChanges {

  private  youtubeUrlPrefix = '//www.youtube.com/embed/'

  @Input() videos: Array<string>;
  safeVideoUrls: Array<SafeResourceUrl>;

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.safeVideoUrls = this.videos ?
      this.videos
        .map(v => this.sanitizer.bypassSecurityTrustResourceUrl(this.youtubeUrlPrefix + v))
    : this.videos;
  }

}
