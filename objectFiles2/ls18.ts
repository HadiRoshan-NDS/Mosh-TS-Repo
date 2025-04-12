//Here we will use type alias for the obejcts
type WorkingEmployee = {
    identifier: number,
    fullName: string,
    resign: (date: Date) => void
}

let workingemployee: WorkingEmployee = {
    identifier: 0,
    fullName: 'Teo Morningstar',
    resign: (date: Date) => {
        console.log(date);
    }
}