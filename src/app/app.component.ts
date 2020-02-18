import { Component } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // constructor(private http: HttpClient) { }
  title = '788 DB Guru!'
  // configUrl = 'localhost:5000/get_question_and_answers';
  // title = this.http.get(this.configUrl)

  question_index = 0
  db_mock = [
    {
      'question': 'How much data do you plan on having?',
      'answers': [
        'Up to 1GB',
        'Up to 100GB',
        'Up to 1TB',
        'Above 1TB'
      ]
    },
    {
      'question': 'Is your scheme dynamic',
      'answers': [
        'Yes',
        'No'
      ]
    },
    {
      'question': 'Will you need text index',
      'answers': [
        'False',
        'True'
      ]
    },
    {
      'question': 'What is your SELECT rate',
      'answers': [
        '10 per minute',
        '100 per minute',
        '1000 per minute',
        'Above 1000'
      ]
    }
  ]

  get_final_answer() {
    this.db_mock = [
      {
        'question': 'You sould use: Oracle',
        'answers': []
      }
    ]
  }
  form_answer = {}
  get_next_question(answer_to_save) {
    this.form_answer[this.db_mock[this.question_index].question] = answer_to_save
    this.question_index++
    if (this.db_mock.length == this.question_index) {
      this.get_final_answer()
      this.question_index = 0
    }
    return this.db_mock[this.question_index].question
  }
}
