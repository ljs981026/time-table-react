import {atom} from "recoil";

export const timeTableState = atom({
  key: 'timeTableState',
  default: {
    mon: [
      {
        start: 9,
        end: 11,
        name: "교양",
        color: "red",
        id: 1
      }
    ],
    tue: [
      {
        start: 10,
        end: 9,
        name: "교양",
        color: "#fff",
        id: 2
      }      
    ],
    wed: [ 
      {
        start: 10,
        end: 11,
        name: "교양",
        color: "#fff",
        id: 3
      }      
    ],
    thu: [
      {
        start: 13,
        end: 14,
        name: "교양",
        color: "#fff",
        id: 4
      }      
    ],
    fri: [
      {
        start: 12,
        end: 13,
        name: "교양",
        color: "#fff",
        id: 5
      }      
    ]
  }
})