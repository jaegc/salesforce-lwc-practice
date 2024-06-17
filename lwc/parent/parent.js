import { LightningElement, wire } from 'lwc';
import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import LMSChannel from '@salesforce/messageChannel/LMSChannel__c';

export default class Parent extends LightningElement {
    message;
    messageFromChild;
    fromChild;

    subscription = null;
    unrelatedMessage;
    @wire (MessageContext) messageContext;
    handleChange(event){
        this.message = event.target.value;
    }

    handleChildMethod(event){
       this.fromChild = event.detail.CMsg;
    }

    connectedCallback() {
        this.handleSubscribe();
    }

    disconnectedCallback() {
        this.handleUnsubscribe();
    }

    handleSubscribe() {
        if(!this.subscription) {
            this.subscription = subscribe(this.messageContext, LMSChannel, 
                (parameter)=>{
                    this.unrelatedMessage = parameter.message;
                }
            );
        }

    }

    handleUnsubscribe() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }
}
