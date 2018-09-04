<template lang="pug">
    div#post-it.postit(
        :class="colour"
    )
        slot(
            name="header"
        )
        slot(
            name="body"
        )
</template>

<script>
export default {
  name: "PostIt",
  props: ["colour"]
};
</script>

<style lang="scss" scoped>
.postit {
  line-height: 1;
  text-align: center;
  width: 275px;
  margin: 25px;
  min-height: 250px;
  max-height: 250px;
  padding-top: 35px;
  position: relative;
  border: 1px solid #e8e8e8;
  /*border-top: 60px solid #fdfd86;*/
  font-size: 22px;
  border-bottom-right-radius: 60px 5px;
  display: inline-block;
    /*float:left;*/
}

.yellow {
  $yellow: #ffff88;
  $yellow-top: #fdfd86;
  $yellow-light: #ffffc6;

  border-top: 60px solid $yellow-top;
  background: $yellow;

  /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    $yellow 81%,
    $yellow 82%,
    $yellow 82%,
    $yellow-light 100%
  );
  /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(81%, $yellow),
    color-stop(82%, $yellow),
    color-stop(82%, $yellow),
    color-stop(100%, $yellow-light)
  );
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    -45deg,
    $yellow 81%,
    $yellow 82%,
    $yellow 82%,
    $yellow-light 100%
  );
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    -45deg,
    $yellow 81%,
    $yellow 82%,
    $yellow 82%,
    $yellow-light 100%
  );
  /* Opera 11.10+ */
  background: -ms-linear-gradient(
    -45deg,
    $yellow 81%,
    $yellow 82%,
    $yellow 82%,
    $yellow-light 100%
  );
  /* IE10+ */
  background: linear-gradient(
    135deg,
    $yellow 81%,
    $yellow 82%,
    $yellow 82%,
    $yellow-light 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.blue {
  $blue: #95daf2;
  $blue-top: #92d6ee;
  $blue-light: #bcf0ff;

  border-top: 60px solid $blue-top;
  background: $blue;

  /* Old browsers */
  background: -moz-linear-gradient(
    -45deg,
    $blue 81%,
    $blue 82%,
    $blue 82%,
    $blue-light 100%
  );
  /* FF3.6+ */
  background: -webkit-gradient(
    linear,
    left top,
    right bottom,
    color-stop(81%, $blue),
    color-stop(82%, $blue),
    color-stop(82%, $blue),
    color-stop(100%, $blue-light)
  );
  /* Chrome,Safari4+ */
  background: -webkit-linear-gradient(
    -45deg,
    $blue 81%,
    $blue 82%,
    $blue 82%,
    $blue-light 100%
  );
  /* Chrome10+,Safari5.1+ */
  background: -o-linear-gradient(
    -45deg,
    $blue 81%,
    $blue 82%,
    $blue 82%,
    $blue-light 100%
  );
  /* Opera 11.10+ */
  background: -ms-linear-gradient(
    -45deg,
    $blue 81%,
    $blue 82%,
    $blue 82%,
    $blue-light 100%
  );
  /* IE10+ */
  background: linear-gradient(
    135deg,
    $blue 81%,
    $blue 82%,
    $blue 82%,
    $blue-light 100%
  ); /* W3C */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffff88', endColorstr='#ffffc6',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

.postit:after {
  content: "";
  /*position: absolute;*/
  z-index: -1;
  right: -0px;
  bottom: 20px;
  width: 200px;
  height: 25px;
  background: rgba(0, 0, 0, 0.2);
  box-shadow: 2px 15px 5px rgba(0, 0, 0, 0.4);
  -moz-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -webkit-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -o-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  -ms-transform: matrix(-1, -0.1, 0, 1, 0, 0);
  transform: matrix(-1, -0.1, 0, 1, 0, 0);
}
</style>
