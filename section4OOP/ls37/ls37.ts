class SeatAssignment {
  [seatNumber: string]: string;
}

let seats = new SeatAssignment();
seats.A1 = "Mosh";
//Identical equivalent: seats['A1'] = 'Mosh';
seats.A2 = "John";
