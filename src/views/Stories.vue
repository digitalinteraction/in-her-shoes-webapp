<template lang="pug">
    div#stories
        div.container
            h1.is-size-1 All Stories
            a(
                v-for="story in stories"
                href=""
            )
                figure.image(
                    @click="linkToStory(story._id)"
                )
                    img(
                        :src="story.imageUrl",
                        @error="imageURLAlt"
                    )
</template>

<script>
import { getPublicStories } from "../utils/api/stories";

export default {
  name: "Stories",
  data: function() {
    return {
      stories: []
    };
  },
  methods: {
    imageURLAlt(event) {
      event.target.src =
        "https://images.unsplash.com/photo-1518685546285-85c2b201402b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=931f9b6519973a4fb773e1e55c208e16&dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb";
    },
    linkToStory(id) {
      this.$router.push(`story/${id}`);
    }
  },
  async mounted() {
    let stories = [];
    try {
      stories = await getPublicStories();
      console.log(this.stories[0]);
    } catch (e) {
      console.error(e);
    }

    for (let i = 0; i < stories.length; i++) {
      stories[i].imageUrl = `${URL}/media/story/${stories[i]._id}`;
    }

    this.stories = stories;
  }
};
</script>

<style scoped lang="scss">
div {
  font-size: 0;
}

a {
  font-size: 16px;
  display: inline-block;
  margin-bottom: 8px;
  width: calc(50% - 4px);
  margin-right: 8px;
}

a:nth-of-type(2n) {
  margin-right: 0;
}

@media screen and (min-width: 50em) {
  a {
    width: calc(25% - 6px);
  }

  a:nth-of-type(2n) {
    margin-right: 8px;
  }

  a:nth-of-type(4n) {
    margin-right: 0;
  }
}
</style>
