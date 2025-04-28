// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract remoteEvent(): void;
// }

interface Calendar {
  name: string;
  addEvent(): void;
  remoteEvent(): void;
}

interface CouldCalendar extends Calendar {
  sync(): void;
}

class GoogleCalendar implements Calendar {
  constructor(public name: string) {}
  addEvent(): void {
    throw new Error("Method not implemented.");
  }
  remoteEvent(): void {
    throw new Error("Method not implemented.");
  }
}
