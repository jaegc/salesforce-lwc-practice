import {MessageContext, publish} from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import LMSChannel from '@salesforce/messageChannel/LMSChannel__c';

export default class Unrelated extends LightningElement {
    message;
    @wire (MessageContext) messageContext;
    handleChange(event) {
        this.message = event.target.value;
    }

    handleClick(event) {
        let payload = {message:this.message};
        publish(this.messageContext, LMSChannel, payload);
    }
}