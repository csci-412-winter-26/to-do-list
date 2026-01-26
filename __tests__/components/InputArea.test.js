import { render, fireEvent } from '@testing-library/react-native';
import InputArea from '../../components/InputArea';

// test if the onPress function is called when the add button is pressed
test('calls onPress function when add button is pressed', () => {
  const mockSetTasks = jest.fn();

  const { getByPlaceholderText, getByTestId } = render(
    <InputArea setTasks={mockSetTasks} />,
  );
  const input = getByPlaceholderText('Enter task');
  fireEvent.changeText(input, 'New to-do');
  const button = getByTestId('buttonAdd');
  fireEvent.press(button);
  expect(mockSetTasks).toHaveBeenCalledWith(expect.any(Function));
});
