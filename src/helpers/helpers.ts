import { differenceInDays, fromUnixTime } from "date-fns";

// Convert time to hours and minutes: for future development
export const calcTime = (time: number):string => {
  const hours: number = Math.floor(time / 60);
  const mins:number = time % 60;
  return `${hours}h ${mins}m`;
};

// Convert a number to money formatting: for future development
export const convertMoney = (money: number):string => {
  const formatValue: Intl.NumberFormat = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GHS",
    minimumFractionDigits: 0,
  });
  return formatValue.format(money);
};

// Convert movie release date to number of days from TODAY
export const convertDateToDays = (releaseDate: string): string => {
  return `${differenceInDays(new Date(), fromUnixTime(Math.floor(new Date(releaseDate).getTime() / 1000)))}`
}
// Session Storage
export const isPersistedState = (stateName:string):any => {
  const sessionState = sessionStorage.getItem(stateName);
  return sessionState && JSON.parse(sessionState);
}
