import Button from "../button";

export default class BlockButton extends Button{
  public blocks:string[]

  constructor(type:string, title:string, blocks:string[]){
    super(type, title)
    this.blocks = blocks
  }
}
