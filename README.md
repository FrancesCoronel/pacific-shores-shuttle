![Pacific Shores Shuttle](https://fvcproductions.github.io/pacific-shores-shuttle/assets/img/logo.svg)

# Pacific Shores Shuttle

[![Github Issues](https://img.shields.io/github/issues/fvcproductions/pacific-shores-shuttle.svg?style=flat-square)](https://github.com/fvcproductions/pacific-shores-shuttle/issues) [![GitHub Pull-Requests](https://img.shields.io/github/issues-pr/fvcproductions/pacific-shores-shuttle.svg?style=flat-square)](https://github.com/fvcproductions/pacific-shores-shuttle/pulls) [![MIT License](http://img.shields.io/:license-mit-blue.svg?style=flat-square)](http://badges.mit-license.org) [![Donate via PayPal](https://img.shields.io/badge/Donate-PayPal-blue.svg?style=flat-square)](http://paypal.me/fvcproductions)

If you work at Pacific Shores, you can figure out when the next shuttle is coming! 🚌

![Screenshot](https://i.imgur.com/aewjZ76.png)

## Installation

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.3.1.

### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200`. The app will automatically reload if you change any of the source files.

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

### Deploy

```bash
# Build out GitHub Pages friendly version
ng build --prod --base-href "https://pacificshoresshuttle.com/"
# Push changes to gh-pages branch
git add dist && git commit -m "Making awesome changes"
git subtree push --prefix dist origin gh-pages
```

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Future Plans

- Add relevant background color depending on the time till next shuttle
  - i.e. If no shuttle for next 10 hours, it will be red
- Modularity should be improved
  - code is not as DRY as it could be
- Show only relevant pictures depending on selected stop
  - i.e. If user chooses 1200 Seaport Blvd as stop, then only the map, caltrain pick up, and 1200 pick up stop image will show up

## Resources

- Pluralsight
  - [Getting Started with Angular 2](https://app.pluralsight.com/library/courses/angular-2-getting-started-update/table-of-contents)
- [Angular CLI](https://cli.angular.io/)
- Bootstrap 4
- Font Awesome

## Contributing

> To get started...

- 🍴 Fork this repo [here](https://github.com/fvcproductions/pacific-shores-shuttle#fork-destination-box)
- 🔨 Hack away
- 👥 Add yourself as a contributor under credits
- 🔧 Make a pull request [here](https://github.com/fvcproductions/pacific-shores-shuttle/compare)
- 🎉 Get your pull request approved - success!

Or just [create an issue](https://github.com/fvcproductions/pacific-shores-shuttle/issues) - any little bit of help counts! 😊

## Credits

- [FVCproductions](http://fvcproductions.com) 🍓🍫