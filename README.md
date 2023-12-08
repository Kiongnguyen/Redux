# Redux 
Mang đến những kiến thức cơ bản nhất về redux và cách hoạt động của redux trong react js.
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

## useDispatch
Sử dụng `dispatch` là một phần quan trọng của quá trình làm việc với Redux trong ứng dụng React. `dispatch` là một hàm có sẵn trong Redux, và nhiệm vụ chính của nó là gửi các hành động (actions) đến Redux store để thay đổi trạng thái (state). Dưới đây là một giải thích chi tiết về cách sử dụng `dispatch`:

1. **Lấy `dispatch` từ Redux Store:**
   ```javascript
   import { useDispatch } from 'react-redux';
   const dispatch = useDispatch();
   ```
   - Sử dụng hook `useDispatch` để lấy đối tượng `dispatch` từ Redux store.

2. **Gửi Hành Động Đến Redux Store:**
   ```javascript
   dispatch(action);
   ```
   - Gọi hàm `dispatch` và truyền một hành động (action) vào nó. Hành động này là một đối tượng JavaScript, có thường là một đối tượng có thuộc tính `type` để mô tả loại hành động.

3. **Ví dụ về Sử Dụng Dispatch trong Component React:**
   ```javascript
   import { useDispatch } from 'react-redux';
   const dispatch = useDispatch();

   const handleButtonClick = () => {
     // Gửi một hành động "INCREASE_COUNT" đến Redux store
     dispatch({ type: 'INCREASE_COUNT' });
   };
   ```
   - Trong ví dụ này, khi một nút được click, một hành động có `type` là "INCREASE_COUNT" sẽ được gửi đến Redux store bằng cách sử dụng `dispatch`.

4. **Kết hợp Dispatch với Hành Động (Action Creators):**
   - Thông thường, để tạo ra hành động, bạn sẽ sử dụng các hàm được gọi là action creators. Những hàm này trả về các đối tượng hành động.
   - Ví dụ:
     ```javascript
     const increaseCount = () => ({
       type: 'INCREASE_COUNT'
     });

     // Gửi hành động "INCREASE_COUNT" bằng cách sử dụng action creator và dispatch
     dispatch(increaseCount());
     ```

5. **Truyền Dữ Liệu vào Hành Động:**
   - Bạn có thể truyền thêm dữ liệu vào hành động nếu cần thiết.
   ```javascript
   const addTodo = (text) => ({
     type: 'ADD_TODO',
     payload: {
       text
     }
   });

   // Gửi hành động "ADD_TODO" với dữ liệu được truyền vào
   dispatch(addTodo('Buy groceries'));
   ```

Sử dụng `dispatch` giúp bạn gửi các hành động đến Redux store, nơi chúng sẽ được xử lý bởi reducers để cập nhật trạng thái. Quá trình này giúp duy trì một luồng dữ liệu đơn điệu và dễ quản lý trong ứng dụng React của bạn.

## useSelecter

Hook `useSelector` là một trong những hooks của thư viện `react-redux`, được sử dụng để lấy giá trị trạng thái từ Redux store trong một component React. Dưới đây là cách sử dụng `useSelector`:

1. **Import `useSelector`:**
   ```javascript
   import { useSelector } from 'react-redux';
   ```

2. **Sử dụng `useSelector` trong Component:**
   ```javascript
   const myComponent = () => {
     // Lấy giá trị trạng thái từ Redux store
     const myValue = useSelector(state => state.myReducer.myValue);

     // Sử dụng giá trị trạng thái trong component
     return <div>{myValue}</div>;
   };
   ```
   - `useSelector` nhận một hàm callback nhận vào toàn bộ trạng thái của Redux store và trả về giá trị bạn quan tâm từ trạng thái đó.

3. **Ví dụ về Sử Dụng `useSelector` với Múltiple Reducers:**
   ```javascript
   const myComponent = () => {
     // Lấy giá trị từ nhiều reducers
     const valueFromReducer1 = useSelector(state => state.reducer1.value);
     const valueFromReducer2 = useSelector(state => state.reducer2.value);

     // Sử dụng giá trị trong component
     return (
       <div>
         <div>Value from Reducer 1: {valueFromReducer1}</div>
         <div>Value from Reducer 2: {valueFromReducer2}</div>
       </div>
     );
   };
   ```

4. **Làm Nhanh và Linh Hoạt với Reselectors:**
   - Bạn cũng có thể sử dụng Reselectors khi sử dụng `useSelector` để thực hiện các tính toán phức tạp hoặc làm cho lựa chọn giá trị hiệu quả hơn.

   ```javascript
   import { createSelector } from 'reselect';

   const selectMyValue = state => state.myReducer.myValue;

   const myValueSelector = createSelector(
     selectMyValue,
     myValue => myValue.toUpperCase()
   );

   const myComponent = () => {
     // Sử dụng Reselector để lấy giá trị từ Redux store
     const uppercasedValue = useSelector(myValueSelector);

     // Sử dụng giá trị trong component
     return <div>{uppercasedValue}</div>;
   };
   ```

   - Trong ví dụ này, `myValueSelector` sẽ lấy giá trị từ `selectMyValue` và sau đó thực hiện một biến đổi (toUpperCase() trong trường hợp này) trước khi trả về giá trị.

`useSelector` giúp bạn truy cập giá trị từ Redux store một cách dễ dàng và sáng tạo trong các component React, giúp duy trì một luồng dữ liệu đơn điệu và dễ quản lý.
