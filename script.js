function drawTree(heigh) {
  for (i = 0; i <= heigh; i++) {
    var star = "";
    for (j = 0; j <= i; j++) {
      star += " *";
    }
    console.log(star);
  }
}
drawTree(5);
