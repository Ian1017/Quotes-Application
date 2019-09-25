import { Component, OnInit } from '@angular/core';
import { Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'The warmer the bed the colder the future.', 'Kingstone Kirenge',"Mengo",new Date(2020,3,14)),
    new Quote(2,'If it is behind you it does not matter.','Enzo Ferrari',"Mengo",new Date(2019,6,9)),
    new Quote(3,'The future belongs to those who believe in the beauty of their dreams.','Eleanor Roosevelt',"Mengo",new Date(2022,1,12)),
    new Quote(4,'We aim above the mark to hit the mark.','Ralph Waldo Emerson',"Mengo",new Date(2019,0,18)),
    new Quote(5,'You cant just beat the person who never gives up.','Babe Ruth',"Mengo",new Date(2019,2,14)),
    new Quote(6,'If you can dream it,You can do it.','Walt Disney',"Mengo",new Date(2030,3,14)),
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  addNewQuote(quote){
   let quoteLength = this.quotes.length;
   quote.id = quoteLength+1;
   quote.completeDate = new Date(quote.completeDate)
   this.quotes.push(quote)
 }

 deleteQuote(isDelete, index){
   if (isDelete) {
     let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
 
     if (toDelete){
       this.quotes.splice(index,1)
     }
   }
 }
   constructor() { }
 
   ngOnInit() {
   }
 
 }
