import { type ClassValue, clsx } from "clsx"
import { Currency } from "lucide-react"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(
  price: number | string,
  options: {
    currency?: "Naira" | "USD" | "EUR" | "GBP" | "BDT",
    notation?: Intl.NumberFormatOptions["notation"]
  } = {}
){
  const { currency = "Naira", notation = "compact"} = options
  const numericPrice = typeof price === "string" ? parseFloat(price) : price

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency == "Naira" ? "NGN" : currency,
    notation,
    maximumFractionDigits: 2,
  }).format(numericPrice)
}