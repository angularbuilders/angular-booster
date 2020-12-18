import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  private titleBase: string = `AngularBooster | `;

  constructor(private title: Title, private meta: Meta) {}

  public setTitle(titlePart: string): void {
    this.title.setTitle(this.titleBase + titlePart);
  }

  public setDescription(description: string): void {
    this.meta.updateTag({ name: 'description', content: description }, 'name=description');
  }

  public setKeywords(keywords: string[]): void {
    this.meta.updateTag(
      {
        name: 'keywords',
        content: keywords.reduce((prev, curr) => (prev += `, ${curr}`)),
      },
      'name=keywords'
    );
  }
}
