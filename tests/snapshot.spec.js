import { shallowMount, RouterLinkStub } from "@vue/test-utils";
import SongItem from "@/components/base/SongItem.vue";
import { describe, expect, test } from "vitest";

describe("Snapshots SongItem.vue", () => {
  test("renders correctly", () => {
    const song = {
      docID: "abc",
      modified_name: "test",
      display_name: "test",
      comment_count: 5,
    };

    const wrapper = shallowMount(SongItem, {
      propsData: { song },
      global: {
        components: {
          "router-link": RouterLinkStub,
        },
      },
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
