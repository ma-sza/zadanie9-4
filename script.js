function drawTree(height) {
        // Iterate until we reach desired height
        for(var level = 0; level < height; level++) {

            // Keep stars here
            var star = "";

            // How many stars we need
            var starCount = level * 2 + 1;

            // How many spaces we need
            var offset = height - level - 1;

            // Add spaces
            for (var spaces = 0; spaces < offset; spaces++) {
                star += " ";
            }

            // Add stars
            for(var starLine = 0; starLine < starCount; starLine++) {
                star += "*";
            }

            console.log(star);
        }
    }

    drawTree(10);
