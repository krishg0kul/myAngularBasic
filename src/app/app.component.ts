import { Component } from '@angular/core';

function log(target,name,descriptor){
  console.log(target, name, descriptor)
  const original = descriptor.value

  descriptor.value = function(){
    console.log("function check")
  }
return descriptor
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-project';

  constructor(){
    this.aBasicMethod()
  }

  @log
  aBasicMethod(){
    console.log("hy")
  }
}
