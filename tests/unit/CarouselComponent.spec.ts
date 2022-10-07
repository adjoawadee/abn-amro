import { shallowMount } from "@vue/test-utils";
import Show from "@/types/Show";
import CarouselComponent from "@/components/CarouselComponent.vue";

describe("CarouselComponent.vue", () => {
  it("renders", () => {
    const name1 = "Under the Dome";
    const name2 = "Arrow";
    const show: Show[] = [
      {
        id: 1,
        name: name1,
        language: "English",
        genres: ["Thriller", "Drama"],
        runtime: 60,
        rating: {
          average: "6.8",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        },
        summary: "Example summary",
      },
      {
        id: 1,
        name: name2,
        language: "English",
        genres: ["Thriller", "Drama"],
        runtime: 60,
        rating: {
          average: "6.8",
        },
        image: {
          medium:
            "https://static.tvmaze.com/uploads/images/medium_portrait/81/202627.jpg",
          original:
            "https://static.tvmaze.com/uploads/images/original_untouched/81/202627.jpg",
        },
        summary: "Example summary",
      },
    ];

    const wrapper = shallowMount(CarouselComponent, {
      props: { shows: show },
    });

    expect(wrapper.text()).toMatch(show[0].name);
    expect(wrapper.text()).toMatch(show[1].name);
  });
});
