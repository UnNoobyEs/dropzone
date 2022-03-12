<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <link rel="stylesheet" href="main.css">
</head>
<body>
<?php
    if (isset($_POST['submit']) and $_FILES) {
        move_uploaded_file($_FILES ['file']['tmp_name'],"uploads/".$_FILES['file']['name']);
}
?>

<div class="content">
    <form method="POST" action="" enctype="multipart/form-data">
        <label class="dropzone" id="dropzone">
            <span data-role = "selected_file">
                click or drag files
            </span>
            <input class="Uclick" type="file" name="file" id="file">
        </label>
        <input type="submit" name="submit" value="Upload" class="upload" id="upload">
    </form>
    <div class="Progress"></div>
</div>

<div class="content">
    <div class="info">
        <h2>Files on The server</h2>
        <?php
        $resource = opendir("uploads/");
        while (($entry = readdir($resource)) !== FALSE ) {
            if ($entry != '.' && $entry != '..') {
                echo "<a href=\"uploads/$entry\"   title='Download File' download=\"$entry\" >"."<p>".$entry."</p>"."</a>";
            }
        }
        ?>
    </div>
</div>
<a href=""></a>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script src="script.js"></script>
</body>
</html>