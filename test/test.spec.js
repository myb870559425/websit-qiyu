import { mount } from "@vue/test-utils";
import AboutContent from "@/views/about/AboutContent";
describe("AboutContent", () => {
  // 现在挂载组件，你便得到了这个包裹器
  const wrapper = mount(AboutContent);

  it("renders the correct markup", () => {
    expect(wrapper.html()).toContain('<span class="count">0</span>');
  });

  // 也便于检查已存在的元素
  it("has a li", () => {
    expect(wrapper.contains("li")).toBe(true);
  });
});
