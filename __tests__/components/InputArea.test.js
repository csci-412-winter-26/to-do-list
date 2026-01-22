
import { render, fireEvent } from '@testing-library/react-native';
import InputArea from '../../components/InputArea';

// test if the onPress function is called when the add button is pressed
test('calls onPress function when add button is pressed', () => {
  const task = 'Hello test';
  const mockSetTask = jest.fn();
  const mockHandleAddTask = jest.fn();

  const { getByPlaceholderText, getByTestId } = render(
    <InputArea
      task={task}
      setTask={mockSetTask}
      handleAddTask={mockHandleAddTask}
    />
  );
  const input = getByPlaceholderText('Enter task');
  fireEvent.changeText(input, 'New to-do');
  expect(mockSetTask).toHaveBeenCalledWith('New to-do');

  const button = getByTestId('buttonAdd');
  fireEvent.press(button);
  expect(mockHandleAddTask).toHaveBeenCalledWith();
});
