import type { DataElement } from "./types";

export const psdeSex: DataElement = {
  deNumber: '4.21',
  key: 'clientSex',
  name: 'Sex',
  fields: {
    sex: {
      id: '1',
      name: 'Sex',      
      type: 'options',
      responseOptions: [
        { value: 0, displayText: 'Female' },
        { value: 1, displayText: 'Male' },
        { value: 8, displayText: "Client doesn't know" },
        { value: 9, displayText: 'Client prefers not to answer' },
        { value: 99, displayText: 'Data not collected' }
      ],
      defaultValue: 99,
      placeholder: '',
      altText: ''
    }
  }
}