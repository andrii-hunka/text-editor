<template>
  <div>
    <b-dropdown variant="primary" class="mr-2" text="Background color">
      <b-dropdown-item
        v-for="(color, key) in colors"
        :key="key"
        @click="formatText('backColor', color.code)"
        >{{ color.name }}</b-dropdown-item
      >
    </b-dropdown>

    <b-dropdown variant="primary" class="mr-2" text="Text color">
      <b-dropdown-item
        v-for="(color, key) in colors"
        :key="key"
        @click="formatText('foreColor', color.code)"
        >{{ color.name }}</b-dropdown-item
      >
    </b-dropdown>

    <b-dropdown variant="primary" class="mr-2" text="Font size">
      <b-dropdown-item
        v-for="(fontSize, key) in fontSizes"
        :key="key"
        @click="formatText('fontSize', fontSize)"
        >{{ fontSize }}</b-dropdown-item
      >
    </b-dropdown>
    <div
      style="opacity: 1; transform: rotate(0deg); padding: 10px; text-align: center;
        letter-spacing: 0px; font-family: Aleo; font-weight: 300; text-decoration: none; box-shadow: rgb(0, 0, 0) 0px 0px 0px 0px; text-transform:
        initial; font-style: normal; z-index: 2002; text-shadow: rgba(0, 0, 0, 0.2) 2px 2px 0px; line-height: 1.5em;"
      spellcheck="false"
      id="textArea"
      contenteditable="true"
    ></div>
  </div>
</template>

<script>
export default {
  name: "TextEditor",
  created() {
    document.execCommand("defaultParagraphSeparator", false, "br");
  },
  data() {
    return {
      colors: [
        {
          name: "White",
          code: "#ffffff"
        },
        {
          name: "Black",
          code: "#000000"
        },
        {
          name: "Red",
          code: "#ff0000"
        },
        {
          name: "Green",
          code: "#00ff00"
        },
        {
          name: "Blue",
          code: "#0000ff"
        }
      ],
      fontSizes: [1, 2, 3, 4, 5, 6, 7]
    };
  },
  methods: {
    formatText(formatType, value) {
      document.execCommand(formatType, false, value);
    }
  }
};
</script>

<style>
#textArea {
  width: 95%;
  margin: 5px auto;
  min-height: 500px;
  text-align: left;
  padding: 10px;
  border: 1px solid black;
}
#textArea:focus {
  outline: none;
}
</style>
