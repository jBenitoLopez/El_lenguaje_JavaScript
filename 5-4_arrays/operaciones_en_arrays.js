let styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles[parseInt((styles.length - 1) / 2)] = "Classics";
console.log(styles.shift());
styles.unshift("Rap", "Reggae");
console.log("styles :>> ", styles);
