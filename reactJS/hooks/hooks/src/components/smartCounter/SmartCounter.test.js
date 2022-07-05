import { screen, render, fireEvent } from "@testing-library/react";
import SmartCounter from "./SmartCounter";


test('Test click button counter', () => {

    render(<SmartCounter />);

    const upConterEl = screen.getByText('+');
    const numberCounterEl = screen.getByText('1');

    fireEvent.click(upConterEl);



    expect(numberCounterEl).toBeInTheDocument(2);

})


test('Test click negative number disable', () => {
    render(<SmartCounter />);

    const lessCounterEl = screen.getByText('-');
    const numberCounterEl = screen.getByText('1');

    fireEvent.doubleClick(lessCounterEl);

    expect(numberCounterEl).toBeInTheDocument(0);


})


test('Test cart value', () => {

    render(<SmartCounter />);

     const upCounterEl = screen.getByText('+');
    const buttonEl = screen.getByRole('button');

    fireEvent.click(upCounterEl);

    expect(buttonEl).toBeInTheDocument(6)







})

