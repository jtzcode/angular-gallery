
# Angular Gallery

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.6.

## 项目札记
1. 在Angular的AOT编译模式下，component的模板内部只能访问public字段，protected字段也不行。除非在`angular.json`中设置`aot`选项为`false`。
2. 可以使用Angular Material来建立UI，省时省力，还容易保持一致的风格。
3. 商业应用中的图片通常不会直接存储在数据库中，而是放到独立的服务器，数据库中只存储图片真实地址的链接。
4. 将Server类声明为抽象类，可以防止直接对其实例化。反之，通过继承Server类来实现实际工作的Server。将不同种类的Server的区别之处，声明为抽象方法（比如`AddRouting`），在各自的类中去实现。
5. 每个类只完成自己分内的工作（比如各种Router类），各个类之间通用的功能可以利用基类和接口来定义。
6. 利用`Subject`作为数据源，由其衍生的`Observable`对象作为订阅者。前者通过`next`方法生产新数据，后者通过`subscribe`方法获得数据。
7. 对话框中的组件（FileUploadComponent）可以通过Material提供的对话框类与外部组件（AppComponent）关联起来。可以看到，AppComponent页面中并没有显式地声明FileUpload组件，而是通过Dialog的open方法动态生成。


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
