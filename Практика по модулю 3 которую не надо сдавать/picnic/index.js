let isSunny = true
let temperature = 15
let hasUmbrella = false

if ((isSunny && (temperature >= 20 && temperature <= 30)) || (!isSunny && temperature < 15 && hasUmbrella)) {
    console.log("Можно ли устроить пикник: true")
} else {
    console.log("Можно ли устроить пикник: false")
}