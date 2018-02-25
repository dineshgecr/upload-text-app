import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  onImageChangeFromFile(event) {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
        if(file.type == "text/plain") {
          console.log(file.type);
          alert("this is text file");

        }
        else {
          alert("please fill right file");
        }
    }
  }
}


