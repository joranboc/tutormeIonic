
export interface Message {
    message: string;
    roomId: string;
    sender: string;
    //time: Date;
  }
export interface Room{
  userId: string;
  tutorId: string;
  messages?: Message[];
  //time: Date;
}