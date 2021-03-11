export interface IProcessInput {
  pid : string;
  arrival_time : number;
  total_time : number;
  pages: number;
  references? : number[];
}
