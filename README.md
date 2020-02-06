# Angulardemo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.24.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build
```
ng build --configuration=production
```
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Add module
ng g module heros --route=heros --module=app

### ngnix settings
ngnix need to forward all urls to index.html to let angular handle the routing. Otherwise, will trigger 404.
* nginx.conf
```
    location / {
        root   /usr/share/nginx/html;
        index  index.html index.htm;
        try_files $uri $uri/ /index.html;
    }
```

### docker
```
npx lite-server --baseDir="dist/angulardemo"

ng build --configuration=production
docker build -t frankye2099/angular-demo:0.0.1 .
docker run -p 80:80 frankye2099/angular-demo:0.0.1
docker push frankye2099/angular-demo:0.0.1
```
### kubernetes deployment.yaml
```$xslt
kubectl create deployment demoui --image=frankye2099/angular-demo:0.0.1 --dry-run -o=yaml > deployment.yaml
echo --- >> deployment.yaml
kubectl create service loadbalancer demoui --tcp=80:80 --dry-run -o=yaml >> deployment.yaml
```
deploy
```$xslt
kubectl apply -f deployment.yaml

http://localhost
```
