document.getElementById("ucap");
    var a=prompt("Ketikkan namamu!")
    var b=new Date();
    var c=b.getHours();
    if(c>0 && c<9){
        document.write("Selamat pagi" + " " + a + "." + " " + "Jangan lupa sarapan ya. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
    else if(c>=3 && c<9){
        document.write("Selamat pagi" + " " + a + "." + " " + "Jangan lupa sarapan ya. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
    else if(c>=9 && c<16){
        document.write("Selamat siang" + " " + a + "." + " " + "Tetap semangat dalam menjalankan aktivitas. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
    else if(c>=16 && c<18){
        document.write("Selamat sore" + " " + a + "." + " " + "Jangan lupa istirahat ya. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
    else if(c>=18 && c<23){
        document.write("Selamat malam" + " " + a + "." + " " + "Jangan lupa tidur ya. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
else if(c>=23 && c<3){
        document.write("Selamat malam" + " " + a + "." + " " + "Udah malem nih, jangan begadang ya. Semangat belajar." + " " + "Sejuta merpati tak akan pernah terbang bila tidak mau belajar. Berjuta bintang tidak pernah bersinar jika setiap saat selalu siang.");
    }
