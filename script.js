(function () {
let dropzone = document.getElementById('dropzone');
let input = document.querySelector ("input");
let span = document.querySelector("span");
$(".Progress").css ("width" , "0");
let fileName = document.getElementsByTagName("input")[0].onchange = function() {
    if (this.files[0])
        document.getElementsByTagName('span')[0].innerHTML = this.files[0].name;
};

        let upload = function (files) {
            var formData = new FormData(),
                xhr = new XMLHttpRequest(),
                x;
            // for (x = 0; x < files.length; x = x + 1) {
            //     formData.append('file[]', files);
            // }
            formData.append('file[]', $('input[type=file]')[0].files[0]);

            xhr.upload.onprogress = function (e) {
                $(".Progress").css("width", `${100 * e.loaded / e.total}%`);
            }

            xhr.onload = function () {
                var data = this.responseText;
                console.log(data)

            }
            xhr.open('post', 'upload.php');
            xhr.send(formData);
        }



    $("#upload").on("click",function(event) {
        event.preventDefault();
        upload(event.dataTransfer = $('input[type=file]')[0].files[0]);
        setTimeout(() => {
            location.reload();
        }, 1000);
    });


    dropzone.ondrop = function (e){
    e.preventDefault();
        this.className = 'dropzone';
    // upload(e.dataTransfer.files);
        console.log(e.dataTransfer.files);
        input.files= e.dataTransfer.files ;
        span.innerText = e.dataTransfer.files[0].name;




        }



    dropzone.ondragover = function () {
    this.className = 'dropzone dragover';
    return false;
}

    dropzone.ondragleave = function () {
        this.className = 'dropzone';
        return false;
    }

}());
