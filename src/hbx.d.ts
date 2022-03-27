
export interface Character {
  name: string;
  age: number;
}

declare global {
  interface Window {
    _: any;
    ReceiveMessage: (msg: string, param: string, param2: string) => void;
    SendJsonMessage: (data: string) => void;
  }
}
