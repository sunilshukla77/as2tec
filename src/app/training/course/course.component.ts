import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {
courses: any[] =[{
  "id": 1,
  "name": "Java",
  "description": "Core Java and advance Java",
  "imageurl": "",
  "courseContent": "Util,Lang,IO and Database connection package",
  "batchDetail": "20th Jun 2019"
},
{
  "id": 2,
  "name": "AI Machine learning",
  "description": "Python, chatboot, watson",
  "imageurl": "",
  "courseContent": "Python, chatboot, watson",
  "batchDetail": "20th Jun 2019"
},

{
  "id": 3,
  "name": "Web Designing",
  "description": "Html, CSS, Javascript, Jquery",
  "imageurl": "",
  "courseContent": "Util,Lang,IO and Database connection package",
  "batchDetail": "20th Jun 2019"
},

{
  "id": 4,
  "name": "web Development ",
  "description": "Html, CSS, JavaScript, Angular TypeScript",
  "imageurl": "",
  "courseContent": "Util,Lang,IO and Database connection package",
  "batchDetail": "20th Jun 2019"
},

{
  "id": 5,
  "name": "Spring and Spring Cloud",
  "description": "Spring, web service, spring cloud",
  "imageurl": "",
  "courseContent": "Util,Lang,IO and Database connection package",
  "batchDetail": "20th Jun 2019"
},

{
  "id": 6,
  "name": "AWS cloud",
  "description": "AWS (Amazon web service) Cloud",
  "imageurl": "",
  "courseContent": "EC2, S3, web hosting, Database cloud ",
  "batchDetail": "20th Jun 2019 Online 7.00 AM as per IST"
}
];
  constructor() { }

  ngOnInit() {
  }

}
