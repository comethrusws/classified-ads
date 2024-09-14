import {faCar, faMotorcycle, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import mongoose from "mongoose";

export async function connect() {
  return mongoose.connect(process.env.MONGODB_URL as string);
}

export const categories = [
  {key:'cars', label:'Cars', icon: faCar},
  {key:'bikes', label:'Motorbikes', icon: faMotorcycle},
  {key:'others', label:'Others', icon: faChevronRight},
  
];

export function formatMoney(amount: number): string {
  return '$' + Intl.NumberFormat('US', {currency: 'USD'}).format(amount);
}

export function formatDate(date: Date):string {
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString();
}

export const defaultRadius = 50 * 1000;