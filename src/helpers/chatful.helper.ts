export default class ChatfulHelper{
  public static createMessage(message:string){
    return {
        "messages": [
          {"text": message},
        ]
       }
  }
}
