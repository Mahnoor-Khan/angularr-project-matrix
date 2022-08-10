import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,FormArray } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations:[
    trigger('fade' , [
      transition('void => *',[
        style({opacity:0}),
        animate(2000)
      ])
    ])
  ]
})
export class MainPageComponent implements OnInit {

  // categoryForm = new FormGroup({
  //   language : new FormControl(''),
  //   categoryName : new FormControl(''),
  //   description : new FormControl(''),
  // })
checking=[{name:'',language:''}]
  colorName = ''
  get moreLanguages(){
    return this.categoryForm.get('moreLanguages') as FormArray
  }

  get moreResp(){
    return this.categoryForm.get('moreResp') as FormArray
  }
  get newCat(){
    return this.newCategory.get('newCat') as FormArray
  }

  moreLanguage(){
    this.moreLanguages.push(this.fb.group({
      languageName:[''],
    categoryName:[''],
    description: ['']
    }))
  }
  moreRes(){
    this.moreResp.push(this.fb.group({
      person:[''],
      personCategory:['']
    }))
  }
  name :any
  constructor(private fb : FormBuilder) { }
  categoryForm= this.fb.group({
    language:this.fb.group({
      languageName:[''],
    categoryName:[''],
    description: ['']
    }),
    responsibilities:this.fb.group({
      person:[''],
      role:['']
    }),
    colors:[this.colorName],
    moreLanguages:this.fb.array([]),
    moreResp:this.fb.array([])
  })
  newCategory=this.fb.group({
    newCat : this.fb.array([])
  })
  display = "none";
  ngOnInit(): void {
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  setColorName(value:any){
    this.colorName=value    
  }
  submit(){
    this.display = "none";
    // this.name=this.categoryForm.value.language?.categoryName
    console.log(this.categoryForm.value.language?.categoryName)
    this.newCat.push({
      namee :this.categoryForm.value.language?.categoryName
    })
    
  }

}
