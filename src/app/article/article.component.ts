import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  articles = [
    { title: 'Eager teens Give A Needed Boost to U.S. Vaccination Campaign', content: 'More than 2.5 million tweens and teens have gotten their first shot, making up about a quarter of all new vaccinations in recent weeks.', imageLink: "https://static01.nyt.com/images/2021/05/28/us/virus-vaccine-teens-promo-1622247593121/virus-vaccine-teens-promo-1622247593121-threeByTwoSmallAt2X.png?format=pjpg&quality=75&auto=webp&disable=upscale"},
    // { title: 'Israel\'s operation against Hamas was the world\'s first AI war', content: 'The IDF used artificial intelligence and supercomputing during the last conflict with Hamas in the Gaza Strip.', imageLink: "https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JD_ArticleMainImageFaceDetect/473086" },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
