import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})

export class NavBarComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: Document, private translateService: TranslateService) {
    translateService.setDefaultLang('en');
  }

  switchLanguage(language: string) {
    console.log(language);
    this.setRTL(language);
    this.translateService.use(language);
  }
  
  setRTL(language: string){
    let htmlTag = this.document.getElementsByTagName("div")[0] as HTMLDivElement;
    htmlTag.style.direction = language === "ar" ? "rtl" : "ltr";

    let pTags = this.document.getElementsByTagName("p");
    this.changeDirection(pTags, language);

    let h2Tags = this.document.getElementsByTagName("h2");
    this.changeDirection(h2Tags, language);

    let labelTags = this.document.getElementsByTagName("div");
    this.changeDirection(labelTags, language);
  }

  changeDirection<T>(objCollection: HTMLCollectionOf<HTMLElement>, language: string){
    Array.from(objCollection).forEach(function (obj) {
      obj.style.direction = language === "ar" ? "rtl" : "ltr";
      obj.style.textAlign = language === "ar" ? "right" : "left";
      console.log(obj.style.direction);
    });
  }

  ngOnInit(): void {
  }

}
