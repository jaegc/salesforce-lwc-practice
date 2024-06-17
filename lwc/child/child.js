import { LightningElement,api } from 'lwc';

export default class Child extends LightningElement {
   @api parentMessage;
    childMessage;
    fromChild;

   handleChildChange(event){
    this.childMessage = event.target.name;
    this.fromChild = event.target.value
   }

   handleClick(){
    let evt = new CustomEvent('getchildmessage',{detail : {
        CMsg:this.fromChild
    }});
    this.dispatchEvent(evt);
   }

}