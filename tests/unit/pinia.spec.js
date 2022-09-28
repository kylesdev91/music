import { setActivePinia, createPinia } from "pinia";
import useUserStore from "@/stores/user";
import { beforeEach, describe, expect, test } from "vitest";

describe("stores", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  test("authenticates user", async () => {
    const store = useUserStore();

    expect(store.userLoggedIn).not.toBe(true);
    await store.authenticate({});
    expect(store.userLoggedIn).toBe(true);
  });
});
