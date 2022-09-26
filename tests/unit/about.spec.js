import About from "@/views/About.vue";
import { mount } from "@vue/test-utils";

import { describe, expect, test } from "vitest";

describe("About.vue", () => {
  test("renders inner text", () => {
    const wrapper = mount(About, {
      shallow: true,
    });

    expect(wrapper.text()).toContain("about");
  });
});
