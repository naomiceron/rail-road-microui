export function addIdToJSONArray(data: any) {
    for (let i = 0; i < data.length; i++) {
      data[i]["id"] = data[i]["name"];
    }
  }

export function addPriorityToJSONArray(data: any) {
  for (let i = 0; i < data.length; i++) {
    data[i]["priority"] = i+1;
  }
}