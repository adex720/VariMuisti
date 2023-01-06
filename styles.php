<?php
header("Content-type: text/css; charset: UTF-8");

function isMobile() {
    return preg_match("/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i", $_SERVER["HTTP_USER_AGENT"]);
}
?>


:root {
    --width: min(calc(100vw - 4rem), calc(100vh - 4rem), 58rem);
}

@media screen and (max-width: 62rem) {
    :root {
        --margin: 2rem;
    }
}

@media screen and (min-width: 66rem) {
    :root {
        --margin: 4rem;
    }
}

@media screen and (max-width: 66rem) and (min-width: 62rem) {
    :root {
        --margin: calc(50vw - 29rem);
    }
}

body {
    background-color: #888888;
}

#varit {
    margin: var(--margin);

    display: flex;
    flex-wrap: wrap;

    gap: calc(0.08 * var(--width));

    width: var(--width);
}

.nappi {
    border-radius: calc(0.23 * var(--width));

    width: calc(0.46 * var(--width));
    height: calc(0.46 * var(--width));

    <?php
        if (!isMobile()) {
            echo "cursor: pointer;";
        }
    ?>
}

#vari1 {
    background-color: #ff0000;
}

#vari2 {
    background-color: #00ff00;
}

#vari3 {
    background-color: #0000ff;
}

#vari4 {
    background-color: #ffff00;
}