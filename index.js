var k = " \n ";
function Posts() {
        var input = document.getElementsByName('input');
        const date = new Date();
        let hour = date.getHours();
        let minute = date.getMinutes();
        let second = date.getSeconds();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();
        
        for (var i = 0; i < input.length; i++) {
                var a = input[i];
                k = k + a.value + " [" + day + "/" + month + "/" + year + ", " + hour + ":" + minute + ":" + second + " AM" + "]: " + " ";
        }
        document.getElementById("par").innerHTML = k;
        document.getElementById("po").innerHTML = " ";
    }


    