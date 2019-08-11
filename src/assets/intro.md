# Vọc cùng Thành #8 - Optimize Reactjs bundle

## Giới thiệu

Đây là demo cho bài viết [Vọc cùng Thành #8 - Optimize Reactjs bundle][post].

Chi tiết setup, cách optimize cũng như source code vui lòng xem trong bài viết.

Danh sách component:

- `<Intro />`: component các bạn đang xem. Nội dung được render từ file _markdown_ tại `src/assets/intro.md`
- `<About />`: component tại đường dẫn `/about`. Sử dụng `lodash` và `react-font-awesome` để sinh content động cũng như các icon hỗ trợ.
- `<App />`: kết nối các component cũng như khai báo về _routing_

```javascript
// Demo code highlighting
function optimizeReactApp(myApp) {
  if (isPostRead) {
    // optimize bundle size by using 2 simple methods
    // (more detail in the DevNow post)
    applyCodeSplitting(myApp);
    applyLazyLoad(myApp);
  }

  throw new Error("Please read the post first");
}
```

## Thao khảo thêm

- [marked][marked]
- [highlight.js][highlight]
- [create-react-app][create-react-app]

[marked]: https://marked.js.org
[highlight]: https://highlightjs.org
[post]: https://devnow.vn/?p=3077
[create-react-app]: https://github.com/facebook/create-react-app
