const styles =  [ require("./my-app.component.css") ] as string[];

export class MyAppComponent {
  renderStyle() {
    const elm = document.querySelector('#my-app')
    elm.querySelector('pre').innerHTML = styles[0];
  }
}

