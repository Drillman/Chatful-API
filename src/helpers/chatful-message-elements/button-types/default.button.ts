import Button from "../button";

export default class DefaultButton extends Button{
  public url:string

  constructor(type:string, title:string, url:string){
    super(type, title)
    this.url = url
  }
}
