import { Injectable } from '@nestjs/common';
import { Manifest } from 'vite';

const VITE_HOST = 'http://ui_container:4200';
const VITE_VIEW_BROWSER_HOST = 'http://localhost:4200';
const MANIFEST_PATH = '.vite/manifest.json';

@Injectable()
export class AppService {
  private manifest: Manifest | undefined;
  private isDev: boolean = true;

  async getApplication() {
    const manifest = await this.getManifest();
    return {
      appSource: manifest['src/main.tsx'],
      viteHost: VITE_VIEW_BROWSER_HOST,
    };
  }

  private async getManifest(): Promise<Manifest> {
    if (this.manifest) return this.manifest;
    if (this.isDev) {
      return {
        'src/main.tsx': {
          file: 'src/main.tsx',
          name: 'main',
          src: `${VITE_VIEW_BROWSER_HOST}/src/main.tsx`,
          isEntry: true,
          css: ['/usr/app/src/index.css'],
          assets: ['assets/react.svg'],
        },
      };
    }
    const rest = await fetch(`${VITE_HOST}/${MANIFEST_PATH}`);
    const manifest = (await rest.json()) as Manifest;
    this.manifest = manifest;

    return this.manifest;
  }
}
