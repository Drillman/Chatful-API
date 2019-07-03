import button from './chatful-message-elements/button'
export default class ResponseBuilder{
  private message;

  constructor(){
    this.message = {
      messages: []
    }
  }

  public addText(text:string){
    let newText = {
      "text": text
    }
    this.message.messages.push(newText)
  }
  public addButtonBlock(text:string, ...buttons:button[]){

  }
}
