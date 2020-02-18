import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '788 DB Guru!'
  question_index = 0
  db_mock = [
    {
      'question': 'Size of DB',
      'answers': [
        'answer1',
        'answer2'
      ]
    },
    {
      'question': 'Load in DB',
      'answers': [
        'answer3',
        'answer2',
        'answer1'
      ]
    }
  ]

  get_final_answer() {
    this.db_mock = [
      {
        'question': 'You sould use: ElasticSearch',
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
