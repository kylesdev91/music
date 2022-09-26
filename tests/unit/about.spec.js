import About from "@/views/About.vue";
import { mount } from "@vue/test-utils";

const { describe, test } = require("vitest");

describe("About.vue", () => {
  test("renders inner text", () => {
    const wrapper = mount(About);
  });
});
