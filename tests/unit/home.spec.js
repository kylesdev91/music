import { shallowMount } from "@vue/test-utils";
import Home from "@views/Home.vue";
import SongItem from "@/components/base/SongItem.vue";
import { describe, expect, test } from "vitest";

describe("Home.vue", () => {
  test("renders list of songs", () => {
    const songs = [{}, {}, {}];
    const component = shallowMount(Home, {
      data() {
        return {
          songs,
        };
      },
    });

    const items = component.findAllComponents(SongItem);

    expect(items).toHaveLength(songs.length);
  });
});
