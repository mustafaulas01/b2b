import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-test-error',
  templateUrl: './test-error.component.html',
  styleUrls: ['./test-error.component.scss']
})
export class TestErrorComponent {
baseUrl=environment.apiUrl;

constructor(private http:HttpClient) {}


  get404Error() {
    this.http.get(this.baseUrl + 'products/42').subscribe({

      next: response => console.log("Hata :" + response),
      error: error => console.error(error)

    })
  }
  
  get500Error() {
    this.http.get(this.baseUrl + 'buggy/servererror').subscribe({

      next: response => console.log("Hata :" + response),
      error: error => console.error(error)

    })
  }
}
