import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  data= [{
    id:1,
    language:{
      languageName:'Ennglish',
    categoryName : 'test Category',
    description:'test Description',
    moreLanguages:[{
      languageName:'Spanish',
      categoryName : 'test Category1',
      description:'test Description1',
    }]
    },
    color:'red',
    responsibilities:{
      person:'test Person',
      role: ' guest',
      moreResp:[{
        person:'test Person1',
        role: ' leader',
      }]
    },
    thresholds:{
      thresholdId:1,
      language:{
        languageNAme:'French',
        thresholdName:'test Threshold',
        description:'test description',
        moreLanguages:[{
          languageNAme:'French1',
        thresholdName:'test Threshold1',
        description:'test description1',
        }]
      },
      conditions:{
        sign:1,
        color:1,
        operator:1,
        value:2,
        moreConditions:[{
          sign:1,
        color:1,
        operator:1,
        value:2,
        }],
      },
      responsibilities:{
        person:'test Person',
        role: ' guest',
        moreResp:[{
          person:'test Person1',
          role: ' leader',
        }]
      },
      subThreshold:{
        subThresholdId:1,
        language:{
          languageNAme:'French',
          thresholdName:'test Threshold',
          description:'test description',
          moreLanguages:[{
            languageNAme:'French1',
          thresholdName:'test Threshold1',
          description:'test description1',
          }]
        },
        conditions:{
          sign:1,
          color:1,
          operator:1,
          value:2,
          moreConditions:[{
            sign:1,
          color:1,
          operator:1,
          value:2,
          }],
        },
        responsibilities:{
          person:'test Person',
          role: ' guest',
          moreResp:[{
            person:'test Person1',
            role: ' leader',
          }]
        },
      }
    }
  }
  ];
  constructor() { }

  getCategory(){
    return this.data
  }
}
