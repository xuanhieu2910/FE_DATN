import {Inject, Injectable, PLATFORM_ID, Renderer2, RendererFactory2} from '@angular/core';
import {DOCUMENT, isPlatformBrowser} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class ScriptService {
  private renderer: Renderer2;

  private scripts: any = {};

  constructor(
    rendererFactory: RendererFactory2,
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  async loadSpecificScript(listScriptUrl: string[]) {
    console.log(listScriptUrl)

    await listScriptUrl.forEach((url) => {
      const node = this.renderer.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      this.document.getElementsByTagName('head')[0].appendChild(node);
    })
  }

  async loadSpecificScriptOnSpecificPage(listScriptUrl: string[], currentPageSelector: string) {
    await listScriptUrl.forEach((url) => {
      const node = this.renderer.createElement('script');
      node.src = url;
      node.type = 'text/javascript';
      node.async = false;
      node.charset = 'utf-8';
      this.document.getElementsByTagName(currentPageSelector)[0].appendChild(node);
    })
  }

  async loadSpecificCSSOnSpecificPage(listCSSUrl: string[], currentPageSelector: string) {
    if (!isPlatformBrowser(this.platformId)) {
      return
    }
    await listCSSUrl.forEach((url) => {
      const node = this.renderer.createElement('link');
      node.href = url;
      node.rel = "stylesheet"
      this.document.getElementsByTagName(currentPageSelector)[0].appendChild(node);
    })
  }
}

