import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class MothsWithDaysService {
    months: string[] = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];

    selectedMonth: string = "";
    selectedDay: string = "";
    selectedDays: number[] = [];

    onMonthChange() {
        const daysInMonth = new Date(
            new Date().getFullYear(),
            this.months.indexOf(this.selectedMonth) + 1,
            0
        ).getDate();
        this.selectedDays = Array.from({length: daysInMonth}, (_, i) => i + 1);
        return this.selectedDays;
    }
}
