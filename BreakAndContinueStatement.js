console.log("BreakAndContinueStatement");

for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        // console.log(i)
        break;
    }
    console.log(i);
}



for (var i = 0; i <= 10; i++) {
    if (i == 3) {
        console.log(i)
        continue;
    }
    console.log(i);
}