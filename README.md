
# Angular Gallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## 项目札记
1. 在Angular的AOT编译模式下，component的模板内部只能访问public字段，protected字段也不行。除非在`angular.json`中设置`aot`选项为`false`。
2. 可以使用Angular Material来建立UI，省时省力，还容易保持一致的风格。
3. 商业应用中的图片通常不会直接存储在数据库中，而是放到独立的服务器，数据库中只存储图片真实地址的链接。

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
