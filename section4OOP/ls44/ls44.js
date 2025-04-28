"use strict";
// abstract class Calendar {
//   constructor(public name: string) {}
//   abstract addEvent(): void;
//   abstract remoteEvent(): void;
// }
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    addEvent() {
        throw new Error("Method not implemented.");
    }
    remoteEvent() {
        throw new Error("Method not implemented.");
    }
}
