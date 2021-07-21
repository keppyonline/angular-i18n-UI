import { Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title="multi-lingual-app";
  constructor(@Inject(DOCUMENT) private document: Document, private translateService: TranslateService) {
    let defaultLang = 'en';
    this.setRTL(defaultLang);
    translateService.setDefaultLang(defaultLang);
  }

  switchLanguage(language: string) {
    console.log(language);
    this.setRTL(language);
    this.translateService.use(language);
  }
  
  setRTL(language: string){
    let htmlTag = this.document.getElementsByTagName("html")[0] as HTMLHtmlElement;
    
    console.log(language);
    htmlTag.dir = language === "ar" ? "rtl" : "ltr";
    console.log(htmlTag.dir);
  }
}