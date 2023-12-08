# Redux 
## Connect 
Trong Redux, `connect` là một hàm được cung cấp bởi thư viện `react-redux`, giúp kết nối component React với Redux store. Đoạn mã `connect(mapStatetoProps)(App)` thực hiện việc này. Hãy giải thích cách nó hoạt động:

1. **`mapStateToProps`:**
   ```javascript
   export function mapStatetoProps(state){
     return {
       count: state.count
     }
   }
   ```
   - `mapStatetoProps` là một hàm nhận vào `state` (trạng thái) từ Redux store và ánh xạ nó thành một đối tượng props.
   - Trong trường hợp này, nó trả về một đối tượng có thuộc tính `count`, với giá trị là `state.count` từ Redux store.

2. **Kết nối `App` với Redux store:**
   ```javascript
   export default connect(mapStatetoProps)(App)
   ```
   - Hàm `connect` là một hàm cao cấp, nhận vào một hoặc nhiều tham số và trả về một hàm khác.
   - Trong trường hợp này, `connect` được gọi với tham số đầu tiên là `mapStatetoProps`, hàm này sẽ được sử dụng để ánh xạ trạng thái từ Redux store thành props của component `App`.
   - Hàm trả về từ `connect` sau khi được gọi (sau khi chuyển vào `mapStatetoProps`) là một hàm khác, sau đó nó được gọi với component `App` như là tham số.
   - Kết quả là `connect(mapStatetoProps)(App)` trả về một phiên bản mới của component `App` đã được kết nối với Redux store thông qua props.

Khi `App` được export và sử dụng trong ứng dụng React, nó sẽ có khả năng truy cập đến trạng thái của Redux store thông qua props, cụ thể là `props.count` trong trường hợp này. Bất kỳ thay đổi nào trong Redux store sẽ dẫn đến việc cập nhật lại `props.count` và kích thích việc render lại của component `App`.


